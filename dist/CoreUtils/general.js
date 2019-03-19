"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isFalsy = exports.makeConstantActionType = exports.makeApiActionTypes = exports.o = exports.flip_ = exports.constVoid = void 0;

var _newtypes = require("./newtypes");

var _primitiveGuards = require("./primitive-guards");

const constVoid = () => {};
/**
 * Flips the order of the arguments to an uncurried function taking two
 * arguments.
 */


exports.constVoid = constVoid;

const flip_ = f => (b, a) => f(a, b);
/**
 * Simple binary composition. Also known as `compose2`
 */


exports.flip_ = flip_;

const o = (f, g) => x => f(g(x));
/**
 * Api action helper
 *
 * Example:
 * const LoadPackagesApiActionTypes = makeApiActionTypes(
 *   'learning/content-authoring/LOAD_PACKAGES/optimistic',
 *   'learning/content-authoring/LOAD_PACKAGES/request',
 *   'learning/content-authoring/LOAD_PACKAGES/success',
 *   'learning/content-authoring/LOAD_PACKAGES/failure',
 * )
 */


exports.o = o;

const makeApiActionTypes = (...args) => ({
  optimistic: args[0],
  request: args[1],
  success: args[2],
  failure: args[3]
});
/**
 * Constant action helper
 *
 * Example:
 * const LoadPackages = makeConstantActionType(
 *   'learning/content-authoring/LOAD_PACKAGES',
 * )
 */


exports.makeApiActionTypes = makeApiActionTypes;

const makeConstantActionType = (...args) => args[0];
/**
 * Type guard for the Falsy type
 */
// tslint:disable-next-line:no-any


exports.makeConstantActionType = makeConstantActionType;

const isFalsy = x => (0, _primitiveGuards.isNil)(x) || (0, _primitiveGuards.isFalse)(x) || (0, _primitiveGuards.isEmptyString)(x) || (0, _primitiveGuards.isZero)(x) || (0, _primitiveGuards.isNumber)(x) && (0, _newtypes.isNewtypeNaN)(x);

exports.isFalsy = isFalsy;