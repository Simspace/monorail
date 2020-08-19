"use strict";

var _Option = require("fp-ts/lib/Option");

var _react = require("react");

var _Option2 = require("../Option");

describe('fromTruthyFalsy', () => {
  it('should return a none when given a Falsy value', () => {
    const actual = (0, _Option2.fromTruthyFalsy)(0);
    const expected = _Option.none;
    expect(actual).toEqual(expected);
  });
  it('should return a Some<A> when given a Truthy value', () => {
    const actual = (0, _Option2.fromTruthyFalsy)({
      value: 33
    });
    const expected = (0, _Option.some)({
      value: 33
    });
    expect(actual).toEqual(expected);
  });
});
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
describe('getOrEmptyArray', () => {
  it('should extract the value from a some when given a some', () => {
    const actual = (0, _Option2.getOrEmptyArray)((0, _Option.some)([0, 1, 2, 3]));
    const expected = [0, 1, 2, 3];
    expect(actual).toEqual(expected);
  });
  it('should return an empty array when given a none', () => {
    const actual = (0, _Option2.getOrEmptyArray)(_Option.none);
    const expected = [];
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
describe('getOrZero', () => {
  it('should extract the value from a some when given a some', () => {
    const actual = (0, _Option2.getOrZero)((0, _Option.some)(33));
    const expected = 33;
    expect(actual).toBe(expected);
  });
  it('should return 0 when given a none', () => {
    const actual = (0, _Option2.getOrZero)(_Option.none);
    const expected = 0;
    expect(actual).toBe(expected);
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
    const actual = (0, _Option2.renderOnSome)(numOpt, x => (0, _react.createElement)('h1', {}, `Num: ${x}`));
    const expected = null;
    expect(actual).toBe(expected);
  });
  it('should return a ReactNode when given a some', () => {
    const numOpt = (0, _Option.some)(3);
    const actual = (0, _Option2.renderOnSome)(numOpt, x => (0, _react.createElement)('h1', {}, `Num: ${x}`));
    const expected = (0, _react.createElement)('h1', {}, 'Num: 3');
    expect(actual).toEqual(expected);
  });
});
describe('toBoolean', () => {
  it('should return false when given a none', () => {
    const actual = (0, _Option2.toBoolean)(_Option.none);
    const expected = false;
    expect(actual).toEqual(expected);
  });
  it('should return true when given a some', () => {
    const actual = (0, _Option2.toBoolean)((0, _Option.some)(3));
    const expected = true;
    expect(actual).toEqual(expected);
  });
});
describe('toSpreadable', () => {
  it('should return an empty array when given a none', () => {
    const numOpt = _Option.none;
    const actual = (0, _Option2.toSpreadable)(numOpt);
    const expected = [];
    expect(actual).toEqual(expected);
    expect([...actual]).toEqual(expected);
  });
  it('should return an array containing one element when given a some', () => {
    const numOpt = (0, _Option.some)(2);
    const actual = (0, _Option2.toSpreadable)(numOpt);
    const expected = [2];
    expect(actual).toEqual(expected);
    expect([...actual]).toEqual(expected);
  });
});