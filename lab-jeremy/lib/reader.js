'use strict';

const fs = require('fs');

const reader = module.exports = {};

reader.fileLoader = function(fileArr, callback) {

  let outputArr = [];

  fs.readFile(fileArr[0], (error, data) => { // nest fs.readfiles to ensure the array comes back in order
    if(error) callback(error); // for  each of the files, if there is an error, throw it into the callback and end the series of file reading
    outputArr.push(data.toString()); // push each read string (converted from our buffer) to a new array
    fs.readFile(fileArr[1], (error, data) => {
      if(error) callback(error);
      outputArr.push(data.toString());
      fs.readFile(fileArr[2], (error, data) => {
        if(error) callback(error);
        outputArr.push(data.toString());
        callback(null, outputArr); // finally, push the data to our callback function if none of the errors triggered it.
      });
    });
  });
};
