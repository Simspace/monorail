import { createElement } from 'react'
import { none, Option, some } from 'fp-ts/lib/Option'

import {
  getOrElse,
  getOrEmptyString,
  isOption,
  renderOnSome,
  toArray,
} from '../Option'

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

describe('toArray', () => {
  it('should return an empty array when given a none', () => {
    const numOpt: Option<number> = none
    const actual = toArray(numOpt)
    const expected: Array<number> = []
    expect(actual).toEqual(expected)
    expect([...actual]).toEqual(expected)
  })

  it('should return an array containing one element when given a some', () => {
    const numOpt: Option<number> = some(2)
    const actual = toArray(numOpt)
    const expected: Array<number> = [2]
    expect(actual).toEqual(expected)
    expect([...actual]).toEqual(expected)
  })
})
