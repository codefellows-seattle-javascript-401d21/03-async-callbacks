'use strict'

const fs = require('fs')

// let paths = [`${__dirname}/data/one.html`, `${__dirname}/data/two.html`, `${__dirname}/data/three.html`]
let mappedFiles = []
let paths = []

exports.mapFiles = function(error, callback) {
  if (paths.length === 0) return null
  let i = 0
  fs.readFile(paths[i], (error, data) => {
    if(error) console.error(error)
    let fd = data.toString()
    mappedFiles.push(fd)
    i++

    fs.readFile(paths[i], (error, data) => {
      if(error) console.error(error)
      let fd = data.toString()
      mappedFiles.push(fd)
      i++

      fs.readFile(paths[i], (error, data) => {
        if(error) console.error(error)
        let fd = data.toString()
        mappedFiles.push(fd)
        console.log(mappedFiles)
        callback(error, mappedFiles)
      })
    })
  })
}

