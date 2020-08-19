"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.opTraverse = opTraverse;
exports.all = exports.toSpreadable = exports.toBoolean = exports.fromTruthyFalsy = exports.getOrZero = exports.getOrEmptyString = exports.getOrEmptyArray = exports.getOrElse = exports.renderOnSome = exports.isOption = void 0;

var _fpTsImports = require("../fp-ts-imports");

var _function = require("fp-ts/lib/function");

var _Option = require("fp-ts/lib/Option");

var _typeGuards = require("../typeGuards");

/**
 * type guard for Option
 */
const isOption = x => {
  if (!(0, _typeGuards.isNil)(x)) {
    const x_ = x;
    return !(0, _typeGuards.isNil)(x_.value) && x_._tag === 'Some' || x_._tag === 'None';
  }

  return false;
};
/**
 * A specialized (partially applied with a null default) version of Option's
 * `fold` method that returns null when given a `None` or a `ReactNode` when
 * given a `Some`
 */


exports.isOption = isOption;

const renderOnSome = (a, onSome) => _fpTsImports.O.fold(() => null, onSome)(a);
/**
 * Curried, non-lazy version of fp-ts' `getOrElse`. Used to extract the value
 * from a Some or return a default value in place of a None. Also
 * known as `fromMaybe` in Haskell, PureScript, etc.
 */


exports.renderOnSome = renderOnSome;

const getOrElse = a => b => (0, _fpTsImports.pipe)(b, _fpTsImports.O.getOrElse(() => a));
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

const toBoolean = x => _fpTsImports.O.fold(() => false, _function.constTrue)(x);
/**
 * Folds an option down into either an empty array or a single-element array containing
 * the value from within the Some. Useful in conjunction with the spread operator.
 */


exports.toBoolean = toBoolean;

const toSpreadable = fa => (0, _fpTsImports.pipe)(fa, _fpTsImports.O.fold(() => [], a => [a]));
/**
 * Returns true if the option is false or if the predicate returns true when applied to the wrapped value
 */


exports.toSpreadable = toSpreadable;

const all = (x, predicate) => _fpTsImports.O.fold(() => true, predicate)(x);
/**
 * Traverse over an Option into an applicative.
 *
 * usage example:
 *
 * ```ts
 * import { pipe } from 'fp-ts/lib/pipeable'
 * import * as IO from 'fp-ts/lib/IO'
 * import { newIO } from '@monorail/sharedHelpers/fp-ts-ext/IO'
 *
 * const foo: Option<string> = some("foo")
 *
 * pipe(
 *   foo,
 *   opTraverse(IO.io)(s => newIO(() => document.write(s)))
 * )()
 * ```
 * @param Ap Applicative instance
 * @param f function that returns an instance of an Ap applicative
 */


exports.all = all;

function opTraverse(Ap) {
  return f => oA => _Option.option.traverse(Ap)(oA, f);
}