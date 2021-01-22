import { Either } from 'fp-ts/lib/Either';
import { Ord } from 'fp-ts/lib/Ord';
export * from 'fp-ts/lib/Either';
/**
 * type guard for Either
 */
export declare const isEither: (x: unknown) => x is Either<unknown, unknown>;
/**
 * Derives an `Ord` instance for `Either<A, B>` given an `Ord<A>` and an
 * `Ord<B>`.
 */
export declare const getOrd: <A, B>(ordA: Ord<A>, ordB: Ord<B>) => Ord<Either<A, B>>;
export declare const orElseW: <E, A, B>(f: (a: E) => Either<E, B>) => (ma: Either<E, A>) => Either<E, A | B>;
export declare const toUnion: <E, A>(either: Either<E, A>) => E | A;
