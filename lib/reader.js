'use strict';

const fs = require('fs');

function gh() {
    let filepaths = [`../assets/one.txt`, `../assets/two.txt`, `../assets/three.txt`];

    fs.readFile(`${__dirname}/${filepaths[0]}`, (err, data) => {
        console.log(data);
        console.log(data.toString())
        fs.readFile(`${__dirname}/${filepaths[1]}`, (err, data) => {
            console.log(data);
            console.log(data.toString())
            fs.readFile(`${__dirname}/${filepaths[2]}`, (err, data) => {
                console.log(data);
                console.log(data.toString())
            })
        })
    
    })
}

gh();


/*#### Reader Module
In the lib/ directory create a reader.js module that exports a single function. The reader module should take an array of three file paths and resolve a mapped array of strings loaded from each file using an error-first callback. The string data should be in the same order as the file path data (mapped). If an error occurs it should immediatly reject the error using the callback and stop execution.

* The reader module should have the function signature `(paths, callback) => undefined`
* On a failure the reader module should invoke the callback with an error `callback(error)`
* On success the reader module should invoke the callback with null as the first parameter, and the result as the second parameter `callback(null, result)`

## Testing
#### Reader Module Tests
* Use BDD `describe` and `test` methods to define discriptive tests and increase readablity
* Each `test` callback should aim to test a small well defined feature of a function
* Write tests to ensure the reader function rejects errors with invalid file paths
* Write tests to ensure the reader function correctly resolves mapped string data for an array of file paths

##  Documentation
In your README.md describe the exported values of each module you have defined. Every function description should include it's airty (expected number of parameters), the expected data for each paramiter (data-type and limitations), and it's behavior (for both valid and invalued use). Feel free to write any additional information in your README.md.

## Stretch
Write the reader function recursivly so that it will be able to support 0 or more paths.*/