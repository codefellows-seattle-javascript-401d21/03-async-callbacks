'use strict';

const reader = require('../lib/reader.js');


let arrOne = [`${__dirname}../assets/one.txt`, `${__dirname}../assets/two.txt`,`${__dirname}../assets/three.txt`];
let arrTwo = ['problem one', 'problem two', 'problem three'];

describe('File System Module', function() {
  describe('#reader', function () {

  })
  it('should do a thing asyncronously', (done) => {
    // When testing async code:

//     // Using the done keyword
//     reader.doAThingAsyn(data, (err, fd) => {
//       if(err) console.log(err);
//       expect(fd).toBe(true);
//       done();
//     });

//     // Without the done keyword (don't need the done param in the IT block)
//     return reader.doAThingAsyn(data, (err, fd) => {
//       if(err) console.log(err);
//       expect(fd).toBe(true);
//     });
//   });
// });