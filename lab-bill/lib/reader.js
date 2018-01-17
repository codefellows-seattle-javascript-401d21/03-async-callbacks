const fs = require('fs');

module.exports = function reader(arr) {
    fs.readFile(`${__dirname}/data/one.html`, (err, data) => {
        if(err) console.error(err)
};

let testArray = [`${__dirname}/`]