import { Either } from 'fp-ts/lib/Either'

/**
 * Standalone version of fp-ts' `fold` for Eithers
 */
export const fold = <B, L, A>(
  x: Either<L, A>,
  whenLeft: (l: L) => B,
  whenRight: (a: A) => B,
) => x.fold(whenLeft, whenRight)
