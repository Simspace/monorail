import * as E from 'fp-ts/lib/Either';
import * as Eq from 'fp-ts/lib/Eq';
import { Predicate } from 'fp-ts/lib/function';
import * as NEA from 'fp-ts/lib/NonEmptyArray';
import * as O from 'fp-ts/lib/Option';
export * from 'fp-ts/lib/Array';
/**
 * Curried, pipeable version of concat. Note that the arguments are in order for use with `pipe`, so the argument order might seem backwards at first glance.
 * The first argument is passed as an object with the key of `suffix` to avoid misuse.
 *
 * The result is `prefix.concat(suffix)`
 *
 * @example
 * ```typescript
 * A.concat({ suffix: [1, 2] })([3, 4]) // [3,4,2,1]
 *
 * pipe(
 *   [1,2],
 *   A.concat({ suffix: [3, 4] })
 * ) // [1,2,3,4]
 * ```
 */
export declare const concat: <A>({ suffix }: {
    suffix: A[];
}) => (prefix: A[]) => A[];
/**
 * Curried, pipeable version of concat with arguments flipped for concatenating at the start of another Array. The result is prefix.concat(suffix).
 * The first argument is passed as an object with the key of `prefix` to avoid misuse.
 *
 * @example
 * ```typescript
 * A.precat({ prefix: [1, 2] })([3, 4]) // [1,2,3,4]
 *
 * pipe(
 *   [1,2],
 *   A.precat({ prefix: [3, 4] })
 * ) // [3,4,1,2]
 * ```
 */
export declare const precat: <A>({ prefix }: {
    prefix: A[];
}) => (suffix: A[]) => A[];
/**
 * Curried, pipeable version of `snoc` (aka append), for adding an item to the end of an Array
 */
export declare const append: <A>(x: A) => (xs: A[]) => NEA.NonEmptyArray<A>;
/**
 * Curried, pipeable version of `cons`, for adding an item to the beginning of an Array
 */
export declare const prepend: <A>(x: A) => (xs: A[]) => NEA.NonEmptyArray<A>;
/**
 * Pipeable forEach. Runs an effect on each element of the input Array, then returns the input Array unchanged.
 */
export declare const forEach: <A>(f: (x: A) => void) => (xs: A[]) => A[];
/**
 * Pipeable forEach with index. Runs an effect on each element of the input Array, then returns the Array unchanged.
 */
export declare const forEachWithIndex: <A>(f: (x: A, i: number) => void) => (xs: A[]) => A[];
/**
 * Tests whether or not something is a member of an array via strict (===) equality
 */
export declare const elemWithEqStrict: <A>(x: A) => (xs: A[]) => boolean;
/**
 * Tests whether or not something is a member of an array based on the supplied Eq instance
 *
 * Same as base A.elem, but a more pipeable signature. Named `elemP` to disambiguate from base `elem`.
 */
export declare const elemP: <A>(eq: Eq.Eq<A>) => (x: A) => (xs: A[]) => boolean;
/**
 * Returns true if any values from xs exist in ys
 * @param E the Eq insance that's used to compare
 */
export declare const elemAny: <A>(eq: Eq.Eq<A>) => (xs: A[]) => (ys: A[]) => boolean;
/**
 * Gets the length of an ArrayLike or string
 */
export declare const len: (xs: ArrayLike<unknown> | string) => number;
/**
 * Lift a function of two arguments to a function which accepts and returns
 * those same values in the context of Options
 */
export declare const liftOption2: <A, B, C>(f: (a: A) => (b: B) => C) => (oa: O.Option<A>) => (ob: O.Option<B>) => O.Option<C>;
/**
 * Like `intersperse`, but takes a map function that returns the item to be
 * "interspersed" instead of directly taking the item itself
 */
export declare const intersperseMap: <A>(f: (a: A) => A) => (as: A[]) => A[];
/**
 * An indexed version of `intersperseMap`-- adds an index to the map function
 */
export declare const intersperseMapWithIndex: <A>(f: (a: A, i: number) => A) => (as: A[]) => A[];
/**
 * Variant of separate that returns the resulting arrays in a tuple
 */
