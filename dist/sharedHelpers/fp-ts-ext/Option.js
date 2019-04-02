"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toSpreadable = exports.toBoolean = exports.fromTruthyFalsy = exports.getOrZero = exports.getOrEmptyString = exports.getOrEmptyArray = exports.getOrElse = exports.renderOnSome = exports.fold = exports.isOption = void 0;

var _Foldable2v = require("fp-ts/lib/Foldable2v");

var _function = require("fp-ts/lib/function");

var _Option = require("fp-ts/lib/Option");

var _typeGuards = require("../typeGuards");

/**
 * type guard for Option
 */
// tslint:disable-next-line:no-any
const isOption = x => !(0, _typeGuards.isNil)(x) && !(0, _typeGuards.isNil)(x.isSome) && !(0, _typeGuards.isNil)(x.isNone) && (!(0, _typeGuards.isNil)(x._tag) && x._tag === 'Some' || x._tag === 'None');
/**
 * Standalone version of fp-ts' `fold` for Options. Like `getOrElse`,
 * but with a mapping transformation for the value in a `Some`
 */


exports.isOption = isOption;

const fold = (a, onNone, onSome) => a.fold(onNone, onSome);
/**
 * A specialized (partially applied with a null default) version of Option's
 * `fold` method that returns null when given a `None` or a `ReactNode` when
 * given a `Some`
 */


exports.fold = fold;

const renderOnSome = (a, onSome) => fold(a, null, onSome);
/**
 * Curried version of fp-ts' `getOrElse`. Used to extract the value
 * from a Some or return a default value in place of a None. Also
 * known as `fromMaybe` in Haskell, PureScript, etc.
 */


exports.renderOnSome = renderOnSome;

const getOrElse = a => b => b.getOrElse(a);
/**
 * Partially applied version of `getOrElse` providing an empty array
 * as the default argument
 */


exports.getOrElse = getOrElse;

const getOrEmptyArray = opt => getOrElse([])(opt);
/**
 * Partially applied version of `getOrElse` providing an empty string
 * as the default argument
 */


exports.getOrEmptyArray = getOrEmptyArray;
const getOrEmptyString = getOrElse('');
/**
 * Partially applied version of `getOrElse` providing the number zero
 * as the default argument
 */

exports.getOrEmptyString = getOrEmptyString;
const getOrZero = getOrElse(0);
/**
 * Converts truthy/falsy values into Options, like `fromNullable` from
 * fp-ts, but converts all falsy values, instead of just null or undefined,
 * into Nones
 */

exports.getOrZero = getOrZero;

const fromTruthyFalsy = x => (0, _typeGuards.isFalsy)(x) ? _Option.none : (0, _Option.some)(x);
/**
 * Converts a None into false, and a Some<T> into a boolean
 */


exports.fromTruthyFalsy = fromTruthyFalsy;

const toBoolean = x => fold(x, false, _function.constTrue);
/**
 * Folds an option down into either an empty array or a single-element array containing
 * the value from within the Some. Useful in conjunction with the spread operator.
 */


exports.toBoolean = toBoolean;
const toSpreadable = (0, _Foldable2v.toArray)(_Option.option);
exports.toSpreadable = toSpreadable;