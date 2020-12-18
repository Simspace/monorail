"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ordDateFromString = exports.getReadonlyTupleOrdSnd = exports.getTupleOrdSnd = exports.getReadonlyTupleOrdFst = exports.getTupleOrdFst = exports.invert = exports.ordRecordWithNameLower = exports.recordWithNameLowerComparator = exports.ordCaseInsensitiveString = exports.ordAlpha = exports.alphaCompare = exports.ordNumeric = exports.numericCompare = void 0;

var _function = require("fp-ts/lib/function");

var _Ord = require("fp-ts/lib/Ord");

var _Ordering = require("fp-ts/lib/Ordering");

var _pipeable = require("fp-ts/lib/pipeable");

var RTup = _interopRequireWildcard(require("fp-ts/lib/ReadonlyTuple"));

var Tup = _interopRequireWildcard(require("fp-ts/lib/Tuple"));

var _strings = require("../strings");

var _Eq = require("./Eq");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Determines ordering of two numbers (numeric comparison)
 */
const numericCompare = (x, y) => x < y ? -1 : x > y ? 1 : 0;
/**
 * Ord instance for number
 */


exports.numericCompare = numericCompare;
const ordNumeric = { ..._Eq.eqStrict,
  compare: numericCompare
};
/**
 * Determines ordering of two strings (alphabetic comparison)
 */

exports.ordNumeric = ordNumeric;

const alphaCompare = (x, y) => x < y ? -1 : x > y ? 1 : 0;
/**
 * Ord instance for string
 */


exports.alphaCompare = alphaCompare;
const ordAlpha = { ..._Eq.eqStrict,
  compare: alphaCompare
};
exports.ordAlpha = ordAlpha;
const ordCaseInsensitiveString = (0, _Ord.contramap)(s => s.toLocaleLowerCase())(_Ord.ordString);
/**
 * Comparator for RecordWithName, comparing lowercase names alphabetically
 */

exports.ordCaseInsensitiveString = ordCaseInsensitiveString;

const recordWithNameLowerComparator = (a, b) => {
  const nameA = (0, _strings.toLower)(a.name);
  const nameB = (0, _strings.toLower)(b.name);
  return nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
};
/**
 * Ord instance for types extending the RecordWithName interface
 * that does comparisons & equality checking against the name prop
 * converted to lowercase
 */


exports.recordWithNameLowerComparator = recordWithNameLowerComparator;
const ordRecordWithNameLower = { ..._Eq.eqRecordWithNameLower,
  compare: recordWithNameLowerComparator
};
/**
 * Inverts an Ord instance
 * @param o
 */

exports.ordRecordWithNameLower = ordRecordWithNameLower;

const invert = o => (0, _Ord.fromCompare)((0, _function.flow)(o.compare, _Ordering.invert));
/**
 * Returns an Ord for a tuple that only compares the first element
 * @param ord
 */


exports.invert = invert;

const getTupleOrdFst = ord => (0, _pipeable.pipe)(ord, (0, _Ord.contramap)(tuple => Tup.fst(tuple)));
/**
 * Returns an Ord for a readonly tuple that only compares the first element
 * @param ord
 */


exports.getTupleOrdFst = getTupleOrdFst;

const getReadonlyTupleOrdFst = ord => (0, _pipeable.pipe)(ord, (0, _Ord.contramap)(tuple => RTup.fst(tuple)));
/**
 * Returns an Ord for a tuple that only compares the second element
 * @param ord
 */


exports.getReadonlyTupleOrdFst = getReadonlyTupleOrdFst;

const getTupleOrdSnd = ord => (0, _pipeable.pipe)(ord, (0, _Ord.contramap)(tuple => Tup.snd(tuple)));
/**
 * Returns an Ord for a readonly tuple that only compares the second element
 * @param ord
 */


exports.getTupleOrdSnd = getTupleOrdSnd;

const getReadonlyTupleOrdSnd = ord => (0, _pipeable.pipe)(ord, (0, _Ord.contramap)(tuple => RTup.snd(tuple)));

exports.getReadonlyTupleOrdSnd = getReadonlyTupleOrdSnd;
const ordDateFromString = (0, _pipeable.pipe)(_Ord.ordDate, (0, _Ord.contramap)(a => new Date(a)));
exports.ordDateFromString = ordDateFromString;