import { Function2 } from 'fp-ts/lib/function'

import { isEmptyString, isFalse, isNil, isNumber, isZero } from './typeGuards'

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
