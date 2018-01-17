'use strict'

const reader = require('../lib/reader.js')

describe('it should return an array', function() {
   it('it should return an array', function() {
     expect(reader.fileLoader([`./assets/file1.txt`, `./assets/file2.txt`, `./assets/file3.txt`])).toBe([1,2,3]);
   })
