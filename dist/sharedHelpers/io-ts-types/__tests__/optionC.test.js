"use strict";

var t = _interopRequireWildcard(require("io-ts"));

var E = _interopRequireWildcard(require("fp-ts/lib/Either"));

var O = _interopRequireWildcard(require("fp-ts/lib/Option"));

var _optionC = require("../optionC");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const codec = t.type({
  foo: (0, _optionC.optionC)(t.string)
});
describe('optionC', () => {
  describe('decode', () => {
    test('undefined', () => {
      const result = codec.decode({
        foo: undefined
      });
      expect(result).toEqual(E.right({
        foo: O.none
      }));
    });
    test('absent', () => {
      const result = codec.decode({});
      expect(result).toEqual(E.right({
        foo: O.none
      }));
    });
    test('null', () => {
      const result = codec.decode({
        foo: null
      });
      expect(result).toEqual(E.right({
        foo: O.none
      }));
    });
    test('present', () => {
      const result = codec.decode({
        foo: 'hello'
      });
      expect(result).toEqual(E.right({
        foo: O.some('hello')
      }));
    });
  });
  describe('encode', () => {
    test('none', () => {
      const result = codec.encode({
        foo: O.none
      });
      expect(result).toEqual({
        foo: null
      });
    });
    test('some', () => {
      const result = codec.encode({
        foo: O.some('hello')
      });
      expect(result).toEqual({
        foo: 'hello'
      });
    });
  });
});