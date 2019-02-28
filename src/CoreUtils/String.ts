import { head, last } from 'fp-ts/lib/Array'
import { Option, none, some } from 'fp-ts/lib/Option'
import { Ord } from 'fp-ts/lib/Ord'
import { Ordering } from 'fp-ts/lib/Ordering'
import { strictEqual } from 'fp-ts/lib/Setoid'

import { o } from './general'
import { getOrEmptyString } from './Option'

/**
 * Given a string or RegExp separator and a string, splits a string into an
 * array of strings
 */
export const split = (sep: string | RegExp) => (xs: string) => xs.split(sep)

/**
 * Translates a space separated name string into a first & last name record
 */
export const splitName = (name: string): Record<'first' | 'last', string> => {
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
 * Converts all alphabetic characters to lowercase, taking into account the
 * host environment's current locale.
 */
export const toLocaleLower = (x: string) => x.toLocaleLowerCase()

/**
 * Determines ordering of two strings (alphabetic comparison)
 */
export const alphaCompare = (x: string, y: string): Ordering =>
  x < y ? -1 : x > y ? 1 : 0

/**
 * Ord instance for string
 */
export const ordAlpha: Ord<string> = {
  equals: strictEqual,
  compare: alphaCompare,
}

/**
 * Takes a string and removes the spaces at the end of strings
 */
export function trim(str: string): string {
  return str.trim()
}

export function join(separator: string, arr: Array<any>): string {
  return arr.join(separator)
}
