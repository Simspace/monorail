"use strict";

var _Either = require("../Either");

var _Either2 = require("fp-ts/lib/Either");

describe('fold (Either)', () => {
  const f = l => `Error: ${l}`;

  const g = r => `Value: ${r}`;

  it('should properly fold Eithers -- left', () => {
    const actual = (0, _Either.fold)((0, _Either2.left)('invalid'), f, g);
    const expected = 'Error: invalid';
    expect(actual).toBe(expected);
  });
  it('should properly fold Eithers -- left', () => {
    const actual = (0, _Either.fold)((0, _Either2.right)(9), f, g);
    const expected = 'Value: 9';
    expect(actual).toBe(expected);
  });
});