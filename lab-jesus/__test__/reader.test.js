'use strict';

const reader = require('../lib/reader');
require('jest');

let pathArray = [`${__dirname}/../data/one.html`,`${__dirname}/../data/two.html`,`${__dirname}/../data/three.html`];

const solution = require('../lib/reader');
require('jest');

let arrayOne = [`${__dirname}/../assets/one.html`, `${__dirname}/../assets/two.html`, `${__dirname}/../assets/three.html`];

describe('Reader Module', function() {
  describe('#Reader', function() {
    it('expects var one to equal one.txt', (done) => {
      solution(arrayOne, (err, fd) => {
        if(err) console.log(err);
        expect(fd[0].includes('oneone')).toBe(true);
        expect(fd[1].includes('twotwo')).toBe(true);
        expect(fd[2].includes('threethree')).toBe(true);
        done();
      });
    });
    it('expects the reader module to not take non-array items', function() {
      expect(solution('')).toBe(null);
    });

    it('expects the reader module to not take numbers', function() {
      expect(solution(0)).toBe(null);
    });

  });
});