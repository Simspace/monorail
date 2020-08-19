import * as S from '@monorail/sharedHelpers/fp-ts-ext/Struct'
import * as Eq from 'fp-ts/lib/Eq'

describe('Struct', () => {
  describe('difference', () => {
    const exampleEqStruct = {
      foo: Eq.eqNumber,
      bar: Eq.eqString,
    }
    it('should return none if the structs received are equal by value', () => {
      const x = { foo: 1, bar: 'two' }
      const y = { foo: 1, bar: 'two' }
      const result = S.difference(exampleEqStruct)(x, y)

      expect(result).toBeNone()
    })
    it('should return a partial struct containing the objects that are in x but not y', () => {
      const x = { foo: 1, bar: 'three' }
      const y = { foo: 1, bar: 'two' }
      const result = S.difference(exampleEqStruct)(x, y)

      expect(result).toEqualSome({ bar: 'three' })
    })
  })
})
