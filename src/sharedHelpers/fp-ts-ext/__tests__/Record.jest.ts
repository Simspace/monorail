import { keys, prop, omit, pick, sortRecords } from '../Record'
import { ordRecordWithNameLower } from '../Ord'

describe('keys', () => {
  it('should return the keys of an object', () => {
    const o = { a: 0, b: 'value', c: { nested: 'value' } }
    const actual = keys(o)
    const expected = Object.keys(o) as Array<'a' | 'b' | 'c'>
    expect(actual).toEqual(expected)
    expect(actual).toEqual(['a', 'b', 'c'])
  })
})

describe('prop', () => {
  it('should return the value at a key in an object', () => {
    const o = { a: 0, b: 'value', c: { nested: 'value' } }
    const actual = prop<typeof o, 'b'>('b')(o)
    const expected = o.b
    expect(actual).toBe(expected)
    expect(actual).toBe('value')
  })
})

describe('omit', () => {
  it('should exclude key-val pairs associated with the given keys', () => {
    const o = { a: 0, b: 'value', c: { nested: 'value' } }
    const actual = omit(o, ['c'])
    const expected = { a: 0, b: 'value' }
    expect(actual).toEqual(expected)
  })
})

describe('pick', () => {
  it('should include key-val pairs associated with the given keys', () => {
    const o = { a: 0, b: 'value', c: { nested: 'value' } }
    const actual = pick(o, ['c', 'a'])
    const expected = { a: 0, c: { nested: 'value' } }
    expect(actual).toEqual(expected)
  })
})

describe('sortRecords', () => {
  it('should sort records by an zord', () => {
    type Rec = { name: string; extra: number }
    const recs: Array<Rec> = [
      { name: 'Josh', extra: 0 },
      { name: 'mike', extra: 1 },
      { name: 'Adam', extra: 3 },
    ]
    const actual = sortRecords(ordRecordWithNameLower)(recs)
    const expected = [
      { name: 'Adam', extra: 3 },
      { name: 'Josh', extra: 0 },
      { name: 'mike', extra: 1 },
    ]
    expect(actual).toEqual(expected)
  })
})
