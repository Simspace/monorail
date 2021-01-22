"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toUrlString = exports.fromReactRouter = exports.addStringValue = exports.maybeAddValues = exports.addValues = exports.empty = void 0;

var A = _interopRequireWildcard(require("fp-ts/lib/Array"));

var _Foldable = require("fp-ts/lib/Foldable");

var _function = require("fp-ts/lib/function");

var _Monoid = require("fp-ts/lib/Monoid");

var Nea = _interopRequireWildcard(require("fp-ts/lib/NonEmptyArray"));

var O = _interopRequireWildcard(require("fp-ts/lib/Option"));

var _pipeable = require("fp-ts/lib/pipeable");

var R = _interopRequireWildcard(require("fp-ts/lib/Record"));

var _typeGuards = require("./typeGuards");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const empty = {};
/**
 * Add one or more string values to the given field of an existing query params
 * object. If the key already exists, the provided values will be added to the
 * end. If the key doesn't exist, it will be added.
 *
 * If you want to add exactly one value, see `addSingleValue`. If you aren't
 * sure whether your array is non-empty, see `maybeAddValues`.
 *
 * @param key the query param field to be added or appended to
 * @param value the non-empty array of values to be added
 */

exports.empty = empty;

const addValues = (key, value) => query => (0, _pipeable.pipe)(R.lookup(key, query), O.fold(() => R.insertAt(key, value)(query), arr => R.insertAt(key, Nea.concat(arr, value))(query)));
/**
 * Given a string key and an array of string values, add all values to the given
 * query params object. If the key already exists in the provided object, the
 * new values will be concat'd on to the end. If the provided array is empty, no
 * change will be made (and the key will not be added).
 *
 * ```
 * maybeAddValues("foo", ["bar"])({}) === ({ foo: ["bar"]})
 * maybeAddValues("foo", [])({}) === ({})
 * maybeAddValues("foo", ["bar"])( foo: ["baz"]) === ({ foo: ["baz", "bar"]})
 * ```
 */


exports.addValues = addValues;

const maybeAddValues = (key, value) => query => A.isNonEmpty(value) ? addValues(key, value)(query) : query;
/**
 * Add a single string value to a query params object, appending the value to
 * the end of the array if the key already exists, or creating a new key if
 * necessary.
 *
 * @param key the query param field to add to
 * @param value the single value to be added
 */


exports.maybeAddValues = maybeAddValues;

const addStringValue = (key, value) => addValues(key, Nea.of(value));
/**
 * Given a `location.query` field from React Router, safely convert it to our
 * query params object. This handles the runtime type-checking so you don't have
 * to and deals with weirdness around null, undefined, and empty arrays.
 *
 * @param bad the `Query` object that comes from react-router's `location`
 */


exports.addStringValue = addStringValue;

const fromReactRouter = bad => {
  return (0, _pipeable.pipe)(Object.entries(bad), A.reduce({}, (acc, [k, v]) => {
    if ((0, _typeGuards.isString)(v)) {
      return addStringValue(k, v)(acc);
    } else if (Array.isArray(v) && A.isNonEmpty(v)) {
      return addValues(k, v)(acc);
    } else {
      return addStringValue(k, '')(acc);
    }
  }));
};
/**
 * Convert a query param object into a string, ready to be appended to a URL.
 * The returned string is prefixed with `?` and each Record key/value is
 * separated by `&`.
 *
 * ```
 * toUrlString({ q: ["bar", "baz"], count: ["3"]]}) === '?q=bar&q=baz&count=3';
 * toUrlString({}) === '';
 * ```
 */


exports.fromReactRouter = fromReactRouter;

const toUrlString = query => {
  const eachKey = R.collect((k, v) => (0, _pipeable.pipe)(v, A.map(x => `${k}=${x}`), xs => (0, _Foldable.intercalate)(_Monoid.monoidString, A.array)('&', xs)))(query);
  return (0, _pipeable.pipe)(eachKey, O.fromPredicate((0, _function.not)(A.isEmpty)), O.fold(() => ``, eachKey_ => `?${(0, _Foldable.intercalate)(_Monoid.monoidString, A.array)('&', eachKey_)}`));
};

exports.toUrlString = toUrlString;