const fs = require('fs');

// module.exports = function reader(paths) {
//   let result = [];
//   paths.forEach(function(filepath, i) {
//     fs.readFile(filepath, (err, data) => {
//       if(err) console.error(err);
//       console.log('file' + i);
//       result[i] = (data.toString('utf-8'));
//       console.log(result[1]);
//     });
//   });
// };
let paths = [`${__dirname}/../assets/first.html`, `${__dirname}/../assets/second.html`, `${__dirname}/../assets/third.html`];


module.exports = function(paths) {
  let result = [];
  fs.readFile(paths[0], (err, data) => {
    if(err) console.error(err);
    result.push(data.toString('utf-8'));
    fs.readFile(paths[1], (err, data) => {
      if(err) console.error(err);
      result.push(data.toString('utf-8'));
      fs.readFile(paths[2], (err, data) => {
        if(err) console.error(err);
        result.push(data.toString('utf-8'));
        console.log(result);
      });
    });
  });
};

module.exports(paths);

// function testOne(x, callback) {
//   console.log(x);
//   callback(2, testThree);

// }
// function testTwo(y, callback) {
//   console.log(y);
//   callback(3);
// }
// function testThree(z) {
//   console.log(z);
// }
// testOne (1, testTwo);