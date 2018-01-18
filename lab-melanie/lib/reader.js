'use strict';

const reader = module.exports = {};
const fs = require('fs');

let lorem = [`${__dirname}/../assests/red.html`, `${__dirname}/../assests/green.html`, `${__dirname}/../assests/blue.html`];

reader.newLorem = function(arr) {
  for(let i in arr) {
    fs.readFile(`${arr[i]}`, (error, data) => {
      if(err) console.error(err);
      let fd = data.toString();
      console.log(fd);

      fs.writeFile(`${__dirname}/../assets/new.html`, err => err ? console.error(err) : undefined);

    });
  }
};

reader.newLorem(lorem);
