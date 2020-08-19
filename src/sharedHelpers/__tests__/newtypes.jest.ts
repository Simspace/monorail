import * as moment from 'moment'

import { prismFinite, prismInfinity, prismIsoDate, prismNaN } from '../newtypes'

describe('prismNaN', () => {
  describe('getOption', () => {
    it('should return a none if given a non-NaN value', () => {
      expect(prismNaN.getOption(3)).toBeNone()
    })

    it('should return a some if given a NaN value', () => {
      expect(prismNaN.getOption(NaN)).toBeSome()
    })
  })
})

describe('prismFinite', () => {
  describe('getOption', () => {
    it('should return a none if given NaN', () => {
      expect(prismFinite.getOption(NaN)).toBeNone()
    })

    it('should return a none if given Infinity', () => {
      expect(prismFinite.getOption(Infinity)).toBeNone()
    })

    it('should return a some if given a finite number', () => {
      expect(prismFinite.getOption(Math.PI)).toBeSome()
    })
  })
})

describe('prismInfinity', () => {
  describe('getOption', () => {
    it('should return a none if given NaN', () => {
      expect(prismInfinity.getOption(NaN)).toBeNone()
    })

    it('should return a none if given a finite number', () => {
      expect(prismInfinity.getOption(Math.PI)).toBeNone()
    })

    it('should return a some if given Infinity', () => {
      expect(prismInfinity.getOption(Infinity)).toBeSome()
    })
  })
})

describe('prismIsoDate', () => {
  describe('getOption', () => {
    it('should return a none if given garbage', () => {
      expect(prismIsoDate.getOption('garbage')).toBeNone()
    })

    it('should return a some if given a valid ISO date', () => {
      expect(prismIsoDate.getOption(moment.default().format())).toBeSome()
    })
  })
})
