'use strict'

const reader = require('../lib/reader')

let paths = [`${__dirname}/data/one.html`, `${__dirname}/data/two.html`, `${__dirname}/data/three.html`]

describe('Reader Module', function() {
  describe('#Mapfiles', function() {
    
    it('should return an array', function() {
      expect(reader.mapFiles(paths)).toBe('array')
        
    })
    it('should return null if not being passed an array', function() {
      expect(reader.mapFiles([])).toBe(null)
      
    })
  })
})