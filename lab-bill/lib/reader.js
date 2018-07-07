const fs = require('fs');

let paths = [`${__dirname}/../assets/first.html`, `${__dirname}/../assets/second.html`, `${__dirname}/../assets/third.html`];


module.exports = function(paths, resultCallback) {
  if (!Array.isArray(paths) || paths.length !== 3) {
    return null;
  }
  let result = [];
  fs.readFile(paths[0], (err, data) => {
    if(err) console.error(err);
    result.push(data.toString());
    fs.readFile(paths[1], (err, data) => {
      if(err) console.error(err);
      result.push(data.toString());
      fs.readFile(paths[2], (err, data) => {
        if(err) console.error(err);
        result.push(data.toString());
        return resultCallback(null, result);
      });
    });
  });
};

module.exports(paths);
