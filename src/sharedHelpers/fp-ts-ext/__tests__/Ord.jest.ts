import { strictEqual } from 'fp-ts/lib/Setoid'

import {
  alphaCompare,
  numericCompare,
  ordAlpha,
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
