// NB: these are not intended to live here in monorail, or be exported by monorail - these should come from another package once we have that setup

/**
 * null | undefined
 */
export type Nil = null | undefined

/**
 * Tests whether or not an argument is null (type guard)
 */
export const isNull = (x: unknown): x is null => x === null

/**
 * Tests whether or not an argument is undefined (type guard)
 */
export const isUndefined = (x: unknown): x is undefined => x === undefined

/**
 * Tests whether or not an argument is null or undefined (type guard)
 */
export const isNil = (x: unknown): x is Nil => isNull(x) || isUndefined(x)

/**
 * Tests whether or not an argument is null or undefined (type guard)
 */
export const isNotNil = <T>(x: T | Nil): x is T => !isNil(x)

/**
 * Test whether or not an argument is a string
 */
export const isString = (x: unknown): x is string => typeof x === 'string'

/**
 * Test whether or not an argument is a non-empty string
 */
export const isNonEmptyString = (x: unknown): x is string =>
  isString(x) && x.length > 0
