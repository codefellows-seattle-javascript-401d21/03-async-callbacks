'use strict'

const reader = requires('../lib/reader')

describe('Reader Module', function(){
    it('should take in a filepath, read the file, parse into a string and map it to an array, () => {
    expect(greet(1)).toEqual(null);
    expect(greet('world')).toEqual('hello world');
    })
});


## Testing
#### Reader Module Tests
* Use BDD `describe` and `test` methods to define discriptive tests and increase readablity
* Each `test` callback should aim to test a small well defined feature of a function
* Write tests to ensure the reader function rejects errors with invalid file paths
* Write tests to ensure the reader function correctly resolves mapped string data for an array of file paths