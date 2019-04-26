"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.prismNaN = void 0;

var _newtypeTs = require("newtype-ts");

// use this prism to return an option with prismNaN.getOption(someNumber)
const prismNaN = (0, _newtypeTs.prism)(Number.isNaN);
exports.prismNaN = prismNaN;