'use strict';

const reader = require('../lib/reader.js');
require('jest');

describe('File System Lib', function() {
  it('should do a thing asyncronously', (done) => {
    // When testing async code:

    // Using the done keyword
    reader.doAThingAsyn(data, (err, fd) => {
      if(err) console.log(err);
      expect(fd).toBe(true);
      done();
    });

    // Without the done keyword (don't need the done param in the IT block)
    return reader.doAThingAsyn(data, (err, fd) => {
      if(err) console.log(err);
      expect(fd).toBe(true);
    });
  });
});