export declare const separateT: <L, R>(eithers: E.Either<L, R>[]) => [L[], R[]];
/**
 * Returns a boolean indicating whether the specified predicate function
 * holds true for any element of an array.
 */
export declare const any: <A>(as: A[], p: Predicate<A>) => boolean;
/**
 * Returns a boolean indicating whether the specified predicate function
 * holds true for all elements of an array.
 */
export declare const all: <A>(as: A[], p: Predicate<A>) => boolean;
/**
 * Returns a boolean indicating whether the specified predicate function
 * holds true for no elements of an array.
 */
export declare const notAny: <A>(as: A[], p: Predicate<A>) => boolean;
/**
 * Returns an array of elements which are in both input arrays but not in their
 * intersection. Also known as symmetric difference or disjunctive union.
 */
export declare const xor: <A>(eq: Eq.Eq<A>) => (xs: A[], ys: A[]) => A[];
/**
 * Returns an object made up of a keys from the result the accessor function
 */
export declare const arrayToRecord: <T, V>(keyAccessor: (curr: T) => string, mapValue?: ((curr: T) => V) | undefined) => (arr: T[]) => Record<string, V>;
/**
 * Checks if an array is *not* empty
 */
export declare const isNotEmpty: <T>(arr: T[]) => boolean;
/**
 * removes all occurences of an element from an Array
 * @param E equals instance for comapring elements in the array
 * @param t the value to remove
 */
export declare const without: <T>(eq: Eq.Eq<T>, t: T) => (xs: T[]) => T[];
/**
 * Converts an Option into an Array, if the Option is none,
 * an empty array will be returned,
 * if the option is some, and array with the value will be returned
 * @param o the Option to convert
 */
export declare const fromOption: <T>(o: O.Option<T>) => T[];
/**
 * Converts an Either into an Array, returning an empty array if the either
 * is Left, and an array of length one with the right value if the either
 * is Right
 * @param e the Either to convert
 */
export declare const fromEither: <L, R>(e: E.Either<L, R>) => R[];
/**
 * Adds or removes an item from an Array, depending on whether it's already in the Array
 */
export declare const toggle: <A>(eq: Eq.Eq<A>) => (a: A) => (as: A[]) => A[];
/**
 * Calculates the run length encoding of an array. Given a sorted array, this is
 * equivalent to finding the counts of each entry.
 *
 * @example
 *
 * expect(rle(eqString)('aaabba'.split(''))).toEqual([
 *   ['a', 3], ['b', 2], ['a', 1]
 * ])
 */
export declare const rle: <A>(eq: Eq.Eq<A>) => (as: A[]) => [A, number][];
declare type ExtractValues<T extends Array<Array<unknown>>> = {
    [K in keyof T]: T[K] extends Array<infer S> ? S : never;
};
/**
 * Variadic zip with type inference.
 *
 * Note: fp-ts Array has a more naive zip function, but because this is better-typed,
 * we'll override the base `zip` function with this. If you want the base `zip`, you can import
 * it directly from `fp-ts/lib/Array`.
 *
 * @example
 * declare const ns: Array<number>
 * declare const ss: Array<string>
 * declare const bs: Array<boolean>
 * zip(ns, ns, ns) // :: Array<[number, number, number]>
 * zip(ss, ns) // :: Array<[string, number]>
 * zip(bs, ns, ss, ss) // :: Array<[boolean, number, string, string]>
 */
export declare const zip: <As extends unknown[][]>(...as: As) => ExtractValues<As>[];
/**
 * Immutable, predicate-based splice
 */
export declare const spliceWhere: <A>(predicate: Predicate<A>) => (mapMatch: (a: A) => A[], mapNotMatch?: (a: A) => A) => (arr: A[]) => A[];
/**
 * Finds first element in an array for which `f` returns a `some`
 */
export declare const findFirstMapWithIndex: <A, B>(f: (i: number, a: A) => O.Option<B>) => (as: A[]) => O.Option<B>;
/**
 * Array.compact that works on Array<Nullable> as opposed to Array<Option>
 * Does not affect falsey values
 * @param as
 */
export declare const compactNullable: <T>(as: T[]) => T[];
