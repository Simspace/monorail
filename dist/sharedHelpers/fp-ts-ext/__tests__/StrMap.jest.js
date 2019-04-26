"use strict";

var _StrMap = require("fp-ts/lib/StrMap");

var _StrMap2 = require("../StrMap");

describe('newStrMap', () => {
  it('should create a StrMap<A>', () => {
    const actualA = (0, _StrMap2.newStrMap)({
      a: 0,
      b: 1,
      c: 2
    });
    const expectedA = new _StrMap.StrMap({
      a: 0,
      b: 1,
      c: 2
    });
    expect(actualA).toEqual(expectedA);
    expect(actualA.value).toEqual({
      a: 0,
      b: 1,
      c: 2
    });
  });
});