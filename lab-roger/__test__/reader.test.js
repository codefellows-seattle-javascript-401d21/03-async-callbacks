'use strict';
const reader = require('./lib/reader');
require('jest');

let pathArray = [`../assets/fileone.txt`, `../assets/filetwo.txt`, `../assets/filethree.txt`];
// not really sure how to structure tests...

describe('Reader Module', function() {
  it('should take an array of path names', function() {
    expect(reader.readermodule);
  });
});
