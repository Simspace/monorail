import {
  failure,
  initial,
  pending,
  RemoteData,
  remoteData,
  success,
} from '@devexperts/remote-data-ts'
import fc from 'fast-check'
import { array } from 'fp-ts/lib/Array'
import { Either, either, left, right } from 'fp-ts/lib/Either'
import { identity } from 'fp-ts/lib/function'
import { none, Option, option, some } from 'fp-ts/lib/Option'
import { pipe } from 'fp-ts/lib/pipeable'

import { all, and, any, count, or } from '../Foldable'

describe('and', () => {
  describe('should work on Option<boolean>', () => {
    const and_ = and(option)
    test.each<[Option<boolean>, boolean]>([
      [none, true],
      [some(false), false],
      [some(true), true],
    ])('when given %p, should return %p', (x, expected) => {
      const actual = and_(x)
      expect(actual).toEqual(expected)
    })
  })
  describe('should work on RemoteData<T, boolean>', () => {
    const and_ = and(remoteData)
    test.each<[RemoteData<string | boolean, boolean>, boolean]>([
      [initial, true],
      [pending, true],
      [failure('Oops!'), true],
      [failure(true), true],
      [success(true), true],
      [success(false), false],
    ])('when given %p, should return %p', (x, expected) => {
      const actual = and_(x)
      expect(actual).toEqual(expected)
    })
  })
  describe('should work on Either<T, boolean>', () => {
    const and_ = and(either)
    test.each<[Either<string | boolean, boolean>, boolean]>([
      [left(false), true],
      [left(true), true],
      [right(false), false],
      [right(true), true],
    ])('when given %p, should return %p', (x, expected) => {
      const actual = and_(x)
      expect(actual).toEqual(expected)
    })
  })
  describe('should work on Array<boolean>', () => {
    const and_ = and(array)
    test.each<[Array<boolean>, boolean]>([
      [[], true],
      [[false], false],
      [[true], true],
      [[false, true], false],
      [[true, true], true],
    ])('when given %p, should return %p', (x, expected) => {
      const actual = and_(x)
      expect(actual).toEqual(expected)
    })
  })
  describe('properties', () => {
    describe('should be equivalent to Array.prototype.every(identity) for F ~ Array', () => {
      const and_ = and(array)
      fc.assert(
        fc.property(fc.array(fc.boolean()), bs => {
          return bs.every(identity) === and_(bs)
        }),
      )
    })
  })
})

describe('or', () => {
  describe('should work on Option<boolean>', () => {
    const or_ = or(option)
    test.each<[Option<boolean>, boolean]>([
      [none, false],
      [some(false), false],
      [some(true), true],
    ])('when given %p, should return %p', (x, expected) => {
      const actual = or_(x)
      expect(actual).toEqual(expected)
    })
  })
  describe('should work on RemoteData<T, boolean>', () => {
    const or_ = or(remoteData)
    test.each<[RemoteData<string | boolean, boolean>, boolean]>([
      [initial, false],
      [pending, false],
      [failure('Oops!'), false],
      [failure(true), false],
      [success(true), true],
      [success(false), false],
    ])('when given %p, should return %p', (x, expected) => {
      const actual = or_(x)
      expect(actual).toEqual(expected)
    })
  })
  describe('should work on Either<T, boolean>', () => {
    const or_ = or(either)
    test.each<[Either<string | boolean, boolean>, boolean]>([
      [left(false), false],
      [left(true), false],
      [right(false), false],
      [right(true), true],
    ])('when given %p, should return %p', (x, expected) => {
      const actual = or_(x)
      expect(actual).toEqual(expected)
    })
  })
  describe('should work on Array<boolean>', () => {
    const or_ = or(array)
    test.each<[Array<boolean>, boolean]>([
      [[], false],
      [[false], false],
      [[true], true],
      [[false, true], true],
      [[true, true], true],
    ])('when given %p, should return %p', (x, expected) => {
      const actual = or_(x)
      expect(actual).toEqual(expected)
    })
  })

  describe('properties', () => {
    describe('should be equivalent to Array.prototype.some(identity) for F ~ Array', () => {
      const or_ = or(array)
      fc.assert(
        fc.property(fc.array(fc.boolean()), bs => {
          return bs.some(identity) === or_(bs)
        }),
      )
    })
  })
})

