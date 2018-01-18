'use strict';

const reader = require('../lib/reader');
require('jest'); // This is not required


describe('reader module', function() {
  describe('#reader', function() {
    it('test if input is an array', function() {
      expect(reader.recursiveRead(123)).toEqual(null);
    });

    it('test if array is not null', function() {
      expect(reader.recursiveRead([])).toEqual(null);
   });



  });
});




