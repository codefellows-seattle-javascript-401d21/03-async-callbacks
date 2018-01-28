'use strict';

const fs = require('fs');

function mapping(pathsArr, callback){
  let [one, two, three] = pathsArr;
  let mappedArr = [];
	
  // read file one and push it to mappedArr
  fs.readFile(one, (err, data) => {
    if(err){
      return callback(err);
    }
    mappedArr.push(data.toString());

    fs.readFile(two, (err, data) => {
      if(err){
        return callback(err);
      }
      mappedArr.push(data.toString());

      fs.readFile(three, (err, data) => {
        if(err){
          return callback(err);
        }
        mappedArr.push(data.toString());

        return callback(null, mappedArr);

      });
    });
  });
}

module.exports = mapping;

