# 03 - Parallel File Processing
## Joy Hou, Jan 17, 2018

## Modules
The reader module has one function, read, which takes in two parameters and one third optional parameter. The first parameter we are taking in an array of file paths and creating an array of the data inside each file, in the same order that we are taking in the file paths. The second parameter is a callback function. The third parameter is the array of results. We are using asynchronous callbacks and recursive functions to complete this task. If the paths argument is is not an array or is an empty array, or if the file paths are invalid, we use the callback function to log an error.