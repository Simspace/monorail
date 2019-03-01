import { Option } from 'fp-ts/lib/Option';
import { Prism } from 'monocle-ts';
import { ReactNode } from 'react';
/**
 * type guard for Option
 */
export declare const isOption: <A>(x: any) => x is Option<A>;
/**
 * Standalone version of fp-ts' `fold` for Options. Like `getOrElse`,
 * but with a mapping transformation for the value in a `Some`
 */
export declare const fold: <A, B>(a: Option<A>, b: B, whenSome: (a: A) => B) => B;
/**
 * A specialized (partially applied with a null default) version of Option's
 * `fold` method that returns null when given a `None` or a `ReactNode` when
 * given a `Some`
 */
export declare const renderOnSome: <A>(a: Option<A>, onSome: (a: A) => ReactNode) => ReactNode;
/**
 * Curried version of fp-ts' `getOrElse`. Used to extract the value
 * from a Some or return a default value in place of a None. Also
 * known as `fromMaybe` in Haskell, PureScript, etc.
 */
export declare const getOrElse: <A>(a: A) => (b: Option<A>) => A;
/**
 * Partially applied version of `getOrElse` providing an empty array
 * as the default argument
 */
export declare const getOrEmptyArray: <A extends []>(opt: Option<A>) => A;
/**
 * Partially applied version of `getOrElse` providing an empty string
 * as the default argument
 */
export declare const getOrEmptyString: (b: Option<string>) => string;
/**
 * Partially applied version of `getOrElse` providing the number zero
 * as the default argument
 */
export declare const getOrZero: (b: Option<number>) => number;
/**
 * Converts truthy/falsey values into Options, like `fromNullable` from
 * fp-ts, but converts all falsey values, instead of just null or undefined,
 * into Nones
 */
export declare const fromTruthyFalsey: <A>(x: A) => Option<A>;
/**
 * Converts a None into false, and a Some<T> into a boolean
 */
export declare const toBoolean: <A>(x: Option<A>) => boolean;
/**
 * Prism constructor function
 */
export declare const prism: <S, A>(reverseGet: (b: A) => S) => (getOption: (s: S) => Option<A>) => Prism<S, A>;
/**
 * Folds an option down into either an empty array or a single-element array containing
 * the value from within the Some. Useful in conjunction with the spread operator.
 */
export declare const toSpreadable: <A>(fa: Option<A>) => A[];
