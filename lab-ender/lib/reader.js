'use strict';

const fs = require(`fs`);
const validate = require(`./validate`);

const fileContents = [];
let error;

const reader = (pathsArr, cb) => {
  if (!validate(pathsArr)) return null;
  const filePath = pathsArr.shift();
  fs.readFile(`${__dirname}/${filePath}`, `utf8`, (err, data) => {
    fileContents.push(data.toString());
    if (pathsArr.length !== 0) reader(pathsArr, cb);
    else { 
      console.log(cb(null, fileContents)); 
      console.log(cb.toString());
    };
  });
};

reader([
  `../assets/first.txt`,
  `../assets/third.txt`,
  `../assets/second.txt`
], (err, fd) => {
  if (err) return err;
  return fd;
});

module.exports = reader;