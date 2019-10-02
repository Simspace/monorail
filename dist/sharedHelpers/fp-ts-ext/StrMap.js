"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.newStrMap = void 0;

var _StrMap = require("fp-ts/lib/StrMap");

const newStrMap = object => new _StrMap.StrMap(object);

exports.newStrMap = newStrMap;