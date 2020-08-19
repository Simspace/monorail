/**
 * Flips the order of the arguments of a binary function.
 *
 * Curried version of `flip` from 'fp-ts/lib/function'
 */
export function flip<A, B, C>(f: (a: A) => (b: B) => C): (b: B) => (a: A) => C {
  return b => a => f(a)(b)
}

/**
 * Simple binary composition. Also known as `compose2`
 */
export const o = <A, B, C>(f: (y: B) => C, g: (x: A) => B) => (x: A): C =>
  f(g(x))

/**
 * Flips the position of each item in a 2-tuple
 */
export const swap = <A, B>([x, y]: [A, B]): [B, A] => [y, x]
