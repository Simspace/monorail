import { toArray } from 'fp-ts/lib/Foldable2v'
import { constTrue } from 'fp-ts/lib/function'
import { Option, option, none, some } from 'fp-ts/lib/Option'
import { ReactNode } from 'react'

import { isFalsy, isNil } from '../typeGuards'

/**
 * type guard for Option
 */
export const isOption = <A>(x: unknown): x is Option<A> => {
  if (!isNil(x)) {
    const x_ = x as { isSome?: unknown; isNone?: unknown; _tag?: unknown }
    return (
      !isNil(x_.isSome) &&
      !isNil(x_.isNone) &&
      ((!isNil(x_._tag) && x_._tag === 'Some') || x_._tag === 'None')
    )
  }

  return false
}
/**
 * Standalone version of fp-ts' `fold` for Options. Like `getOrElse`,
 * but with a mapping transformation for the value in a `Some`
 */
export const fold = <A, B>(a: Option<A>, onNone: B, onSome: (a: A) => B): B =>
  a.fold(onNone, onSome)

/**
 * A specialized (partially applied with a null default) version of Option's
 * `fold` method that returns null when given a `None` or a `ReactNode` when
 * given a `Some`
 */
export const renderOnSome = <A>(
  a: Option<A>,
  onSome: (a: A) => ReactNode,
): ReactNode => fold<A, ReactNode>(a, null, onSome)

/**
 * Curried version of fp-ts' `getOrElse`. Used to extract the value
 * from a Some or return a default value in place of a None. Also
 * known as `fromMaybe` in Haskell, PureScript, etc.
 */
export const getOrElse = <A>(a: A) => (b: Option<A>): A => b.getOrElse(a)

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
export const toBoolean = <A>(x: Option<A>): boolean => fold(x, false, constTrue)

/**
 * Folds an option down into either an empty array or a single-element array containing
 * the value from within the Some. Useful in conjunction with the spread operator.
 */
export const toSpreadable = toArray(option)
