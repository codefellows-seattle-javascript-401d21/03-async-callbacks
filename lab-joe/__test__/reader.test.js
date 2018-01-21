'use strict';

const reader = require('../lib/reader');

describe('reader.test.js', () => {

  describe('testing invalid paths for reader.recursiveRead', () => {
    test('error if path to one.txt is invalid', done => {
      reader.recursiveRead([`${__dirname}/../assets/on1234`, `${__dirname}/../assets/two.txt`, `${__dirname}/../assets/three.txt`], (error) => {
        expect(error).not.toBeNull();
        done();
      });
    });
    test('error if path to two.txt is invalid', done => {
      reader.recursiveRead([`${__dirname}/../assets/one.txt`, `${__dirname}/../assets/sacjlk`, `${__dirname}/../assets/three.txt`], (error) => {
        expect(error).not.toBeNull();
        done();
      });
    });
    test('error if path to three.txt is invalid', done => {
      reader.recursiveRead([`${__dirname}/../assets/one.txt`, `${__dirname}/../assets/two.txt`, `${__dirname}/../assets/3333`], (error) => {
        expect(error).not.toBeNull();
        done();
      });
    });
  });

  describe('testing invalid input for array in reader.recursiveRead', () => {
    test('function should throw error if not given an array', () => {
      expect(() => reader.recursiveRead('asdc;jh')).toThrow();
    });
  });
});