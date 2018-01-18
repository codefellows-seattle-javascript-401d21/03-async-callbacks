'use strict';

const reader = require('../lib/reader.js');
require('jest')

describe('Reader Module', function() {

  it('should return error for an invalid filepath', function() {
    expect(reader('string')).toBe(null);
  });

  it('should do a thing asyncronously', () => {
    // When testing async code:
    return reader.doAThingAsyn(data, (err, strArr) => {
      if(err) console.log(err)
      expect(srtArr).toBe(true)
    });
  });
});
