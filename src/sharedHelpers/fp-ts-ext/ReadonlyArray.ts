import * as Ap from 'fp-ts/lib/Apply'
import * as Eq from 'fp-ts/lib/Eq'
import * as O from 'fp-ts/lib/Option'
import * as RA from 'fp-ts/lib/ReadonlyArray'

export * from 'fp-ts/lib/ReadonlyArray'

/**
 * Unsafely coerce the ReadonlyArray<A> to an Array<A>
 */
export const unsafeCoerceToArray = <A>(
  readonlyArray: ReadonlyArray<A>,
): Array<A> => readonlyArray as Array<A>

/**
 * Unsafely coerce an Array<A> to a ReadonlyArray<A>
 */
export const unsafeCoerceFromArray = <A>(array: Array<A>): ReadonlyArray<A> =>
  array as ReadonlyArray<A>

/**
 * Gets the head and tail parts of the array as an object, if possible.
 *
 * This is often referred to "uncons," as it's the opposite of constructing an array with a head and tail.
 */
export const headAndTailS = <A>(
  a: ReadonlyArray<A>,
): O.Option<{ head: A; tail: ReadonlyArray<A> }> =>
  Ap.sequenceS(O.option)({ head: RA.head(a), tail: RA.tail(a) })

/**
 * Gets the head and tail parts of the array as a tuple, if possible.
 *
 * This is often referred to "uncons," as it's the opposite of constructing an array with a head and tail.
 */
export const headAndTailT = <A>(
  a: ReadonlyArray<A>,
): O.Option<[A, ReadonlyArray<A>]> =>
  Ap.sequenceT(O.option)(RA.head(a), RA.tail(a))

/**
 * Gets the init and last parts of the array as an object, if possible.
 *
 * This is like an "uncons" for the end of the array.
 */
export const initAndLastS = <A>(
  a: ReadonlyArray<A>,
): O.Option<{ init: ReadonlyArray<A>; last: A }> =>
  Ap.sequenceS(O.option)({ init: RA.init(a), last: RA.last(a) })

/**
 * Gets the init and last parts of the array as a tuple, if possible.
 *
 * This is like an "uncons" for the end of the array.
 */
export const initAndLastT = <A>(
  a: ReadonlyArray<A>,
): O.Option<[ReadonlyArray<A>, A]> =>
  Ap.sequenceT(O.option)(RA.init(a), RA.last(a))

/**
 * Returns an array of elements which are in both input arrays but not in their
 * intersection. Also known as symmetric difference or disjunctive union.
 */
export const xor = <A>(eq: Eq.Eq<A>) => (
  xs: ReadonlyArray<A>,
  ys: ReadonlyArray<A>,
) => [...RA.difference(eq)(xs, ys), ...RA.difference(eq)(ys, xs)]
