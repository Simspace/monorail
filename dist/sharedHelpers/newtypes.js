"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.coerceToString = exports.coerce = exports.prismIsoDate = exports.prismFinite = exports.prismInfinity = exports.prismNaN = void 0;

var moment = _interopRequireWildcard(require("moment"));

var _newtypeTs = require("newtype-ts");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Use this prism to return an option with prismNaN.getOption(someNumber)
 */
const prismNaN = (0, _newtypeTs.prism)(Number.isNaN);
/**
 * Infinity is a refinement of number
 */

exports.prismNaN = prismNaN;
const prismInfinity = (0, _newtypeTs.prism)(x => !Number.isFinite(x) && !Number.isNaN(x));
/**
 * Finite is a refinement of number
 */

exports.prismInfinity = prismInfinity;
const prismFinite = (0, _newtypeTs.prism)(Number.isFinite);
/*
 * IsoDate is a refinement of string
 */

exports.prismFinite = prismFinite;

/*
 * A prism giving you a `getOption` function that returns a `Some<IsoDate>`
 * if the run-time string can is a valid ISO date string or a `None` if it
 * isn't.
 */
const prismIsoDate = (0, _newtypeTs.prism)(x => moment.default(x, moment.ISO_8601, true).isValid());
/*
 * Coerce any Newtype to its underlying runtime type.
 *
 * NOTE: This coercion is 100% safe and does not require explicitly providing
 * the generic type param for the Newtype.
 */

exports.prismIsoDate = prismIsoDate;

/*
 * Coerce any Newtype to its underlying runtime type.
 *
 * NOTE: This coercion is 100% safe and does not require explicitly providing
 * the generic type param for the Newtype.
 */
const coerce = n => n;
/*
 * Coerce any type-level string literal or Newtype over string to its underlying
 * string run-time type.
 *
 * NOTE: This coercion is 100% safe and does not require explicitly providing
 * the generic type param for the type-level string literal or Newtype.
 */


exports.coerce = coerce;

const coerceToString = s => s;

exports.coerceToString = coerceToString;