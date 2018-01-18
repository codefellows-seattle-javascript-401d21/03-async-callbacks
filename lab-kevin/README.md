# 03-async-callbacks

## Reader Module

Reader has one native method that reads a list of files from an array of paths and returns each of the files contents in an array with the same index as the the corresponding path array   Reader has an arity of 2 and expects an array of file paths and callbacks.  The array of file paths length can be 1 or more. can The callback must accept two arguments, error and data. ((err, data => {do something}) If there is an error reading any of the files, the resulting data will br null.  


## Development Tests

  - Test 1: Test to verify that reader exists.

  - Test 2: Test to verify that reader is a function.
  
  - Test 3: Test to verify that reader returns an array on success

  - Test 4: Test to verify that reader returns an array in the correct order
  
  - Test 5: Test to verify that reader returns an err in the callback for file path errors
  
  - Test 6: Test to verify that reader returns an err in the callback for invalid datatype for argument 1.
  
  - Test 7: Test to verify that reader returns null for an empty array passed as an argument.

## Development Dependencies 

  - The dev test environment uses jest as per package.json
