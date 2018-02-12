'use strict';

const fs = require('fs');
let i = 0;

module.exports = (filePath, callback) => {
  do {
    fs.readFile(filePath[i], (err, data) => {
      return callback(err) ? callback(null, data.toString()) : undefined;
    });
    i++;
  } while (i < filePath.length);
};