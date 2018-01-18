Reader Module
In the lib/ directory create a reader.js module that exports a single function. The reader module should take an array of three file paths and resolve a mapped array of strings loaded from each file using an error-first callback. The string data should be in the same order as the file path data (mapped). If an error occurs it should immediatly reject the error using the callback and stop execution.

The reader module should have the function signature (paths, callback) => undefined
On a failure the reader module should invoke the callback with an error callback(error)
On success the reader module should invoke the callback with null as the first paramiter, and the result as the second paramiter callback(null, result)
Testing
Reader Module Tests
Use BDD describe and test methods to define discriptive tests and increase readablity
Each test callback should aim to test a small well defined feature of a function
Write tests to ensure the reader function rejects errors with invalid file paths
Write tests to ensure the reader function correctly resolves mapped string data for an array of file paths

*reflection*


this lab was a lot of work, but i managed to get it done by about seven!


I could fatten up my tests but i am happy with the amount of work i have done today. I've learned a lot about readFile and writeFile in the fs module and have actually created some maintainable and recursive code.
