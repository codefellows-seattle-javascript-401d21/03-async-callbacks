'use strict';

const fs = require('fs');

let reader = module.exports = (paths, callback) => {
  let results = [];
  fs.readFile(paths[0], (err, data) => {
    if(err) console.error(err);
    results.push(data.toString());

    fs.readFile(paths[1], (err, data) => {
      if(err) console.error(err);
      results.push(data.toString());

      fs.readFile(paths[2], (err, data) => {
        if(err) console.error(err);
        results.push(data.toString());

        callback(null, results);
      });
    });
  });
};

// reader.readFile(`${__dirname}../assets/one.html`, (err, data) => {
//   if(err) console.error(err);
//   let buffer = data;
//   let fd = data.toString();
//   let hex = data.toString('hex');
//   let tim = hex * 3; // will return NaN

//   // some manipulation or aggregation of the data, buffer or otherwise

//   reader.writeFile(`${__dirname}../assets/new.html`, buffer + fd + tim, err => err ? console.error(err) : undefined);
// }); 