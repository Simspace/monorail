"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.trim = trim;
exports.join = join;
exports.includes = exports.truncate = exports.toLocaleLower = exports.toLower = exports.findIndex = exports.splitName = exports.replace = exports.split = void 0;

var _Array = require("fp-ts/lib/Array");

var _Option = require("fp-ts/lib/Option");

var _function = require("./fp-ts-ext/function");

var _Option2 = require("./fp-ts-ext/Option");

/**
 * Given a string or RegExp separator and a string, splits a string into an
 * array of strings
 */
const split = sep => xs => xs.split(sep);
/**
 * Replaces text in a string, using an object that supports replacement within a string.
 */


exports.split = split;

const replace = (searchValue, replaceValue) => xs => xs.replace(searchValue, replaceValue);
/**
 * Translates a space separated name string into a first & last name record
 */


exports.replace = replace;

const splitName = name => {
  const xs = split(' ')(name);

  const safeGetVia = f => (0, _function.o)(_Option2.getOrEmptyString, f)(xs);

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
 * Converts all alphabetic characters to local lower case
 */


exports.toLower = toLower;

const toLocaleLower = target => target.toLocaleLowerCase();
/**
 * Takes a string and removes the spaces at the end of strings
 */


exports.toLocaleLower = toLocaleLower;

function trim(str) {
  return str.trim();
}

function join(separator, arr) {
  return arr.join(separator);
}

const truncate = maxLength => value => {
  return value.length > maxLength ? value.slice(0, maxLength - 3).trim().concat('...') : value;
};

exports.truncate = truncate;

const includes = target => source => {
  return source.includes(target);
};

exports.includes = includes;