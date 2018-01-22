'use strict';

const reader = module.exports = {};

const fs = require('fs');


// Recursive method
reader.filearray = [];
reader.recursiveRead = (arr, callback) => {
  if (arr.length > 0) {
    let currentPath = arr.splice(0, 1)[0];
    fs.readFile(currentPath, (error, data) => {
      if (error) return callback(error);
      reader.filearray.push(data.toString());
      reader.recursiveRead(arr, callback);
    });
  } else {
    callback(null, reader.filearray);
  }
};