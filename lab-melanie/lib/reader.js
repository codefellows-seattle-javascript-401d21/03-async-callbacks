'use strict';

const reader = module.exports = {};
const fs = require('fs');

let lorem = [`../assets/red.html`, `../assets/green.html`, `../assets/blue.html`];

reader.newLorem = function(arr) {
  if(!arr || Array.isArray(arr) === false) return null;
  for(let i in arr) {
    if(typeof arr[i] !== 'string') return null;
  }
  let newFile = [];
  fs.readFile(`${__dirname}/${arr[0]}`, (err, data) => {

    if(err) console.error(err);
    newFile.push(data.toString());
    fs.readFile(`${__dirname}/${arr[1]}`, (err, data) => {

      if(err) console.error(err);
      newFile.push(data.toString());
      fs.readFile(`${__dirname}/${arr[2]}`, (err, data) => {

        if(err) console.error(err);
        newFile.push(data.toString());
      });
    });
  });
};

reader.newLorem(lorem);
