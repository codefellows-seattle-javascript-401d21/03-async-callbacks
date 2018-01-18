const reader = require('../lib/reader.js');
require('jest');

let files = [`${__dirname}/../assets/first.html`, `${__dirname}/../assets/second.html`, `${__dirname}/../assets/third.html`];


describe('#Reader', function() {
  it('data should return', () => {
    return reader(files, (err, fd) => {
      if(err) console.log(err);
      console.log('this is fd',fd);
      expect(fd).toBe(true);
    });
  });
  it('input should be an array', () => {
    expect(reader(123)).toEqual(null);
  });
  it('the array should have a length of 3', () => {
    expect(reader([1,2,3,4])).toEqual(null);
  });
  it('a 2 should be in the middle index', () => {
    return reader(files, (err, fd) => {
      if(err) console.log(err);
      console.log('this is fd',fd);
      expect(fd[1].indexOf('2')).not.toEqual(-1);
    });
  });
});

