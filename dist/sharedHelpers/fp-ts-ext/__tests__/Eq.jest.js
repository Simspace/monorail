"use strict";

var _Eq = require("fp-ts/lib/Eq");

var _Eq2 = require("../Eq");

var _shallowEqual = require("../../shallowEqual");

describe('eqStringCaseI', () => {
  it('should return true if given two strings that match letters but not casing', () => {
    const actual = _Eq2.eqStringCaseI.equals('Foo Bar', 'foo bar');

    const expected = true;
    expect(actual).toBe(expected);
  });
  it("should return false if given two strings that don't match", () => {
    const actual = _Eq2.eqStringCaseI.equals('Bar Foo', 'Foo Bar');

    const expected = false;
    expect(actual).toBe(expected);
  });
});
describe('eqShallow', () => {
  it('should contain an `equals` function using strict equality (===)', () => {
    const actualA = _Eq2.eqShallow.equals({
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

    const actualB = _Eq2.eqShallow.equals({
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
    const actualA = _Eq2.eqStrict.equals('c', 'a');

    const expectedA = (0, _Eq.strictEqual)('c', 'a');
    expect(actualA).toBe(expectedA);
    expect(actualA).toBe(false);

    const actualB = _Eq2.eqStrict.equals('b', 'b');

    const expectedB = (0, _Eq.strictEqual)('b', 'b');
    expect(actualB).toBe(expectedB);
    expect(actualB).toBe(true);
  });
});
describe('geteqShallow', () => {
  it('should contain a eq equivalent to eqShallow', () => {
    const s = (0, _Eq2.getEqShallow)();
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
    const s = (0, _Eq2.getEqStrict)();
    const actualA = s.equals('c', 'a');
    const expectedA = (0, _Eq.strictEqual)('c', 'a');
    expect(actualA).toBe(expectedA);
    expect(actualA).toBe(false);
    const actualB = s.equals('b', 'b');
    const expectedB = (0, _Eq.strictEqual)('b', 'b');
    expect(actualB).toBe(expectedB);
    expect(actualB).toBe(true);
  });
});
describe('eqRecordWithNameLower', () => {
  it('should compare { name: string } records by lowercase alpha', () => {
    const actualA = _Eq2.eqRecordWithNameLower.equals({
      name: 'Josh B'
    }, {
      name: 'josh B'
    });

    const expectedA = (0, _Eq2.recordWithNameLowerEquality)({
      name: 'Josh B'
    }, {
      name: 'josh B'
    });
    expect(actualA).toBe(expectedA);
    expect(actualA).toBe(true);

    const actualB = _Eq2.eqRecordWithNameLower.equals({
      name: 'Josh B'
    }, {
      name: 'joshua B'
    });

    const expectedB = (0, _Eq2.recordWithNameLowerEquality)({
      name: 'Josh B'
    }, {
      name: 'joshua B'
    });
    expect(actualB).toBe(expectedB);
    expect(actualB).toBe(false);
  });
});