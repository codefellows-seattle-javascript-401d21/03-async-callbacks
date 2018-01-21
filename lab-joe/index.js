'use strict'

const reader = require('./lib/reader');

let arrayList = [`${__dirname}/lib/2.txt`,`${__dirname}/lib/1.txt`,`${__dirname}/lib/0.txt`];


reader.recursiveRead(arrayList, function(){console.log('done')});



let look = function(hello){


if(hello){ return null }


}