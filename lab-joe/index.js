'use strict'

const reader = require('./lib/reader');

// reader.reading();



let arrayList = [`${__dirname}/lib/2.html`,`${__dirname}/lib/1.html`,`${__dirname}/lib/0.html`];



reader.recursiveRead(arrayList, function(){
    console.log(reader.fileArr.toString());
});

