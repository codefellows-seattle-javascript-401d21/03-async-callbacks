'use strict';

const reader = require('./reader');

let filePathArray = [`../assets/fileone.txt`, `../assets/filetwo.txt`, `../assets/filethree.txt`];

reader.readerModule(filePathArray, (err, results) => {
  if (err) console.error(err);
  if (results) console.log(' the results are', results);
});
