'use strict';

const reader = module.exports = {};

const fs = require('fs');

reader.read = function(pathname, cb) {
//create an array of three filepaths
  let filepath = [];
  console.log('here');
  let one = filepath[0];
  let two = filepath[1];
  let three = filepath[2];
  let dn = `${__dirname}/../assets/`
  let results = [];

fs.readFile(dn+one, (err, data) => {
    if(err) {
      console.error(err);
      return cb(err)
    }
    results.push(data.toString());
    console.log('result1', results);
    fs.readFile(dn+two, (err, data) => {
      if(err) {
        console.error(err);
        return cb(err)
      }
      results.push(data.toString());
      console.log('result2', results);
      fs.readFile(dn+three, (err, data) => {
        if(err) {
          console.error(err);
          return cb(err)
        }
        results.push(data.toString());
        console.log('result3', results);
        return cb(null, results)
      });
    });
  });
}
