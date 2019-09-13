import { prismFinite, prismInfinity, prismNaN } from '../newtypes'

describe('prismNaN', () => {
  describe('getOption', () => {
    it('should return a none if given a non-NaN value', () => {
      const actual = prismNaN.getOption(3).isNone()
      const expected = true
      expect(actual).toEqual(expected)
    })

    it('should return a some if given a NaN value', () => {
      const actual = prismNaN.getOption(NaN).isSome()
      const expected = true
      expect(actual).toEqual(expected)
    })
  })
})

describe('prismFinite', () => {
  describe('getOption', () => {
    it('should return a none if given NaN', () => {
      const actual = prismFinite.getOption(NaN).isNone()
      const expected = true
      expect(actual).toEqual(expected)
    })

    it('should return a none if given Infinity', () => {
      const actual = prismFinite.getOption(Infinity).isNone()
      const expected = true
      expect(actual).toEqual(expected)
    })

    it('should return a some if given a finite number', () => {
      const actual = prismFinite.getOption(Math.PI).isSome()
      const expected = true
      expect(actual).toEqual(expected)
    })
  })
})

describe('prismInfinity', () => {
  describe('getOption', () => {
    it('should return a none if given NaN', () => {
      const actual = prismInfinity.getOption(NaN).isNone()
      const expected = true
      expect(actual).toEqual(expected)
    })

    it('should return a none if given a finite number', () => {
      const actual = prismInfinity.getOption(Math.PI).isNone()
      const expected = true
      expect(actual).toEqual(expected)
    })

    it('should return a some if given Infinity', () => {
      const actual = prismInfinity.getOption(Infinity).isSome()
      const expected = true
      expect(actual).toEqual(expected)
    })
  })
})
