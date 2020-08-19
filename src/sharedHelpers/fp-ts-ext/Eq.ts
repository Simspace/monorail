import * as Eq from 'fp-ts/lib/Eq'
import { pipe } from 'fp-ts/lib/pipeable'

import { shallowEqual } from '../shallowEqual'
import { toLower } from '../strings'

/**
 * Case insensitive Eq instance for strings
 */
export const eqStringCaseI: Eq.Eq<string> = pipe(
  Eq.eqString,
  Eq.contramap((s: string) => s.toLowerCase()),
)

/**
 * Generic eq that uses strict equality checking
 */
export const eqStrict = { equals: Eq.strictEqual }

/**
 * Function that returns a generic eq that uses strict equality checking
 *
 * NOTE: This only exists in case you need to explicitly provide a generic
 */
export const getEqStrict = <A>(): Eq.Eq<A> => eqStrict

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
