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
});
