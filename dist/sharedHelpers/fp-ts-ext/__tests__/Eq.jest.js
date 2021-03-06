"use strict";

var _Eq = require("../Eq");

var _shallowEqual = require("../../shallowEqual");

describe('eqStringByLowerCase', () => {
  it('should return true if given two strings that match letters but not casing', () => {
    const actual = _Eq.eqStringByLowerCase.equals('Foo Bar', 'foo bar');

    const expected = true;
    expect(actual).toBe(expected);
  });
  it("should return false if given two strings that don't match", () => {
    const actual = _Eq.eqStringByLowerCase.equals('Bar Foo', 'Foo Bar');

    const expected = false;
    expect(actual).toBe(expected);
  });
});
describe('eqShallow', () => {
  it('should contain an `equals` function using strict equality (===)', () => {
    const actualA = _Eq.eqShallow.equals({
      value: 'c'
    }, {
      value: 'a'
    });

    const expectedA = (0, _shallowEqual.shallowEqual)({
      value: 'c'
    }, {
      value: 'a'
    });
    expect(actualA).toBe(expectedA);
    expect(actualA).toBe(false);

    const actualB = _Eq.eqShallow.equals({
      value: 'b'
    }, {
      value: 'b'
    });

    const expectedB = (0, _shallowEqual.shallowEqual)({
      value: 'b'
    }, {
      value: 'b'
    });
    expect(actualB).toBe(expectedB);
    expect(actualB).toBe(true);
  });
});
describe('eqStrict', () => {
  it('should contain an `equals` function using strict equality (===)', () => {
    const actualA = _Eq.eqStrict.equals('c', 'a');

    expect(actualA).toBe(false);

    const actualB = _Eq.eqStrict.equals('b', 'b');

    expect(actualB).toBe(true);
  });
});
describe('getEqShallow', () => {
  it('should contain a eq equivalent to eqShallow', () => {
    const s = (0, _Eq.getEqShallow)();
    const actual = s.equals({
      value: 'c'
    }, {
      value: 'a'
    });
    const expected = (0, _shallowEqual.shallowEqual)({
      value: 'c'
    }, {
      value: 'a'
    });
    expect(actual).toBe(expected);
    expect(actual).toBe(false);
    const actualB = s.equals({
      value: 'b'
    }, {
      value: 'b'
    });
    const expectedB = (0, _shallowEqual.shallowEqual)({
      value: 'b'
    }, {
      value: 'b'
    });
    expect(actualB).toBe(expectedB);
    expect(actualB).toBe(true);
  });
});
describe('getEqStrict', () => {
  it('should contain a eq equivalent to eqStrict', () => {
    const s = (0, _Eq.getEqStrict)();
    const actualA = s.equals('c', 'a');

    const expectedA = _Eq.eqStrict.equals('c', 'a');

    expect(actualA).toBe(expectedA);
    expect(actualA).toBe(false);
    const actualB = s.equals('b', 'b');

    const expectedB = _Eq.eqStrict.equals('b', 'b');

    expect(actualB).toBe(expectedB);
    expect(actualB).toBe(true);
  });
});
describe('eqRecordWithNameLower', () => {
  it('should compare { name: string } records by lowercase alpha', () => {
    const actualA = _Eq.eqRecordWithNameLower.equals({
      name: 'Josh B'
    }, {
      name: 'josh B'
    });

    const expectedA = (0, _Eq.recordWithNameLowerEquality)({
      name: 'Josh B'
    }, {
      name: 'josh B'
    });
    expect(actualA).toBe(expectedA);
    expect(actualA).toBe(true);

    const actualB = _Eq.eqRecordWithNameLower.equals({
      name: 'Josh B'
    }, {
      name: 'joshua B'
    });

    const expectedB = (0, _Eq.recordWithNameLowerEquality)({
      name: 'Josh B'
    }, {
      name: 'joshua B'
    });
    expect(actualB).toBe(expectedB);
    expect(actualB).toBe(false);
  });
});