"use strict";

var _newtypes = require("../newtypes");

describe('prismNaN', () => {
  describe('getOption', () => {
    it('should return a none if given a non-NaN value', () => {
      const actual = _newtypes.prismNaN.getOption(3).isNone();

      const expected = true;
      expect(actual).toEqual(expected);
    });
    it('should return a some if given a NaN value', () => {
      const oops = undefined;

      const actual = _newtypes.prismNaN.getOption(3 / oops).isSome();

      const expected = true;
      expect(actual).toEqual(expected);
    });
  });
});