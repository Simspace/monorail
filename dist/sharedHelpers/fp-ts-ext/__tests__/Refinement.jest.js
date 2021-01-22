"use strict";

var _expectType = require("expect-type");

var _Refinement = require("../Refinement");

describe('oneOf', () => {
  test('it matches any refinement', () => {
    const isFoo = s => s === 'foo';

    const isBar = s => s === 'bar';

    const isFooOrBar = (0, _Refinement.oneOf)(isFoo, isBar);
    expect(isFooOrBar('foo')).toBe(true);
    expect(isFooOrBar('bar')).toBe(true);
    expect(isFooOrBar('baz')).toBe(false);
    const foo = 'yo';
    isFooOrBar(foo) ? (0, _expectType.expectTypeOf)(foo).toEqualTypeOf() : (0, _expectType.expectTypeOf)(foo).toBeString();
  });
  test('it combines parameter types', () => {
    const isFoo = a => a.foo === 'foo';

    const isBar = a => a.bar === 'bar';

    const isFooOrBar = (0, _Refinement.oneOf)(isFoo, isBar);
    const foo = {
      foo: 'foo',
      bar: 'bar'
    };
    isFooOrBar(foo) ? (0, _expectType.expectTypeOf)(foo).toEqualTypeOf() : (0, _expectType.expectTypeOf)(foo).toEqualTypeOf();
    expect(isFooOrBar({
      foo: 'foo',
      bar: 'asdf'
    })).toBe(true);
    expect(isFooOrBar({
      foo: 'asdf',
      bar: 'bar'
    })).toBe(true);
    expect(isFooOrBar({
      foo: 'asdf',
      bar: 'asdf'
    })).toBe(false);
  });
});
describe('allOf', () => {
  test('it matches all refinements', () => {
    const isFoo = s => s === 'foo';

    const isBar = s => s === 'bar'; // this is a nonsensical matcher, and thus the type is narrowed to 'never'


    const isFooAndBar = (0, _Refinement.allOf)(isFoo, isBar);
    expect(isFooAndBar('foo')).toBe(false);
    expect(isFooAndBar('bar')).toBe(false);
    expect(isFooAndBar('baz')).toBe(false);
    const foo = 'yo';
    isFooAndBar(foo) ? (0, _expectType.expectTypeOf)(foo).toEqualTypeOf() : (0, _expectType.expectTypeOf)(foo).toBeString();
  });
  test('it combines parameter types', () => {
    const isFoo = a => a.foo === 'foo';

    const isBar = a => a.bar === 'bar';

    const isFooAndBar = (0, _Refinement.allOf)(isFoo, isBar);
    const foo = {
      foo: 'foo',
      bar: 'bar'
    };
    isFooAndBar(foo) ? (0, _expectType.expectTypeOf)(foo).toEqualTypeOf() : (0, _expectType.expectTypeOf)(foo).toEqualTypeOf();
    expect(isFooAndBar({
      foo: 'foo',
      bar: 'asdf'
    })).toBe(false);
    expect(isFooAndBar({
      foo: 'asdf',
      bar: 'bar'
    })).toBe(false);
    expect(isFooAndBar({
      foo: 'asdf',
      bar: 'asdf'
    })).toBe(false);
    expect(isFooAndBar({
      foo: 'foo',
      bar: 'bar'
    })).toBe(true);
  });
});