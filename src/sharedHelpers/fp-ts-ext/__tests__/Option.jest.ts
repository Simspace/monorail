import { none, Option, some } from 'fp-ts/lib/Option'
import { createElement } from 'react'

import {
  fromTruthyFalsy,
  getOrElse,
  getOrEmptyArray,
  getOrEmptyString,
  getOrZero,
  isOption,
  renderOnSome,
  toBoolean,
  toSpreadable,
} from '../Option'

describe('fromTruthyFalsy', () => {
  it('should return a none when given a Falsy value', () => {
    const actual = fromTruthyFalsy(0)
    const expected = none
    expect(actual).toEqual(expected)
  })

  it('should return a Some<A> when given a Truthy value', () => {
    const actual = fromTruthyFalsy({ value: 33 })
    const expected = some({ value: 33 })
    expect(actual).toEqual(expected)
  })
})

describe('getOrElse', () => {
  it('should extract the value from a some when given a some', () => {
    const actual = getOrElse(0)(some(5))
    const expected = 5
    expect(actual).toBe(expected)
  })

  it('should return a default value when given a none', () => {
    const actual = getOrElse(0)(none)
    const expected = 0
    expect(actual).toEqual(expected)
  })
})

describe('getOrEmptyArray', () => {
  it('should extract the value from a some when given a some', () => {
    const actual = getOrEmptyArray(some([0, 1, 2, 3]))
    const expected = [0, 1, 2, 3]
    expect(actual).toEqual(expected)
  })

  it('should return an empty array when given a none', () => {
    const actual = getOrEmptyArray(none)
    const expected: Array<number> = []
    expect(actual).toEqual(expected)
  })
})

describe('getOrEmptyString', () => {
  it('should extract the value from a some when given a some', () => {
    const actual = getOrEmptyString(some('testing'))
    const expected = 'testing'
    expect(actual).toBe(expected)
  })

  it('should return an empty string when given a none', () => {
    const actual = getOrEmptyString(none)
    const expected: string = ''
    expect(actual).toEqual(expected)
  })
})

describe('getOrZero', () => {
  it('should extract the value from a some when given a some', () => {
    const actual = getOrZero(some(33))
    const expected = 33
    expect(actual).toBe(expected)
  })

  it('should return 0 when given a none', () => {
    const actual = getOrZero(none)
    const expected = 0
    expect(actual).toBe(expected)
  })
})

describe('isOption', () => {
  it('should return true if the value is an Option<A>', () => {
    const actual = isOption(some(3))
    const expected = true
    expect(actual).toBe(expected)
  })

  it('should return false if the value is not an Option<A>', () => {
    const actual = isOption({ _tag: 'Some' })
    const expected = false
    expect(actual).toBe(expected)
  })
})

describe('renderOnSome', () => {
  it('should return null when given a none', () => {
    const numOpt: Option<number> = none
    const actual = renderOnSome(numOpt, x =>
      createElement('h1', {}, `Num: ${x}`),
    )
    const expected = null
    expect(actual).toBe(expected)
  })

  it('should return a ReactNode when given a some', () => {
    const numOpt: Option<number> = some(3)
    const actual = renderOnSome(numOpt, x =>
      createElement('h1', {}, `Num: ${x}`),
    )
    const expected = createElement('h1', {}, 'Num: 3')
    expect(actual).toEqual(expected)
  })
})

describe('toBoolean', () => {
  it('should return false when given a none', () => {
    const actual = toBoolean(none)
    const expected = false
    expect(actual).toEqual(expected)
  })

  it('should return true when given a some', () => {
    const actual = toBoolean(some(3))
    const expected = true
    expect(actual).toEqual(expected)
  })
})

describe('toSpreadable', () => {
  it('should return an empty array when given a none', () => {
    const numOpt: Option<number> = none
    const actual = toSpreadable(numOpt)
    const expected: Array<number> = []
    expect(actual).toEqual(expected)
    expect([...actual]).toEqual(expected)
  })

  it('should return an array containing one element when given a some', () => {
    const numOpt: Option<number> = some(2)
    const actual = toSpreadable(numOpt)
    const expected: Array<number> = [2]
    expect(actual).toEqual(expected)
    expect([...actual]).toEqual(expected)
  })
})
