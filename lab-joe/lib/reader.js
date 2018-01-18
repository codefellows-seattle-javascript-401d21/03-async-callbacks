'use strict';


const reader = module.exports = {};
const fs = require('fs');
require('jest');

// Recursive method
reader.fileArr = [];
reader.recursiveRead = (arr, callback) => {


if(typeof(arr) != 'array') return null;

  if (!Array.isArray(arr)) throw new TypeError('arr must be an Array');
  if (arr.length > 0) {
    let currentPath = arr.splice(0, 1)[0];
    fs.readFile(currentPath, (error, data) => {
      if (error) return callback(error);
      reader.fileArr.push(data.toString());
      reader.recursiveRead(arr, callback);
    });
  } else {
    callback(null, reader.fileArr);
  }

};







