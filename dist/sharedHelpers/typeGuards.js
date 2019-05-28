"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isFunction = exports.isObject = exports.isNumber = exports.isString = exports.isFalsy = exports.isZero = exports.isEmptyString = exports.isTrue = exports.isFalse = exports.isNotNil = exports.isNil = exports.isUndefined = exports.isNull = void 0;

/**
 * Tests whether or not an argument is null (type guard)
 */
const isNull = x => x === null;
/**
 * Tests whether or not an argument is undefined (type guard)
 */


exports.isNull = isNull;

const isUndefined = x => x === undefined;
/**
 * Tests whether or not an argument is null or undefined (type guard)
 */


exports.isUndefined = isUndefined;

const isNil = x => isNull(x) || isUndefined(x);
/**
 * Tests whether or not an argument is null or undefined (type guard)
 */


exports.isNil = isNil;

const isNotNil = x => !isNil(x);
/**
 * Type guard for the `false` literal of the `boolean` primitive
 */


exports.isNotNil = isNotNil;

const isFalse = x => typeof x === 'boolean' && x === false;
/**
 * Type guard for the `true` literal of the `boolean` primitive
 */


exports.isFalse = isFalse;

const isTrue = x => typeof x === 'boolean' && x === true;
/**
 * Type guard for the '' literal of the `string` primitive
 */


exports.isTrue = isTrue;

const isEmptyString = x => isString(x) && x === '';
/**
 * Type guard for the `0` literal of the `number` primitive
 */


exports.isEmptyString = isEmptyString;

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
 * Type guard for the `number` primitive
 */


exports.isString = isString;

const isNumber = x => typeof x === 'number';
/**
 * Type guard for the `object` primitive
 */


exports.isNumber = isNumber;

const isObject = x => !isNull(x) && typeof x === 'object' && x instanceof Object;
/**
 * Type guard for the `Function` primitive
 */


exports.isObject = isObject;

const isFunction = x => x instanceof Function;

exports.isFunction = isFunction;