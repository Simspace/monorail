"use strict";

var _typeGuards = require("../typeGuards");

describe('isFalsy', () => {
  it('should return false when given a truthy value', () => {
    const actual = (0, _typeGuards.isFalsy)(1);
    const expected = false;
    expect(actual).toBe(expected);
  });
  it('should return true when given false', () => {
    const actual = (0, _typeGuards.isFalsy)(false);
    const expected = true;
    expect(actual).toBe(expected);
  });
  it('should return true when given an empty string', () => {
    const actual = (0, _typeGuards.isFalsy)('');
    const expected = true;
    expect(actual).toBe(expected);
  });
  it('should return true when given NaN', () => {
    const invalidNum = undefined;

    const _NaN = 3 / invalidNum;

    const actual = (0, _typeGuards.isFalsy)(_NaN);
    const expected = true;
    expect(actual).toEqual(expected);
  });
  it('should return true when given null', () => {
    const actual = (0, _typeGuards.isFalsy)(null);
    const expected = true;
    expect(actual).toBe(expected);
  });
  it('should return true when given undefined', () => {
    const actual = (0, _typeGuards.isFalsy)(undefined);
    const expected = true;
    expect(actual).toBe(expected);
  });
});