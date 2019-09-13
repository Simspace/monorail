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
      const actual = _newtypes.prismNaN.getOption(NaN).isSome();

      const expected = true;
      expect(actual).toEqual(expected);
    });
  });
});
describe('prismFinite', () => {
  describe('getOption', () => {
    it('should return a none if given NaN', () => {
      const actual = _newtypes.prismFinite.getOption(NaN).isNone();

      const expected = true;
      expect(actual).toEqual(expected);
    });
    it('should return a none if given Infinity', () => {
      const actual = _newtypes.prismFinite.getOption(Infinity).isNone();

      const expected = true;
      expect(actual).toEqual(expected);
    });
    it('should return a some if given a finite number', () => {
      const actual = _newtypes.prismFinite.getOption(Math.PI).isSome();

      const expected = true;
      expect(actual).toEqual(expected);
    });
  });
});
describe('prismInfinity', () => {
  describe('getOption', () => {
    it('should return a none if given NaN', () => {
      const actual = _newtypes.prismInfinity.getOption(NaN).isNone();

      const expected = true;
      expect(actual).toEqual(expected);
    });
    it('should return a none if given a finite number', () => {
      const actual = _newtypes.prismInfinity.getOption(Math.PI).isNone();

      const expected = true;
      expect(actual).toEqual(expected);
    });
    it('should return a some if given Infinity', () => {
      const actual = _newtypes.prismInfinity.getOption(Infinity).isSome();

      const expected = true;
      expect(actual).toEqual(expected);
    });
  });
});