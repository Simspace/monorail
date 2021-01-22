import { Query } from 'history'
import * as A from 'fp-ts/lib/Array'
import { intercalate } from 'fp-ts/lib/Foldable'
import { not } from 'fp-ts/lib/function'
import { monoidString } from 'fp-ts/lib/Monoid'
import * as Nea from 'fp-ts/lib/NonEmptyArray'
import * as O from 'fp-ts/lib/Option'
import { pipe } from 'fp-ts/lib/pipeable'
import * as R from 'fp-ts/lib/Record'

import { isString } from '@monorail/sharedHelpers/typeGuards'

// React Router (or some related middleware) seems to provide a `query` type
// that 1. explodes at runtime if you forget to check its type before accessing
// values, and 2. allows you to unsafely override the type with anything you
// want.
//
// Here, we define a more rigid type, provide helpers for converting from their
// sloppy type to ours, and add helper functions for further pulling typed
// values out. [MM 2020-07-12]

// This is our good, safe type that accurately represents what a collection of
// query params can be.
export type QueryParams = Record<string, Nea.NonEmptyArray<string>>

// This is the "default" type that React Router (and its friend, History) use.
// The key is `string` (that's good), but the value is either a string or an
// array of strings (painful) or null or undefined.
type BadQueryParams = Query

export const empty: QueryParams = {}

/**
 * Add one or more string values to the given field of an existing query params
 * object. If the key already exists, the provided values will be added to the
 * end. If the key doesn't exist, it will be added.
 *
 * If you want to add exactly one value, see `addSingleValue`. If you aren't
 * sure whether your array is non-empty, see `maybeAddValues`.
 *
 * @param key the query param field to be added or appended to
 * @param value the non-empty array of values to be added
 */
export const addValues = <K extends string = string>(
  key: K,
  value: Nea.NonEmptyArray<string>,
) => (query: QueryParams): QueryParams =>
  pipe(
    R.lookup(key, query),
    O.fold(
      () => R.insertAt(key, value)(query),
      arr => R.insertAt(key, Nea.concat(arr, value))(query),
    ),
  )

/**
 * Given a string key and an array of string values, add all values to the given
 * query params object. If the key already exists in the provided object, the
 * new values will be concat'd on to the end. If the provided array is empty, no
 * change will be made (and the key will not be added).
 *
 * ```
 * maybeAddValues("foo", ["bar"])({}) === ({ foo: ["bar"]})
 * maybeAddValues("foo", [])({}) === ({})
 * maybeAddValues("foo", ["bar"])( foo: ["baz"]) === ({ foo: ["baz", "bar"]})
 * ```
 */
export const maybeAddValues = <K extends string = string>(
  key: K,
  value: Array<string>,
) => (query: QueryParams): QueryParams =>
  A.isNonEmpty(value) ? addValues(key, value)(query) : query

/**
 * Add a single string value to a query params object, appending the value to
 * the end of the array if the key already exists, or creating a new key if
 * necessary.
 *
 * @param key the query param field to add to
 * @param value the single value to be added
 */
export const addStringValue = <K extends string = string>(
  key: K,
  value: string,
) => addValues(key, Nea.of(value))

/**
 * Given a `location.query` field from React Router, safely convert it to our
 * query params object. This handles the runtime type-checking so you don't have
 * to and deals with weirdness around null, undefined, and empty arrays.
 *
 * @param bad the `Query` object that comes from react-router's `location`
 */
export const fromReactRouter = (bad: BadQueryParams): QueryParams => {
  return pipe(
    Object.entries(bad),
    A.reduce({}, (acc: QueryParams, [k, v]) => {
      if (isString(v)) {
        return addStringValue(k, v)(acc)
      } else if (Array.isArray(v) && A.isNonEmpty(v)) {
        return addValues(k, v)(acc)
      } else {
        return addStringValue(k, '')(acc)
      }
    }),
  )
}

/**
 * Convert a query param object into a string, ready to be appended to a URL.
 * The returned string is prefixed with `?` and each Record key/value is
 * separated by `&`.
 *
 * ```
 * toUrlString({ q: ["bar", "baz"], count: ["3"]]}) === '?q=bar&q=baz&count=3';
 * toUrlString({}) === '';
 * ```
 */
export const toUrlString = (query: QueryParams): string => {
  const eachKey = R.collect((k: string, v: Nea.NonEmptyArray<string>) =>
    pipe(
      v,
      A.map(x => `${k}=${x}`),
      xs => intercalate(monoidString, A.array)('&', xs),
    ),
  )(query)

  return pipe(
    eachKey,
    O.fromPredicate(not(A.isEmpty)),
    O.fold(
      () => ``,
      eachKey_ => `?${intercalate(monoidString, A.array)('&', eachKey_)}`,
    ),
  )
}
