"use strict";

var _Eq = require("fp-ts/Eq");

var _function = require("fp-ts/function");

var O = _interopRequireWildcard(require("fp-ts/Option"));

var _Map = require("../Map");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

describe('Map', () => {
  describe('alterAt', () => {
    const map = new Map([['foo', 1], ['bar', 2]]);
    it('should modify a map', () => {
      const actual = (0, _function.pipe)(map, (0, _Map.alterAt)(_Eq.eqString)('foo', O.map(x => x + 2)));
      expect(actual).not.toBe(map);
      expect(actual).toEqual(new Map([['foo', 3], ['bar', 2]]));
    });
    it('should remove entries from a map', () => {
      const actual = (0, _function.pipe)(map, (0, _Map.alterAt)(_Eq.eqString)('foo', (0, _function.constant)(O.none)));
      expect(actual).not.toBe(map);
      expect(actual).toEqual(new Map([['bar', 2]]));
    });
    it('should insert entries into a map', () => {
      const actual = (0, _function.pipe)(map, (0, _Map.alterAt)(_Eq.eqString)('baz', () => O.some(3)));
      expect(actual).not.toBe(map);
      expect(actual).toEqual(new Map([['foo', 1], ['bar', 2], ['baz', 3]]));
    });
  });
});