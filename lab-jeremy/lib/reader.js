'use strict';

const fs = require('fs');

const reader = module.exports = {};

reader.fileLoader = function(fileArr) {
  let outputArr = [];

  fs.readFile(`${fileArr[0]}`, (err, data) => {
  if(err) console.error(err)
  let buffer = data
  let fd = data.toString()
  outputArr.push(fd);
  }

  fs.readFile(`${fileArr[1]}`, (err, data) => {
  if(err) console.error(err)
  let buffer = data
  let fd = data.toString()
  outputArr.push(fd);
  }

  fs.readFile(`${fileArr[2]}`, (err, data) => {
  if(err) console.error(err)
  let buffer = data
  let fd = data.toString()
  outputArr.push(fd);
  }


  return outputArr;
}
