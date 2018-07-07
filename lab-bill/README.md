The reader.js file is a single function exported. It has an airty of two parameters. The first parameter needs to be an array with a length of three filepaths. The second parameter is a callback to return the data compiled. It works by nesting multiple callbacks so the files compile in the order they were presented in the array. 
If an invalid parameter is entered to the function it will return as null

For testing the function I have made four tests as follows: 
    1. testing if data is returned
    2. testing if the input is an array
    3. testing if the array has a length of 3
    4. testing the proper order of the array by checking if the correct file contains a certian 'marker' (in this case the number 2)
