/**
 * Tests whether or not an argument is null (type guard)
 */
export const isNull = (x) => x === null;
/**
 * Tests whether or not an argument is undefined (type guard)
 */
export const isUndefined = (x) => x === undefined;
/**
 * Tests whether or not an argument is null or undefined (type guard)
 */
export const isNil = (x) => isNull(x) || isUndefined(x);
/**
 * Tests whether or not an argument is null or undefined (type guard)
 */
export const isNotNil = (x) => !isNil(x);
/**
 * Type guard for the `false` literal of the `boolean` primitive
 */
export const isFalse = (x) => typeof x === 'boolean' && x === false;
/**
 * Type guard for the `true` literal of the `boolean` primitive
 */
export const isTrue = (x) => typeof x === 'boolean' && x === true;
/**
 * Type guard for the '' literal of the `string` primitive
 */
export const isEmptyString = (x) => isString(x) && x === '';
/**
 * Type guard for the `0` literal of the `number` primitive
 */
export const isZero = (x) => isNumber(x) && x === 0;
/**
 * Type guard for the Falsy type
 */
// tslint:disable-next-line:no-any
export const isFalsy = (x) => isNil(x) ||
    isFalse(x) ||
    isEmptyString(x) ||
    isZero(x) ||
    (isNumber(x) && Number.isNaN(x));
/**
 * Type guard for the `string` primitive
 */
export const isString = (x) => typeof x === 'string';
/**
 * Type guard for the `number` primitive
 */
export const isNumber = (x) => typeof x === 'number';
/**
 * Type guard for the `object` primitive
 */
export const isObject = (x) => !isNull(x) && typeof x === 'object' && x instanceof Object;
/**
 * Type guard for the `Function` primitive
 */
export const isFunction = (x) => x instanceof Function;
//# sourceMappingURL=typeGuards.js.map