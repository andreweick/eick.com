## development

Below are tasks to run in development. You can run package commands that have appropriate flags written for you.
For example `yarn start`


<!-- maid-tasks -->

## build

Run tasks `webpack_watch` and `hugo` in parallel.

## deploy

Run task `webpack`, and then run `hugo`.


## hugo

```js

const { spawn } = require('child_process');

const hugo_source = 'hugo';
const args = process.argv.slice(3)
const hugoArgs = args.length === 0 ? ['--gc', '--minify'] : args;

console.log('flags: ', hugoArgs)

const hugo = spawn(hugo_source, hugoArgs, { 
  stdio: "pipe"
});

hugo.stdout.on('data', (data) => {
  console.log(`${data}`);
});

hugo.on("close", function(code) {
  if (code === 0) {
    console.log('build complete');
  } else {
    console.log('build failed');
  }
});

```
## webpack

```bash
NODE_ENV=production webpack
```

## webpack_watch

```bash
NODE_ENV=development webpack --progress --watch
```
