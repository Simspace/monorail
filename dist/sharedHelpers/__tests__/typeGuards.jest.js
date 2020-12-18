"use strict";

var _newtypes = require("../newtypes");

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
describe('isFinite', () => {
  it('should return false when given NaN', () => {
    const actual = (0, _typeGuards.isFinite)(_newtypes.NaN);
    const expected = false;
    expect(actual).toBe(expected);
  });
  it('should return false when given Infinity', () => {
    const actual = (0, _typeGuards.isFinite)(Infinity);
    const expected = false;
    expect(actual).toBe(expected);
  });
  it('should return true when given a finite number', () => {
    const actual = (0, _typeGuards.isFinite)(Math.PI);
    const expected = true;
    expect(actual).toBe(expected);
  });
});
describe('isDOMElement', () => {
  it('should return false when a non DOM Element is passed in', () => {
    const actual = (0, _typeGuards.isDOMElement)(1);
    const expected = false;
    expect(actual).toBe(expected);
  });
  it('should return true when a DOM Element is passed in', () => {
    const actual = (0, _typeGuards.isDOMElement)(document.createElement('div'));
    const expected = true;
    expect(actual).toBe(expected);
  });
});