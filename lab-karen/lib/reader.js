'use strict';

const fs = require('fs');
const reader = module.exports = {};

reader.read = function(array, cb) {
//create an array of three filepaths

  let results = []; //results testsArray

  //error-handling for invalid input
  if(!array || !Array.isArray(array)) return null;

  //iterating through array making sure content of array is appropriate
  for (let i=0; i<array.length; i++) {
    if (typeof array[i] !== 'string') return null;
  }

  //use fs function readFile to get contents
  fs.readFile(array[0], (err, data) => {
    if(err) {
      console.error(err);
      return cb(err);
    }
    results.push(data.toString());
    // console.log('result1', results);

    fs.readFile(array[1], (err, data) => {
      if(err) {
        console.error(err);
        return cb(err);
      }
      results.push(data.toString());
      // console.log('result2', results);

      fs.readFile(array[2], (err, data) => {
        if(err) {
          console.error(err);
          return cb(err);
        }
        results.push(data.toString());
        // console.log('result3', results);
        return cb(null, results);
      });
    });
  });
};
