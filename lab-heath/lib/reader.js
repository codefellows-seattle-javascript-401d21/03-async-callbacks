'use strict';

const doThing = module.exports = {};
const fs = require('fs');


doThing.readBook = function(arr) {
  if(!arr || !Array.isArray(arr)) return null;
  for (let i in arr) if (typeof arr[i] !== 'string') return null;
  let test = [];
  let counter = 0;
  fs.readFile(`${__dirname}/${arr[counter]}`, (err, data) => {
    if(err) console.error(err);
    test.push(data.toString());
    counter++;

    doThing.readBook(arr[counter]);
  });
};
