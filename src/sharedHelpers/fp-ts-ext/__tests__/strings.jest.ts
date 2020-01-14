import { includes, includesNoncase } from '@monorail/sharedHelpers/strings'

describe('includes', () => {
  it('should return true if target is in source', () => {
    const expected = true
    const actual = includes('nan')('banana')
    expect(actual).toEqual(expected)
  })
  it('should return false if target is not in source', () => {
    const expected = false
    const actual = includes('banana')('nan')
    expect(actual).toEqual(expected)
  })
})

describe('includesNoncase', () => {
  it('should return true if target is in source (case insensitive)', () => {
    const expected = true
    const actual = includesNoncase('NaN')('banana')
    expect(actual).toEqual(expected)
  })
  it('should return false if target is not in source (case insensitive)', () => {
    const expected = false
    const actual = includesNoncase('banana')('NaN')
    expect(actual).toEqual(expected)
  })
})
