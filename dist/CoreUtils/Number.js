"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ordNumeric = exports.numericCompare = void 0;

var _Setoid = require("./Setoid");

/**
 * Determines ordering of two strings (numeric comparison)
 */
const numericCompare = (x, y) => x < y ? -1 : x > y ? 1 : 0;
/**
 * Ord instance for number
 */


exports.numericCompare = numericCompare;
const ordNumeric = { ..._Setoid.setoidStrict,
  compare: numericCompare
};
exports.ordNumeric = ordNumeric;