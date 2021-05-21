const fs = require("fs-extra");
const path = require("path");
const fetch = require("node-fetch");
const url = require("url");
const { cyan, green, yellow } = require("chalk");
const log = ({ color, label, value = false }) => {
  // log({
  // color = chalk color
  // label = string, text label
  // value = var, value being read out
  // });
  console.log(`${color(label)}${value ? color(`: ${color.bold(value)}`) : ""}`);
};

const writeFile = async ({ fullFilePath, content, failPlugin }) => {
  // writeFile({
  // fullFilePath = string, the full file path and name with extension
  // content = contents of the file
  // failPlugin = failPlugin
  //});

  try {
    // Output file using path and name with it's content within
    await fs.outputFile(fullFilePath, content);
  } catch (error) {
    failPlugin(`Error writing ${fullFilePath}`, { error });
  }
};


const getCacheTimestamp = async ({ cache, fullFilePath, failPlugin }) => {
  // getCacheTimestamp({
  // cache = cache
  // fullFilePath = string, the local file path and name
  // failPlugin: failPlugin
  // });

  if (await cache.has(fullFilePath)) {
    await cache.restore(fullFilePath);
    const cacheDate = await readFile({
      file: fullFilePath,
      failPlugin: failPlugin
    });

    // Log cache timestamp in console
    log({
      color: yellow,
      label: "Restoring markdown cache from",
      value: cacheDate
    });
    return new Date(cacheDate);
  } else {
    // Log no cache file found
    log({
      color: yellow,
      label: "No cache file found"
    });
    return 0;
  }
};

const writeCacheTimestamp = async ({ cache, fullFilePath, failPlugin }) => {
  // writeCacheTimestamp({
  // cache = cache
  // fullFilePath = string, the local file path and name
  // failPlugin = failPlugin
  // });

  // Get the timestamp of right now
  const now = new Date();
  const nowISO = now.toISOString();

  // Write the time into a cache file
  await writeFile({
    fullFilePath: fullFilePath,
    content: `"${nowISO}"`,
    failPlugin: failPlugin
  });

  await cache.save(fullFilePath);

  // Log cache timestamp creation time
  log({
    color: yellow,
    label: "Caching markdown at",
    value: nowISO
  });
};

const readFile = async ({ file, failPlugin }) => {
  // readFile({
  // file = string, the local file path and name
  // failPlugin = failPlugin
  // });

  // Replace root path syntax with environment
  const fullFilePath = file.replace("./", `${process.cwd()}/`);
  const fileContent = require(fullFilePath);

  // Return file content
  return fileContent;
};

const createMarkdownContent = (data, template) => {
  const frontmatter = JSON.stringify(require('./templates/' + template + '.js')(data))
  const body = data.content ? data.content.rendered : ''
  return frontmatter + "\n" + body
}

// Begin plugin export
module.exports = {
  onPreBuild: async ({
    inputs: {
      S3URL,
      limit = 200,
      contentDir = "./remote/s3",
      postDatePrefix = true,
      cacheFile = "./remote/s3/cache/wpMarkdownCache.json"
    },
    utils: {
      build: { failPlugin },
      cache
    }
  }) => {

    const S3Photo = async function(filename) {
      const S3APIURL = S3URL + '?name=' + filename
      return fetch(S3APIURL).then(response => {
        const output = response.json()
        return output
      })
    }

    const S3Photos = async function(filenames) {
      const pArray = filenames.map(async filename => {
        const response = await S3Photo(filename)
        return response
      });
      const photos = await Promise.all(pArray);
      // ... do some stuff
      return photos;
    }
    // Initialise Ghost Content API
    const photosDir = contentDir + "/photos/"
    const photosFilenames = require('./photos_filenames.json')
    const remotePhotos = await S3Photos(photosFilenames.slice(1, limit))

    const [cacheDate, photoListFile, photoFiles, ] = await Promise.all([
      getCacheTimestamp({
        cache: cache,
        fullFilePath: cacheFile,
        failPlugin: failPlugin
      }),
      remotePhotos,
    ]);
      if(false) {
      const createContentFiles = photoFiles.map(async (photo) => {
        // Set the file name using the post slug
        let fileName = `${photo.Name}.md`;

        // If postDatePrefix is true prefix file with post date
        if (postDatePrefix) {
          fileName = `${photo.Name}.md`;
        }

        // The full file path and name
        const fullFilePath = photosDir + fileName;

        // Get the post updated date and last cached date
        const postUpdatedAt = new Date(photo.CaptureTime ? photo.CaptureTime : '');

        if ((await cache.has(fullFilePath)) && cacheDate > postUpdatedAt) {
          // Restore markdown from cache
          await cache.restore(fullFilePath);

          log({
            color: cyan,
            label: "Restored from cache",
            value: fullFilePath
          });
        } else {
          // Generate markdown file
          await writeFile({
            fullFilePath: fullFilePath,
            content: createMarkdownContent(photo, 'photo')
          });
          // Cache the markdown file
          await cache.save(fullFilePath);

          log({
            color: green,
            label: "Generated and cached",
            value: fullFilePath
          });
        }
      })
    }
    await Promise.all([
      ['data/photos.json'].map(async (filename) => {
        const photos = remotePhotos.map(item => {
          let Classification = []
          if(typeof item.Classification.Labels !== "undefined" && item.Classification.Labels){
            Classification = item.Classification.Labels.map(item => item.Name)
          }
          return {
            ...item,
            Classification
          }
        })

        let fileName = filename;

        // The full file path and name
        const fullFilePath = photosDir + fileName;

        if (false){
        } else {
          // Generate markdown file
          await writeFile({
            fullFilePath: fullFilePath,
            content: JSON.stringify(photos)
          });
          // Cache the markdown file
          //await cache.save(fullFilePath);

          log({
            color: green,
            label: "Generated and cached",
            value: fullFilePath
          });
        }
      }),
      ['_index.md'].map(async (filename) => {
        // Set the file name using the post slug

        let fileName = filename;

        // The full file path and name
        const fullFilePath = photosDir + fileName;

        if (false){
        } else {
          // Generate markdown file
          await writeFile({
            fullFilePath: fullFilePath,
            content: createMarkdownContent(photosFilenames, 'photos')
          });
          // Cache the markdown file
          //await cache.save(fullFilePath);

          log({
            color: green,
            label: "Generated and cached",
            value: fullFilePath
          });
        }
      }),
      //...createContentFiles
    ]).then(async (response) => {
      // Write a new cache file
      await writeCacheTimestamp({
        cache: cache,
        fullFilePath: cacheFile,
        failPlugin: failPlugin
      });
    });
  }
};
