"use strict";

var _Setoid = require("fp-ts/lib/Setoid");

var _shallowEqual = require("../../shallowEqual");

var _Setoid2 = require("../Setoid");

describe('setoidShallowEq', () => {
  it('should contain an `equals` function using strict equality (===)', () => {
    const actualA = _Setoid2.setoidShallowEq.equals({
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

    const actualB = _Setoid2.setoidShallowEq.equals({
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
describe('setoidStrict', () => {
  it('should contain an `equals` function using strict equality (===)', () => {
    const actualA = _Setoid2.setoidStrict.equals('c', 'a');

    const expectedA = (0, _Setoid.strictEqual)('c', 'a');
    expect(actualA).toBe(expectedA);
    expect(actualA).toBe(false);

    const actualB = _Setoid2.setoidStrict.equals('b', 'b');

    const expectedB = (0, _Setoid.strictEqual)('b', 'b');
    expect(actualB).toBe(expectedB);
    expect(actualB).toBe(true);
  });
});
describe('getSetoidShallowEq', () => {
  it('should contain a setoid equivalent to setoidShallowEq', () => {
    const s = (0, _Setoid2.getSetoidShallowEq)();
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
describe('getSetoidStrict', () => {
  it('should contain a setoid equivalent to setoidStrict', () => {
    const s = (0, _Setoid2.getSetoidStrict)();
    const actualA = s.equals('c', 'a');
    const expectedA = (0, _Setoid.strictEqual)('c', 'a');
    expect(actualA).toBe(expectedA);
    expect(actualA).toBe(false);
    const actualB = s.equals('b', 'b');
    const expectedB = (0, _Setoid.strictEqual)('b', 'b');
    expect(actualB).toBe(expectedB);
    expect(actualB).toBe(true);
  });
});
describe('setoidRecordWithNameLower', () => {
  it('should compare { name: string } records by lowercase alpha', () => {
    const actualA = _Setoid2.setoidRecordWithNameLower.equals({
      name: 'Josh B'
    }, {
      name: 'josh B'
    });

    const expectedA = (0, _Setoid2.recordWithNameLowerEquality)({
      name: 'Josh B'
    }, {
      name: 'josh B'
    });
    expect(actualA).toBe(expectedA);
    expect(actualA).toBe(true);

    const actualB = _Setoid2.setoidRecordWithNameLower.equals({
      name: 'Josh B'
    }, {
      name: 'joshua B'
    });

    const expectedB = (0, _Setoid2.recordWithNameLowerEquality)({
      name: 'Josh B'
    }, {
      name: 'joshua B'
    });
    expect(actualB).toBe(expectedB);
    expect(actualB).toBe(false);
  });
});