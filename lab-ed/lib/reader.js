'use strict'

const fs = require('fs')

let mappedFiles = []

exports.mapFiles = function(paths, callback) {
  if (paths.length === 0) return null
  fs.readFile(paths[0], (error, data) => {
    if(error) console.error(error)
    let fd = data.toString()
    mappedFiles.push(fd)

    fs.readFile(paths[1], (error, data) => {
      if(error) console.error(error)
      let fd = data.toString()
      mappedFiles.push(fd)

      fs.readFile(paths[2], (error, data) => {
        if(error) console.error(error)
        let fd = data.toString()
        mappedFiles.push(fd)
        callback(error, mappedFiles)
      })
    })
  })
}

