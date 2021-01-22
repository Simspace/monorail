import { expectTypeOf } from 'expect-type'
import { Refinement } from 'fp-ts/lib/function'

import { allOf, oneOf } from '@monorail/sharedHelpers/fp-ts-ext/Refinement'

describe('oneOf', () => {
  test('it matches any refinement', () => {
    const isFoo: Refinement<string, 'foo'> = (s): s is 'foo' => s === 'foo'
    const isBar: Refinement<string, 'bar'> = (s): s is 'bar' => s === 'bar'

    const isFooOrBar = oneOf(isFoo, isBar)

    expect(isFooOrBar('foo')).toBe(true)
    expect(isFooOrBar('bar')).toBe(true)
    expect(isFooOrBar('baz')).toBe(false)

    const foo: string = 'yo'
    isFooOrBar(foo)
      ? expectTypeOf(foo).toEqualTypeOf<'foo' | 'bar'>()
      : expectTypeOf(foo).toBeString()
  })

  test('it combines parameter types', () => {
    const isFoo: Refinement<{ foo: string }, { foo: 'foo' }> = (
      a,
    ): a is { foo: 'foo' } => a.foo === 'foo'
    const isBar: Refinement<{ bar: string }, { bar: 'bar' }> = (
      a,
    ): a is { bar: 'bar' } => a.bar === 'bar'

    const isFooOrBar = oneOf(isFoo, isBar)

    const foo = { foo: 'foo', bar: 'bar' }

    isFooOrBar(foo)
      ? expectTypeOf(foo).toEqualTypeOf<
          {
            foo: string
            bar: string
          } & (
            | {
                foo: 'foo'
              }
            | {
                bar: 'bar'
              }
          )
        >()
      : expectTypeOf(foo).toEqualTypeOf<{
          foo: string
          bar: string
        }>()

    expect(isFooOrBar({ foo: 'foo', bar: 'asdf' })).toBe(true)
    expect(isFooOrBar({ foo: 'asdf', bar: 'bar' })).toBe(true)
    expect(isFooOrBar({ foo: 'asdf', bar: 'asdf' })).toBe(false)
  })
})

describe('allOf', () => {
  test('it matches all refinements', () => {
    const isFoo: Refinement<string, 'foo'> = (s): s is 'foo' => s === 'foo'
    const isBar: Refinement<string, 'bar'> = (s): s is 'bar' => s === 'bar'

    // this is a nonsensical matcher, and thus the type is narrowed to 'never'
    const isFooAndBar = allOf(isFoo, isBar)

    expect(isFooAndBar('foo')).toBe(false)
    expect(isFooAndBar('bar')).toBe(false)
    expect(isFooAndBar('baz')).toBe(false)

    const foo: string = 'yo'
    isFooAndBar(foo)
      ? expectTypeOf(foo).toEqualTypeOf<never>()
      : expectTypeOf(foo).toBeString()
  })

  test('it combines parameter types', () => {
    const isFoo: Refinement<{ foo: string }, { foo: 'foo' }> = (
      a,
    ): a is { foo: 'foo' } => a.foo === 'foo'
    const isBar: Refinement<{ bar: string }, { bar: 'bar' }> = (
      a,
    ): a is { bar: 'bar' } => a.bar === 'bar'

    const isFooAndBar = allOf(isFoo, isBar)

    const foo = { foo: 'foo', bar: 'bar' }

    isFooAndBar(foo)
      ? expectTypeOf(foo).toEqualTypeOf<{
          foo: 'foo'
          bar: 'bar'
        }>()
      : expectTypeOf(foo).toEqualTypeOf<{
          foo: string
          bar: string
        }>()

    expect(isFooAndBar({ foo: 'foo', bar: 'asdf' })).toBe(false)
    expect(isFooAndBar({ foo: 'asdf', bar: 'bar' })).toBe(false)
    expect(isFooAndBar({ foo: 'asdf', bar: 'asdf' })).toBe(false)
    expect(isFooAndBar({ foo: 'foo', bar: 'bar' })).toBe(true)
  })
})
