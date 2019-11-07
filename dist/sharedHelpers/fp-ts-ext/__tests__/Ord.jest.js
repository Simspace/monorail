"use strict";

var _Setoid = require("fp-ts/lib/Setoid");

var _Ord = require("../Ord");

describe('ordAlpha', () => {
  it('should contain a `compare` function that orders alphabetically', () => {
    const actualA = _Ord.ordAlpha.compare('c', 'a');

    const expectedA = (0, _Ord.alphaCompare)('c', 'a');
    expect(actualA).toBe(expectedA);
    expect(actualA).toBe(1);

    const actualB = _Ord.ordAlpha.compare('b', 'b');

    const expectedB = (0, _Ord.alphaCompare)('b', 'b');
    expect(actualB).toBe(expectedB);
    expect(actualB).toBe(0);

    const actualC = _Ord.ordAlpha.compare('d', 'q');

    const expectedC = (0, _Ord.alphaCompare)('d', 'q');
    expect(actualC).toBe(expectedC);
    expect(actualC).toBe(-1);
  });
  it('should contain an `equals` function using strict equality (===)', () => {
    const actualA = _Ord.ordAlpha.equals('c', 'a');

    const expectedA = (0, _Setoid.strictEqual)('c', 'a');
    expect(actualA).toBe(expectedA);
    expect(actualA).toBe(false);

    const actualB = _Ord.ordAlpha.equals('b', 'b');

    const expectedB = (0, _Setoid.strictEqual)('b', 'b');
    expect(actualB).toBe(expectedB);
    expect(actualB).toBe(true);
  });
});
describe('ordNumeric', () => {
  it('should contain a `compare` function that orders alphabetically', () => {
    const actualA = _Ord.ordNumeric.compare(3, -2);

    const expectedA = (0, _Ord.numericCompare)(3, -2);
    expect(actualA).toBe(expectedA);
    expect(actualA).toBe(1);

    const actualB = _Ord.ordNumeric.compare(2, 2);

    const expectedB = (0, _Ord.numericCompare)(2, 2);
    expect(actualB).toBe(expectedB);
    expect(actualB).toBe(0);

    const actualC = _Ord.ordNumeric.compare(-5, 4);

    const expectedC = (0, _Ord.numericCompare)(-5, 4);
    expect(actualC).toBe(expectedC);
    expect(actualC).toBe(-1);
  });
  it('should contain an `equals` function using strict equality (===)', () => {
    const actualA = _Ord.ordNumeric.equals(3, -2);

    const expectedA = (0, _Setoid.strictEqual)(3, -2);
    expect(actualA).toBe(expectedA);
    expect(actualA).toBe(false);

    const actualB = _Ord.ordNumeric.equals(2, 2);

    const expectedB = (0, _Setoid.strictEqual)(2, 2);
    expect(actualB).toBe(expectedB);
    expect(actualB).toBe(true);
  });
});
describe('ordRecordWithNameLower', () => {
  it('should compare { name: string } records by lowercase alpha', () => {
    const actualA = _Ord.ordRecordWithNameLower.compare({
      name: 'Josh'
    }, {
      name: 'adam'
    });

    const expectedA = (0, _Ord.recordWithNameLowerComparator)({
      name: 'Josh'
    }, {
      name: 'adam'
    });
    expect(actualA).toBe(expectedA);
    expect(actualA).toBe(1);

    const actualB = _Ord.ordRecordWithNameLower.compare({
      name: 'emily'
    }, {
      name: 'Luke'
    });

    const expectedB = (0, _Ord.recordWithNameLowerComparator)({
      name: 'emily'
    }, {
      name: 'Luke'
    });
    expect(actualB).toBe(expectedB);
    expect(actualB).toBe(-1);

    const actualC = _Ord.ordRecordWithNameLower.compare({
      name: 'David'
    }, {
      name: 'david'
    });

    const expectedC = (0, _Ord.recordWithNameLowerComparator)({
      name: 'David'
    }, {
      name: 'david'
    });
    expect(actualC).toBe(expectedC);
    expect(actualC).toBe(0);
  });
});