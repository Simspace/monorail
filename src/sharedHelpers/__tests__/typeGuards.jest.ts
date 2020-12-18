import { NaN } from '../newtypes'
import { isDOMElement, isFalsy, isFinite } from '../typeGuards'

describe('isFalsy', () => {
  it('should return false when given a truthy value', () => {
    const actual = isFalsy(1)
    const expected = false
    expect(actual).toBe(expected)
  })

  it('should return true when given false', () => {
    const actual = isFalsy(false)
    const expected = true
    expect(actual).toBe(expected)
  })

  it('should return true when given an empty string', () => {
    const actual = isFalsy('')
    const expected = true
    expect(actual).toBe(expected)
  })

  it('should return true when given NaN', () => {
    const invalidNum: number = (undefined as unknown) as number
    const _NaN: NaN = ((3 / invalidNum) as unknown) as NaN
    const actual = isFalsy(_NaN)
    const expected = true
    expect(actual).toEqual(expected)
  })

  it('should return true when given null', () => {
    const actual = isFalsy(null)
    const expected = true
    expect(actual).toBe(expected)
  })

  it('should return true when given undefined', () => {
    const actual = isFalsy(undefined)
    const expected = true
    expect(actual).toBe(expected)
  })
})

describe('isFinite', () => {
  it('should return false when given NaN', () => {
    const actual = isFinite(NaN)
    const expected = false
    expect(actual).toBe(expected)
  })

  it('should return false when given Infinity', () => {
    const actual = isFinite(Infinity)
    const expected = false
    expect(actual).toBe(expected)
  })

  it('should return true when given a finite number', () => {
    const actual = isFinite(Math.PI)
    const expected = true
    expect(actual).toBe(expected)
  })
})

describe('isDOMElement', () => {
  it('should return false when a non DOM Element is passed in', () => {
    const actual = isDOMElement(1)
    const expected = false
    expect(actual).toBe(expected)
  })

  it('should return true when a DOM Element is passed in', () => {
    const actual = isDOMElement(document.createElement('div'))
    const expected = true
    expect(actual).toBe(expected)
  })
})
