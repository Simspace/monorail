import { Either } from 'fp-ts/lib/Either';
import { Eq } from 'fp-ts/lib/Eq';
import { Predicate } from 'fp-ts/lib/function';
import { IO } from 'fp-ts/lib/IO';
import { Option } from 'fp-ts/lib/Option';
import { O } from '@monorail/sharedHelpers/fp-ts-imports';
/**
 * Curried version of fp-ts' `map` for Arrays
 */
export declare const map: <A, B>(f: (x: A) => B) => (xs: A[]) => B[];
/**
 * Curried version of fp-ts' `concat`/'alt' for Arrays.
 */
export declare const concat: <A>(xs: A[]) => (ys: A[]) => A[];
/**
 * Curried version of fp-ts' `concat` or `alt` for Arrays
 * with its arguments reversed
 */
export declare const concatFlipped: <A>(xs: A[]) => (ys: A[]) => A[];
/**
 * Function wrapper around the native `array.forEach`
 */
export declare const forEach: <A>(xs: A[], f: (x: A) => void) => void;
/**
 * Pipable version of `forEach` helper.
 */
export declare const forEachPipe: <A>(f: (x: A) => void) => (xs: A[]) => void;
/**
 * Function wrapper around the native `array.forEach` including an index
 */
export declare const forEachWithIndex: <A>(xs: A[], f: (x: A, i: number) => void) => void;
/**
 * Runs each IO<A> in an Array<IO<A>>, ignoring their return values
 */
export declare const runIOs: <A>(xs: IO<A>[]) => void;
/**
 * Tests whether or not something is a member of an array via strict equality
 */
export declare const contains: <A>(x: A) => (xs: A[]) => boolean;
/**
 * Tests whether or not something is a member of an array based on the supplied Eq instance
 */
export declare const containsEq: <A>(eq: Eq<A>) => (x: A) => (xs: A[]) => boolean;
/**
 * Returns true if any values from xs exist in ys
 * @param E the Eq insance that's used to compare
 */
export declare const containsAny: <A>(eq: Eq<A>) => (xs: A[]) => (ys: A[]) => boolean;
/**
 * Gets the length of an ArrayLike or string
 */
export declare const len: (xs: ArrayLike<unknown> | string) => number;
/**
 * sequence utility for the Option instance of Applicative and the Array
 * instance of Traversable2v1
 */
export declare const sequenceOptions: <A>(ta: Option<A>[]) => Option<A[]>;
/**
 * sequence utility for the Either instance of Applicative and the Array
 * instance of Traversable2v1
 */
export declare const sequenceEithers: <E, A>(ta: Either<E, A>[]) => Either<E, A[]>;
/**
 * sequence utility for the Task instance of Applicative and the Array
 * instance of Traversable2v1
 */
export declare const sequenceTasks: <A>(ta: import("fp-ts/lib/Task").Task<A>[]) => import("fp-ts/lib/Task").Task<A[]>;
/**
 * sequence utility for the TaskEither instance of Applicative and the Array
 * instance of Traversable2v1
 */
export declare const sequenceTaskEithers: <E, A>(ta: import("fp-ts/lib/TaskEither").TaskEither<E, A>[]) => import("fp-ts/lib/TaskEither").TaskEither<E, A[]>;
/**
 * sequence utility for the RemoteData instance of Applicative and the Array
 * instance of Traversable2v1
 */
export declare const sequenceRemoteData: <S, R, E, A>(ta: never[]) => never;
/**
 * traverse utility for the Option instance of Applicative and the Array
 * instance of Traversable2v1
 */
export declare const traverseOptions: <A, B>(ta: A[], f: (a: A) => Option<B>) => Option<B[]>;
/**
 * traverse utility for the Either instance of Applicative and the Array
 * instance of Traversable2v1
 */
export declare const traverseEithers: <A, E, B>(ta: A[], f: (a: A) => Either<E, B>) => Either<E, B[]>;
/**
 * traverse utility for the Task instance of Applicative and the Array
 * instance of Traversable2v1
 */
export declare const traverseTasks: <A, B>(ta: A[], f: (a: A) => import("fp-ts/lib/Task").Task<B>) => import("fp-ts/lib/Task").Task<B[]>;
/**
 * traverse utility for the TaskEither instance of Applicative and the Array
 * instance of Traversable2v1
 */
