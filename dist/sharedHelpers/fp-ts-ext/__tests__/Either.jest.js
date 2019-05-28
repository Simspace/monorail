"use strict";

var _Either = require("fp-ts/lib/Either");

var _Either2 = require("../Either");

describe('fold (Either)', () => {
  const f = l => `Error: ${l}`;

  const g = r => `Value: ${r}`;

  it('should properly fold Eithers -- left', () => {
    const actual = (0, _Either2.fold)((0, _Either.left)('invalid'), f, g);
    const expected = 'Error: invalid';
    expect(actual).toBe(expected);
  });
  it('should properly fold Eithers -- left', () => {
    const actual = (0, _Either2.fold)((0, _Either.right)(9), f, g);
    const expected = 'Value: 9';
    expect(actual).toBe(expected);
  });
});