const { lineCount } = require('./line-count')

// eslint-disable-next-line no-unused-vars
const filename = 'server/async-01-line-count-with-callback/line-count.js';

describe('line count can be checked', () => {

  it('with the done parameter like with a callback', (done) => {
    lineCount(filename).then((numberOfLines) => {
      expect(numberOfLines).toBe(12);
      done();
    });
  });

  it('by returning the promise after .then', () => {
    return lineCount(filename).then((numberOfLines) => {
      expect(numberOfLines).toBe(12);
    })
  });
  
  it('handles an error from the promise', () => {
    return lineCount('somefile.js').catch((err) => {
      expect(err).toEqual(new Error('problem reading file: somefile.js'));
    })
  });

  it('by using resolves', () => {
    return expect(lineCount(filename)).resolves.toBe(12);
  });

  it('by using rejects', () => {
    return expect(lineCount('somefile.js'))
      .rejects.toEqual(new Error('problem reading file: somefile.js'))
  });

  it('by using async/await', async () => {
    expect(await lineCount(filename)).toBe(12);

  });

  it('by using async/await error', async () => {
    try {
      await lineCount('somefile.js')
      expect(true).toBe(false);
    } catch (err) {
      expect(err).toEqual(new Error('problem reading file: somefile.js'))
    }    
  });
});