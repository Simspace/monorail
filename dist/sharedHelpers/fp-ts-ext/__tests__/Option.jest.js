"use strict";

var _react = require("react");

var _Option = require("fp-ts/lib/Option");

var _Option2 = require("../Option");

describe('getOrElse', () => {
  it('should extract the value from a some when given a some', () => {
    const actual = (0, _Option2.getOrElse)(0)((0, _Option.some)(5));
    const expected = 5;
    expect(actual).toBe(expected);
  });
  it('should return a default value when given a none', () => {
    const actual = (0, _Option2.getOrElse)(0)(_Option.none);
    const expected = 0;
    expect(actual).toEqual(expected);
  });
});
describe('getOrEmptyString', () => {
  it('should extract the value from a some when given a some', () => {
    const actual = (0, _Option2.getOrEmptyString)((0, _Option.some)('testing'));
    const expected = 'testing';
    expect(actual).toBe(expected);
  });
  it('should return an empty string when given a none', () => {
    const actual = (0, _Option2.getOrEmptyString)(_Option.none);
    const expected = '';
    expect(actual).toEqual(expected);
  });
});
describe('isOption', () => {
  it('should return true if the value is an Option<A>', () => {
    const actual = (0, _Option2.isOption)((0, _Option.some)(3));
    const expected = true;
    expect(actual).toBe(expected);
  });
  it('should return false if the value is not an Option<A>', () => {
    const actual = (0, _Option2.isOption)({
      _tag: 'Some'
    });
    const expected = false;
    expect(actual).toBe(expected);
  });
});
describe('renderOnSome', () => {
  it('should return null when given a none', () => {
    const numOpt = _Option.none;
    const actual = (0, _Option2.renderOnSome)(numOpt, x => /*#__PURE__*/(0, _react.createElement)('h1', {}, `Num: ${x}`));
    const expected = null;
    expect(actual).toBe(expected);
  });
  it('should return a ReactNode when given a some', () => {
    const numOpt = (0, _Option.some)(3);
    const actual = (0, _Option2.renderOnSome)(numOpt, x => /*#__PURE__*/(0, _react.createElement)('h1', {}, `Num: ${x}`));
    const expected = /*#__PURE__*/(0, _react.createElement)('h1', {}, 'Num: 3');
    expect(actual).toEqual(expected);
  });
});
describe('toArray', () => {
  it('should return an empty array when given a none', () => {
    const numOpt = _Option.none;
    const actual = (0, _Option2.toArray)(numOpt);
    const expected = [];
    expect(actual).toEqual(expected);
    expect([...actual]).toEqual(expected);
  });
  it('should return an array containing one element when given a some', () => {
    const numOpt = (0, _Option.some)(2);
    const actual = (0, _Option2.toArray)(numOpt);
    const expected = [2];
    expect(actual).toEqual(expected);
    expect([...actual]).toEqual(expected);
  });
});