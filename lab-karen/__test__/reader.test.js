'use strict';

const reader = require('../lib/reader');
require('jest');

describe('Reader Module', function() {
  let paths = [`${__dirname}/assets/one.txt`, `${__dirname}/assets/two.txt`, `${__dirname}/assets/three.txt`];

  describe('Valid inputs', () => {
    it('should return the file data in the same order passed in', (done) => {
      let expected = ['One', 'Two', 'Three'];
      reader.read(paths, (err, results) => {
        let arr = [results[0].split(' ')[0], results[1].split(' ')[0], results[2].split(' ')[0]];

        expect(expected).toEqual(arr);
        done();
      });
    });

    it('should accept an array of file paths and return a null argument for err', (done) => {
      reader.read(paths, (err, results) => {
        expect(err).toBeNull();
        done();
      });
    });

    it('should accept an array of file paths and return an array of results', (done) => {
      reader.read(paths, (err, results) => {
        expect(results).toBeInstanceOf(Array);
        done();
      });
    });
    it('should accept an array of file paths and return something', (done) => {
      reader.read(paths, (err, results) => {
        expect(results).not.toBeNull();
        done();
      });
    });
    it('should return an array with the length of 3', (done) =>{
      reader.read(paths, (err, results) => {
        expect(results.length).toBe(3);
        done();
      });
    });
  });

  describe('Invalid inputs', () => {
    let badpath = [`${__dirname}/asset/one.txt`, `${__dirname}/asset/two.txt`, `${__dirname}/asset/three.txt`];
    let badFn = [`${__dirname}/assets/one.txt`, `${__dirname}/assets/two.txt`, `${__dirname}/assets/thre.txt`];

    it('should return an error given an invalid file path', (done) => {

      reader.read(badpath, (err, results) => {

        expect(results).toBeUndefined();
        done();
      });
    });
    it('should return null with no input',(done) => {
      expect(reader.read()).toBeNull();
      done();
    });

    it('should return an error given a bad file name',(done) => {

      reader.read(badFn,(err, results) => {
        expect(results).toBeUndefined();
        done();
      });
    });
  });
});
