const assert = require('assert').strict;
const score = require('./index.js');

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
});
