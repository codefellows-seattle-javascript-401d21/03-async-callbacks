'use strict';

const reader = require('../lib/reader.js');
require('jest');

describe('Reader Module', function() {
  describe('#New Lorem', () => {
    it('should only allow an array to pass as an argument', () => {
      expect(reader.newLorem(123)).toBeNull();
    });
    it('should return null if no argument is passed into function', () => {
      expect(reader.newLorem()).toBeNull();
    });
    it('should return null if an element in array is not a string', () => {
      expect(reader.newLorem()).toBeNull();
    });
    it('should read each file in the array', () => {
      return reader.newLorem([`../assets/red.html`, `../assets/green.html`, `../assets/blue.html`], (err, fd) => {
        if(err) console.error(err);
        expect(fd).toBe(true);
      });
    });
    it('should read each file in the orer it occurs in the array', () => {
      return reader.newLorem([`../assets/red.html`, `../assets/green.html`, `../assets/blue.html`], (err, fd) => {
        if(err) console.error(err);
        fd = fd.map(a => a.slice(0, 4));
        expect(fd).toBe('**1**', '**2**', '**3**');
      });
    });
  });
});
