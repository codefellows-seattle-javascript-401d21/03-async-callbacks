'use strict';
const reader = require('../lib/reader');
require('jest');

let pathArray = [`../assets/fileone.txt`, `../assets/filetwo.txt`, `../assets/filethree.txt`];
let notPathArray = [`../assets/filone.txt`, `../assets/filetwo.txt`, `../assets/filethree.txt`];
// not really sure how to structure tests...

describe('Reader Module', function() {
  it('should expect the result to be an array', (done) => {
    reader.readerModule(pathArray, (err, results) =>{
      expect(results).toBeInstanceOf(Array);
      done();
    });
  });
  it('it should return the array in the correct order', (done) => {
    reader.readerModule(pathArray, (err, results) =>{
      let shortversion = [results[0].split(' ')[0], results[1].split(' ')[0], results[2].split(' ')[0]];
      expect(shortversion).toEqual(['fileone', 'filetwo', 'filethree']);
      done();
    });
  });
  it('should take an array of path names', (done) => {
    reader.readerModule(notPathArray, (err, results) =>{
      expect(err).not.toEqual(null);
      done();
    });
  });
});
