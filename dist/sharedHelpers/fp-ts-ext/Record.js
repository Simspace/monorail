"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isRecord = exports.sortRecords = exports.pick = exports.omit = exports.prop = exports.keys = void 0;

var _Array = require("fp-ts/lib/Array");

var _typeGuards = require("../typeGuards");

var _Array2 = require("./Array");

/**
 * Retrieves the keys of an object while retaining keyof type information
 */
const keys = x => Object.keys(x);
/**
 * Retrieves the value of a given property key from an object (curried)
 */


exports.keys = keys;

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
 * Picks the key-value pairs from an object associated with the provided keys
 */


exports.omit = omit;

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

exports.isRecord = isRecord;