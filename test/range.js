/* eslint-env mocha */

const { assert } = require('chai');
const range = require('../src/helpers/range');

describe('#range()', () => {
  it('should return an array', () => {
    assert(range() instanceof Array);
  });

  it('range(5) should return an array with a range between 0 and 5', () => {
    const actual = range(5);
    const expected = [0, 1, 2, 3, 4, 5];

    assert.deepEqual(actual, expected);
  });

  it('range(-5) should return an array with a range between 0 and -5', () => {
    const actual = range(-5);
    const expected = [0, -1, -2, -3, -4, -5];

    assert.deepEqual(actual, expected);
  });

  it('range(1, 7) should return an array with a range between 1 and 7', () => {
    const actual = range(1, 7);
    const expected = [1, 2, 3, 4, 5, 6, 7];

    assert.deepEqual(actual, expected);
  });

  it('range(0, 4) should return an array with a range between 0 and 4', () => {
    const actual = range(0, 4);
    const expected = [0, 1, 2, 3, 4];

    assert.deepEqual(actual, expected);
  });

  it('range(-1, 2) should return an array with a range between -1 and 2', () => {
    const actual = range(-1, 2);
    const expected = [-1, 0, 1, 2];

    assert.deepEqual(actual, expected);
  });

  it('range(10, 5) should return an array with a range between 10 and 5', () => {
    const actual = range(10, 5);
    const expected = [10, 9, 8, 7, 6, 5];

    assert.deepEqual(actual, expected);
  });

  it('range(3, -5) should return an array with a range between 3 and -5', () => {
    const actual = range(3, -5);
    const expected = [3, 2, 1, 0, -1, -2, -3, -4, -5];

    assert.deepEqual(actual, expected);
  });
});
