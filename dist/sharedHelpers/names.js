"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.iso = exports.coerce = exports.the = exports.name = void 0;

var _monocleTs = require("monocle-ts");

var _newtypes = require("./newtypes");

const name = a => f => f(a);

exports.name = name;
const the = _newtypes.coerce;
exports.the = the;

const coerce = a => a;

exports.coerce = coerce;

const iso = () => new _monocleTs.Iso(the, coerce);

exports.iso = iso;