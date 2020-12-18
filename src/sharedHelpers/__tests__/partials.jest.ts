import { hasPartialEquals } from '../partials'

describe('hasPartialEquals', () => {
  type Stuff = 'book' | 'ball' | 'bike'
  const stuffSet = new Set<Stuff>(['book', 'ball', 'bike'])
  const eqBoolean = { equals: (x: boolean, y: boolean) => x === y }
  const partialEq = hasPartialEquals<Stuff, boolean>(stuffSet, eqBoolean)

  it('should return true if match', () => {
    expect(
      partialEq(
        { book: true, ball: true, bike: false },
        { book: true, ball: true, bike: false },
      ),
    ).toEqual(true)
  })
  it('should return true if partial match', () => {
    expect(partialEq({ book: true }, { book: true })).toEqual(true)
    expect(partialEq({}, {})).toEqual(true)
  })
  it('should return false if partial mis-match', () => {
    expect(partialEq({ book: true }, { book: false })).toEqual(false)
    expect(partialEq({ book: false }, { book: true })).toEqual(false)
  })

  it('should return false for these mis-matches', () => {
    // Can be used with partials.
    expect(partialEq({ book: true }, {})).toEqual(false)
    expect(partialEq({}, { book: true })).toEqual(false)

    // If a eq's fails, it should return false.
    expect(
      partialEq(
        { book: true, ball: true, bike: true },
        { book: true, ball: false, bike: true },
      ),
    ).toEqual(false)

    // If if it's undefined in one and not the other, it should return false
    expect(
      partialEq({ book: true, ball: true, bike: true }, { book: true }),
    ).toEqual(false)
    expect(
      partialEq({ book: true }, { book: true, ball: true, bike: true }),
    ).toEqual(false)
  })

  it('should work with arrays as well', () => {
    const partialEqUsingArray = hasPartialEquals<Stuff, boolean>(
      ['ball', 'book', 'bike'],
      eqBoolean,
    )
    expect(
      partialEqUsingArray(
        { book: true, ball: true, bike: true },
        { book: true, ball: true, bike: true },
      ),
    ).toEqual(true)
    expect(
      partialEqUsingArray(
        { book: true, ball: true, bike: true },
        { book: true, ball: false, bike: true },
      ),
    ).toEqual(false)
  })

  describe('extra keys behavior', () => {
    const partialEq2 = hasPartialEquals(
      new Set(['kite']), // set has no specific type
      eqBoolean,
    )

    // Current behavior is that it ignores extra keys,
    // but you can lock down the keys by using types.
    it('should ignores extra keys', () => {
      // Extra keys doesn't matter.
      expect(partialEq2({ random: false }, {})).toEqual(true)
      expect(partialEq2({ random: true }, { random: false })).toEqual(true)
    })
    it('should fail if keys you care about fails the Eq', () => {
      expect(partialEq2({ random: true, kite: true }, { kite: false })).toEqual(
        false,
      )
    })
  })
})
