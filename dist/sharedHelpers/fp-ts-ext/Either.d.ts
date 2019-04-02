import { Either } from 'fp-ts/lib/Either';
/**
 * Standalone version of fp-ts' `fold` for Eithers
 */
export declare const fold: <B, L, A>(x: Either<L, A>, onLeft: (l: L) => B, onRight: (a: A) => B) => B;
