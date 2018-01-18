'use strict';

const fs = require('fs');

let reader = module.exports = (paths, callback) => {
  let results = [];
  fs.readFile(paths[0], (err, data) => {
    if (err) console.error(err);
    results.push(data.toString());

    fs.readFile(paths[1], (err, data) =>{
      if (err) console.error(err);
      results.push(data.toString); //buffers and comes back as binary unless we push to string

      fs.readFile(paths[2], (err, data) => {
        if (err) console.error(err);
        results.push(data.toString); //buffers and comes back as binary unless we push to string
        callback(null, results);
      });
    });
  });
};
