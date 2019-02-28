"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mkStrMap = void 0;

var _StrMap = require("fp-ts/lib/StrMap");

/**
 * StrMap constructor function
 *
 */
const mkStrMap = object => new _StrMap.StrMap(object);

exports.mkStrMap = mkStrMap;