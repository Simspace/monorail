"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasKey = hasKey;
exports.isStringArray = exports.isNumberArray = exports.isBooleanArray = exports.isNonEmptyArray = exports.isArray = exports.isFunction = exports.isObject = exports.isFinite = exports.isNumber = exports.isNonEmptyString = exports.isEmptyString = exports.isString = exports.isFalsy = exports.isZero = exports.isTrue = exports.isFalse = exports.isBoolean = exports.isNotNil = exports.isNil = exports.isNotUndefined = exports.isUndefined = exports.isNull = exports.assertNever = void 0;

/**
 * Will throw a type error if switch cases aren't exhaustive.
 */
const assertNever = x => {
  throw new Error(x);
};
/**
 * Tests whether or not an argument is null (type guard)
 */


exports.assertNever = assertNever;

const isNull = x => x === null;
/**
 * Tests whether or not an argument is undefined (type guard)
 */


exports.isNull = isNull;

const isUndefined = x => x === undefined;
/**
 * Tests whether or not an argument is not undefined (type guard)
 */


exports.isUndefined = isUndefined;

const isNotUndefined = x => !isUndefined(x);
/**
 * Tests whether or not an argument is null or undefined (type guard)
 */


exports.isNotUndefined = isNotUndefined;

const isNil = x => isNull(x) || isUndefined(x);
/**
 * Tests whether or not an argument is null or undefined (type guard)
 */


exports.isNil = isNil;

const isNotNil = x => !isNil(x);

exports.isNotNil = isNotNil;

const isBoolean = x => x === true || x === false;
/**
 * Type guard for the `false` literal of the `boolean` primitive
 */


exports.isBoolean = isBoolean;

const isFalse = x => typeof x === 'boolean' && x === false;
/**
 * Type guard for the `true` literal of the `boolean` primitive
 */


exports.isFalse = isFalse;

const isTrue = x => typeof x === 'boolean' && x === true;
/**
 * Type guard for the `0` literal of the `number` primitive
 */


exports.isTrue = isTrue;

const isZero = x => isNumber(x) && x === 0;
/**
 * Type guard for the Falsy type
 */
// tslint:disable-next-line:no-any


exports.isZero = isZero;

const isFalsy = x => isNil(x) || isFalse(x) || isEmptyString(x) || isZero(x) || isNumber(x) && Number.isNaN(x);
/**
 * Type guard for the `string` primitive
 */


exports.isFalsy = isFalsy;

const isString = x => typeof x === 'string';
/**
 * Type guard for the `''` literal of the `string` primitive
 */


exports.isString = isString;

const isEmptyString = x => isString(x) && x === '';
/**
 * Type guard for `string` primitives that are not `''`
 */


exports.isEmptyString = isEmptyString;

const isNonEmptyString = x => isString(x) && !isEmptyString(x);
/**
 * Type guard for the `number` primitive
 */


exports.isNonEmptyString = isNonEmptyString;

const isNumber = x => typeof x === 'number';
/**
 * Type guard for finite `number` primitive
 * false for NaN, -Infinity, Infinity
 */


exports.isNumber = isNumber;

const isFinite = x => typeof x === 'number' && Number.isFinite(x);
/**
 * Type guard for the `object` type
 */


exports.isFinite = isFinite;

const isObject = x => !isNull(x) && typeof x === 'object' && x instanceof Object;
/**
 * Type guard for the `Function` type
 */


exports.isObject = isObject;

const isFunction = x => x instanceof Function;
/**
 * Type guard for the `Array` type
 */


exports.isFunction = isFunction;

const isArray = as => Array.isArray(as);
/**
 * Type guard for the `Array` type with `.length > 0`
 */


exports.isArray = isArray;

const isNonEmptyArray = as => Array.isArray(as) && as.length > 0;
/**
 * Type guard for the `Array<boolean>` type
 */


exports.isNonEmptyArray = isNonEmptyArray;

const isBooleanArray = as => isArray(as) && as.every(isBoolean);
/**
 * Type guard for the `Array<number>` type
 */


exports.isBooleanArray = isBooleanArray;

const isNumberArray = as => isArray(as) && as.every(isNumber);
/**
 * Type guard for the `Array<string>` type
 */


exports.isNumberArray = isNumberArray;

const isStringArray = as => isArray(as) && as.every(isString);
/**
 * Typeguard for making sure a key is in an object when the object has no index signature
 */


exports.isStringArray = isStringArray;

function hasKey(obj, key) {
  return key in obj;
}