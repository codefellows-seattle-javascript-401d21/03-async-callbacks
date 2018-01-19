# Lab Async callback

## Problem Domain
    Reader.js exports a module readerModule. This take two parameters, the first an array of filepaths, the second a call back.

    It reads the content of the corresponding files and returns a single array wit that content in the order they were called.

## Testing
    The test suite checks for the following:
    1 tests that the return value is an array.
    2 test the return is in the correct order.
    3 tests that an invalid pathname will return error
