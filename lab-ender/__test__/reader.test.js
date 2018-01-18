'use strict';

const reader = require('../lib/reader');

describe(`reader()`, function() {
  describe(`#happy case`, () => {
    it(`should read files referenced in array`, () => {
      return reader([
        `../assets/first.txt`,
        `../assets/second.txt`,
        `../assets/third.txt`
      ], (err, fd) => {
        if (err) console.error(`reader() #happy case should read files...`, err);
        expect(fd).toBe(true);
      });
    });
    return reader([
      `../assets/first.txt`,
      `../assets/third.txt`,
      `../assets/second.txt`
    ], (err, fd) => {
      it(`should return the files as an array, in the order they were requested in`, (err, fd) => {
        if (err) console.error(`reader() #happy case should return the files...`, err);
        expect(fd).toBe([
          `#1 text is short`,
          `#3 text is very very very very very very very very very very 
          very very very very very very very very very very very very 
          very very very very very very very very very very very very 
          very very very very very very very very very very very very 
          very very very very very very very very very very very very 
          long, comparitively.`,
          `#2 text is quite a bit longer, but still rather easy to make sense of. Nothing we can't handle.`
        ]);
      });
    }); 
  });
});
