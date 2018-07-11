'use strict';

const reader = require('../lib/reader.js');


let arrOne = [`${__dirname}/../assets/one.txt`, `${__dirname}/../assets/two.txt`,`${__dirname}/../assets/three.txt`];
let arrTwo = ['problem one', 'problem two', 'problem three'];

describe('File System Module', function() {
  describe('#reader', function () { 
    it('should return an array (object)', function ()  {
      return reader(arrOne, (err, fd) => {
        if(err) console.log(err);
        expect(typeof fd).toBe('object');
      });
    });
    it('should return an strings' , function ()  {
      return reader(arrOne, (err, fd) => {
        if(err) console.log(err);
        expect(typeof fd).toBe('string');
      });
    });
    it ('should return the strings in the same order', function () {
      return reader(arrOne, (err, fd) => {
        if(err) console.log(err);
        expect(typeof fd).toBe(true);
      });
    });
    it ('should throw an error in thr input is not a valid path', function () {
      return reader (arrTwo, (err, fd) => {
        if (err) console.error(err);
        expect(reader()).toThrowError();
      });
    });
  });
});