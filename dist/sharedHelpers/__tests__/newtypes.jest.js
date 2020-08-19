"use strict";

var moment = _interopRequireWildcard(require("moment"));

var _newtypes = require("../newtypes");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

describe('prismNaN', () => {
  describe('getOption', () => {
    it('should return a none if given a non-NaN value', () => {
      expect(_newtypes.prismNaN.getOption(3)).toBeNone();
    });
    it('should return a some if given a NaN value', () => {
      expect(_newtypes.prismNaN.getOption(NaN)).toBeSome();
    });
  });
});
describe('prismFinite', () => {
  describe('getOption', () => {
    it('should return a none if given NaN', () => {
      expect(_newtypes.prismFinite.getOption(NaN)).toBeNone();
    });
    it('should return a none if given Infinity', () => {
      expect(_newtypes.prismFinite.getOption(Infinity)).toBeNone();
    });
    it('should return a some if given a finite number', () => {
      expect(_newtypes.prismFinite.getOption(Math.PI)).toBeSome();
    });
  });
});
describe('prismInfinity', () => {
  describe('getOption', () => {
    it('should return a none if given NaN', () => {
      expect(_newtypes.prismInfinity.getOption(NaN)).toBeNone();
    });
    it('should return a none if given a finite number', () => {
      expect(_newtypes.prismInfinity.getOption(Math.PI)).toBeNone();
    });
    it('should return a some if given Infinity', () => {
      expect(_newtypes.prismInfinity.getOption(Infinity)).toBeSome();
    });
  });
});
describe('prismIsoDate', () => {
  describe('getOption', () => {
    it('should return a none if given garbage', () => {
      expect(_newtypes.prismIsoDate.getOption('garbage')).toBeNone();
    });
    it('should return a some if given a valid ISO date', () => {
      expect(_newtypes.prismIsoDate.getOption(moment.default().format())).toBeSome();
    });
  });
});