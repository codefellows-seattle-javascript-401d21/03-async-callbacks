'use strict'

const reader = require('../lib/reader')

describe('Reader Module', function(){
    it('should take in three filepaths, read the files, parse into a string and map them to an array', (done) => {
        reader.doAThingAsyn(data, (err, fd) => {
            if(err) console.log(err)
            expect(fd).toBe(true)
            done()
        })
    })
});