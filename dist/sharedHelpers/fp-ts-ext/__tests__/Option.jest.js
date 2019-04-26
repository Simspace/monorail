"use strict";

var _react = require("react");

var _Option = require("../Option");

var _Option2 = require("fp-ts/lib/Option");

describe('fold (Option)', () => {
  it('should properly fold Options -- some', () => {
    const actual = (0, _Option.fold)((0, _Option2.some)(3), 0, x => x + 1);
    const expected = 4;
    expect(actual).toBe(expected);
  });
  it('should properly fold Options -- none', () => {
    const actual = (0, _Option.fold)(_Option2.none, 0, x => x - 1);
    const expected = 0;
    expect(actual).toBe(expected);
  });
});
describe('fromTruthyFalsy', () => {
  it('should return a none when given a Falsy value', () => {
    const actual = (0, _Option.fromTruthyFalsy)(0);
    const expected = _Option2.none;
    expect(actual).toEqual(expected);
  });
  it('should return a Some<A> when given a Truthy value', () => {
    const actual = (0, _Option.fromTruthyFalsy)({
      value: 33
    });
    const expected = (0, _Option2.some)({
      value: 33
    });
    expect(actual).toEqual(expected);
  });
});
describe('getOrElse', () => {
  it('should extract the value from a some when given a some', () => {
    const actual = (0, _Option.getOrElse)(0)((0, _Option2.some)(5));
    const expected = 5;
    expect(actual).toBe(expected);
  });
  it('should return a default value when given a none', () => {
    const actual = (0, _Option.getOrElse)(0)(_Option2.none);
    const expected = 0;
    expect(actual).toEqual(expected);
  });
});
describe('getOrEmptyArray', () => {
  it('should extract the value from a some when given a some', () => {
    const actual = (0, _Option.getOrEmptyArray)((0, _Option2.some)([0, 1, 2, 3]));
    const expected = [0, 1, 2, 3];
    expect(actual).toEqual(expected);
  });
  it('should return an empty array when given a none', () => {
    const actual = (0, _Option.getOrEmptyArray)(_Option2.none);
    const expected = [];
    expect(actual).toEqual(expected);
  });
});
describe('getOrEmptyString', () => {
  it('should extract the value from a some when given a some', () => {
    const actual = (0, _Option.getOrEmptyString)((0, _Option2.some)('testing'));
    const expected = 'testing';
    expect(actual).toBe(expected);
  });
  it('should return an empty string when given a none', () => {
    const actual = (0, _Option.getOrEmptyString)(_Option2.none);
    const expected = '';
    expect(actual).toEqual(expected);
  });
});
describe('getOrZero', () => {
  it('should extract the value from a some when given a some', () => {
    const actual = (0, _Option.getOrZero)((0, _Option2.some)(33));
    const expected = 33;
    expect(actual).toBe(expected);
  });
  it('should return 0 when given a none', () => {
    const actual = (0, _Option.getOrZero)(_Option2.none);
    const expected = 0;
    expect(actual).toBe(expected);
  });
});
describe('isOption', () => {
  it('should return true if the value is an Option<A>', () => {
    const actual = (0, _Option.isOption)((0, _Option2.some)(3));
    const expected = true;
    expect(actual).toBe(expected);
  });
  it('should return false if the value is not an Option<A>', () => {
    const actual = (0, _Option.isOption)({
      _tag: 'Some'
    });
    const expected = false;
    expect(actual).toBe(expected);
  });
});
describe('renderOnSome', () => {
  it('should return null when given a none', () => {
    const numOpt = _Option2.none;
    const actual = (0, _Option.renderOnSome)(numOpt, x => (0, _react.createElement)('h1', {}, `Num: ${x}`));
    const expected = null;
    expect(actual).toBe(expected);
  });
  it('should return a ReactNode when given a some', () => {
    const numOpt = (0, _Option2.some)(3);
    const actual = (0, _Option.renderOnSome)(numOpt, x => (0, _react.createElement)('h1', {}, `Num: ${x}`));
    const expected = (0, _react.createElement)('h1', {}, 'Num: 3');
    expect(actual).toEqual(expected);
  });
});
describe('toBoolean', () => {
  it('should return false when given a none', () => {
    const actual = (0, _Option.toBoolean)(_Option2.none);
    const expected = false;
    expect(actual).toEqual(expected);
  });
  it('should return true when given a some', () => {
    const actual = (0, _Option.toBoolean)((0, _Option2.some)(3));
    const expected = true;
    expect(actual).toEqual(expected);
  });
});
describe('toSpreadable', () => {
  it('should return an empty array when given a none', () => {
    const numOpt = _Option2.none;
    const actual = (0, _Option.toSpreadable)(numOpt);
    const expected = [];
    expect(actual).toEqual(expected);
    expect([...actual]).toEqual(expected);
  });
  it('should return an array containing one element when given a some', () => {
    const numOpt = (0, _Option2.some)(2);
    const actual = (0, _Option.toSpreadable)(numOpt);
    const expected = [2];
    expect(actual).toEqual(expected);
    expect([...actual]).toEqual(expected);
  });
});