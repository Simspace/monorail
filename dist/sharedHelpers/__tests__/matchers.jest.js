"use strict";

var _pipeable = require("fp-ts/lib/pipeable");

var _matchers = require("../matchers");

describe('matchers', () => {
  describe('match, matchI', () => {
    const getMatchable = tag => {
      switch (tag) {
        case 'foo':
          return {
            tag: 'foo'
          };

        case 'bar':
          return {
            tag: 'bar',
            contents: 2
          };

        case 'baz':
          return {
            tag: 'baz',
            contents: '3'
          };
      }
    };

    it('should match on tag in pipe with match', () => {
      expect((0, _pipeable.pipe)(getMatchable('foo'), (0, _matchers.match)({
        foo: _ => 'yes',
        bar: n => n.contents.toFixed().toString(),
        baz: s => s.contents
      }))).toEqual('yes');
    });
    it('should match on tag directly with matchI', () => {
      expect((0, _matchers.matchI)(getMatchable('bar'))({
        foo: _ => 'yes',
        bar: n => n.contents.toFixed().toString(),
        baz: s => s.contents
      })).toEqual('2');
    });
  });
  describe('matchOn, matchOnI', () => {
    const getAction = type => {
      switch (type) {
        case 'foo':
          return {
            type: 'foo'
          };

        case 'bar':
          return {
            type: 'bar',
            payload: 2
          };

        case 'baz':
          return {
            type: 'baz',
            payload: '3'
          };
      }
    };

    it('should match on whatever key is given in pipe with matchOn', () => {
      expect((0, _pipeable.pipe)(getAction('foo'), (0, _matchers.matchOn)('type')({
        foo: _ => 'yes',
        bar: n => n.payload.toFixed().toString(),
        baz: s => s.payload
      }))).toEqual('yes');
    });
    it('should match on whatever key is given directly with matchOnI', () => {
      expect((0, _matchers.matchOnI)('type')(getAction('bar'))({
        foo: _ => 'yes',
        bar: n => n.payload.toFixed().toString(),
        baz: s => s.payload
      })).toEqual('2');
    });
  });
  describe('matchS', () => {
    it('should match on string unions', () => {
      const su = 'foo';
      const expected = 'abc';
      const actual = (0, _matchers.matchS)(su)({
        foo: () => 'abc',
        bar: () => 'def',
        baz: () => 'ghi'
      });
      expect(actual).toEqual(expected);
    });
    it('should match on string enums', () => {
      let SU;

      (function (SU) {
        SU["foo"] = "foo";
        SU["bar"] = "bar";
        SU["baz"] = "baz";
      })(SU || (SU = {}));

      const su = SU.foo;
      const expected = 'abc';
      const actual = (0, _matchers.matchS)(su)({
        foo: () => 'abc',
        bar: () => 'def',
        baz: () => 'ghi'
      });
      expect(actual).toEqual(expected);
    });
    it('should error if missing or extra matches', () => {
      const su = 'foo';
      (0, _matchers.matchS)(su)( // @ts-expect-error
      {
        foo: () => 'abc',
        baz: () => 'ghi'
      });
      (0, _matchers.matchS)(su)({
        foo: () => 'abc',
        bar: () => 'def',
        baz: () => 'ghi',
        // @ts-expect-error
        quux: () => 'jkl'
      });
    });
  });
});