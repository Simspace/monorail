import { Nil } from './type-level'

/**
 * Tests whether or not an argument is null (type guard)
 */
export const isNull = (x: any): x is null => x === null

/**
 * Tests whether or not an argument is undefined (type guard)
 */
export const isUndefined = (x: any): x is undefined => x === undefined

/**
 * Tests whether or not an argument is null or undefined (type guard)
 */
export const isNil = (x: any): x is Nil => isNull(x) || isUndefined(x)

/**
 * Type guard for the `false` literal of the `boolean` primitive
 */
export const isFalse = (x: any): x is false =>
  typeof x === 'boolean' && x === false

/**
 * Type guard for the `true` literal of the `boolean` primitive
 */
export const isTrue = (x: any): x is true =>
  typeof x === 'boolean' && x === true

/**
 * Type guard for the `` literal of the `string` primitive
 */
export const isEmptyString = (x: any): x is '' =>
  typeof x === 'string' && x === ''

/**
 * Type guard for the `0` literal of the `number` primitive
 */
export const isZero = (x: any): x is 0 => typeof x === 'number' && x === 0

/**
 * Type guard for the `number` primitive
 */
export const isNumber = (x: any): x is number => typeof x === 'number'
