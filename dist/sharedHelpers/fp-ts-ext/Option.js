"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  isOption: true,
  renderOnSome: true,
  getOrEmptyString: true,
  toArray: true,
  opTraverse: true
};
exports.opTraverse = opTraverse;
exports.toArray = exports.getOrEmptyString = exports.renderOnSome = exports.isOption = void 0;

var O = _interopRequireWildcard(require("fp-ts/lib/Option"));

Object.keys(O).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === O[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return O[key];
    }
  });
});

var _pipeable = require("fp-ts/lib/pipeable");

var _typeGuards = require("../typeGuards");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

const renderOnSome = (a, onSome) => O.fold(() => null, onSome)(a);
/**
 * Partially applied version of `getOrElse` providing an empty string
 * as the default argument
 */


exports.renderOnSome = renderOnSome;
const getOrEmptyString = O.getOrElse(() => '');
/**
 * Folds an option down into either an empty array or a single-element array containing
 * the value from within the Some. Useful in conjunction with the spread operator.
 */

exports.getOrEmptyString = getOrEmptyString;

const toArray = fa => (0, _pipeable.pipe)(fa, O.fold(() => [], a => [a]));
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
  return f => oA => O.option.traverse(Ap)(oA, f);
}