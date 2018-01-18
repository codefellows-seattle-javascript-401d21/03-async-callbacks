'use strict'

const fs = require('fs')

let mappedFiles = []

exports.mapFiles = function(paths, callback) {
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

