import { strictEqual } from 'fp-ts/lib/Setoid'

import { shallowEqual } from '../../shallowEqual'
import {
  getSetoidShallowEq,
  getSetoidStrict,
  recordWithNameLowerEquality,
  setoidRecordWithNameLower,
  setoidShallowEq,
  setoidStrict,
} from '../Setoid'

describe('setoidShallowEq', () => {
  it('should contain an `equals` function using strict equality (===)', () => {
    const actualA = setoidShallowEq.equals({ value: 'c' }, { value: 'a' })
    const expectedA = shallowEqual({ value: 'c' }, { value: 'a' })
    expect(actualA).toBe(expectedA)
    expect(actualA).toBe(false)

    const actualB = setoidShallowEq.equals({ value: 'b' }, { value: 'b' })
    const expectedB = shallowEqual({ value: 'b' }, { value: 'b' })
    expect(actualB).toBe(expectedB)
    expect(actualB).toBe(true)
  })
})

describe('setoidStrict', () => {
  it('should contain an `equals` function using strict equality (===)', () => {
    const actualA = setoidStrict.equals('c', 'a')
    const expectedA = strictEqual('c', 'a')
    expect(actualA).toBe(expectedA)
    expect(actualA).toBe(false)

    const actualB = setoidStrict.equals('b', 'b')
    const expectedB = strictEqual('b', 'b')
    expect(actualB).toBe(expectedB)
    expect(actualB).toBe(true)
  })
})

describe('getSetoidShallowEq', () => {
  it('should contain a setoid equivalent to setoidShallowEq', () => {
    const s = getSetoidShallowEq<{ value: string }>()
    const actual = s.equals({ value: 'c' }, { value: 'a' })
    const expected = shallowEqual({ value: 'c' }, { value: 'a' })
    expect(actual).toBe(expected)
    expect(actual).toBe(false)

    const actualB = s.equals({ value: 'b' }, { value: 'b' })
    const expectedB = shallowEqual({ value: 'b' }, { value: 'b' })
    expect(actualB).toBe(expectedB)
    expect(actualB).toBe(true)
  })
})

describe('getSetoidStrict', () => {
  it('should contain a setoid equivalent to setoidStrict', () => {
    const s = getSetoidStrict<string>()
    const actualA = s.equals('c', 'a')
    const expectedA = strictEqual('c', 'a')
    expect(actualA).toBe(expectedA)
    expect(actualA).toBe(false)

    const actualB = s.equals('b', 'b')
    const expectedB = strictEqual('b', 'b')
    expect(actualB).toBe(expectedB)
    expect(actualB).toBe(true)
  })
})

describe('setoidRecordWithNameLower', () => {
  it('should compare { name: string } records by lowercase alpha', () => {
    const actualA = setoidRecordWithNameLower.equals(
      { name: 'Josh B' },
      { name: 'josh B' },
    )
    const expectedA = recordWithNameLowerEquality(
      { name: 'Josh B' },
      { name: 'josh B' },
    )
    expect(actualA).toBe(expectedA)
    expect(actualA).toBe(true)

    const actualB = setoidRecordWithNameLower.equals(
      { name: 'Josh B' },
      { name: 'joshua B' },
    )
    const expectedB = recordWithNameLowerEquality(
      { name: 'Josh B' },
      { name: 'joshua B' },
    )
    expect(actualB).toBe(expectedB)
    expect(actualB).toBe(false)
  })
})
