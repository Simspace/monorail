import { all, any, notAny } from '../Array'

const isGreaterThanZero = (x: number): boolean => x > 0

describe('all', () => {
  it('should return false when a member of the array does not hold true for a predicate', () => {
    const actual = all([-1, 0, 1, 2, 3], isGreaterThanZero)
    const expected = false
    expect(actual).toBe(expected)
  })

  it('should return true when a predicate holds true for all members of an array', () => {
    const actual = all([1, 2, 3, 4, 5], isGreaterThanZero)
    const expected = true
    expect(actual).toBe(expected)
  })
})

describe('any', () => {
  it('should return true when a predicate holds true for any member of an array', () => {
    const actual = any([-5, 0, -3, 2], isGreaterThanZero)
    const expected = true
    expect(actual).toBe(expected)
  })

  it('should return false when a predicate holds true for no members of an array', () => {
    const actual = any([-5, -4, -3, -2, -1], isGreaterThanZero)
    const expected = false
    expect(actual).toBe(expected)
  })
})

describe('notAny', () => {
  it('should return false when a predicate holds true for any member of an array', () => {
    const actual = notAny([-5, 0, -3, 2], isGreaterThanZero)
    const expected = false
    expect(actual).toBe(expected)
  })

  it('should return true when a predicate holds true for no members of an array', () => {
    const actual = notAny([-5, -4, -3, -2, -1], isGreaterThanZero)
    const expected = true
    expect(actual).toBe(expected)
  })
})
