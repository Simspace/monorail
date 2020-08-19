"use strict";

var _Set = require("../Set");

describe('Set', () => {
  describe('one', () => {
    it('should select one from a set', () => {
      const s = new Set([1, 2, 3]);
      expect((0, _Set.one)(s)).toBeSome();
    });
    it('should give None if set is empty', () => {
      const s = new Set();
      expect((0, _Set.one)(s)).toBeNone();
    });
  });
  describe('partitionBy', () => {
    it('should give an empty array for an empty set', () => {
      const s = new Set();
      expect((0, _Set.partitionBy)('key')(s)).toEqual([]);
    });
    it('should partition a set of objects by some property', () => {
      const s = new Set([{
        key: 'foo',
        value: 1
      }, {
        key: 'bar',
        value: 3
      }, {
        key: 'foo',
        value: 2
      }, {
        key: 'baz',
        value: 7
      }, {
        key: 'bar',
        value: 2
      }]);
      expect((0, _Set.partitionBy)('key')(s)).toEqual([new Set([{
        key: 'foo',
        value: 1
      }, {
        key: 'foo',
        value: 2
      }]), new Set([{
        key: 'bar',
        value: 3
      }, {
        key: 'bar',
        value: 2
      }]), new Set([{
        key: 'baz',
        value: 7
      }])]);
    });
  });
});