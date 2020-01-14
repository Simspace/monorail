import { sort } from 'fp-ts/lib/Array'
import { Ord } from 'fp-ts/lib/Ord'
import { isEmpty } from 'fp-ts/lib/Record'

import { isObject } from '../typeGuards'

import { forEach } from './Array'

/**
 * Retrieves the keys of an object while retaining keyof type information
 */
export const keys = <A extends Record<string, unknown>, K extends keyof A>(
  x: A,
): Array<K> => Object.keys(x) as Array<K>

export const values = <A extends Record<string, unknown>, V extends A[keyof A]>(
  x: A,
): Array<V> => Object.values(x) as Array<V>
/**
 * Retrieves the value of a given property key from an object (curried)
 */
export const prop = <A extends Record<string, unknown>, K extends keyof A>(
  k: K,
) => (obj: A): A[K] => obj[k]

/**
 * Omits the key-value pairs from an object associated with the provided keys
 */
export const omit = <A extends Record<string, unknown>, K extends keyof A>(
  rec: A,
  ks: Array<K>,
): { [P in Exclude<keyof A, K>]: A[P] } => {
  const { ...result } = rec

  forEach(ks, k => delete result[k])

  return result
}

/**
 * Picks the key-value pairs from an object associated with the provided keys
 */
export const pick = <A extends Record<string, unknown>, K extends keyof A>(
  rec: A,
  ks: Array<K>,
): { [P in K]: A[P] } => {
  const result = {} as { [P in K]: A[P] }

  forEach(ks, k => {
    result[k] = rec[k]
  })

  return result
}

export const sortRecords = <
  S extends Record<K, A>,
  K extends keyof S & string,
  A extends S[K]
>(
  ord: Ord<S>,
) => <T extends S>(data: Array<T>) => sort<T>(ord)(data)

/**
 * Type guard for `Record<PropertyKey, T>` from `object`
 */
export const isRecord = <T = unknown>(
  x: unknown,
): x is Record<PropertyKey, T> => isObject(x)

/**
 * Check if a record is *not* empty
 */
export const isNotEmpty = <K extends string | number | symbol, T>(
  r: Record<K, T>,
) => !isEmpty(r)
