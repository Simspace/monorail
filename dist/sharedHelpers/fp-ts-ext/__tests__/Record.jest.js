"use strict";

var _Record = require("../Record");

var _Ord = require("../Ord");

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
  it('should sort records by an zord', () => {
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