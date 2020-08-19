import { O, pipe } from '@monorail/sharedHelpers/fp-ts-imports'
import { constTrue } from 'fp-ts/lib/function'
import { none, Option, option, some } from 'fp-ts/lib/Option'

import { isFalsy, isNil } from '@monorail/sharedHelpers/typeGuards'
import { ReactRenderable } from '@monorail/sharedHelpers/typeLevel'

import {
  Applicative,
  Applicative1,
  Applicative2,
  Applicative2C,
} from 'fp-ts/lib/Applicative'
import { URIS, HKT, URIS2, HKT2, Kind, Kind2 } from 'fp-ts/lib/HKT'

/**
 * type guard for Option
 */
export const isOption = <A>(x: unknown): x is Option<A> => {
  if (!isNil(x)) {
    const x_ = x as { value?: A; _tag: 'Some' | 'None' }
    return (!isNil(x_.value) && x_._tag === 'Some') || x_._tag === 'None'
  }

  return false
}

/**
 * A specialized (partially applied with a null default) version of Option's
 * `fold` method that returns null when given a `None` or a `ReactNode` when
 * given a `Some`
 */
export const renderOnSome = <A>(
  a: Option<A>,
  onSome: (a: A) => ReactRenderable,
): ReactRenderable => O.fold<A, ReactRenderable>(() => null, onSome)(a)

/**
 * Curried, non-lazy version of fp-ts' `getOrElse`. Used to extract the value
 * from a Some or return a default value in place of a None. Also
 * known as `fromMaybe` in Haskell, PureScript, etc.
 */
export const getOrElse = <A>(a: A) => (b: Option<A>): A =>
  pipe(
    b,
    O.getOrElse(() => a),
  )

/**
 * Partially applied version of `getOrElse` providing an empty array
 * as the default argument
 */
export const getOrEmptyArray = <A>(opt: Option<Array<A>>) =>
  getOrElse([] as Array<A>)(opt)

/**
 * Partially applied version of `getOrElse` providing an empty string
 * as the default argument
 */
export const getOrEmptyString = getOrElse('')

/**
 * Partially applied version of `getOrElse` providing the number zero
 * as the default argument
 */
export const getOrZero = getOrElse(0)

/**
 * Converts truthy/falsy values into Options, like `fromNullable` from
 * fp-ts, but converts all falsy values, instead of just null or undefined,
 * into Nones
 */
export const fromTruthyFalsy = <A>(x: A): Option<A> =>
  isFalsy(x) ? none : some(x)

/**
 * Converts a None into false, and a Some<T> into a boolean
 */
export const toBoolean = <A>(x: Option<A>): boolean =>
  O.fold(() => false, constTrue)(x)

/**
 * Folds an option down into either an empty array or a single-element array containing
 * the value from within the Some. Useful in conjunction with the spread operator.
 */
export const toSpreadable: <A>(fa: Option<A>) => Array<A> = fa =>
  pipe(
    fa,
    O.fold(
      () => [],
      a => [a],
    ),
  )

/**
 * Returns true if the option is false or if the predicate returns true when applied to the wrapped value
 */
export const all = <A>(x: Option<A>, predicate: (a: A) => boolean): boolean =>
  O.fold(() => true, predicate)(x)

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
export function opTraverse<F extends URIS2, E>(
  Ap: Applicative2C<F, E>,
): <A, B>(
  f: (a: A) => Kind2<F, E, B>,
) => (o: Option<A>) => Kind2<F, E, Option<B>>
export function opTraverse<F extends URIS2>(
  Ap: Applicative2<F>,
): <A, B, E>(
  f: (a: A) => Kind2<F, E, B>,
) => (o: Option<A>) => Kind2<F, E, Option<B>>
export function opTraverse<F extends URIS>(
  Ap: Applicative1<F>,
): <A, B>(f: (a: A) => Kind<F, B>) => (o: Option<A>) => Kind<F, Option<B>>
export function opTraverse<F extends URIS>(
  Ap: Applicative<F>,
): <A, B>(f: (a: A) => HKT<F, B>) => (o: Option<A>) => HKT<F, Option<B>> {
  return f => oA => option.traverse(Ap)(oA, f)
}
