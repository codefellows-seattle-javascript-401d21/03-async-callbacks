'use strict';

const fs = require('fs');

module.exports = (paths, data_callback) => {
  if( ! Array.isArray(paths)) return data_callback('not array', null);
  if(!paths.length) return data_callback(null, null);
  
  let results = [];
  readFile([...paths], readFile);
  
  function readFile(path_array, callback){
    if(!path_array.length) return data_callback(null, results);
    fs.readFile(path_array.shift(), (err, data) => {
      if (err) return data_callback(err);
      results.push(data.toString());
      callback(path_array, readFile);
    });
  }

};
