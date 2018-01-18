const fs = require('fs');

module.exports = (path_array) => {
  let results = [];

  readFile(path_array, readFile);
  
  function readFile(path_array, callback){
    if(!path_array.length) return console.log(results);
    fs.readFile(path_array.shift(), (err, data) => {
      if (err) return console.error(err);
      results.push(data.toString());
      callback(path_array, readFile);
    });
  }

};



