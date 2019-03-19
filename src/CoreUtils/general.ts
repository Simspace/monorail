import { Function2 } from 'fp-ts/lib/function'
import { IO } from 'fp-ts/lib/IO'

import { isNewtypeNaN } from './newtypes'
import {
  isNil,
  isNumber,
  isFalse,
  isEmptyString,
  isZero,
} from './primitive-guards'
import { Falsy } from './type-level'

export const constVoid = (): void => {}

/**
 * Flips the order of the arguments to an uncurried function taking two
 * arguments.
 */
export const flip_ = <A, B, C>(f: Function2<A, B, C>): Function2<B, A, C> => (
  b,
  a,
) => f(a, b)

/**
 * Simple binary composition. Also known as `compose2`
 */
export const o = <A, B, C>(f: (y: B) => C, g: (x: A) => B) => (x: A): C =>
  f(g(x))

/**
 * Api action helper
 *
 * Example:
 * const LoadPackagesApiActionTypes = makeApiActionTypes(
 *   'learning/content-authoring/LOAD_PACKAGES/optimistic',
 *   'learning/content-authoring/LOAD_PACKAGES/request',
 *   'learning/content-authoring/LOAD_PACKAGES/success',
 *   'learning/content-authoring/LOAD_PACKAGES/failure',
 * )
 */
export const makeApiActionTypes = <A extends [string, string, string, string]>(
  ...args: A
): {
  optimistic: A[0]
  request: A[1]
  success: A[2]
  failure: A[3]
} => ({
  optimistic: args[0],
  request: args[1],
  success: args[2],
  failure: args[3],
})

/**
 * Constant action helper
 *
 * Example:
 * const LoadPackages = makeConstantActionType(
 *   'learning/content-authoring/LOAD_PACKAGES',
 * )
 */
export const makeConstantActionType = <A extends [string]>(...args: A): A[0] =>
  args[0]

/**
 * Type guard for the Falsy type
 */
// tslint:disable-next-line:no-any
export const isFalsy = (x: any): x is Falsy =>
  isNil(x) ||
  isFalse(x) ||
  isEmptyString(x) ||
  isZero(x) ||
  (isNumber(x) && isNewtypeNaN(x))
