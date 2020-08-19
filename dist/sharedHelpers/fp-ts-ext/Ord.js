"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.invert = exports.ordRecordWithNameLower = exports.recordWithNameLowerComparator = exports.ordCaseInsensitiveString = exports.ordAlpha = exports.alphaCompare = exports.ordNumeric = exports.numericCompare = void 0;

var _Ord = require("fp-ts/lib/Ord");

var _Ordering = require("fp-ts/lib/Ordering");

var _strings = require("../strings");

var _Eq = require("./Eq");

var _function = require("fp-ts/lib/function");

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

exports.invert = invert;