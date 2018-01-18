'use strict';

const fs = require('fs');

exports.readWrite = function (arr, cb){
  if (!arr || !Array.isArray(arr)) return null;
  for (let i in arr) if (typeof arr[i] !== 'string') return null;
  let files = [], counter = 0;
  fs.readFile(`${__dirname}/${arr[counter]}`, (err, data) => {
    files.push(data.toString());
    counter++;
    fs.readFile(`${__dirname}/${arr[counter]}`, (err, data) => {
      files.push(data.toString());
      counter++;
      fs.readFile(`${__dirname}/${arr[counter]}`, (err, data) => {
        files.push(data.toString());
        cb(err, files);
      });
    });
  });
};