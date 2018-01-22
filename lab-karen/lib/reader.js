'use strict';

const reader = module.exports = {};

const fs = require('fs');

let path = [`../assets/one.txt`, `../assets/two.txt`, `../assets/three.txt`];

reader.read = function(path, cb) {
//create an array of three filepaths

  console.log('here');

  let results = []; //results testsArray

  //error-handling for input
  if(!path || !Array.isArray(path)) return null;
  for (let i=0; i<3; i++) {
    if (typeof path[i] !== 'string') return null;
  }

  fs.readFile(`${__dirname}/path[0]`, (err, data) => {
    if(err) {
      console.error(err);
      return cb(err);
    }
    results.push(data.toString());
    console.log('result1', results);
    fs.readFile(`${__dirname}/${path[1]}`, (err, data) => {
      if(err) {
        console.error(err);
        return cb(err);
      }
      results.push(data.toString());
      console.log('result2', results);
      fs.readFile(`${__dirname}/${path[2]}`, (err, data) => {
        if(err) {
          console.error(err);
          return cb(err);
        }
        results.push(data.toString());
        console.log('result3', results);
        return cb(null, results);
      });
    });
  });
};
