'use strict';

const reader = require('../lib/reader');
require('jest')

let testsArray = [`../assets/one.txt`, `../assets/two.txt`, `../assets/three.txt`];
let badTestArray = 'string'
let badFilePath =  [`../assets/one.txt`, `../assets/two.txt`, `../assets/there.txt`];

describe('Reader Module', function() {

  it('should return error for an invalid', function() {
    expect(reader(badTestArray)).toBe(null);
  });

  it('should return error for an invalid file path', function() {
    expect(reader(badFilePath)).toBeUndefined();
  });

  it('it should return the results in the correct order', (done) => {
    let firstWord = [results[0].split(' ')[0], results[1].split(' ')[0], results[2].split(' ')[0]];
    expect(firstWord).toEqual(['One', 'Two', 'Three']);
    done();
  });

});
