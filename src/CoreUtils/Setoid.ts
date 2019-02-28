import { Setoid, strictEqual } from 'fp-ts/lib/Setoid'
import { shallowEqual } from './shallowEqual'

/**
 * Generic setoid that uses strict equality checking
 */
export const setoidStrict = { equals: strictEqual }

/**
 * Function that returns a generic setoid that uses strict equality checking
 */
export const getSetoidStrict = <A>(): Setoid<A> => setoidStrict

/**
 * Generic setoid that uses shallow equality checking
 */
export const setoidShallowEq = { equals: shallowEqual }

/**
 * Function that returns a generic setoid that uses shallow equality checking
 */
export const getSetoidShallowEq = <A extends object>(): Setoid<A> =>
  setoidShallowEq
