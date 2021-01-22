import {
  Applicative,
  Applicative1,
  Applicative2,
  Applicative2C,
} from 'fp-ts/lib/Applicative'
import { HKT, Kind, Kind2, URIS, URIS2 } from 'fp-ts/lib/HKT'
import * as O from 'fp-ts/lib/Option'
import { pipe } from 'fp-ts/lib/pipeable'

import { isNil } from '@monorail/sharedHelpers/typeGuards'
import { ReactRenderable } from '@monorail/sharedHelpers/typeLevel'

export * from 'fp-ts/lib/Option'

/**
 * type guard for Option
 */
export const isOption = <A>(x: unknown): x is O.Option<A> => {
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
  a: O.Option<A>,
  onSome: (a: A) => ReactRenderable,
): ReactRenderable => O.fold<A, ReactRenderable>(() => null, onSome)(a)

/**
 * Partially applied version of `getOrElse` providing an empty string
 * as the default argument
 */
export const getOrEmptyString = O.getOrElse(() => '')

/**
 * Folds an option down into either an empty array or a single-element array containing
 * the value from within the Some. Useful in conjunction with the spread operator.
 */
export const toArray: <A>(fa: O.Option<A>) => Array<A> = fa =>
  pipe(
    fa,
    O.fold(
      () => [],
      a => [a],
    ),
  )

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
) => (o: O.Option<A>) => Kind2<F, E, O.Option<B>>

export function opTraverse<F extends URIS2>(
  Ap: Applicative2<F>,
): <A, B, E>(
  f: (a: A) => Kind2<F, E, B>,
) => (o: O.Option<A>) => Kind2<F, E, O.Option<B>>

export function opTraverse<F extends URIS>(
  Ap: Applicative1<F>,
): <A, B>(f: (a: A) => Kind<F, B>) => (o: O.Option<A>) => Kind<F, O.Option<B>>

export function opTraverse<F extends URIS>(
  Ap: Applicative<F>,
): <A, B>(f: (a: A) => HKT<F, B>) => (o: O.Option<A>) => HKT<F, O.Option<B>> {
  return f => oA => O.option.traverse(Ap)(oA, f)
}
