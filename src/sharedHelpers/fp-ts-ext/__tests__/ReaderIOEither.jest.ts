import * as assert from 'assert'
import { sequenceT } from 'fp-ts/lib/Apply'
import * as A from 'fp-ts/lib/Array'
import * as E from 'fp-ts/lib/Either'
import { pipe } from 'fp-ts/lib/function'
import * as I from 'fp-ts/lib/IO'
import * as IE from 'fp-ts/lib/IOEither'
import { monoidSum } from 'fp-ts/lib/Monoid'
import { none, some } from 'fp-ts/lib/Option'
import * as R from 'fp-ts/lib/Reader'
import * as RE from 'fp-ts/lib/ReaderEither'
import { semigroupString, semigroupSum } from 'fp-ts/lib/Semigroup'
import * as RI from 'fp-ts-contrib/lib/ReaderIO'

import * as _ from '@monorail/sharedHelpers/fp-ts-ext/ReaderIOEither'

describe('ReaderIOEither', () => {
  describe('pipeables', () => {
    it('map', () => {
      const double = (n: number): number => n * 2
      assert.deepStrictEqual(pipe(_.right(1), _.map(double))({})(), E.right(2))
    })

    it('ap', () => {
      const double = (n: number): number => n * 2
      assert.deepStrictEqual(
        pipe(_.right(double), _.ap(_.right(1)))({})(),
        E.right(2),
      )
    })

    it('apFirst', () => {
      assert.deepStrictEqual(
        pipe(_.right('a'), _.apFirst(_.right('b')))({})(),
        E.right('a'),
      )
    })

    it('apSecond', () => {
      assert.deepStrictEqual(
        pipe(_.right('a'), _.apSecond(_.right('b')))({})(),
        E.right('b'),
      )
    })

    it('chain', () => {
      const f = (a: string) => (a.length > 2 ? _.right(a.length) : _.left('b'))
      assert.deepStrictEqual(pipe(_.right('aaa'), _.chain(f))({})(), E.right(3))
      assert.deepStrictEqual(pipe(_.right('a'), _.chain(f))({})(), E.left('b'))
    })

    it('chainFirst', () => {
      const f = (a: string) => (a.length > 2 ? _.right(a.length) : _.left('b'))
      assert.deepStrictEqual(
        pipe(_.right('aaa'), _.chainFirst(f))({})(),
        E.right('aaa'),
      )
    })

    it('chainFirstW', () => {
      const f = (a: string) => (a.length > 2 ? _.right(a.length) : _.left('b'))
      assert.deepStrictEqual(
        pipe(_.right<object, number, string>('aaa'), _.chainFirstW(f))({})(),
        E.right('aaa'),
      )
    })

    it('flatten', () => {
      assert.deepStrictEqual(
        pipe(_.right(_.right('a')), _.flatten)({})(),
        E.right('a'),
      )
    })

    it('bimap', () => {
      const f = (s: string): number => s.length
      const g = (n: number): boolean => n > 2
      assert.deepStrictEqual(
        pipe(_.right(1), _.bimap(f, g))({})(),
        E.right(false),
      )
      assert.deepStrictEqual(
        pipe(_.left('error'), _.bimap(f, g))({})(),
        E.left(5),
      )
    })

    it('mapLeft', () => {
      const len = (s: string): number => s.length
      assert.deepStrictEqual(pipe(_.right(1), _.mapLeft(len))({})(), E.right(1))
      assert.deepStrictEqual(
        pipe(_.left('err'), _.mapLeft(len))({})(),
        E.left(3),
      )
    })

    it('alt', () => {
      assert.deepStrictEqual(
        pipe(
          _.right(1),
          _.alt(() => _.right(2)),
        )({})(),
        E.right(1),
      )
      assert.deepStrictEqual(
        pipe(
          _.left('a'),
          _.alt(() => _.right(2)),
        )({})(),
        E.right(2),
      )
      assert.deepStrictEqual(
        pipe(
          _.left('a'),
          _.alt(() => _.left('b')),
        )({})(),
        E.left('b'),
      )
    })

    it('fromPredicate', () => {
      const predicate = (n: number) => n >= 2
      const gt2 = _.fromPredicate(predicate, n => `Invalid number ${n}`)

      const refinement = (u: string | number): u is number =>
        typeof u === 'number'
      const isNumber = _.fromPredicate(
        refinement,
        u => `Invalid number ${String(u)}`,
      )

      assert.deepStrictEqual(gt2(3)({})(), E.right(3))
      assert.deepStrictEqual(gt2(1)({})(), E.left('Invalid number 1'))
      assert.deepStrictEqual(isNumber(4)({})(), E.right(4))
    })

    it('fromEither', () => {
      assert.deepStrictEqual(_.fromEither(E.right(1))({})(), E.right(1))
      assert.deepStrictEqual(_.fromEither(E.left('a'))({})(), E.left('a'))
    })

    it('fromOption', () => {
      assert.deepStrictEqual(
        _.fromOption(() => 'none')(none)({})(),
        E.left('none'),
      )
      assert.deepStrictEqual(
        _.fromOption(() => 'none')(some(1))({})(),
        E.right(1),
      )
    })

    it('filterOrElse', () => {
      assert.deepStrictEqual(
        pipe(
          _.right(12),
          _.filterOrElse(
            n => n > 10,
            () => 'a',
          ),
        )({})(),
        E.right(12),
      )
      assert.deepStrictEqual(
        pipe(
          _.right(8),
          _.filterOrElse(
            n => n > 10,
            () => 'a',
          ),
        )({})(),
        E.left('a'),
      )
    })
  })

  // -------------------------------------------------------------------------------------
  // instances
  // -------------------------------------------------------------------------------------

  it('applicativeReaderIOEitherPar', () => {
    const log: Array<string> = []
    const a = _.rightIO<unknown, string, number>(() => log.push('a'))
    const b = _.leftIO(() => {
      log.push('b')
      return 'error'
    })
    const c = _.rightIO(() => log.push('c'))
    const abc = sequenceT(_.ApplicativePar)(a, b, c)
    const result = _.run(abc, {})
    assert.deepStrictEqual(result, E.left('error'))
    assert.deepStrictEqual(log, ['a', 'b', 'c'])
  })

  it('applicativeReaderIOEitherSeq', () => {
    const log: Array<string> = []
    const a = _.rightIO<unknown, string, number>(() => log.push('a'))
    const b = _.leftIO(() => {
      log.push('b')
      return 'error'
    })
    const c = _.rightIO(() => log.push('c'))
    const abc = sequenceT(_.ApplicativeSeq)(a, b, c)
    const result = _.run(abc, {})
    assert.deepStrictEqual(result, E.left('error'))
    assert.deepStrictEqual(log, ['a', 'b'])
  })

  // -------------------------------------------------------------------------------------
  // constructors
  // -------------------------------------------------------------------------------------

  it('ask', () => {
    return assert.deepStrictEqual(_.ask<number>()(1)(), E.right(1))
  })

  it('asks', () => {
    return assert.deepStrictEqual(
      _.asks((s: string) => s.length)('foo')(),
      E.right(3),
    )
  })

  it('local', () => {
    const len = (s: string): number => s.length
    assert.deepStrictEqual(
      pipe(
        _.asks((n: number) => n + 1),
        _.local(len),
      )('aaa')(),
      E.right(4),
    )
  })

  it('leftIO', () => {
    assert.deepStrictEqual(_.leftIO(I.of(1))({})(), E.left(1))
  })

  it('rightIO', () => {
    assert.deepStrictEqual(_.rightIO(I.of(1))({})(), E.right(1))
  })

  it('leftReaderIO', () => {
    assert.deepStrictEqual(_.leftReaderIO(RI.readerIO.of(1))({})(), E.left(1))
  })

  it('rightReaderIO', () => {
    assert.deepStrictEqual(_.rightReaderIO(RI.readerIO.of(1))({})(), E.right(1))
  })

  it('rightReader', () => {
    assert.deepStrictEqual(_.rightReader(R.of(1))({})(), E.right(1))
  })

  it('leftReader', () => {
    assert.deepStrictEqual(_.leftReader(R.of(1))({})(), E.left(1))
  })

  it('fromIOEither', () => {
    assert.deepStrictEqual(_.fromIOEither(IE.of(1))({})(), E.right(1))
  })

  it('leftIO', () => {
    assert.deepStrictEqual(_.leftIO(I.of(1))({})(), E.left(1))
  })

  it('fromIOEither', () => {
    assert.deepStrictEqual(_.fromIOEither(() => E.right(1))({})(), E.right(1))
    assert.deepStrictEqual(
      _.fromIOEither(() => E.left('error'))({})(),
      E.left('error'),
    )
  })

  it('fold', () => {
    const fold = _.fold(
      (l: string) => R.of(I.of(l.length)),
      (a: number) => R.of(I.of(a * 2)),
    )
    assert.deepStrictEqual(fold(_.right(1))({})(), 2)
    assert.deepStrictEqual(fold(_.left('err'))({})(), 3)
  })

  it('getOrElse', () => {
    assert.deepStrictEqual(
      pipe(
        _.right(1),
        _.getOrElse((l: string) => R.of(I.of(l.length))),
      )({})(),
      1,
    )
    assert.deepStrictEqual(
      pipe(
        _.left('err'),
        _.getOrElse((l: string) => R.of(I.of(l.length))),
      )({})(),
      3,
    )
  })

  it('orElse', () => {
    assert.deepStrictEqual(
      pipe(
        _.right(1),
        _.orElse((s: string) => _.right(s.length)),
      )({})(),
      E.right(1),
    )
    assert.deepStrictEqual(
      pipe(
        _.left('error'),
        _.orElse(s => _.right(s.length)),
      )({})(),
      E.right(5),
    )
  })

  describe('MonadIO', () => {
    it('fromIO', () => {
      assert.deepStrictEqual(_.fromIO(() => 1)({})(), E.right(1))
    })
  })

  it('swap', () => {
    assert.deepStrictEqual(_.swap(_.right(1))({})(), E.left(1))
    assert.deepStrictEqual(_.swap(_.left('a'))({})(), E.right('a'))
  })

  describe('getSemigroup', () => {
    it('concat', () => {
      const S = _.getSemigroup(semigroupSum)
      assert.deepStrictEqual(
        S.concat(_.left('a'), _.left('b'))({})(),
        E.left('a'),
      )
      assert.deepStrictEqual(
        S.concat(_.left('a'), _.right(2))({})(),
        E.right(2),
      )
      assert.deepStrictEqual(
        S.concat(_.right(1), _.left('b'))({})(),
        E.right(1),
      )
      assert.deepStrictEqual(S.concat(_.right(1), _.right(2))({})(), E.right(3))
    })
  })

  it('getApplyMonoid', () => {
    const M = _.getApplyMonoid(monoidSum)

    assert.deepStrictEqual(M.concat(_.right(1), _.right(2))({})(), E.right(3))
    assert.deepStrictEqual(M.concat(_.right(1), _.left('b'))({})(), E.left('b'))
    assert.deepStrictEqual(M.concat(_.right(1), M.empty)({})(), E.right(1))
    assert.deepStrictEqual(M.concat(M.empty, _.right(1))({})(), E.right(1))
  })

  it('fromReaderEither', () => {
    assert.deepStrictEqual(_.fromReaderEither(RE.left('a'))({})(), E.left('a'))
    assert.deepStrictEqual(_.fromReaderEither(RE.right(1))({})(), E.right(1))
  })

  it('getApplicativeReaderIOValidation', () => {
    const A = _.getApplicativeReaderIOValidation(I.Applicative, semigroupString)
    assert.deepStrictEqual(
      sequenceT(A)(_.left('a'), _.left('b'))(null)(),
      E.left('ab'),
    )
    const AV = _.getReaderIOValidation(semigroupString)
    assert.deepStrictEqual(
      sequenceT(AV)(_.left('a'), _.left('b'))(null)(),
      E.left('ab'),
    )
  })

  it('getAltReaderIOValidation', () => {
    const A = _.getAltReaderIOValidation(semigroupString)
    assert.deepStrictEqual(
      A.alt(_.left('a'), () => _.left('b'))(null)(),
      E.left('ab'),
    )
    const AV = _.getReaderIOValidation(semigroupString)
    assert.deepStrictEqual(
      AV.alt(_.left('a'), () => _.left('b'))(null)(),
      E.left('ab'),
    )
  })

  describe('bracket', () => {
    let log: Array<string> = []

    const acquireFailure = _.left('acquire failure')
    const acquireSuccess = _.right({ res: 'acquire success' })
    const useSuccess = () => _.right('use success')
    const useFailure = () => _.left('use failure')
    const releaseSuccess = () =>
      _.fromIO(() => {
        log.push('release success')
      })
    const releaseFailure = () => _.left('release failure')

    beforeEach(() => {
      log = []
    })

    it('should return the acquire error if acquire fails', () => {
      assert.deepStrictEqual(
        _.bracket(acquireFailure, useSuccess, releaseSuccess)(undefined)(),
        E.left('acquire failure'),
      )
    })

    it('body and release must not be called if acquire fails', () => {
      _.bracket(acquireFailure, useSuccess, releaseSuccess)(undefined)()
      assert.deepStrictEqual(log, [])
    })

    it('should return the use error if use fails and release does not', () => {
      assert.deepStrictEqual(
        _.bracket(acquireSuccess, useFailure, releaseSuccess)(undefined)(),
        E.left('use failure'),
      )
    })

    it('should return the release error if both use and release fail', () => {
      assert.deepStrictEqual(
        _.bracket(acquireSuccess, useFailure, releaseFailure)(undefined)(),
        E.left('release failure'),
      )
    })

    it('release must be called if the body returns', () => {
      _.bracket(acquireSuccess, useSuccess, releaseSuccess)(undefined)()
      assert.deepStrictEqual(log, ['release success'])
    })

    it('release must be called if the body throws', () => {
      _.bracket(acquireSuccess, useFailure, releaseSuccess)(undefined)()
      assert.deepStrictEqual(log, ['release success'])
    })

    it('should return the release error if release fails', () => {
      assert.deepStrictEqual(
        _.bracket(acquireSuccess, useSuccess, releaseFailure)(undefined)(),
        E.left('release failure'),
      )
    })
  })

  it('chainEitherK', () => {
    const f = (s: string) => E.right(s.length)
    assert.deepStrictEqual(
      pipe(_.right('a'), _.chainEitherK(f))(undefined)(),
      E.right(1),
    )
  })

  it('chainIOEitherK', () => {
    const f = (s: string) => IE.right(s.length)
    assert.deepStrictEqual(
      pipe(_.right('a'), _.chainIOEitherK(f))(undefined)(),
      E.right(1),
    )
  })

  it('chainIOEitherK', () => {
    const f = (s: string) => IE.right(s.length)
    assert.deepStrictEqual(
      pipe(_.right('a'), _.chainIOEitherK(f))(undefined)(),
      E.right(1),
    )
  })

  // -------------------------------------------------------------------------------------
  // utils
  // -------------------------------------------------------------------------------------

  it('do notation', () => {
    assert.deepStrictEqual(
      pipe(
        _.right<void, string, number>(1),
        _.bindTo('a'),
        _.bind('b', () => _.right('b')),
      )(undefined)(),
      E.right({ a: 1, b: 'b' }),
    )
  })

  it('apS', () => {
    assert.deepStrictEqual(
      pipe(
        _.right<void, string, number>(1),
        _.bindTo('a'),
        _.apS('b', _.right('b')),
      )(undefined)(),
      E.right({ a: 1, b: 'b' }),
    )
  })

  describe('array utils', () => {
    it('sequenceArray', () => {
      const arr = A.range(0, 10)
      assert.deepStrictEqual(
        pipe(arr, A.map(_.of), _.sequenceArray)(undefined)(),
        E.right(arr),
      )
      assert.deepStrictEqual(
        pipe(
          arr,
          A.map(
            _.fromPredicate(
              x => x < 5,
              () => 'Error',
            ),
          ),
          _.sequenceArray,
        )(undefined)(),
        E.left('Error'),
      )
    })

    it('traverseArray', () => {
      const arr = A.range(0, 10)
      assert.deepStrictEqual(
        pipe(arr, _.traverseArray(_.of))(undefined)(),
        E.right(arr),
      )
      assert.deepStrictEqual(
        pipe(
          arr,
          _.traverseArray(
            _.fromPredicate(
              x => x < 5,
              () => 'Error',
            ),
          ),
        )(undefined)(),
        E.left('Error'),
      )
    })

    it('traverseArrayWithIndex', () => {
      const arr = A.replicate(3, 1)
      assert.deepStrictEqual(
        pipe(
          arr,
          _.traverseArrayWithIndex((index, _data) => _.of(index)),
        )(undefined)(),
        E.right([0, 1, 2]),
      )
      assert.deepStrictEqual(
        pipe(
          arr,
          _.traverseArrayWithIndex((index, _data) =>
            pipe(
              index,
              _.fromPredicate(
                x => x < 1,
                () => 'Error',
              ),
            ),
          ),
        )(undefined)(),
        E.left('Error'),
      )
    })

    it('sequenceArray', () => {
      const arr = A.range(0, 10)
      assert.deepStrictEqual(
        pipe(arr, A.map(_.of), _.sequenceArray)(undefined)(),
        E.right(arr),
      )
      assert.deepStrictEqual(
        pipe(
          arr,
          A.map(
            _.fromPredicate(
              x => x < 5,
              () => 'Error',
            ),
          ),
          _.sequenceArray,
        )(undefined)(),
        E.left('Error'),
      )
    })

    it('traverseArray', () => {
      const arr = A.range(0, 10)
      assert.deepStrictEqual(
        pipe(arr, _.traverseArray(_.of))(undefined)(),
        E.right(arr),
      )
      assert.deepStrictEqual(
        pipe(
          arr,
          _.traverseArray(
            _.fromPredicate(
              x => x < 5,
              () => 'Error',
            ),
          ),
        )(undefined)(),
        E.left('Error'),
      )
    })

    it('traverseArrayWithIndex', () => {
      const arr = A.replicate(3, 1)
      assert.deepStrictEqual(
        pipe(
          arr,
          _.traverseArrayWithIndex((index, _data) => _.of(index)),
        )(undefined)(),
        E.right([0, 1, 2]),
      )
      assert.deepStrictEqual(
        pipe(
          arr,
          _.traverseArrayWithIndex((index, _data) =>
            pipe(
              index,
              _.fromPredicate(
                x => x < 1,
                () => 'Error',
              ),
            ),
          ),
        )(undefined)(),
        E.left('Error'),
      )
    })
  })
})
