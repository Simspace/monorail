"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fromFoldableFilterMap = fromFoldableFilterMap;
exports.isNotEmpty = exports.isRecord = exports.sortRecords = exports.pick = exports.omitI = exports.omit = exports.prop = exports.entries = exports.values = exports.keys = void 0;

var _Array = require("fp-ts/lib/Array");

var O = _interopRequireWildcard(require("fp-ts/lib/Option"));

var _pipeable = require("fp-ts/lib/pipeable");

var _Record = require("fp-ts/lib/Record");

var _typeGuards = require("../typeGuards");

var _Array2 = require("./Array");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Retrieves the keys of an object while retaining keyof type information
 */
const keys = x => Object.keys(x);

exports.keys = keys;

const values = x => Object.values(x);

exports.values = values;

const entries = x => Object.entries(x);
/**
 * Retrieves the value of a given property key from an object (curried)
 */


exports.entries = entries;

const prop = k => obj => obj[k];
/**
 * Omits the key-value pairs from an object associated with the provided keys
 */


exports.prop = prop;

const omit = (rec, ks) => {
  const { ...result
  } = rec;
  (0, _Array2.forEach)(ks, k => delete result[k]);
  return result;
};
/**
 * A pipeable version of `omit`.
 * Omits the key-value pairs from an object associated with the provided keys
 */


exports.omit = omit;

const omitI = (...ks) => rec => {
  const { ...result
  } = rec;
  ks.forEach(k => delete result[k]);
  return result;
};
/**
 * Picks the key-value pairs from an object associated with the provided keys
 */


exports.omitI = omitI;

const pick = (rec, ks) => {
  const result = {};
  (0, _Array2.forEach)(ks, k => {
    result[k] = rec[k];
  });
  return result;
};

exports.pick = pick;

const sortRecords = ord => data => (0, _Array.sort)(ord)(data);
/**
 * Type guard for `Record<PropertyKey, T>` from `object`
 */


exports.sortRecords = sortRecords;

const isRecord = x => (0, _typeGuards.isObject)(x);
/**
 * Check if a record is *not* empty
 */


exports.isRecord = isRecord;

const isNotEmpty = r => !(0, _Record.isEmpty)(r);

exports.isNotEmpty = isNotEmpty;

function fromFoldableFilterMap(M, F) {
  return (ta, f) => F.reduce(ta, {}, (r, a) => (0, _pipeable.pipe)(f(a), O.map(([k, b]) => {
    r[k] = (0, _Record.hasOwnProperty)(k, r) ? M.concat(r[k], b) : b;
    return r;
  }), O.getOrElse(() => r)));
}