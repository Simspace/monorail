import { head, last } from 'fp-ts/lib/Array'
import { Option, none, some } from 'fp-ts/lib/Option'

import { o } from './fp-ts-ext/function'
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
  const safeGetVia = (f: (as: string[]) => Option<string>) =>
    o(getOrEmptyString, f)(xs)

  return {
    first: safeGetVia(head),
    last: safeGetVia(last),
  }
}

/**
 * Returns the position of the first occurrence of a substring wrapped in a Some
 * or returns a None if the substring is not found
 */
export const findIndex = (substring: string) => (
  xs: string,
): Option<number> => {
  const i = xs.indexOf(substring)
  return i === -1 ? none : some(i)
}

/**
 * Converts all the alphabetic characters in a string to lowercase.
 */
export const toLower = (x: string) => x.toLowerCase()

/**
 * Takes a string and removes the spaces at the end of strings
 */
export function trim(str: string): string {
  return str.trim()
}

export function join<T>(separator: string, arr: Array<T>): string {
  return arr.join(separator)
}
