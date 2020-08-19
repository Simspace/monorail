"use strict";

var _Either = require("fp-ts/lib/Either");

describe('fold (Either)', () => {
  const f = l => `Error: ${l}`;

  const g = r => `Value: ${r}`;

  it('should properly fold Eithers -- left', () => {
    const actual = (0, _Either.fold)(f, g)((0, _Either.left)('invalid'));
    const expected = 'Error: invalid';
    expect(actual).toBe(expected);
  });
  it('should properly fold Eithers -- left', () => {
    const actual = (0, _Either.fold)(f, g)((0, _Either.right)(9));
    const expected = 'Value: 9';
    expect(actual).toBe(expected);
  });
});