"use strict";

var fc = _interopRequireWildcard(require("fast-check"));

var _Eq = require("fp-ts/lib/Eq");

var _Ord = require("fp-ts/lib/Ord");

var _Ord2 = require("../Ord");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

describe('ordAlpha', () => {
  it('should contain a `compare` function that orders alphabetically', () => {
    const actualA = _Ord2.ordAlpha.compare('c', 'a');

    const expectedA = (0, _Ord2.alphaCompare)('c', 'a');
    expect(actualA).toBe(expectedA);
    expect(actualA).toBe(1);

    const actualB = _Ord2.ordAlpha.compare('b', 'b');

    const expectedB = (0, _Ord2.alphaCompare)('b', 'b');
    expect(actualB).toBe(expectedB);
    expect(actualB).toBe(0);

    const actualC = _Ord2.ordAlpha.compare('d', 'q');

    const expectedC = (0, _Ord2.alphaCompare)('d', 'q');
    expect(actualC).toBe(expectedC);
    expect(actualC).toBe(-1);
  });
  it('should contain an `equals` function using strict equality (===)', () => {
    const actualA = _Ord2.ordAlpha.equals('c', 'a');

    const expectedA = (0, _Eq.strictEqual)('c', 'a');
    expect(actualA).toBe(expectedA);
    expect(actualA).toBe(false);

    const actualB = _Ord2.ordAlpha.equals('b', 'b');

    const expectedB = (0, _Eq.strictEqual)('b', 'b');
    expect(actualB).toBe(expectedB);
    expect(actualB).toBe(true);
  });
});
describe('ordNumeric', () => {
  it('should contain a `compare` function that orders alphabetically', () => {
    const actualA = _Ord2.ordNumeric.compare(3, -2);

    const expectedA = (0, _Ord2.numericCompare)(3, -2);
    expect(actualA).toBe(expectedA);
    expect(actualA).toBe(1);

    const actualB = _Ord2.ordNumeric.compare(2, 2);

    const expectedB = (0, _Ord2.numericCompare)(2, 2);
    expect(actualB).toBe(expectedB);
    expect(actualB).toBe(0);

    const actualC = _Ord2.ordNumeric.compare(-5, 4);

    const expectedC = (0, _Ord2.numericCompare)(-5, 4);
    expect(actualC).toBe(expectedC);
    expect(actualC).toBe(-1);
  });
  it('should contain an `equals` function using strict equality (===)', () => {
    const actualA = _Ord2.ordNumeric.equals(3, -2);

    const expectedA = (0, _Eq.strictEqual)(3, -2);
    expect(actualA).toBe(expectedA);
    expect(actualA).toBe(false);

    const actualB = _Ord2.ordNumeric.equals(2, 2);

    const expectedB = (0, _Eq.strictEqual)(2, 2);
    expect(actualB).toBe(expectedB);
    expect(actualB).toBe(true);
  });
});
describe('ordRecordWithNameLower', () => {
  it('should compare { name: string } records by lowercase alpha', () => {
    const actualA = _Ord2.ordRecordWithNameLower.compare({
      name: 'Josh'
    }, {
      name: 'adam'
    });

    const expectedA = (0, _Ord2.recordWithNameLowerComparator)({
      name: 'Josh'
    }, {
      name: 'adam'
    });
    expect(actualA).toBe(expectedA);
    expect(actualA).toBe(1);

    const actualB = _Ord2.ordRecordWithNameLower.compare({
      name: 'emily'
    }, {
      name: 'Luke'
    });

    const expectedB = (0, _Ord2.recordWithNameLowerComparator)({
      name: 'emily'
    }, {
      name: 'Luke'
    });
    expect(actualB).toBe(expectedB);
    expect(actualB).toBe(-1);

    const actualC = _Ord2.ordRecordWithNameLower.compare({
      name: 'David'
    }, {
      name: 'david'
    });

    const expectedC = (0, _Ord2.recordWithNameLowerComparator)({
      name: 'David'
    }, {
      name: 'david'
    });
    expect(actualC).toBe(expectedC);
    expect(actualC).toBe(0);
  });
});
describe('invert', () => {
  // https://en.wikipedia.org/wiki/Involution_(mathematics)
  // Applying invert twice should result in the original ord instance
  test('involution', () => {
    return fc.assert(fc.property(fc.string(), fc.string(), (a, b) => {
      return (0, _Ord2.invert)((0, _Ord2.invert)(_Ord.ordString)).compare(a, b) === _Ord.ordString.compare(a, b);
    }));
  });
  test('inverts', () => {
    fc.assert(fc.property(fc.string(), fc.string(), (a, b) => {
      return (0, _Ord2.invert)(_Ord.ordString).compare(a, b) === _Ord.ordString.compare(b, a);
    }));
  });
});
describe('ordDateFromString', () => {
  it('should compare two valid ISO date strings', () => {
    const actualA = _Ord2.ordDateFromString.compare('2020-11-04T16:46:23.560875Z', '2020-11-04T20:47:01.593Z');

    expect(actualA).toBe(-1);

    const actualB = _Ord2.ordDateFromString.compare('2020-11-04T16:47:23.560875Z', '2020-11-04T16:47:23.560875Z');

    expect(actualB).toBe(0);

    const actualC = _Ord2.ordDateFromString.compare('2020-11-04T20:46:01.593Z', '2020-11-04T16:47:23.560875Z');

    expect(actualC).toBe(1);
  });
  it('should compare two date strings', () => {
    const actualA = _Ord2.ordDateFromString.compare('Wed Nov 04 2020', 'Wed Nov 05 2020');

    expect(actualA).toBe(-1);

    const actualB = _Ord2.ordDateFromString.compare('Wed Nov 05 2020', 'Wed Nov 05 2020');

    expect(actualB).toBe(0);

    const actualC = _Ord2.ordDateFromString.compare('Wed Nov 05 2020', 'Wed Nov 04 2020');

    expect(actualC).toBe(1);
  });
  it('should compare two UTC date strings', () => {
    const actualA = _Ord2.ordDateFromString.compare('Wed, 04 Nov 2020 16:46:23 GMT', 'Wed, 04 Nov 2020 16:46:23 GMT');

    expect(actualA).toBe(0);

    const actualB = _Ord2.ordDateFromString.compare('Wed, 04 Nov 2020 16:46:23 GMT', 'Wed, 04 Nov 2020 16:40:23 GMT');

    expect(actualB).toBe(1);

    const actualC = _Ord2.ordDateFromString.compare('Wed, 04 Nov 2020 16:40:23 GMT', 'Wed, 04 Nov 2020 16:46:23 GMT');

    expect(actualC).toBe(-1);
  });
});