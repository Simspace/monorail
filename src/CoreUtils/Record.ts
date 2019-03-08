import { Option, fromNullable, isNone, none, some } from 'fp-ts/lib/Option'
import * as record from 'fp-ts/lib/Record'
import { Ord } from 'fp-ts/lib/Ord'
import { Ordering } from 'fp-ts/lib/Ordering'
import { sort } from 'fp-ts/lib/Array'
import { Setoid } from 'fp-ts/lib/Setoid'

import { forEach } from './Array'
import { ExtractFromOption, SafePrimitive } from './type-level'
import { toLower } from './String'

/**
 * Retrieves the keys of an object while retaining keyof type information
 */
export const keys = <
  A extends { [key: string]: unknown },
  K extends keyof A & string
>(
  x: A,
): K[] => Object.keys(x) as K[]

/**
 * Retrieves the values of an object while retaining type information
 */
export const values = <
  A extends { [key: string]: unknown },
  K extends keyof A & string
>(
  x: A,
): Array<A[K]> => Object.values(x) as Array<A[K]>

/**
 * Retrieves the value of a given property key from an object (curried)
 */
export const prop = <A extends object, Key extends keyof A>(k: Key) => (
  obj: A,
): A[Key] => obj[k]

/**
 * Retrieves the value of a given property key from an object (uncurried)
 */
export const prop_ = <A extends object, Key extends keyof A>(
  k: Key,
  obj: A,
): A[Key] => obj[k]

/**
 * General lookup function that retrieves the value associated with a given
 * property key in an object, returning an option. Returns a None if the key
 * is missing from the object OR if the key exists but the value is null or
 * undefined
 */
export const lookup = <
  A extends Record<PropertyKey, unknown>,
  B extends keyof A
>(
  key: B,
  fa: A,
): Option<A[B]> => (fa.hasOwnProperty(key) ? fromNullable(fa[key]) : none)

/**
 * Omits the key-value pairs from an object associated with the provided keys
 */
export const omit = <A extends { [key: string]: unknown }, K extends keyof A>(
  rec: A,
  ks: K[],
): { [P in Exclude<keyof A, K>]: A[P] } => {
  const { ...result } = rec

  forEach(ks, k => delete result[k])

  return result
}

/**
 * Picks the key-value pairs from an object associated with the provided keys
 */
export const pick = <
  A extends { [key: string]: unknown },
  K extends keyof A & string
>(
  rec: A,
  ks: K[],
): { [P in K]: A[P] } => {
  const result = {} as { [P in K]: A[P] }

  forEach(ks, k => {
    result[k] = rec[k]
  })

  return result
}

export const sequenceMixedRecordOptions = <
  A extends {
    [key: string]: Option<SafePrimitive>
  },
  B extends { [P in keyof A & string]: ExtractFromOption<A[P]> }
>(
  rec: A,
): Option<B> => {
  const result = {} as B & {
    [key: string]: unknown
  }

  for (const [k, opt] of record.toArray(rec)) {
    if (isNone(opt)) {
      return none
    } else {
      result[k] = opt.value
    }
  }

  return some(result)
}

export const traverseMixedRecordOptions = <
  A extends {
    [key: string]: SafePrimitive
  },
  B extends { [P in keyof A]: A[P] },
  F extends (x: B[keyof B]) => Option<unknown>
>(
  rec: A,
  f: F,
): Option<{ [P in keyof B & string]: ExtractFromOption<ReturnType<F>> }> => {
  const result = {} as {
    [P in keyof B & string]: ExtractFromOption<ReturnType<F>>
  } & {
    [key: string]: unknown
  }

  for (const [k, val] of record.toArray(rec)) {
    const opt = f(val as B[keyof B])
    if (isNone(opt)) {
      return none
    } else {
      result[k] = opt.value
    }
  }

  return some(result)
}

/**
 * Interface for records extending a { name: string } key-val pair
 */
export interface RecordWithName {
  name: string
}

/**
 * Equality checker for RecordWithName, comparing lowercase names
 */
export const recordWithNameLowerEquality = <A extends RecordWithName>(
  a: A,
  b: A,
): boolean => toLower(a.name) === toLower(b.name)

/**
 * Comparator for RecordWithName, comparing lowercase names alphabetically
 */
export const recordWithNameLowerComparator = <A extends RecordWithName>(
  a: A,
  b: A,
): Ordering => {
  const nameA = toLower(a.name)
  const nameB = toLower(b.name)
  return nameA < nameB ? -1 : nameA > nameB ? 1 : 0
}

export const setoidRecordWithNameLower: Setoid<RecordWithName> = {
  equals: recordWithNameLowerEquality,
}

/**
 * Ord instance for types extending the RecordWithName interface
 * that does comparisons & equality checking against the name prop
 * converted to lowercase
 */
export const ordRecordWithNameLower: Ord<RecordWithName> = {
  ...setoidRecordWithNameLower,
  compare: recordWithNameLowerComparator,
}

export const sortRecords = <
  S extends Record<K, A>,
  K extends keyof S & string,
  A extends S[K]
>(
  ord: Ord<S>,
) => (data: Array<S>) => sort(ord)(data)
