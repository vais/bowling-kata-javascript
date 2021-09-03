const assert = require('assert').strict;
const { score, parse } = require('./index.js');

describe('Bowling Game', () => {
  let expected;
  let actual;

  context('all gutter balls', () => {
    beforeEach(() => {
      expected = 0;
      actual = score(Array(20).fill(0));
    });

    it('scores 0', () => {
      assert.equal(actual, expected);
    });
  });

  context('all ones', () => {
    beforeEach(() => {
      expected = 20;
      actual = score(Array(20).fill(1));
    });

    it('scores 20', () => {
      assert.equal(actual, expected);
    });
  });

  context('one spare', () => {
    beforeEach(() => {
      expected = 16;
      actual = score([5, 5, 3, ...Array(17).fill(0)]);
    });

    it('scores 16', () => {
      assert.equal(actual, expected);
    });
  });

  context('one strike', () => {
    beforeEach(() => {
      expected = 24;
      actual = score([10, 3, 4, ...Array(16).fill(0)]);
    });

    it('scores 24', () => {
      assert.equal(actual, expected);
    });
  });

  context('perfect game', () => {
    beforeEach(() => {
      expected = 300;
      actual = score(Array(12).fill(10));
    });

    it('scores 300', () => {
      assert.equal(actual, expected);
    });
  });

  context('parsing string input', () => {
    beforeEach(() => {
      expected = [1, 6, 5, 5, 2, 5, 1, 9, 10, 2, 8, 7, 1, 10, 10, 1, 9, 7];
      actual = parse('165/251/X2/71XX1/7');
    });

    it('transforms a string into an array of numbers', () => {
      assert.deepEqual(actual, expected);
    });

    it('scores 149', () => {
      assert.equal(score(actual), 149);
    });
  });
});
