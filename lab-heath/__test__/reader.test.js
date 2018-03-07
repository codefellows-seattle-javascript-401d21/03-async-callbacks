'use strict';

const test = require('../lib/reader.js');

describe('#solution module', function() {
  it('checks to see if there is something anything to read', function() {
    expect(test.readBook()).toBe(null);
  });
  it('checks to see if arr is an array', function() {
    expect(test.readBook('string')).toBe(null);
  });
  it('checks to see if every array item is a string', function() {
    expect(test.readBook(['test', 2, 3])).toBe(null);
  });
  it('checks to see if the code is places in order in the array', function() {
    return test.readBook(['../assets/fileOne.html', '../assets/fileThree.html', '../assets/fileTwo.html'], (err, fd) => {
      if (err) console.error('error here', err);
      fd = fd.map(x => x.slice(0, 1));
      expect(fd).toEqual(['#1', '#3', '#3']);
    });
  });
});
