'use strict';

const fs = require('fs');
const reader = module.exports = {};

reader.read = function(paths, callback){
    let filepaths = [`${__dirname}/../assets/one.txt`, `${__dirname}/../assets/two.txt`, `${__dirname}/../assets/three.txt`];
    let filedata = [];

    if(!paths || typeof paths !== 'object') {
        return null;
    }

    fs.readFile(filepaths[0], (err, data) => {
        if(err) {
            return callback(err);
        }
        filedata.push(data.toString('utf-8', 0, 32));
        fs.readFile(filepaths[1], (err, data) => {
            if(err){
                return callback(err);
            }
            filedata.push(data.toString('utf-8', 0, 32));
            fs.readFile(filepaths[2], (err, data) => {
                if(err){
                    return callback(err);
                }
                filedata.push(data.toString('utf-8', 0, 32));
                return callback(null, filedata);
            });
        });
    
    });
};

reader.read();