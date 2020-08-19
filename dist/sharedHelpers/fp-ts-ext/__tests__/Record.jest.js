"use strict";

var A = _interopRequireWildcard(require("fp-ts/lib/Array"));

var O = _interopRequireWildcard(require("fp-ts/lib/Option"));

var _Ord = require("../Ord");

var _Record = require("../Record");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

describe('keys', () => {
  it('should return the keys of an object', () => {
    const o = {
      a: 0,
      b: 'value',
      c: {
        nested: 'value'
      }
    };
    const actual = (0, _Record.keys)(o);
    const expected = Object.keys(o);
    expect(actual).toEqual(expected);
    expect(actual).toEqual(['a', 'b', 'c']);
  });
});
describe('prop', () => {
  it('should return the value at a key in an object', () => {
    const o = {
      a: 0,
      b: 'value',
      c: {
        nested: 'value'
      }
    };
    const actual = (0, _Record.prop)('b')(o);
    const expected = o.b;
    expect(actual).toBe(expected);
    expect(actual).toBe('value');
  });
});
describe('omit', () => {
  it('should exclude key-val pairs associated with the given keys', () => {
    const o = {
      a: 0,
      b: 'value',
      c: {
        nested: 'value'
      }
    };
    const actual = (0, _Record.omit)(o, ['c']);
    const expected = {
      a: 0,
      b: 'value'
    };
    expect(actual).toEqual(expected);
  });
});
describe('pick', () => {
  it('should include key-val pairs associated with the given keys', () => {
    const o = {
      a: 0,
      b: 'value',
      c: {
        nested: 'value'
      }
    };
    const actual = (0, _Record.pick)(o, ['c', 'a']);
    const expected = {
      a: 0,
      c: {
        nested: 'value'
      }
    };
    expect(actual).toEqual(expected);
  });
});
describe('sortRecords', () => {
  it('should sort records by an Ord', () => {
    const recs = [{
      name: 'Josh',
      extra: 0
    }, {
      name: 'mike',
      extra: 1
    }, {
      name: 'Adam',
      extra: 3
    }];
    const actual = (0, _Record.sortRecords)(_Ord.ordRecordWithNameLower)(recs);
    const expected = [{
      name: 'Adam',
      extra: 3
    }, {
      name: 'Josh',
      extra: 0
    }, {
      name: 'mike',
      extra: 1
    }];
    expect(actual).toEqual(expected);
  });
});
describe('fromFoldableFilterMap', () => {
  it('should create a record from a mapped filtered foldable', () => {
    const arr = [{
      x: 'a',
      y: 1
    }, {
      x: 'b',
      y: 2
    }, {
      x: 'c',
      y: 3
    }];
    expect((0, _Record.fromFoldableFilterMap)(A.getMonoid(), A.array)(arr, ({
      x,
      y
    }) => /[ab]/.test(x) ? O.some([x, [y]]) : O.none)).toEqual({
      a: [1],
      b: [2]
    });
  });
});