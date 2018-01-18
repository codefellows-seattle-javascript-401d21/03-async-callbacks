'use strict';

const reader = require('fs');

reader.readFile(`${__dirname}/assets/one.html`, (err, data) => {
  if(err) console.error(err);
  let buffer = data;
  let fd = data.toString();
  let hex = data.toString('hex');
  let tim = hex * 3; // will return NaN

  // some manipulation or aggregation of the data, buffer or otherwise

  reader.writeFile(`${__dirname}/data/new.html`, buffer + fd + tim, err => err ? console.error(err) : undefined);
}); 