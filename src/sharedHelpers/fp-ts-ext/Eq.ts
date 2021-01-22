import * as Eq from 'fp-ts/lib/Eq'
import * as O from 'fp-ts/lib/Option'
import { pipe } from 'fp-ts/lib/pipeable'

import { shallowEqual } from '../shallowEqual'
import { toLower } from '../strings'

export * from 'fp-ts/lib/Eq'

export const getUndefinableEq = <T>(
  eq: Eq.Eq<T>,
): Eq.Eq<T | undefined | null> => ({
  equals: (a?: T | null, b?: T | null) =>
    O.getEq(eq).equals(O.fromNullable(a), O.fromNullable(b)),
})

/**
 * Case insensitive Eq instance for strings
 *
 * TODO: we have a similar ordStringByLocaleLowerCase function which uses toLocaleLowerCase instead
 */
export const eqStringByLowerCase: Eq.Eq<string> = pipe(
  Eq.eqString,
  Eq.contramap((s: string) => s.toLowerCase()),
)

/**
 * Function that returns a generic eq that uses strict equality checking
 *
 * NOTE: This only exists in case you need to explicitly provide a generic
 */
export const getEqStrict = <A>(): Eq.Eq<A> => Eq.eqStrict

/**
 * Generic eq that uses shallow equality checking
 */
export const eqShallow = { equals: shallowEqual }

/**
 * Function that returns a generic eq that uses shallow equality checking
 *
 * NOTE: This only exists in case you need to explicitly provide a generic
 */
export const getEqShallow = <A extends object>(): Eq.Eq<A> => eqShallow

/**
 * Equality checker for RecordWithName, comparing lowercase names
 */
export const recordWithNameLowerEquality = <
  A extends {
    name: string
  }
>(
  a: A,
  b: A,
): boolean => toLower(a.name) === toLower(b.name)

/**
 * Eq for RecordWithName using recordWithNameLowerEquality
 */
export const eqRecordWithNameLower: Eq.Eq<{
  name: string
}> = {
  equals: recordWithNameLowerEquality,
}
