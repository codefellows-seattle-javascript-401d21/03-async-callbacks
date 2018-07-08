'use strict';

const reader = require(`${__dirname}/../lib/reader`);

const test_assetsDir = `${__dirname}/test_assets/`;

const filePaths = [ `${test_assetsDir}1_test.txt`,
  `${test_assetsDir}2_test.txt`,
  `${__dirname}/test_assets/3_test.txt` ];


describe('reader', () => {
  test('Test 1: reader exists', () => {
    expect(reader).toBeDefined();
  });
  test('Test 2: reader is a function', () => {
    expect(reader).toBeInstanceOf(Function);
  });

  test('Test 3: reader returns an array', done => {
    reader(filePaths, (err, data) => {
      if (err) console.error(err);
      expect(data).toBeInstanceOf(Array);
      done();
    });  
  });

  test('Test 4: reader returns an array in the correct order', done => {
    reader(filePaths, (err, data) => {
      if (err) console.error(err);
      let dataString = data.map(val=>`${test_assetsDir}${val}`).toString();
      expect(dataString).toEqual(filePaths.toString());
      done();
    });
  });

  test('Test 5: reader returns an err in the callback for file path errors', done => {
    reader(['bad path'], (err, data) => {
      if (err) console.error(err);
      expect(err).not.toBe(null);
      done();
    });
  });

  test('Test 6: reader returns an err in the callback for not an array', done => {
    reader('string', (err, data) => {
      if (err) console.error(err);
      expect(err).toEqual('not array');
      done();
    });
  });

  test('Test 7: reader returns null for an empty array', done => {
    reader([], (err, data) => {
      if (err) console.error(err);
      console.log(data);
      expect(data).toEqual(null);
      done();
    });
  });

}); 