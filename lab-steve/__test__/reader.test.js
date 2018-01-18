'use strict';

const reader = require('../lib/reader');

describe('Reader Module', () => {
  describe('#readFiles', () => {
    it('should read and store a variable number of files in order from an array', (done) => {
      reader.readFiles(['../assets/a.txt', '../assets/b.txt', '../assets/c.txt', '../assets/d.txt'], (err, data) => {
        if (err) console.log(err);
        expect(data[0]).toBe('a\n');
        expect(data[1]).toBe('b\n');
        expect(data[2]).toBe('c\n');
        expect(data[3]).toBe('d\n');
        done();
      });
    });

    it('should return undefined data when one or more filepaths are invalid', (done) => {
      reader.readFiles(['../assets/foo.txt'], (err, data) => {
        if (err) console.log(err);
        expect(data).toBe(undefined);
        done();
      });

      reader.readFiles(['../assets/a.txt', '../assets/foo.txt'], (err, data) => {
        if (err) console.log(err);
        expect(data).toBe(undefined);
        done();
      });
    });
  });
});
