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

// Begin plugin export
module.exports = {
  onPreBuild: async ({
    inputs: {
      PHOTO_API_URL = process.env.CLOUDFLARE_API_URL,
      pageLimit,
      contentDir
    },
    utils: {
      build: { failPlugin },
      cache
    }
  }) => {

  const grabPhotos = async function(url, page = 1, previousResponse = []) {
    const headers = { 'Authorization': 'Bearer ' + process.env.CLOUDFLARE_BEARER_TOKEN }
    return fetch(`${url}?page=${page}&per_page=100`, {
        method: 'GET',
        headers
      })
      .then(response => response.json())
      .then(newResponse => {
        const response = [...previousResponse, ...newResponse.result.images]
        if(newResponse.result.images.length !== 0 && pageLimit !== page) {
          log({
            color: green,
            label: `Page ${page} successfully retrieved ✅`,
            value: `moving on to Page ${page + 1}`
          });
          page++
          return grabPhotos(url, page, response)
        }

        return response

      })
    }
    const photosDir = contentDir + "/photos/"
    const remotePhotos = await grabPhotos(PHOTO_API_URL, 1, [])
    const photos_data = remotePhotos.map(item => ({
      ...item,
    }))
    log({
      color: green,
      label: "We retrieved data for: " + remotePhotos.length + " photos",
      value: "Next we'll create files"
    });
    if(true) {
      const termHolderPath = contentDir + '/term-holder.md'
      writeFile({
        fullFilePath: termHolderPath,
        content: JSON.stringify({
          title: 'Photos',
          remotes: photos_data.map(item => item.id)
        })
      })
      log({
        color: green,
        label: `Created: ${termHolderPath}`,
        value: `it holds ${remotePhotos.length} terms`
      });
  
      const dataFilePath = contentDir + '/data/api_photos.json'
      writeFile({
        fullFilePath: dataFilePath,
        content: JSON.stringify(photos_data.slice(0, 1000))
      })
      log({
        color: green,
        label: `Created: ${dataFilePath}`,
        value: `it holds ${photos_data.slice(0, 1000).length} objects`
      });
    }
  }
};
