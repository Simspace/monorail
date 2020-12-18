import * as fc from 'fast-check'
import { strictEqual } from 'fp-ts/lib/Eq'
import { ordString } from 'fp-ts/lib/Ord'

import {
  alphaCompare,
  invert,
  numericCompare,
  ordAlpha,
  ordDateFromString,
  ordNumeric,
  ordRecordWithNameLower,
  recordWithNameLowerComparator,
} from '../Ord'

describe('ordAlpha', () => {
  it('should contain a `compare` function that orders alphabetically', () => {
    const actualA = ordAlpha.compare('c', 'a')
    const expectedA = alphaCompare('c', 'a')
    expect(actualA).toBe(expectedA)
    expect(actualA).toBe(1)

    const actualB = ordAlpha.compare('b', 'b')
    const expectedB = alphaCompare('b', 'b')
    expect(actualB).toBe(expectedB)
    expect(actualB).toBe(0)

    const actualC = ordAlpha.compare('d', 'q')
    const expectedC = alphaCompare('d', 'q')
    expect(actualC).toBe(expectedC)
    expect(actualC).toBe(-1)
  })

  it('should contain an `equals` function using strict equality (===)', () => {
    const actualA = ordAlpha.equals('c', 'a')
    const expectedA = strictEqual('c', 'a')
    expect(actualA).toBe(expectedA)
    expect(actualA).toBe(false)

    const actualB = ordAlpha.equals('b', 'b')
    const expectedB = strictEqual('b', 'b')
    expect(actualB).toBe(expectedB)
    expect(actualB).toBe(true)
  })
})

describe('ordNumeric', () => {
  it('should contain a `compare` function that orders alphabetically', () => {
    const actualA = ordNumeric.compare(3, -2)
    const expectedA = numericCompare(3, -2)
    expect(actualA).toBe(expectedA)
    expect(actualA).toBe(1)

    const actualB = ordNumeric.compare(2, 2)
    const expectedB = numericCompare(2, 2)
    expect(actualB).toBe(expectedB)
    expect(actualB).toBe(0)

    const actualC = ordNumeric.compare(-5, 4)
    const expectedC = numericCompare(-5, 4)
    expect(actualC).toBe(expectedC)
    expect(actualC).toBe(-1)
  })

  it('should contain an `equals` function using strict equality (===)', () => {
    const actualA = ordNumeric.equals(3, -2)
    const expectedA = strictEqual(3, -2)
    expect(actualA).toBe(expectedA)
    expect(actualA).toBe(false)

    const actualB = ordNumeric.equals(2, 2)
    const expectedB = strictEqual(2, 2)
    expect(actualB).toBe(expectedB)
    expect(actualB).toBe(true)
  })
})

describe('ordRecordWithNameLower', () => {
  it('should compare { name: string } records by lowercase alpha', () => {
    const actualA = ordRecordWithNameLower.compare(
      { name: 'Josh' },
      { name: 'adam' },
    )
    const expectedA = recordWithNameLowerComparator(
      { name: 'Josh' },
      { name: 'adam' },
    )
    expect(actualA).toBe(expectedA)
    expect(actualA).toBe(1)

    const actualB = ordRecordWithNameLower.compare(
      { name: 'emily' },
      { name: 'Luke' },
    )
    const expectedB = recordWithNameLowerComparator(
      { name: 'emily' },
      { name: 'Luke' },
    )
    expect(actualB).toBe(expectedB)
    expect(actualB).toBe(-1)

    const actualC = ordRecordWithNameLower.compare(
      { name: 'David' },
      { name: 'david' },
    )
    const expectedC = recordWithNameLowerComparator(
      { name: 'David' },
      { name: 'david' },
    )
    expect(actualC).toBe(expectedC)
    expect(actualC).toBe(0)
  })
})

describe('invert', () => {
  // https://en.wikipedia.org/wiki/Involution_(mathematics)
  // Applying invert twice should result in the original ord instance
  test('involution', () => {
    return fc.assert(
      fc.property(fc.string(), fc.string(), (a, b) => {
        return (
          invert(invert(ordString)).compare(a, b) === ordString.compare(a, b)
        )
      }),
    )
  })

  test('inverts', () => {
    fc.assert(
      fc.property(fc.string(), fc.string(), (a, b) => {
        return invert(ordString).compare(a, b) === ordString.compare(b, a)
      }),
    )
  })
})

describe('ordDateFromString', () => {
  it('should compare two valid ISO date strings', () => {
    const actualA = ordDateFromString.compare(
      '2020-11-04T16:46:23.560875Z',
      '2020-11-04T20:47:01.593Z',
    )

    expect(actualA).toBe(-1)

    const actualB = ordDateFromString.compare(
      '2020-11-04T16:47:23.560875Z',
      '2020-11-04T16:47:23.560875Z',
    )

    expect(actualB).toBe(0)

    const actualC = ordDateFromString.compare(
      '2020-11-04T20:46:01.593Z',
      '2020-11-04T16:47:23.560875Z',
    )

    expect(actualC).toBe(1)
  })

  it('should compare two date strings', () => {
    const actualA = ordDateFromString.compare(
      'Wed Nov 04 2020',
      'Wed Nov 05 2020',
    )

    expect(actualA).toBe(-1)

    const actualB = ordDateFromString.compare(
      'Wed Nov 05 2020',
      'Wed Nov 05 2020',
    )

    expect(actualB).toBe(0)

    const actualC = ordDateFromString.compare(
      'Wed Nov 05 2020',
      'Wed Nov 04 2020',
    )

    expect(actualC).toBe(1)
  })

  it('should compare two UTC date strings', () => {
    const actualA = ordDateFromString.compare(
      'Wed, 04 Nov 2020 16:46:23 GMT',
      'Wed, 04 Nov 2020 16:46:23 GMT',
    )

    expect(actualA).toBe(0)

    const actualB = ordDateFromString.compare(
      'Wed, 04 Nov 2020 16:46:23 GMT',
      'Wed, 04 Nov 2020 16:40:23 GMT',
    )

    expect(actualB).toBe(1)

    const actualC = ordDateFromString.compare(
      'Wed, 04 Nov 2020 16:40:23 GMT',
      'Wed, 04 Nov 2020 16:46:23 GMT',
    )

    expect(actualC).toBe(-1)
  })
})
