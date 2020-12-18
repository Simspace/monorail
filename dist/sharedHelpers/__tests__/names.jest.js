"use strict";

var _function = require("fp-ts/function");

var _names = require("../names");

describe('names', () => {
  it('assigns a unique name to a value', () => {
    (0, _names.name)(3)(a => {
      (0, _names.name)(3)(b => {
        expect(a).toEqual(b); // because they have different "names", TS should not consider `a` and
        // `b` to be comparable, though in this case they have the same value.
        // @ts-expect-error

        expect(a === b).toBe(true);
      });
    });
  });
  it('does not leak names', () => {
    const a = (0, _names.name)(3)(_function.identity);
    const b = (0, _names.name)(3)(_function.identity);
    expect(a).toEqual(b); // the names do not leave the bounds of the function, so both `a` and `b`
    // are `unknown` here, which means they _can_ be compared.

    expect(a === b).toBe(true);
  });
});