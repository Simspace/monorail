"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSetoidShallowEq = exports.setoidShallowEq = exports.getSetoidStrict = exports.setoidStrict = void 0;

var _Setoid = require("fp-ts/lib/Setoid");

var _shallowEqual = require("./shallowEqual");

/**
 * Generic setoid that uses strict equality checking
 */
const setoidStrict = {
  equals: _Setoid.strictEqual
  /**
   * Function that returns a generic setoid that uses strict equality checking
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
   */

};
exports.setoidShallowEq = setoidShallowEq;

const getSetoidShallowEq = () => setoidShallowEq;

exports.getSetoidShallowEq = getSetoidShallowEq;