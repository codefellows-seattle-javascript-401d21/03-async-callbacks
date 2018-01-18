## 03 Async Callback

The reader module exports a method that takes in a single argument, requires that the argument is an array and performs the file systems readFile method to read text from a specific file. The function will return null if:
* anything other than an array is passed
* the array contains anything other than a string
* if no argument is passed in

The tests verify the argument is correct, and checks that each file is read in the order in which it occurs in the array.
