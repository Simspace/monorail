import { Either } from 'fp-ts/lib/Either';
/**
 * Standalone version of fp-ts' `fold` for Eithers
 */
export declare const fold: <B, L, A>(x: Either<L, A>, whenLeft: (l: L) => B, whenRight: (a: A) => B) => B;
