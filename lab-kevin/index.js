'use strict';

const fs = require('fs');

const reader = require(`${__dirname}/lib/reader`)

const assetsDir = `${__dirname}/assets`;

fs.readdir(assetsDir, (err, files) => {
  if(err) console.error(err);
  let filePaths = files.map(val => `${assetsDir}/${val}`); 
  reader(filePaths);
});

