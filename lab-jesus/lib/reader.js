'use strict';

const fs = require ('fs');

let validFilePaths = [`${__dirname}/../assets/one.txt`, `${__dirname}/../assets/two.txt`, `${__dirname}/../assets/three.txt`];


// work in progress to check for valid file paths
// let points = 0;

// function contains (validFilePaths, paths) {
//   for (let k = 0; i<validFilePaths.length; k++) {

//     for (var i = 0; i < paths.length; i++) {
//       if (validFilePaths[i] === paths[k]) {
//         points++;
//         return true;
//       }
//     }
//     return false;
//   }
// }

module.exports = (paths, callback) => {

//   contains(validFilePaths,paths);
//   console.log('points', points);

//   if (!validFilePaths.includes(paths[0])) return 'not a valid file path';
  if(typeof paths !== 'object') return null;
  if (!paths || paths == []) return null;
  for (let i in paths) if (typeof paths[i] !== 'string') return null;
  let result = [];
  fs.readFile(paths[0], (err,data) => {
    if (err) console.error(err);
    result.push(data.toString());

    fs.readFile(paths[1], (err,data) => {
      if (err) console.error(err);
      result.push(data.toString());

      fs.readFile(paths[2], (err,data) => {
        if (err) console.error(err);
        result.push (data.toString());
        callback(null, result);
      });
    });
  });
};
