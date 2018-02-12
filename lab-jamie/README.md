# Lab 3: Async Callbacks
##### January 17, 2018
&nbsp;
## Problem Domain
&nbsp;
Create a reader.js module that exports a single function. The reader module should take an array of three file paths and resolve a mapped array of strings loaded from each file using an error-first callback. The string data should be in the same order as the file path data (mapped). If an error occurs it should immediately reject the error using the callback and stop execution.