"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.prismNaN = exports.isNewtypeNaN = void 0;

var _newtypeTs = require("newtype-ts");

/**
 * Alias for Number.isNaN
 */
const isNewtypeNaN = Number.isNaN; // use this prism to return an option with prismNaN.getOption(someNumber)

exports.isNewtypeNaN = isNewtypeNaN;
const prismNaN = (0, _newtypeTs.prism)(isNewtypeNaN);
exports.prismNaN = prismNaN;