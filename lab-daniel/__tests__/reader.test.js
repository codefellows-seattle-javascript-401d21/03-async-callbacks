'use strict';

let reader = require('../lib/reader');
require('jest');

describe('Reader Module', function(){
  describe('#readWrite', function(){
    it('verifies the input is a valid array returning null in other cases', function(){
      expect(reader.readWrite('')).toBe(null);
      expect(reader.readWrite(365)).toBe(null);
    });
    it('verifies the input array contains strings returning null in other cases', function(){
      expect(reader.readWrite([1, 1, 1])).toBe(null);
      expect(reader.readWrite(['../assets/file01.txt', 3, 5])).toBe(null);
    });
    it('reads files passed into reader', function(done){
      reader.readWrite(['../assets/file01.txt', '../assets/file02.txt', '../assets/file03.txt'], (err, fd) => {
        if (err) console.error('test 1', err);
        expect(fd).toBeTruthy();
        done();
      });
    });
    it('writes the files into the correct order when presented with a valid input', function(done){
      reader.readWrite(['../assets/file03.txt', '../assets/file01.txt', '../assets/file02.txt'], (err, fd) => {
        if (err) console.error('test 2', err);
        fd = fd.map(v => v.slice(0, 7));
        expect(fd).toEqual(['File 03', 'File 01', 'File 02']);
        done();
      });
    });
  });
});