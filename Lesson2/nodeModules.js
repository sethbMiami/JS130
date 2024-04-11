"use strict";

console.log(module);

console.log(exports);
console.log(require);

console.log(__dirname);
console.log(__filename);

let prefix = ">> ";

function logIt(string) {
  console.log(`${prefix}${string}`);
}

function setPrefix(newPrefix) {
  prefix = newPrefix;
}

module.exports = {
  logIt,
  setPrefix,
};