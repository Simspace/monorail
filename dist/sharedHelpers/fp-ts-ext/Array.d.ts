import { Either } from 'fp-ts/lib/Either';
import { Eq } from 'fp-ts/lib/Eq';
import { Predicate } from 'fp-ts/lib/function';
import { IO } from 'fp-ts/lib/IO';
import { Option } from 'fp-ts/lib/Option';
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
 * Gets the length of an ArrayLike or string
 */
export declare const len: (xs: string | ArrayLike<unknown>) => number;
/**
 * sequence utility for the Option instance of Applicative and the Array
 * instance of Traversable2v1
 */
export declare const sequenceOptions: <A>(ta: Option<A>[]) => Option<A[]>;
/**
 * sequence utility for the Either instance of Applicative and the Array
 * instance of Traversable2v1
 */
export declare const sequenceEithers: <FL, A>(ta: Either<FL, A>[]) => Either<FL, A[]>;
/**
 * sequence utility for the Task instance of Applicative and the Array
 * instance of Traversable2v1
 */
export declare const sequenceTasks: <A>(ta: import("fp-ts/lib/Task").Task<A>[]) => import("fp-ts/lib/Task").Task<A[]>;
/**
 * sequence utility for the TaskEither instance of Applicative and the Array
 * instance of Traversable2v1
 */
export declare const sequenceTaskEithers: <FL, A>(ta: import("fp-ts/lib/TaskEither").TaskEither<FL, A>[]) => import("fp-ts/lib/TaskEither").TaskEither<FL, A[]>;
/**
 * sequence utility for the RemoteData instance of Applicative and the Array
 * instance of Traversable2v1
 */
export declare const sequenceRemoteData: <FL, A>(ta: import("@devexperts/remote-data-ts").RemoteData<FL, A>[]) => import("@devexperts/remote-data-ts").RemoteData<FL, A[]>;
/**
 * traverse utility for the Option instance of Applicative and the Array
 * instance of Traversable2v1
 */
export declare const traverseOptions: <A, B>(ta: A[], f: (a: A) => Option<B>) => Option<B[]>;
/**
 * traverse utility for the Either instance of Applicative and the Array
 * instance of Traversable2v1
 */
export declare const traverseEithers: <FL, A, B>(ta: A[], f: (a: A) => Either<FL, B>) => Either<FL, B[]>;
/**
 * traverse utility for the Task instance of Applicative and the Array
 * instance of Traversable2v1
 */
export declare const traverseTasks: <A, B>(ta: A[], f: (a: A) => import("fp-ts/lib/Task").Task<B>) => import("fp-ts/lib/Task").Task<B[]>;
/**
 * traverse utility for the TaskEither instance of Applicative and the Array
 * instance of Traversable2v1
 */
export declare const traverseTaskEithers: <FL, A, B>(ta: A[], f: (a: A) => import("fp-ts/lib/TaskEither").TaskEither<FL, B>) => import("fp-ts/lib/TaskEither").TaskEither<FL, B[]>;
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
 * Sorts an array of strings alphabetically
 */
export declare const sortByAlpha: (as: string[]) => string[];
/**
 * Sorts an array of strings numerically
 */
export declare const sortByNumeric: (as: number[]) => number[];
/**
 * Lift a function of two arguments to a function which accepts and returns
 * those same values in the context of Options
 */
export declare const liftOption2: <A, B, C>(f: import("fp-ts/lib/function").Curried2<A, B, C>) => import("fp-ts/lib/function").Curried2<Option<A>, Option<B>, Option<C>>;
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
export declare const xor: <A>(E: Eq<A>) => (xs: A[], ys: A[]) => A[];
