'use strict';

const fs = require ('fs');

module.exports = (paths, callback) => {
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


