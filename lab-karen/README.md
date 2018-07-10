# 03-async-callbacks
This lab using Node.js built-in file system, required in as 'fs' to read text files.

##Function
The exported value for my reader module is an array of 3 strings, with content read from the three files in the assets folder.

##Tests
One test is for proper input, that it is a non-empty array.
One test is for proper input in the input array, that it is strings.
One test ensures my reader function correctly resolves mapped string data for an array of file paths, testing for asynchronously.
