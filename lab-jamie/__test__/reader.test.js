'use strict';

const reader = require('../lib/reader.js');

describe('reader', () => {
  test('ensure the reader function rejects errors with invalid file paths', (done) => {
    reader([`${__dirname}/assets/dj1.txt`,`${__dirname}/assets/dj2.txt`, `${__dirname}/assets/dj3.txt`], (err, data) => {
      expect(err).not.toBeNull();
      expect(data).toBeUndefined();
      done();
    });
  });
  
  test('ensure the reader function correctly resolves mapped string data for an array of file paths', (done) => {
    reader([`${__dirname}/assets/dj1.txt`,`${__dirname}/assets/dj2.txt`, `${__dirname}/assets/dj3.txt`], (err, data) => {
      expect(err).toBeNull();
      expect(data).toEqual(['What do you call a fake noodle? An Impasta.', 'How does a penguin build it\'s house? Igloos it together.', 'Why did the coffee file a police report? It got mugged.']);      
      done();
    });
  });
});