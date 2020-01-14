import { Either, isLeft, isRight } from 'fp-ts/lib/Either'
import { Ord } from 'fp-ts/lib/Ord'

/**
 * Standalone version of fp-ts' `fold` for Eithers
 */
export const fold = <B, L, A>(
  x: Either<L, A>,
  onLeft: (l: L) => B,
  onRight: (a: A) => B,
) => x.fold(onLeft, onRight)

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
      ? ordA.equals(x.value, y.value)
      : isRight(x) && isRight(y)
      ? ordB.equals(x.value, y.value)
      : false,
  compare: (x, y) =>
    isLeft(x) && isLeft(y)
      ? ordA.compare(x.value, y.value)
      : isRight(x) && isRight(y)
      ? ordB.compare(x.value, y.value)
      : isLeft(x) && isRight(y)
      ? -1
      : 1,
})
