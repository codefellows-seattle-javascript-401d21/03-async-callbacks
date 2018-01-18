'use strict'

const fs = require('fs');

function mapping(pathsArr, callback){
   	let mappedArr = [];
	
	for(let i = 0; i < pathsArr.length; i++){
		try {  
			var data = fs.readFileSync(pathsArr[i], 'utf8');
			mappedArr.push(data);
		} catch(err) {
			callback(err);
			return;
		}
	}

	for(let i = 0; i < mappedArr.length; i++){
		callback(null, mappedArr[i]);
	}
}

module.exports = mapping;

/*
mapping(['../assets/string_one.txt', '../assets/string_two.tx', '../assets/string_three.txt'], (err, data) => {
	if(err){
		console.error('invalid file path');
		return;//throw new Error('Not valid file path!');
	} else {
		console.log(data);
	}
});*/
