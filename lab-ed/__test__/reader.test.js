'use strict'

const reader = require('../lib/reader')

describe('Reader Module', function() {
  describe('#Mapfiles', function() {
    
    it('should return null if not being passed an array', function() {
      expect(reader.mapFiles()).toBe(null)
    })
  })
})