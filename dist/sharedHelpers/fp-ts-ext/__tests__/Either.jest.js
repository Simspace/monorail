"use strict";

var _fpTsImports = require("../../fp-ts-imports");

describe('Either', () => {
  describe('fold', () => {
    const f = l => `Error: ${l}`;

    const g = r => `Value: ${r}`;

    it('should properly fold Eithers -- left', () => {
      const actual = _fpTsImports.E.fold(f, g)(_fpTsImports.E.left('invalid'));

      const expected = 'Error: invalid';
      expect(actual).toBe(expected);
    });
    it('should properly fold Eithers -- left', () => {
      const actual = _fpTsImports.E.fold(f, g)(_fpTsImports.E.right(9));

      const expected = 'Value: 9';
      expect(actual).toBe(expected);
    });
  });
  describe('swap', () => {
    it('should swap from right to left', () => {
      expect(_fpTsImports.E.swap(_fpTsImports.E.right(42))).toEqual(_fpTsImports.E.left(42));
    });
    it('should swap from left to right', () => {
      expect(_fpTsImports.E.swap(_fpTsImports.E.left(42))).toEqual(_fpTsImports.E.right(42));
    });
  });
});