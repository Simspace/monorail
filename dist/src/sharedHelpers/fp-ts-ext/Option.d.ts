import { Applicative1, Applicative2, Applicative2C } from 'fp-ts/lib/Applicative';
import { Kind, Kind2, URIS, URIS2 } from 'fp-ts/lib/HKT';
import { Option } from 'fp-ts/lib/Option';
import { ReactRenderable } from '@monorail/sharedHelpers/typeLevel';
/**
 * type guard for Option
 */
export declare const isOption: <A>(x: unknown) => x is Option<A>;
/**
 * A specialized (partially applied with a null default) version of Option's
 * `fold` method that returns null when given a `None` or a `ReactNode` when
 * given a `Some`
 */
export declare const renderOnSome: <A>(a: Option<A>, onSome: (a: A) => ReactRenderable) => ReactRenderable;
/**
 * Curried, non-lazy version of fp-ts' `getOrElse`. Used to extract the value
 * from a Some or return a default value in place of a None. Also
 * known as `fromMaybe` in Haskell, PureScript, etc.
 */
export declare const getOrElse: <A>(a: A) => (b: Option<A>) => A;
/**
 * Partially applied version of `getOrElse` providing an empty string
 * as the default argument
 */
export declare const getOrEmptyString: (b: Option<string>) => string;
/**
 * Folds an option down into either an empty array or a single-element array containing
 * the value from within the Some. Useful in conjunction with the spread operator.
 */
export declare const toArray: <A>(fa: Option<A>) => Array<A>;
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
