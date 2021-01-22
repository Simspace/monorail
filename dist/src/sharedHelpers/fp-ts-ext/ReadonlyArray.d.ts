import * as Eq from 'fp-ts/lib/Eq';
import * as O from 'fp-ts/lib/Option';
export * from 'fp-ts/lib/ReadonlyArray';
/**
 * Unsafely coerce the ReadonlyArray<A> to an Array<A>
 */
export declare const unsafeCoerceToArray: <A>(readonlyArray: readonly A[]) => A[];
/**
 * Unsafely coerce an Array<A> to a ReadonlyArray<A>
 */
export declare const unsafeCoerceFromArray: <A>(array: A[]) => readonly A[];
/**
 * Gets the head and tail parts of the array as an object, if possible.
 *
 * This is often referred to "uncons," as it's the opposite of constructing an array with a head and tail.
 */
export declare const headAndTailS: <A>(a: readonly A[]) => O.Option<{
    head: A;
    tail: readonly A[];
}>;
/**
 * Gets the head and tail parts of the array as a tuple, if possible.
 *
 * This is often referred to "uncons," as it's the opposite of constructing an array with a head and tail.
 */
export declare const headAndTailT: <A>(a: readonly A[]) => O.Option<[A, readonly A[]]>;
/**
 * Gets the init and last parts of the array as an object, if possible.
 *
 * This is like an "uncons" for the end of the array.
 */
export declare const initAndLastS: <A>(a: readonly A[]) => O.Option<{
    init: readonly A[];
    last: A;
}>;
/**
 * Gets the init and last parts of the array as a tuple, if possible.
 *
 * This is like an "uncons" for the end of the array.
 */
export declare const initAndLastT: <A>(a: readonly A[]) => O.Option<[readonly A[], A]>;
/**
 * Returns an array of elements which are in both input arrays but not in their
 * intersection. Also known as symmetric difference or disjunctive union.
 */
export declare const xor: <A>(eq: Eq.Eq<A>) => (xs: readonly A[], ys: readonly A[]) => A[];
