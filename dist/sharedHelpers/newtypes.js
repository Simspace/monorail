"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.prismFinite = exports.prismInfinity = exports.prismNaN = void 0;

var _newtypeTs = require("newtype-ts");

// use this prism to return an option with prismNaN.getOption(someNumber)
const prismNaN = (0, _newtypeTs.prism)(Number.isNaN);
/**
 * Infinity is a refinement of number
 */

exports.prismNaN = prismNaN;
const prismInfinity = (0, _newtypeTs.prism)(x => !Number.isFinite(x) && !Number.isNaN(x));
/**
 * Finite is a refinement of number
 */

exports.prismInfinity = prismInfinity;
const prismFinite = (0, _newtypeTs.prism)(Number.isFinite);
exports.prismFinite = prismFinite;