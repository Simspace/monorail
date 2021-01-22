"use strict";

var _expectType = require("expect-type");

var _Tuple = require("../Tuple");

describe('tupleLens', () => {
  const foo = [1, true, '3'];
  it('should get values out of a tuple', () => {
    expect((0, _Tuple.tupleLens)()(0).get(foo)).toEqual(1);
    expect((0, _Tuple.tupleLens)()(1).get(foo)).toEqual(true);
    expect((0, _Tuple.tupleLens)()(2).get(foo)).toEqual('3');
    (0, _expectType.expectTypeOf)((0, _Tuple.tupleLens)()(0).get(foo)).toEqualTypeOf();
    (0, _expectType.expectTypeOf)((0, _Tuple.tupleLens)()(1).get(foo)).toEqualTypeOf();
    (0, _expectType.expectTypeOf)((0, _Tuple.tupleLens)()(2).get(foo)).toEqualTypeOf();
  });
  it('should set values in a tuple', () => {
    expect((0, _Tuple.tupleLens)()(0).set(2)(foo)).toEqual([2, true, '3']);
    expect((0, _Tuple.tupleLens)()(1).set(false)(foo)).toEqual([1, false, '3']);
    expect((0, _Tuple.tupleLens)()(2).set('')(foo)).toEqual([1, true, '']);
    (0, _expectType.expectTypeOf)((0, _Tuple.tupleLens)()(0).set(2)(foo)).toEqualTypeOf();
    (0, _expectType.expectTypeOf)((0, _Tuple.tupleLens)()(1).set(false)(foo)).toEqualTypeOf();
    (0, _expectType.expectTypeOf)((0, _Tuple.tupleLens)()(2).set('')(foo)).toEqualTypeOf();
  });
  it('causes typescript errors if you try to set the wrong type', () => {
    // @ts-expect-error
    (0, _Tuple.tupleLens)()(0).set('')(foo); // @ts-expect-error

    (0, _Tuple.tupleLens)()(1).set('')(foo); // @ts-expect-error

    (0, _Tuple.tupleLens)()(2).set(3)(foo);
  });
});