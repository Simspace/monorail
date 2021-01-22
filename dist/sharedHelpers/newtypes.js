"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPrismUUID = getPrismUUID;
exports.buildKeyNewtypeFromParam = exports.coerceToString = exports.coerce = exports.prismIsoDate = exports.ordIsoDate = exports.isoDateToDate = exports.prismFinite = exports.prismInfinity = exports.prismNaN = void 0;

var dateFns = _interopRequireWildcard(require("date-fns"));

var _ioTsTypes = require("io-ts-types");

var _newtypeTs = require("newtype-ts");

var E = _interopRequireWildcard(require("fp-ts/lib/Either"));

var _function = require("fp-ts/lib/function");

var O = _interopRequireWildcard(require("fp-ts/lib/Option"));

var Ord = _interopRequireWildcard(require("fp-ts/lib/Ord"));

var _helpers = require("../v2/shared/helpers");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
/**
 * Gets a prism that validates UUIDs.
 *
 * NOTE: You may not need this if using io-ts Codecs.
 */

function getPrismUUID() {
  return (0, _newtypeTs.prism)(uuidRegex.test);
}
/**
 * A phantom type wrapper for expresing versions which are a part of
 * versioned entities.
 *
 * Modeled after the `Version` phantom type in our Haskell codebase.
 *
 * Note: Some of the generated TypeScript type files already have a
 * `type Version = number` type alias. Be Careful to avoid collisions.
 */


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

const isoDateToDate = isoDate => new Date(coerce(isoDate));

exports.isoDateToDate = isoDateToDate;
const ordIsoDate = (0, _function.pipe)(Ord.ordDate, Ord.contramap(isoDateToDate));
/*
 * A prism giving you a `getOption` function that returns a `Some<IsoDate>`
 * if the run-time string can is a valid ISO date string or a `None` if it
 * isn't.
 */

exports.ordIsoDate = ordIsoDate;
const prismIsoDate = (0, _newtypeTs.prism)(str => {
  const parsedDate = dateFns.parseISO(str);
  return dateFns.isValid(parsedDate);
});
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
const coerce = n => // eslint-disable-next-line @typescript-eslint/no-unsafe-return
n;
/*
 * Coerce any type-level string literal or Newtype over string to its underlying
 * string run-time type.
 *
 * NOTE: This coercion is 100% safe and does not require explicitly providing
 * the generic type param for the type-level string literal or Newtype.
 */


exports.coerce = coerce;

const coerceToString = s => s;
/**
 * Try to take a param and decode it into a UUID by way of io-ts UUID
 * branded type. If the param correctly decodes, then take the value
 * and wrap it in the proper newtype created for the param
 *
 * @param {string} param - Any param that can possibly be turned into a UUID
 * @param {string} paramName - The name of the param being passed in for logging purposes
 * @param {Iso<N, CarrierOf<N>>} iso - The iso used to wrap the param into a new type for that param
 */


exports.coerceToString = coerceToString;

const buildKeyNewtypeFromParam = (paramName, iso) => param => (0, _function.pipe)(param, _ioTsTypes.UUID.decode, E.mapLeft(e => (0, _helpers.logger)(({
  error
}) => error({
  message: `The param "${paramName}" could not be decoded into a UUID.`,
  error: e
}))), O.fromEither, O.map(iso.wrap));

exports.buildKeyNewtypeFromParam = buildKeyNewtypeFromParam;