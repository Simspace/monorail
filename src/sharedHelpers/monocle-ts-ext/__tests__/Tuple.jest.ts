import { expectTypeOf } from 'expect-type'

import { tupleLens } from '../Tuple'

type TestTuple = [number, boolean, string]

describe('tupleLens', () => {
  const foo: TestTuple = [1, true, '3']

  it('should get values out of a tuple', () => {
    expect(tupleLens<TestTuple>()(0).get(foo)).toEqual(1)
    expect(tupleLens<TestTuple>()(1).get(foo)).toEqual(true)
    expect(tupleLens<TestTuple>()(2).get(foo)).toEqual('3')

    expectTypeOf(tupleLens<TestTuple>()(0).get(foo)).toEqualTypeOf<number>()
    expectTypeOf(tupleLens<TestTuple>()(1).get(foo)).toEqualTypeOf<boolean>()
    expectTypeOf(tupleLens<TestTuple>()(2).get(foo)).toEqualTypeOf<string>()
  })

  it('should set values in a tuple', () => {
    expect(tupleLens<TestTuple>()(0).set(2)(foo)).toEqual([2, true, '3'])
    expect(tupleLens<TestTuple>()(1).set(false)(foo)).toEqual([1, false, '3'])
    expect(tupleLens<TestTuple>()(2).set('')(foo)).toEqual([1, true, ''])

    expectTypeOf(tupleLens<TestTuple>()(0).set(2)(foo)).toEqualTypeOf<
      TestTuple
    >()
    expectTypeOf(tupleLens<TestTuple>()(1).set(false)(foo)).toEqualTypeOf<
      TestTuple
    >()
    expectTypeOf(tupleLens<TestTuple>()(2).set('')(foo)).toEqualTypeOf<
      TestTuple
    >()
  })

  it('causes typescript errors if you try to set the wrong type', () => {
    // @ts-expect-error
    tupleLens<TestTuple>()(0).set('')(foo)
    // @ts-expect-error
    tupleLens<TestTuple>()(1).set('')(foo)
    // @ts-expect-error
    tupleLens<TestTuple>()(2).set(3)(foo)
  })
})
