import { Setoid, strictEqual } from 'fp-ts/lib/Setoid'
import { shallowEqual } from '../shallowEqual'
import { toLower } from '../strings'

/**
 * Generic setoid that uses strict equality checking
 */
export const setoidStrict = { equals: strictEqual }

/**
 * Function that returns a generic setoid that uses strict equality checking
 *
 * NOTE: This only exists in case you need to explicitly provide a generic
 */
export const getSetoidStrict = <A>(): Setoid<A> => setoidStrict

/**
 * Generic setoid that uses shallow equality checking
 */
export const setoidShallowEq = { equals: shallowEqual }

/**
 * Function that returns a generic setoid that uses shallow equality checking
 *
 * NOTE: This only exists in case you need to explicitly provide a generic
 */
export const getSetoidShallowEq = <A extends object>(): Setoid<A> =>
  setoidShallowEq

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
 * Setoid for RecordWithName using recordWithNameLowerEquality
 */
export const setoidRecordWithNameLower: Setoid<{
  name: string
}> = {
  equals: recordWithNameLowerEquality,
}
