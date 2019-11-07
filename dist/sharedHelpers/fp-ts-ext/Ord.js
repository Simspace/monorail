"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ordRecordWithNameLower = exports.recordWithNameLowerComparator = exports.ordAlpha = exports.alphaCompare = exports.ordNumeric = exports.numericCompare = void 0;

var _strings = require("../strings");

var _Setoid = require("./Setoid");

const numericCompare = (x, y) => x < y ? -1 : x > y ? 1 : 0;
/**
 * Ord instance for number
 */


exports.numericCompare = numericCompare;
const ordNumeric = { ..._Setoid.setoidStrict,
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
const ordAlpha = { ..._Setoid.setoidStrict,
  compare: alphaCompare
};
/**
 * Comparator for RecordWithName, comparing lowercase names alphabetically
 */

exports.ordAlpha = ordAlpha;

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
const ordRecordWithNameLower = { ..._Setoid.setoidRecordWithNameLower,
  compare: recordWithNameLowerComparator
};
exports.ordRecordWithNameLower = ordRecordWithNameLower;