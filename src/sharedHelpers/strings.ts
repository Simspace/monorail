import * as A from 'fp-ts/lib/Array'
import { flow } from 'fp-ts/lib/function'
import * as O from 'fp-ts/lib/Option'
import { pipe } from 'fp-ts/lib/pipeable'

import { isNotNaN } from '@monorail/sharedHelpers/typeGuards'

import { getOrEmptyString } from './fp-ts-ext/Option'

/**
 * Given a string or RegExp separator and a string, splits a string into an
 * array of strings
 */
export const split = (sep: string | RegExp) => (xs: string) => xs.split(sep)

/**
 * Replaces text in a string, using an object that supports replacement within a string.
 */
export const replace = (
  searchValue: {
    [Symbol.replace](string: string, replaceValue: string): string
  },
  replaceValue: string,
) => (xs: string) => xs.replace(searchValue, replaceValue)

/**
 * Translates a space separated name string into a first & last name record
 */
export const splitName = (
  name: string,
): {
  first: string
  last: string
} => {
  const xs = split(' ')(name)
  const safeGetVia = (f: (as: Array<string>) => O.Option<string>) =>
    flow(f, getOrEmptyString)(xs)

  return {
    first: safeGetVia(A.head),
    last: safeGetVia(A.last),
  }
}

/**
 * Returns the position of the first occurrence of a substring wrapped in a Some
 * or returns a None if the substring is not found
 */

export const findIndex = (substring: string) => (
  xs: string,
): O.Option<number> => {
  const i = xs.indexOf(substring)
  return i === -1 ? O.none : O.some(i)
}

/**
 * Converts all the alphabetic characters in a string to lowercase.
 */
export const toLower = (x: string) => x.toLowerCase()

/**
 * Converts all alphabetic characters to local lower case
 */

export const toLocaleLower = (target: string) => target.toLocaleLowerCase()

/**
 * Takes a string and removes the spaces at the end of strings
 */
export function trim(str: string): string {
  return str.trim()
}

/**
 * Find and remove all space characters within a string. This may be useful for
 * filtering numeric text (given some user input) where spaces don't matter.
 *
 * includesNoncase(removeSpaces('2/10'))(removeSpaces('2 / 10')) // true
 */
export function removeSpaces(str: string): string {
  return str.split(' ').join('')
}

export function join<T>(separator: string, arr: Array<T>): string
export function join<T>(separator: string): (arr: Array<T>) => string
export function join<T>(separator: string, arr?: Array<T>) {
  return arr ? arr.join(separator) : (as: Array<T>) => as.join(separator)
}

export const truncate = (maxLength: number) => (value: string) => {
  return value.length > maxLength
    ? value
        .slice(0, maxLength - 3)
        .trim()
        .concat('...')
    : value
}

export const includes = (target: string) => (source: string) => {
  return source.includes(target)
}

export const includesNoncase = (target: string) => (source: string) => {
  return source
    .trim()
    .toLowerCase()
    .includes(target.trim().toLowerCase())
}

export const capitalizeFirstLetter = (str: string): string => {
  return pipe(
    str[0],
    O.fromNullable,
    O.fold(
      () => '',
      firstLetter => firstLetter.toUpperCase() + str.slice(1).toLowerCase(),
    ),
  )
}

export const capitalizeWords = (str: string): string => {
  return str.length < 1
    ? ''
    : str
        .split(' ')
        .map(capitalizeFirstLetter)
        .join(' ')
}

export const startsWithNonCase = (target: string) => (source: string) => {
  return source
    .trim()
    .toLowerCase()
    .startsWith(target.trim().toLowerCase())
}

export const words = (str: string): Array<string> => str.split(/\s/)

export const unwords = (str: Array<string>): string => str.join(' ')

export const titleCase = (str: string): string =>
  pipe(str, words, A.map(capitalizeFirstLetter), unwords)

export const camelCaseToTitleCase = (str: string) =>
  capitalizeFirstLetter(str.replace(/([a-z0-9])([A-Z])/g, '$1 $2'))

export const addTrailingSlash = (path: string) =>
  path.endsWith('/') ? path : `${path}/`

export const take = (n: number) => (s: string) => s.substring(0, n)

/**
 * Removes the leading {@param n} characters from the supplied string
 * @param n the amount of characters to drop
 */
export const drop = (n: number) => (s: string) => s.substring(n, s.length)

/**
 * Returns a string that contains `input` concatenated back-to-back `n` times
 */
export const repeat = (n: number) => (input: string): string => {
  if (n <= 1) {
    return input
  } else {
    return [...new Array(Math.floor(n)).keys()].map(_ => input).join('')
  }
}

/**
 * Adds padding to the start of a string to reach a `targetLength`
 */
export const padStart = (targetLength: number, padWith: string) => (
  input: string,
) => {
  // String.prototype.padStart is a thing, but it's relatively new, so not sure on Browser support
  // If we want to use that, we can remove the code below and just return `input.padStart(targetLength, padWith)`
  const inputLength = input.length
  const padWithLength = padWith.length
  if (inputLength > targetLength) {
    // input already longer than target length, do nothing
    return input
  } else if (padWithLength === 0) {
    // padWith string was empty, can't do anything
    return input
  } else {
    const padLength = targetLength - inputLength
    const padTimes = Math.floor(padLength / padWithLength) + 1 // add one so we get one extra, which will be truncated off
    const pad = repeat(padTimes)(padWith).slice(0, padLength)
    return pad + input
  }
}

/**
 * Splits a string at a given index
 *
 * @example
 * ```ts
 * const [before, after] = "aadd".splitAt(2)
 *
 * before // "aa"
 * after // "dd"
 * ```
 *
 * @param n the index to split the string at
 */
export const splitAt = (n: number) => (s: string): [string, string] => [
  s.substring(0, n),
  s.substring(n),
]

/**
 * A safe version of `parseInt` that provides a default radix of `10`,
 * and checks to see if the result is NaN. Returns `None` if the result is NaN.
 */
export const safeParseInt = (
  str: string,
  radix: number = 10,
): O.Option<number> => {
  return pipe(parseInt(str, radix), O.fromPredicate(isNotNaN))
}

export const elemLocaleLowerCase = (needle: string) => (haystack: string) =>
  toLocaleLower(haystack).includes(toLocaleLower(needle))

/**
 * Patially matches any string value, returning None if a match is not found
 *
 * @example
 *
 * ```ts
 * pipe(
 *   'foo',
 *   matchStringP({
 *     foo: () => 'Hello',
 *     bar: () => 'World'
 *   })
 * ) // Some('Hello')
 * ```
 *
 * ```ts
 * pipe(
 *   'asdf',
 *   matchStringP({
 *     foo: () => 'Hello',
 *     bar: () => 'World'
 *   })
 * ) // None
 * ```
 */
export const matchStringP = <Out>(matchObj: Record<string, () => Out>) => (
  s: string,
): O.Option<Out> => {
  if (s in matchObj) {
    return O.some(matchObj[s]())
  } else {
    return O.none
  }
}
