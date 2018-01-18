const fs = require('fs');

// module.exports = function reader() {
//   fs.readFile(`${__dirname}/assets/first.html`, (err, data) => {
//     if(err) console.error(err);
//     console.log(data);
    
//   });
// };
// reader();

function reader(paths) {
  let result = [];
  paths.forEach(function(filepath, i) {
    fs.readFile(filepath, (err, data) => {
      if(err) console.error(err);
      // console.log(data.toString('utf-8'));
      console.log('file' + i);
     
      result[i] = (data.toString('utf-8'));
      console.log(result[1])
      // console.log(result);
      // callback(null, result);
    });
  });
}
let paths = [`${__dirname}/../assets/first.html`, `${__dirname}/../assets/second.html`, `${__dirname}/../assets/third.html`];
reader(paths);
// function reader(paths, callback) {
//   let len = arr.length
//   if(!len) {
//     fs.readFile(i, (err, data) => {
//       if(err) console.error(err);
//       console.log(data.toString('utf-8')); 
//     });
//   });
// }

// function reader(){
//   fs.readFile(`${__dirname}/../assets/first.html`, (err, data) => {
//     if(err) console.error(err);
//     console.log(data);
//   });
// }