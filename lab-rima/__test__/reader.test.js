'use strict';

const mapping = require('../lib/reader');


describe('Reader module', function() {

  describe('mapping function', function() {
          
    let paths = [`${__dirname}/assets/one.txt`, `${__dirname}/assets/two.txt`, `${__dirname}/assets/three.txt`];

    function cb(err, data){
      if(err) {
        throw new Error ('callback(err) is called');
      } else {
        return data;
      }
    }

    test(
      'with invalid file paths, rejects error and stops execution',
      (done) => {() => { expect(() => {mapping([''], cb).toThrow('callback(err) is called');});};
        done();}
    );

    test(
      'with valid file paths, shuold return array that have three elements.',
      (done) => {
        mapping(paths, (err, res) => {
          expect(res.length).toEqual(3);
          done();}
        );
      }
    );

    test(
      'with valid file paths, should return result',
      (done) => {
        let expected = 'onetwothree';

        mapping(['./assets/one.txt', './assets/two.txt', './assets/three.txt'], (err, res) => {
          let result = [res[0].split(' ')[0], res[1].split(' ')[0], res[2].split(' ')[0]].join('');
          expect(expected).toEqual(result);
          done();}
        );
      }
    );
  });
});
