'use strict';

const fs = require('fs');
// this
// let filePathArray = [`../assets/fileone.txt`, `../assets/filetwo.txt`, `../assets/filethree.txt`];
let finalArray = [];

exports.readerModule = function(filePathArray, callback) {

  fs.readFile(`${__dirname}/${filePathArray[0]}`, (err, data) => {
    if(err) {
      console.error(err);
      return;
    }
    finalArray.push(data.toString());

    fs.readFile(`${__dirname}/${filePathArray[1]}`, (err, data) => {
      if(err) {
        console.error(err);
        return;
      }
      finalArray.push(data.toString());

      fs.readFile(`${__dirname}/${filePathArray[2]}`, (err, data) => {
        if(err) {
          console.error(err);
          return;
        }
        finalArray.push(data.toString());
        callback();
      });
    });
  });
};
// readerModule(filePathArray, function()  {
//   console.log('finsihed finalarray', finalArray);
//   return finalArray;
// });
