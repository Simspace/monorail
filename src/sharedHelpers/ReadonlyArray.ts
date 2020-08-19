import * as Array from 'fp-ts/lib/Array'

/**
 * Makes an unsafe type-cast of ReadonlyArray<A> to Array<A>
 */
export const unsafeCoerceToArray = <A>(
  readonlyArray: ReadonlyArray<A>,
): Array<A> => readonlyArray as Array<A>

export const isEmpty = <A>(
  readonlyArray: ReadonlyArray<A>,
): readonlyArray is ReadonlyArray<never> => readonlyArray.length === 0

export const reduce = Array.reduce as <A, B>(
  b: B,
  f: (b: B, a: A) => B,
) => (fa: ReadonlyArray<A>) => B
