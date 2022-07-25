// npm - global command, comes with node
// npm --version

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>
// sudo install -g <packageName> (mac)

// package.json - manifest file (stores important info about project/package)
// manual aproach (create package.json in the root, create properties etc)
// npm init (step by step, press enter top skip)
// npm init -y (everything default)


const _ = require('lodash');

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items);
console.log(newItems);

console.log('Hola peopllllll');


// const variab = {
//   "name": "app-nodejs",
//   "version": "1.0.0",
//   "description": "",
//   "main": "app.js",
//   "scripts": {
//     "start": "nodemon app.js"
//   },
//   "repository": {
//     "type": "git",
//     "url": "git+https://github.com/andresListorti/app-nodeJS.git"
//   },
//   "keywords": [],
//   "author": "",
//   "license": "ISC",
//   "bugs": {
//     "url": "https://github.com/andresListorti/app-nodeJS/issues"
//   },
//   "homepage": "https://github.com/andresListorti/app-nodeJS#readme",
//   "dependencies": {
//     "lodash": "^4.17.21"
//   },
//   "devDependencies": {
//     "nodemon": "^2.0.19"
//   }
// }

// console.log(Object.entries(variab));