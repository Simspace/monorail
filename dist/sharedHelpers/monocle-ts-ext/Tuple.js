"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tupleLens = void 0;

var _monocleTs = require("monocle-ts");

const tupleLens = () => i => new _monocleTs.Lens(as => as[i], a => as => [...as.slice(0, i), a, ...as.slice(i + 1)]);

exports.tupleLens = tupleLens;