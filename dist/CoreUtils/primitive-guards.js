"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isNumber = exports.isZero = exports.isEmptyString = exports.isTrue = exports.isFalse = exports.isNil = exports.isUndefined = exports.isNull = void 0;

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
 * Type guard for the `false` literal of the `boolean` primitive
 */


exports.isNil = isNil;

const isFalse = x => typeof x === 'boolean' && x === false;
/**
 * Type guard for the `true` literal of the `boolean` primitive
 */


exports.isFalse = isFalse;

const isTrue = x => typeof x === 'boolean' && x === true;
/**
 * Type guard for the `` literal of the `string` primitive
 */


exports.isTrue = isTrue;

const isEmptyString = x => typeof x === 'string' && x === '';
/**
 * Type guard for the `0` literal of the `number` primitive
 */


exports.isEmptyString = isEmptyString;

const isZero = x => typeof x === 'number' && x === 0;
/**
 * Type guard for the `number` primitive
 */


exports.isZero = isZero;

const isNumber = x => typeof x === 'number';

exports.isNumber = isNumber;