import { shallowEqual } from '../shallowEqual'

describe('shallowEqual', () => {
  it('should return false for objects that are not shallowly equal', () => {
    const a = { test: 99, tag: 'testing', nested: { a: 0, b: 1 } }
    const b = { test: 99, tag: 'testing', nested: { b: 1 } }
    const actual = shallowEqual(a, b)
    const expected = false
    expect(actual).toBe(expected)
  })

  it('should return true for objects that are shallowly equal', () => {
    const a = { test: 99, tag: 'testing', nested: 3 }
    const b = { test: 99, tag: 'testing', nested: 3 }
    const actual = shallowEqual(a, b)
    const expected = true
    expect(actual).toBe(expected)
  })
})
