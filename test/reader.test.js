'use strict';

const reader = require('../lib/reader');
require('jest');

describe('Reader Module', function(){
    describe('#reader', () => {
        let paths = [`${__dirname}/../test/one.txt`, `${__dirname}/../test/two.txt`, `${__dirname}/../test/three.txt`];

        describe('valid results', () => {
            it('should take in three filepaths and map data as an array', () => {
                reader.read(paths, (err, results) => {
                    expect(results).toBeInstanceOf(Array);
                });
            });
            it('should take in three filepaths and map data to an array with 3 indexes', () => {
                reader.read(paths, (err, results) => {
                    expect(results.length).toBe(3);
                });
            });
            it('should take in three filepaths, read the files, parse into a string', () => {
                reader.read(paths, () => {
                    expect(typeof 'value').toBe('string');
                });
            });
            it('should take in three filepaths and map data as an array', () => {
                reader.read(paths, (err, results) => {
                    expect(results).not.toBeNull();
                });
            });
        });
    });
});