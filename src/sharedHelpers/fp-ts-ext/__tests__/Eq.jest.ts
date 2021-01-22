import {
  eqRecordWithNameLower,
  eqShallow,
  eqStrict,
  eqStringByLowerCase,
  getEqShallow,
  getEqStrict,
  recordWithNameLowerEquality,
} from '@monorail/sharedHelpers/fp-ts-ext/Eq'

import { shallowEqual } from '../../shallowEqual'

describe('eqStringByLowerCase', () => {
  it('should return true if given two strings that match letters but not casing', () => {
    const actual = eqStringByLowerCase.equals('Foo Bar', 'foo bar')
    const expected = true
    expect(actual).toBe(expected)
  })

  it("should return false if given two strings that don't match", () => {
    const actual = eqStringByLowerCase.equals('Bar Foo', 'Foo Bar')
    const expected = false
    expect(actual).toBe(expected)
  })
})

describe('eqShallow', () => {
  it('should contain an `equals` function using strict equality (===)', () => {
    const actualA = eqShallow.equals({ value: 'c' }, { value: 'a' })
    const expectedA = shallowEqual({ value: 'c' }, { value: 'a' })
    expect(actualA).toBe(expectedA)
    expect(actualA).toBe(false)

    const actualB = eqShallow.equals({ value: 'b' }, { value: 'b' })
    const expectedB = shallowEqual({ value: 'b' }, { value: 'b' })
    expect(actualB).toBe(expectedB)
    expect(actualB).toBe(true)
  })
})

describe('eqStrict', () => {
  it('should contain an `equals` function using strict equality (===)', () => {
    const actualA = eqStrict.equals('c', 'a')
    expect(actualA).toBe(false)

    const actualB = eqStrict.equals('b', 'b')
    expect(actualB).toBe(true)
  })
})

describe('getEqShallow', () => {
  it('should contain a eq equivalent to eqShallow', () => {
    const s = getEqShallow<{ value: string }>()
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

describe('getEqStrict', () => {
  it('should contain a eq equivalent to eqStrict', () => {
    const s = getEqStrict<string>()
    const actualA = s.equals('c', 'a')
    const expectedA = eqStrict.equals('c', 'a')
    expect(actualA).toBe(expectedA)
    expect(actualA).toBe(false)

    const actualB = s.equals('b', 'b')
    const expectedB = eqStrict.equals('b', 'b')
    expect(actualB).toBe(expectedB)
    expect(actualB).toBe(true)
  })
})

describe('eqRecordWithNameLower', () => {
  it('should compare { name: string } records by lowercase alpha', () => {
    const actualA = eqRecordWithNameLower.equals(
      { name: 'Josh B' },
      { name: 'josh B' },
    )
    const expectedA = recordWithNameLowerEquality(
      { name: 'Josh B' },
      { name: 'josh B' },
    )
    expect(actualA).toBe(expectedA)
    expect(actualA).toBe(true)

    const actualB = eqRecordWithNameLower.equals(
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
