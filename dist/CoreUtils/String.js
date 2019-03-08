"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.trim = trim;
exports.join = join;
exports.ordAlpha = exports.alphaCompare = exports.toLocaleLower = exports.toLower = exports.findIndex = exports.splitName = exports.split = void 0;

var _Array = require("fp-ts/lib/Array");

var _Option = require("fp-ts/lib/Option");

var _Setoid = require("fp-ts/lib/Setoid");

var _general = require("./general");

var _Option2 = require("./Option");

/**
 * Given a string or RegExp separator and a string, splits a string into an
 * array of strings
 */
const split = sep => xs => xs.split(sep);
/**
 * Translates a space separated name string into a first & last name record
 */


exports.split = split;

const splitName = name => {
  const xs = split(' ')(name);

  const safeGetVia = f => (0, _general.o)(_Option2.getOrEmptyString, f)(xs);

  return {
    first: safeGetVia(_Array.head),
    last: safeGetVia(_Array.last)
  };
};
/**
 * Returns the position of the first occurrence of a substring wrapped in a Some
 * or returns a None if the substring is not found
 */


exports.splitName = splitName;

const findIndex = substring => xs => {
  const i = xs.indexOf(substring);
  return i === -1 ? _Option.none : (0, _Option.some)(i);
};
/**
 * Converts all the alphabetic characters in a string to lowercase.
 */


exports.findIndex = findIndex;

const toLower = x => x.toLowerCase();
/**
 * Converts all alphabetic characters to lowercase, taking into account the
 * host environment's current locale.
 */


exports.toLower = toLower;

const toLocaleLower = x => x.toLocaleLowerCase();
/**
 * Determines ordering of two strings (alphabetic comparison)
 */


exports.toLocaleLower = toLocaleLower;

const alphaCompare = (x, y) => x < y ? -1 : x > y ? 1 : 0;
/**
 * Ord instance for string
 */


exports.alphaCompare = alphaCompare;
const ordAlpha = {
  equals: _Setoid.strictEqual,
  compare: alphaCompare
  /**
   * Takes a string and removes the spaces at the end of strings
   */

};
exports.ordAlpha = ordAlpha;

function trim(str) {
  return str.trim();
}

function join(separator, arr) {
  return arr.join(separator);
}