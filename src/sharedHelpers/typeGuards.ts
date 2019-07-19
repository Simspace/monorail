import { Falsy, Nil } from './typeLevel'

/**
 * Will throw a type error if switch cases aren't exhaustive.
 */
export const assertNever = (x: never): never => {
  throw new Error(x)
}

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
 * Type guard for the `false` literal of the `boolean` primitive
 */
export const isFalse = (x: unknown): x is false =>
  typeof x === 'boolean' && x === false

/**
 * Type guard for the `true` literal of the `boolean` primitive
 */
export const isTrue = (x: unknown): x is true =>
  typeof x === 'boolean' && x === true

/**
 * Type guard for the '' literal of the `string` primitive
 */
export const isEmptyString = (x: unknown): x is '' => isString(x) && x === ''

/**
 * Type guard for the `0` literal of the `number` primitive
 */
export const isZero = (x: unknown): x is 0 => isNumber(x) && x === 0

/**
 * Type guard for the Falsy type
 */
// tslint:disable-next-line:no-any
export const isFalsy = (x: any): x is Falsy =>
  isNil(x) ||
  isFalse(x) ||
  isEmptyString(x) ||
  isZero(x) ||
  (isNumber(x) && Number.isNaN(x))

/**
 * Type guard for the `string` primitive
 */
export const isString = (x: unknown): x is string => typeof x === 'string'

/**
 * Type guard for the `number` primitive
 */
export const isNumber = (x: unknown): x is number => typeof x === 'number'

/**
 * Type guard for the `object` primitive
 */
export const isObject = (x: unknown): x is object =>
  !isNull(x) && typeof x === 'object' && x instanceof Object

/**
 * Type guard for the `Function` primitive
 */
export const isFunction = (x: unknown): x is (params: unknown) => void =>
  x instanceof Function

/**
 * Typeguard for making sure a key is in an object when the object has no index signature
 */
export function hasKey<O>(
  obj: O,
  key: string | number | symbol,
): key is keyof O {
  return key in obj
}
