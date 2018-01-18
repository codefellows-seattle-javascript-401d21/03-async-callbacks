'use strict'

const mapping = require('../lib/reader');


describe('Reader module', function() {
	describe('mapping function', function() {

		function cb(err, data){
        		if(err){
				return false;
              		} else {
				return;
        		}
		}

		test(
			'with ivalid file paths, rejects error and stops execution',
			() => {expect(mapping([''], cb)).toBeFalsy()}
		);

		test(
			'with valid file paths, ',
			() => {expect(mapping(['../assets/string_one.txt', '../assets/string_two.txt', '../assets/string_three.txt'], cb)).toBe(undefined)}
		);
	});
});