export declare const traverseTaskEithers: <A, E, B>(ta: A[], f: (a: A) => import("fp-ts/lib/TaskEither").TaskEither<E, B>) => import("fp-ts/lib/TaskEither").TaskEither<E, B[]>;
/**
 * Type representing the Left and Right values of an Array of Eithers
 */
export interface LeftsAndRights<L, A> {
    lefts: Array<L>;
    rights: Array<A>;
}
/**
 * Gets both the Lefts and Rights from an Array of Eithers simultaneously
 */
export declare const leftsAndRights: <L, A>(xs: Either<L, A>[]) => LeftsAndRights<L, A>;
/**
 * Splits an Array of eithers using {@link leftsAndRights},
 * but wraps it in a tuple for easier renaming
 * @param xs the array of Eithers to split
 */
export declare const splitEithers: <L, R>(xs: Either<L, R>[]) => [L[], R[]];
/**
 * Sorts an array of strings alphabetically
 */
export declare const sortByAlpha: <A extends string>(as: A[]) => A[];
/**
 * Sorts an array of strings numerically
 */
export declare const sortByNumeric: <A extends number>(as: A[]) => A[];
/**
 * Lift a function of two arguments to a function which accepts and returns
 * those same values in the context of Options
 */
export declare const liftOption2: <A, B, C>(f: (a: A) => (b: B) => C) => (oa: Option<A>) => (ob: Option<B>) => Option<C>;
/**
 * Takes an element and a list and "intersperses", or "mixes in", that element
 * between the elements of the list
 */
export declare const intersperse: <A>(a: A, as: A[]) => A[];
/**
 * Like `intersperse`, but takes a map function that returns the item to be
 * "interspersed" instead of directly taking the item itself
 */
export declare const intersperseMap: <A>(f: (a: A) => A, as: A[]) => A[];
/**
 * An indexed version of `intersperseMap`-- adds an index to the map function
 */
export declare const intersperseMapWithIndex: <A>(f: (a: A, i: number) => A, as: A[]) => A[];
/**
 * Returns a boolean indicating whether or not the specified predicate function
 * holds true for any element of an array.
 */
export declare const any: <A>(as: A[], p: Predicate<A>) => boolean;
/**
 * Returns a boolean indicating whether or not the specified predicate function
 * holds true for all elements of an array.
 */
export declare const all: <A>(as: A[], p: Predicate<A>) => boolean;
/**
 * Returns a boolean indicating whether or not the specified predicate function
 * holds true for no elements of an array.
 */
export declare const notAny: <A>(as: A[], p: Predicate<A>) => boolean;
/**
 * Returns an array of elements which are in both input arrays but not in their
 * intersection. Also known as symmetric difference or disjunctive union.
 */
export declare const xor: <A>(eq: Eq<A>) => (xs: A[], ys: A[]) => A[];
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
export declare const without: <T>(eq: Eq<T>, t: T) => (xs: T[]) => T[];
/**
 * Converts an Option into an Array, if the Option is none,
 * an empty array will be returned,
 * if the option is some, and array with the value will be returned
 * @param o the Option to convert
 */
export declare const fromOption: <T>(o: Option<T>) => T[];
/**
 * Converts an Either into an Array, returning an empty array if the either
 * is Left, and an array of length one with the right value if the either
 * is Right
 * @param e the Either to convert
 */
export declare const fromEither: <L, R>(e: Either<L, R>) => R[];
export declare const toggle: <A>(eq: Eq<A>) => (a: A) => (as: A[]) => A[];
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
export declare const rle: <A>(eq: Eq<A>) => (as: A[]) => [A, number][];
declare type ExtractValues<T extends Array<Array<unknown>>> = {
    [K in keyof T]: T[K] extends Array<infer S> ? S : never;
};
/**
 * Variadic zip with type inference.
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
export declare const findFirstMapWithIndex: <A, B>(f: (i: number, a: A) => Option<B>) => (as: A[]) => Option<B>;
/**
 * Array.compact that works on Array<Nullable> as opposed to Array<Option>
 * Does not affect falsey values
 * @param as
 */
export declare const compactNullable: <T>(as: T[]) => T[];
export {};
