import { sort } from 'fp-ts/lib/Array'
import { Foldable, Foldable1, Foldable2, Foldable3 } from 'fp-ts/lib/Foldable'
import { HKT, Kind, Kind2, Kind3, URIS, URIS2, URIS3 } from 'fp-ts/lib/HKT'
import { Magma } from 'fp-ts/lib/Magma'
import * as O from 'fp-ts/lib/Option'
import { Ord } from 'fp-ts/lib/Ord'
import { pipe } from 'fp-ts/lib/pipeable'
import { hasOwnProperty, isEmpty } from 'fp-ts/lib/Record'

import { isObject } from '../typeGuards'
import { forEach } from './Array'

export * from 'fp-ts/lib/Record'

/**
 * Retrieves the keys of an object while retaining keyof type information
 *
 * `T` suffix is "type" to differentiate this from the base Record keys function
 */
export const keysT = <A extends Record<string, unknown>, K extends keyof A>(
  x: A,
): Array<K> => Object.keys(x) as Array<K>

export const values = <A extends Record<string, unknown>, V extends A[keyof A]>(
  x: A,
): Array<V> => Object.values(x) as Array<V>

export const entries = <
  A extends Record<string, unknown>,
  K extends keyof A,
  V extends A[K]
>(
  x: A,
): Array<[K, V]> => Object.entries(x) as Array<[K, V]>

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

  pipe(
    ks,
    forEach(k => delete result[k]),
  )

  return result
}

/**
 * A pipeable version of `omit`.
 * Omits the key-value pairs from an object associated with the provided keys
 */
export const omitI: <A extends Record<string, unknown>, K extends keyof A>(
  ...ks: ReadonlyArray<K>
) => (rec: A) => { [P in Exclude<keyof A, K>]: A[P] } = (...ks) => rec => {
  const { ...result } = rec

  ks.forEach(k => delete result[k])

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

  pipe(
    ks,
    forEach(k => {
      result[k] = rec[k]
    }),
  )

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

export function fromFoldableFilterMap<F extends URIS3, B>(
  M: Magma<B>,
  F: Foldable3<F>,
): <U, L, A, K extends string>(
  ta: Kind3<F, U, L, A>,
  f: (a: A) => O.Option<[K, B]>,
) => Record<K, B>
export function fromFoldableFilterMap<F extends URIS2, B>(
  M: Magma<B>,
  F: Foldable2<F>,
): <L, A, K extends string>(
  ta: Kind2<F, L, A>,
  f: (a: A) => O.Option<[K, B]>,
) => Record<K, B>
export function fromFoldableFilterMap<F extends URIS, B>(
  M: Magma<B>,
  F: Foldable1<F>,
): <A, K extends string>(
  ta: Kind<F, A>,
  f: (a: A) => O.Option<[K, B]>,
) => Record<K, B>
export function fromFoldableFilterMap<F, B>(
  M: Magma<B>,
  F: Foldable<F>,
): <A, K extends string>(
  ta: HKT<F, A>,
  f: (a: A) => O.Option<[K, B]>,
) => Record<K, B>
export function fromFoldableFilterMap<F, B>(
  M: Magma<B>,
  F: Foldable<F>,
): <A>(ta: HKT<F, A>, f: (a: A) => O.Option<[string, B]>) => Record<string, B> {
  return <A>(ta: HKT<F, A>, f: (a: A) => O.Option<[string, B]>) =>
    F.reduce<A, Record<string, B>>(ta, {}, (r, a) =>
      pipe(
        f(a),
        O.map(([k, b]) => {
          r[k] = hasOwnProperty(k, r) ? M.concat(r[k], b) : b
          return r
        }),
        O.getOrElse(() => r),
      ),
    )
}
