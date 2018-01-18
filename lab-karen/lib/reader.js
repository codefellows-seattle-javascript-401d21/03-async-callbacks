'use strict';

module.exports = {};

const fs = require('fs');

//create an array of three filepaths
let filepaths = [`/../assets/bob.html`, `/../assets/queen.html`, `/../assets/sj.html`];

let strArr = [];
let dn = `${__dirname}`;

fs.readFile(dn+filepaths[0], (err, data) => {
  if(err) console.error(err);

  fs.readFile(dn+filepaths[1], (err, data) => {
    if(err) console.error(err);

    fs.readFile(dn+filepaths[2], (err, data) => {
      if(err) console.error(err);

      strArr.push(data.toString());
      // console.log('result', strArr);
      return strArr
    });

    strArr.push(data.toString());

  });
  strArr.push(data.toString());

});
