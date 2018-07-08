'use strict';

const validateArray = require('../lib/validate');
require(`jest`);

describe(`validateArray()`, function() {
  describe(`#return true case`, () => {
    it(`should return true if the array only contains strings`, () => {
      expect(validateArray(['strings'])).toBe(true);
    });
    it(`should return true if the array is empty`, () => {
      expect(validateArray([])).toBe(true);
    });
  });
  describe(`#return false cases`, () => {
    it(`should return false if input is not an array`, () => {
      expect(validateArray('[]')).toBe(false);
    });
    it(`should return false if input array contains non strings`, () => {
      expect(validateArray([true, false, null])).toBe(false);
    });
  });
});