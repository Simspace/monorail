import * as t from 'io-ts'
import * as E from 'fp-ts/lib/Either'
import * as O from 'fp-ts/lib/Option'
import { optionC } from '@monorail/sharedHelpers/io-ts-types/optionC'

const codec = t.type({
  foo: optionC(t.string),
})

describe('optionC', () => {
  describe('decode', () => {
    test('undefined', () => {
      const result = codec.decode({ foo: undefined })
      expect(result).toEqual(E.right({ foo: O.none }))
    })

    test('absent', () => {
      const result = codec.decode({})
      expect(result).toEqual(E.right({ foo: O.none }))
    })

    test('null', () => {
      const result = codec.decode({ foo: null })
      expect(result).toEqual(E.right({ foo: O.none }))
    })

    test('present', () => {
      const result = codec.decode({ foo: 'hello' })
      expect(result).toEqual(E.right({ foo: O.some('hello') }))
    })
  })

  describe('encode', () => {
    test('none', () => {
      const result = codec.encode({ foo: O.none })
      expect(result).toEqual({ foo: null })
    })

    test('some', () => {
      const result = codec.encode({ foo: O.some('hello') })
      expect(result).toEqual({ foo: 'hello' })
    })
  })
})
