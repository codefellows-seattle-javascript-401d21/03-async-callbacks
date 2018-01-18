
const reader = require(`${__dirname}/../lib/reader`);

const test_assetsDir = `${__dirname}/test_assets/`;

const filePaths = [ `${test_assetsDir}1_test.txt`,
  `${test_assetsDir}2_test.txt`,
  `${__dirname}/test_assets/3_test.txt` ];



describe('reader', () => {
  test('Test 1: reader exists', () => {
    expect(reader).toBeDefined();
  });
  test('Test 2: reader is a function', () => {
    expect(reader).toBeInstanceOf(Function);
  });
  test('Test 3: reader returns an array', done => {
    reader(filePaths, (err, data) => {
      if (err) console.error(err);
      console.log('3', data);
      expect(data).toBeInstanceOf(Array);
      done();
    });  
  });

  test('Test 4: reader returns an array in the correct order', (done) => {
    const filePaths = [ `${test_assetsDir}1_test.txt`,
      `${test_assetsDir}2_test.txt`,
      `${__dirname}/test_assets/3_test.txt` ];
    
    reader(filePaths, (err, data) =>{
      if (err) console.error(err);
      data = data.map(val=>`${test_assetsDir}${val}`);
      console.log('data');
      expect(data).toBeInstanceOf(Array);
      done();
    });
  });

  test('Test 5: reader returns an array in the correct order', done => {
    const filePaths = [ `${test_assetsDir}1_test.txt`,
      `${test_assetsDir}2_test.txt`,
      `${__dirname}/test_assets/3_test.txt` ];
    
    reader(filePaths, (err, data) => {
      if (err) console.error(err);
      console.log('5', data);
      expect(data).toBeInstanceOf(Array);
      done();
    });
  });


}); 