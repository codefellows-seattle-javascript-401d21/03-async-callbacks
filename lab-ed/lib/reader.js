'use strict'

const fs = require('fs')

let paths = [`${__dirname}/data/one.html`, `${__dirname}/data/two.html`, `${__dirname}/data/three.html`]

let mappedFiles = []

fs.readFile(paths[0], (err, data) => {
  if(err) console.error(err)
  let fd = data.toString()
  mappedFiles.push(fd)
  console.log(mappedFiles)
})
