'use strict';

const reader = require('./lib/reader')

let testsArray = [`./assets/one.txt`, `./assets/two.txt`, `./assets/three.txt`];

reader.read(testsArray, ());
