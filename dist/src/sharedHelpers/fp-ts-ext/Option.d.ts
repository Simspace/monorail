import { O } from '@monorail/sharedHelpers/fp-ts-imports';
import { Option } from 'fp-ts/lib/Option';
import { ReactRenderable } from '@monorail/sharedHelpers/typeLevel';
import { Applicative1, Applicative2, Applicative2C } from 'fp-ts/lib/Applicative';
import { URIS, URIS2, Kind, Kind2 } from 'fp-ts/lib/HKT';
/**
 * type guard for Option
 */
export declare const isOption: <A>(x: unknown) => x is O.Option<A>;
/**
 * A specialized (partially applied with a null default) version of Option's
 * `fold` method that returns null when given a `None` or a `ReactNode` when
 * given a `Some`
 */
export declare const renderOnSome: <A>(a: O.Option<A>, onSome: (a: A) => ReactRenderable) => ReactRenderable;
/**
 * Curried, non-lazy version of fp-ts' `getOrElse`. Used to extract the value
 * from a Some or return a default value in place of a None. Also
 * known as `fromMaybe` in Haskell, PureScript, etc.
 */
export declare const getOrElse: <A>(a: A) => (b: O.Option<A>) => A;
/**
 * Partially applied version of `getOrElse` providing an empty array
 * as the default argument
 */
export declare const getOrEmptyArray: <A>(opt: O.Option<A[]>) => A[];
/**
 * Partially applied version of `getOrElse` providing an empty string
 * as the default argument
 */
export declare const getOrEmptyString: (b: O.Option<string>) => string;
/**
 * Partially applied version of `getOrElse` providing the number zero
 * as the default argument
 */
export declare const getOrZero: (b: O.Option<number>) => number;
/**
 * Converts truthy/falsy values into Options, like `fromNullable` from
 * fp-ts, but converts all falsy values, instead of just null or undefined,
 * into Nones
 */
export declare const fromTruthyFalsy: <A>(x: A) => O.Option<A>;
/**
 * Converts a None into false, and a Some<T> into a boolean
 */
export declare const toBoolean: <A>(x: O.Option<A>) => boolean;
/**
 * Folds an option down into either an empty array or a single-element array containing
 * the value from within the Some. Useful in conjunction with the spread operator.
 */
export declare const toSpreadable: <A>(fa: Option<A>) => Array<A>;
/**
 * Returns true if the option is false or if the predicate returns true when applied to the wrapped value
 */
export declare const all: <A>(x: O.Option<A>, predicate: (a: A) => boolean) => boolean;
/**
 * Traverse over an Option into an applicative.
 *
 * usage example:
 *
 * ```ts
 * import { pipe } from 'fp-ts/lib/pipeable'
 * import * as IO from 'fp-ts/lib/IO'
 * import { newIO } from '@monorail/sharedHelpers/fp-ts-ext/IO'
 *
 * const foo: Option<string> = some("foo")
 *
 * pipe(
 *   foo,
 *   opTraverse(IO.io)(s => newIO(() => document.write(s)))
 * )()
 * ```
 * @param Ap Applicative instance
 * @param f function that returns an instance of an Ap applicative
 */
export declare function opTraverse<F extends URIS2, E>(Ap: Applicative2C<F, E>): <A, B>(f: (a: A) => Kind2<F, E, B>) => (o: Option<A>) => Kind2<F, E, Option<B>>;
export declare function opTraverse<F extends URIS2>(Ap: Applicative2<F>): <A, B, E>(f: (a: A) => Kind2<F, E, B>) => (o: Option<A>) => Kind2<F, E, Option<B>>;
export declare function opTraverse<F extends URIS>(Ap: Applicative1<F>): <A, B>(f: (a: A) => Kind<F, B>) => (o: Option<A>) => Kind<F, Option<B>>;
//# sourceMappingURL=Option.d.ts.map