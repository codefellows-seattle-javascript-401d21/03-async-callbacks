'use strict';

const solution = require('../lib/reader');
require('jest');

let one = 'one one one one one one';
let two = 'two two';
let three = 'three';
let arr = [`${__dirname}/../assets/one.txt`, `${__dirname}/../assets/two.txt`, `${__dirname}/../assets/three.txt`];

describe('Reader Module', function() {
  describe('#Reader', function() {
    it('expects var one to equal one.txt', (done) => {
      solution(arr, (err, fd) => {
        if(err) console.log(err);
        expect(fd[0]).toBe(one);
        expect(fd[1]).toBe(two);
        expect(fd[2]).toBe(three);
        done();
      });
    });

    it('expects the reader module to be an object', function() {
      expect(solution('')).toBe(null);
    });

    it('expects the reader module to not have an empty array', function() {
      expect(solution(0)).toBe(null);
    });

  });
});