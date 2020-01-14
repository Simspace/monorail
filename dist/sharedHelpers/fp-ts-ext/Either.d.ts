import { Either } from 'fp-ts/lib/Either';
import { Ord } from 'fp-ts/lib/Ord';
/**
 * Standalone version of fp-ts' `fold` for Eithers
 */
export declare const fold: <B, L, A>(x: Either<L, A>, onLeft: (l: L) => B, onRight: (a: A) => B) => B;
/**
 * Derives an `Ord` instance for `Either<A, B>` given an `Ord<A>` and an
 * `Ord<B>`.
 */
export declare const getOrd: <A, B>(ordA: Ord<A>, ordB: Ord<B>) => Ord<Either<A, B>>;
