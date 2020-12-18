"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.opTraverse = opTraverse;
exports.toArray = exports.getOrEmptyString = exports.getOrElse = exports.renderOnSome = exports.isOption = void 0;

var _Option = require("fp-ts/lib/Option");

var _fpTsImports = require("../fp-ts-imports");

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
 * Partially applied version of `getOrElse` providing an empty string
 * as the default argument
 */


exports.getOrElse = getOrElse;
const getOrEmptyString = getOrElse('');
/**
 * Folds an option down into either an empty array or a single-element array containing
 * the value from within the Some. Useful in conjunction with the spread operator.
 */

exports.getOrEmptyString = getOrEmptyString;

const toArray = fa => (0, _fpTsImports.pipe)(fa, _fpTsImports.O.fold(() => [], a => [a]));
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


exports.toArray = toArray;

function opTraverse(Ap) {
  return f => oA => _Option.option.traverse(Ap)(oA, f);
}