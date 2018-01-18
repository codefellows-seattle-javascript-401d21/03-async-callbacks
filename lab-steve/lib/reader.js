'use strict';

const fs = require('fs');
const reader = module.exports = {};

reader.readFiles = readFiles;
var result = [];
  
function readFiles(paths, callback) {
  // get first path
  let path = paths.splice(0, 1)[0];
  // all paths processed
  if (!path) {
    callback(null, result);
    return;
  }
    
  fs.readFile(`${__dirname}/${path}`, (err, data) => {
    if (err) {
      callback(err);
      return;
    }

    result.push(data.toString());
    readFiles(paths, callback);
  });
}
