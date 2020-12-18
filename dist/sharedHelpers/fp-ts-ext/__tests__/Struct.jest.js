"use strict";

var Eq = _interopRequireWildcard(require("fp-ts/lib/Eq"));

var S = _interopRequireWildcard(require("../Struct"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

describe('Struct', () => {
  describe('difference', () => {
    const exampleEqStruct = {
      foo: Eq.eqNumber,
      bar: Eq.eqString
    };
    it('should return none if the structs received are equal by value', () => {
      const x = {
        foo: 1,
        bar: 'two'
      };
      const y = {
        foo: 1,
        bar: 'two'
      };
      const result = S.difference(exampleEqStruct)(x, y);
      expect(result).toBeNone();
    });
    it('should return a partial struct containing the objects that are in x but not y', () => {
      const x = {
        foo: 1,
        bar: 'three'
      };
      const y = {
        foo: 1,
        bar: 'two'
      };
      const result = S.difference(exampleEqStruct)(x, y);
      expect(result).toEqualSome({
        bar: 'three'
      });
    });
  });
});