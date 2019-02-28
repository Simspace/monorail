"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sortRecords = exports.ordRecordWithNameLower = exports.setoidRecordWithNameLower = exports.recordWithNameLowerComparator = exports.recordWithNameLowerEquality = exports.traverseMixedRecordOptions = exports.sequenceMixedRecordOptions = exports.pick = exports.omit = exports.lookup = exports.prop_ = exports.prop = exports.values = exports.keys = void 0;

var _Option = require("fp-ts/lib/Option");

var record = _interopRequireWildcard(require("fp-ts/lib/Record"));

var _Array = require("fp-ts/lib/Array");

var _Array2 = require("./Array");

var _String = require("./String");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/**
 * Retrieves the keys of an object while retaining keyof type information
 */
const keys = x => Object.keys(x);
/**
 * Retrieves the values of an object while retaining type information
 */


exports.keys = keys;

const values = x => Object.values(x);
/**
 * Retrieves the value of a given property key from an object (curried)
 */


exports.values = values;

const prop = k => obj => obj[k];
/**
 * Retrieves the value of a given property key from an object (uncurried)
 */


exports.prop = prop;

const prop_ = (k, obj) => obj[k];
/**
 * General lookup function that retrieves the value associated with a given
 * property key in an object, returning an option. Returns a None if the key
 * is missing from the object OR if the key exists but the value is null or
 * undefined
 */


exports.prop_ = prop_;

const lookup = (key, fa) => fa.hasOwnProperty(key) ? (0, _Option.fromNullable)(fa[key]) : _Option.none;
/**
 * Omits the key-value pairs from an object associated with the provided keys
 */


exports.lookup = lookup;

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

const sequenceMixedRecordOptions = rec => {
  const result = {};

  for (const [k, opt] of record.toArray(rec)) {
    if ((0, _Option.isNone)(opt)) {
      return _Option.none;
    } else {
      result[k] = opt.value;
    }
  }

  return (0, _Option.some)(result);
};

exports.sequenceMixedRecordOptions = sequenceMixedRecordOptions;

const traverseMixedRecordOptions = (rec, f) => {
  const result = {};

  for (const [k, val] of record.toArray(rec)) {
    const opt = f(val);

    if ((0, _Option.isNone)(opt)) {
      return _Option.none;
    } else {
      result[k] = opt.value;
    }
  }

  return (0, _Option.some)(result);
};
/**
 * Interface for records extending a { name: string } key-val pair
 */


exports.traverseMixedRecordOptions = traverseMixedRecordOptions;

/**
 * Equality checker for RecordWithName, comparing lowercase names
 */
const recordWithNameLowerEquality = (a, b) => (0, _String.toLower)(a.name) === (0, _String.toLower)(b.name);
/**
 * Comparator for RecordWithName, comparing lowercase names alphabetically
 */


exports.recordWithNameLowerEquality = recordWithNameLowerEquality;

const recordWithNameLowerComparator = (a, b) => {
  const nameA = (0, _String.toLower)(a.name);
  const nameB = (0, _String.toLower)(b.name);
  return nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
};

exports.recordWithNameLowerComparator = recordWithNameLowerComparator;
const setoidRecordWithNameLower = {
  equals: recordWithNameLowerEquality
  /**
   * Ord instance for types extending the RecordWithName interface
   * that does comparisons & equality checking against the name prop
   * converted to lowercase
   */

};
exports.setoidRecordWithNameLower = setoidRecordWithNameLower;
const ordRecordWithNameLower = { ...setoidRecordWithNameLower,
  compare: recordWithNameLowerComparator
};
exports.ordRecordWithNameLower = ordRecordWithNameLower;

const sortRecords = ord => data => (0, _Array.sort)(ord)(data);

exports.sortRecords = sortRecords;