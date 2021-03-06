import { Either, fold, isLeft, isRight, right } from 'fp-ts/lib/Either'
import { Ord } from 'fp-ts/lib/Ord'
import { pipe } from 'fp-ts/lib/pipeable'

import { isNil } from '@monorail/sharedHelpers/typeGuards'

export * from 'fp-ts/lib/Either'

/**
 * type guard for Either
 */
export const isEither = (x: unknown): x is Either<unknown, unknown> => {
  if (!isNil(x)) {
    const x_ = x as {
      left?: unknown
      right?: unknown
      _tag?: unknown
    }
    return (
      !isNil(x_.right) ||
      (!isNil(x_.left) &&
        ((!isNil(x_._tag) && x_._tag === 'Left') || x_._tag === 'Right'))
    )
  }
  return false
}

/**
 * Derives an `Ord` instance for `Either<A, B>` given an `Ord<A>` and an
 * `Ord<B>`.
 */
export const getOrd = <A, B>(
  ordA: Ord<A>,
  ordB: Ord<B>,
): Ord<Either<A, B>> => ({
  equals: (x, y) =>
    isLeft(x) && isLeft(y)
      ? ordA.equals(x.left, y.left)
      : isRight(x) && isRight(y)
      ? ordB.equals(x.right, y.right)
      : false,
  compare: (x, y) =>
    isLeft(x) && isLeft(y)
      ? ordA.compare(x.left, y.left)
      : isRight(x) && isRight(y)
      ? ordB.compare(x.right, y.right)
      : isLeft(x) && isRight(y)
      ? -1
      : 1,
})

export const orElseW = <E, A, B>(f: (a: E) => Either<E, B>) => (
  ma: Either<E, A>,
): Either<E, A | B> => pipe(ma, fold<E, A, Either<E, A | B>>(f, right))

export const toUnion = <E, A>(either: Either<E, A>): E | A =>
  pipe(
    either,
    fold(
      (e: E): E | A => e,
      (a: A): E | A => a,
    ),
  )
