'use strict'

const reader = require('../lib/reader')

let paths = [`${__dirname}/data/one.html`, `${__dirname}/data/two.html`, `${__dirname}/data/three.html`]

describe('Reader Module', function() {
  describe('#Mapfiles', function() {
    it ('should return file 1',  (done) => {
      reader.mapFiles(paths, (err, fd) => {
        if (err) console.log(err)
        expect(fd[0].includes('File 1')).toBe(true)
        done()
      })
    })
    it ('should return file 2',  (done) => {
      reader.mapFiles(paths, (err, fd) => {
        if (err) console.log(err)
        expect(fd[1].includes('File 2')).toBe(true)
        done()
      })
    })
    it ('should return file 3',  (done) => {
      reader.mapFiles(paths, (err, fd) => {
        if (err) console.log(err)
        expect(fd[2].includes('File 3')).toBe(true)
        done()
      })
    })
    it ('should return a file', function () {
      return reader.mapFiles(paths, (err, fd) => {
        if(err) console.log(err)
        expect(fd).toBe(true)
      })
    })
    it('should return null if not being passed an array', function() {
      expect(reader.mapFiles([])).toBe(null)  
    })
  })
})