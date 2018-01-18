'use strict';

const fs = require('fs');

module.exports = (path_array, data_callback) => {
  let results = [];
  readFile(path_array, readFile);
  
  function readFile(path_array, callback){
    if(!path_array.length) return data_callback(null, results);
    fs.readFile(path_array.shift(), (err, data) => {
      if (err) return data_callback(err);
      results.push(data.toString());
      callback(path_array, readFile);
    });
  }

};
