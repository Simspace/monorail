"use strict";

var _strings = require("../../strings");

describe('includes', () => {
  it('should return true if target is in source', () => {
    const expected = true;
    const actual = (0, _strings.includes)('nan')('banana');
    expect(actual).toEqual(expected);
  });
  it('should return false if target is not in source', () => {
    const expected = false;
    const actual = (0, _strings.includes)('banana')('nan');
    expect(actual).toEqual(expected);
  });
});
describe('includesNoncase', () => {
  it('should return true if target is in source (case insensitive)', () => {
    const expected = true;
    const actual = (0, _strings.includesNoncase)('NaN')('banana');
    expect(actual).toEqual(expected);
  });
  it('should return false if target is not in source (case insensitive)', () => {
    const expected = false;
    const actual = (0, _strings.includesNoncase)('banana')('NaN');
    expect(actual).toEqual(expected);
  });
});