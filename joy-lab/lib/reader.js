'use strict';
const fs = require('fs');

exports.read = (paths, callback, res) => {
    if (!res) res = [];
    if (!paths[0]) return callback(null, res);
    else {
        fs.readFile(paths.shift(), (err, data) => {
            if (err) console.error(err);
            res.push(data.toString());
            return exports.read(paths, callback, res);
        });
    }
}

let someVar = exports.read([`${__dirname}/../assets/tacos.html`, `${__dirname}/../assets/burritos.html`, `${__dirname}/../assets/quesadillas.html`], (err, data) => {
    if (err) console.error(err);
    console.log(data);
    return data;
});
console.log(someVar); // why does it return undefined?
