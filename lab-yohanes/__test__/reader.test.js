'use strict';

const reader = require('../lib/reader.js');
require('jest');

let arrayOne = [`${__dirname}/../assets/doing.txt`, `${__dirname}/../assets/reading.txt`, `${__dirname}/../assets/something.txt`];
let arrayTwo = ['prollem one', 'prollem two', 'prollem three'];

describe('reader module', function () {
  describe('#reader', function () {
    it('should return an array (object)', function () {
      return reader(arrayOne, (err, fd) => {
        if (err) console.error(err);
        expect(typeof fd).toBe('object');
      });
    });
    it('it should return strings', function () {
      return reader(arrayOne, (err, fd) => {
        if (err) console.error(err);
        expect(typeof fd[0]).toBe('string');
      });
    });
    it('should return the strings in the same order', function () {
      return reader(arrayOne, (err, fd) => {
        if (err) console.error(err);
        expect(fd[0].includes('#1')).toBe(true);
      });
      return reader(arrayOne, (err, fd) => {
        if (err) console.error(err);
        expect(fd[1].includes('#2')).toBe(true);
      });
      return reader(arrayOne, (err, fd) => {
        if (err) console.error(err);
        expect(fd[2].includes('#3')).toBe(true);
      });
    });
    it('should throw an error if the input is not valid path', function () {
      return reader(arrayTwo, (err, fd) => {
        if (err) console.error(err);
        expect(reader()).toThrowError();
      });
    });
  });
});

