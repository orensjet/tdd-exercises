const {lineCount} = require('./line-count')
// eslint-disable-next-line no-unused-vars
const filename = 'server/async-01-line-count-with-callback/line-count.js';

describe('line count', () => {

  it('for file —— line-count.js —— should be 12', (done) => {
    let onSuccess = (numberOfLines) => {
      expect(numberOfLines).toBe(12);
      done();
    }
    lineCount(filename, null, onSuccess)
  });

  it('for file —— is-not-there.js —— should be problem reading file: ' +
      'is-not-there.js', (done) => {
        let onError = (msg) => {
          expect(msg).toBe('problem reading file: is-not-there.js');
          done();
        }
        lineCount('is-not-there.js', onError, null);
      });

});