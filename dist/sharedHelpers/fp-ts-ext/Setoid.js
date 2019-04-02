"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setoidRecordWithNameLower = exports.recordWithNameLowerEquality = exports.getSetoidShallowEq = exports.setoidShallowEq = exports.getSetoidStrict = exports.setoidStrict = void 0;

var _Setoid = require("fp-ts/lib/Setoid");

var _shallowEqual = require("../shallowEqual");

var _strings = require("../strings");

/**
 * Generic setoid that uses strict equality checking
 */
const setoidStrict = {
  equals: _Setoid.strictEqual
  /**
   * Function that returns a generic setoid that uses strict equality checking
   *
   * NOTE: This only exists in case you need to explicitly provide a generic
   */

};
exports.setoidStrict = setoidStrict;

const getSetoidStrict = () => setoidStrict;
/**
 * Generic setoid that uses shallow equality checking
 */


exports.getSetoidStrict = getSetoidStrict;
const setoidShallowEq = {
  equals: _shallowEqual.shallowEqual
  /**
   * Function that returns a generic setoid that uses shallow equality checking
   *
   * NOTE: This only exists in case you need to explicitly provide a generic
   */

};
exports.setoidShallowEq = setoidShallowEq;

const getSetoidShallowEq = () => setoidShallowEq;
/**
 * Equality checker for RecordWithName, comparing lowercase names
 */


exports.getSetoidShallowEq = getSetoidShallowEq;

const recordWithNameLowerEquality = (a, b) => (0, _strings.toLower)(a.name) === (0, _strings.toLower)(b.name);
/**
 * Setoid for RecordWithName using recordWithNameLowerEquality
 */


exports.recordWithNameLowerEquality = recordWithNameLowerEquality;
const setoidRecordWithNameLower = {
  equals: recordWithNameLowerEquality
};
exports.setoidRecordWithNameLower = setoidRecordWithNameLower;