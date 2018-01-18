'use strict';
const fs = require('fs');

exports.read = (paths, callback, res) => {
    if (!res) res = [];
    if (!Array.isArray(paths)) {
        callback('ERROR: Paths argument is not an array');
        return;
    }

    if (!paths[0] && res[0]) {
        callback(null, res);
        return;
    }
    else if (!paths[0] && !res[0]) {
        callback('ERROR: Paths argument is an empty array');
        return;
    }
    fs.readFile(paths.shift(), (err, data) => {
        if (err) callback(err);
        res.push(data.toString());
        exports.read(paths, callback, res);
    });
};