describe('all', () => {
  describe('should work on Option<boolean>', () => {
    const all_ = all(option)
    test.each<[Option<boolean>, boolean]>([
      [none, true],
      [some(false), false],
      [some(true), true],
    ])('when given %p, should return %p', (x, expected) => {
      const actual = all_(identity, x)
      expect(actual).toEqual(expected)
    })
  })
  describe('should work on RemoteData<T, boolean>', () => {
    const all_ = all(remoteData)
    test.each<[RemoteData<string | boolean, boolean>, boolean]>([
      [initial, true],
      [pending, true],
      [failure('Oops!'), true],
      [failure(true), true],
      [success(true), true],
      [success(false), false],
    ])('when given %p, should return %p', (x, expected) => {
      const actual = all_(identity, x)
      expect(actual).toEqual(expected)
    })
  })
  describe('should work on Either<T, boolean>', () => {
    const all_ = all(either)
    test.each<[Either<string | boolean, boolean>, boolean]>([
      [left(false), true],
      [left(true), true],
      [right(false), false],
      [right(true), true],
    ])('when given %p, should return %p', (x, expected) => {
      const actual = all_(identity, x)
      expect(actual).toEqual(expected)
    })
  })
  describe('should work on Array<boolean>', () => {
    const all_ = all(array)
    test.each<[Array<boolean>, boolean]>([
      [[], true],
      [[false], false],
      [[true], true],
      [[false, true], false],
      [[true, true], true],
    ])('when given %p, should return %p', (x, expected) => {
      const actual = all_(identity, x)
      expect(actual).toEqual(expected)
    })
  })

  describe('properties', () => {
    describe('should be equivalent to Array.prototype.every(pred) for F ~ Array', () => {
      const all_ = all(array)
      fc.assert(
        fc.property(fc.array(fc.boolean()), bs => {
          return bs.every(identity) === all_(identity, bs)
        }),
      )
    })
  })
})

describe('any', () => {
  describe('should work on Option<boolean>', () => {
    const any_ = any(option)
    test.each<[Option<boolean>, boolean]>([
      [none, false],
      [some(false), false],
      [some(true), true],
    ])('when given %p, should return %p', (x, expected) => {
      const actual = any_(identity, x)
      expect(actual).toEqual(expected)
    })
  })
  describe('should work on RemoteData<T, boolean>', () => {
    const any_ = any(remoteData)
    test.each<[RemoteData<string | boolean, boolean>, boolean]>([
      [initial, false],
      [pending, false],
      [failure('Oops!'), false],
      [failure(true), false],
      [success(true), true],
      [success(false), false],
    ])('when given %p, should return %p', (x, expected) => {
      const actual = any_(identity, x)
      expect(actual).toEqual(expected)
    })
  })
  describe('should work on Either<T, boolean>', () => {
    const any_ = any(either)
    test.each<[Either<string | boolean, boolean>, boolean]>([
      [left(false), false],
      [left(true), false],
      [right(false), false],
      [right(true), true],
    ])('when given %p, should return %p', (x, expected) => {
      const actual = any_(identity, x)
      expect(actual).toEqual(expected)
    })
  })
  describe('should work on Array<boolean>', () => {
    const any_ = any(array)
    test.each<[Array<boolean>, boolean]>([
      [[], false],
      [[false], false],
      [[true], true],
      [[false, true], true],
      [[true, true], true],
    ])('when given %p, should return %p', (x, expected) => {
      const actual = any_(identity, x)
      expect(actual).toEqual(expected)
    })
  })

  describe('properties', () => {
    describe('should be equivalent to Array.prototype.some(pred) for F ~ Array', () => {
      const any_ = any(array)
      fc.assert(
        fc.property(fc.array(fc.boolean()), bs => {
          return bs.some(identity) === any_(identity, bs)
        }),
      )
    })
  })
})

describe('count', () => {
  it('should count values in an array which match the predicate', () => {
    const actual = pipe(
      [1, 2, 3, 4, 5, 6],
      count(array)(x => x > 3),
    )

    const expected = 3
    expect(actual).toEqual(expected)
  })

  it('should count values in an Option which match the predicate', () => {
    const actual = pipe(
      some(6),
      count(option)(x => x > 3),
    )

    const expected = 1
    expect(actual).toEqual(expected)
  })

  it('should default to zero if no elements are in the foldable', () => {
    const empty: Array<number> = []
    const actual = pipe(
      empty,
      count(array)(x => x > 3),
    )

    const expected = 0
    expect(actual).toEqual(expected)
  })
})
