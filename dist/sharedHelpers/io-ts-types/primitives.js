"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.booleanFalse = exports.FalseType = exports.booleanTrue = exports.TrueType = void 0;

var _ioTs = require("io-ts");

var _function = require("fp-ts/lib/function");

class TrueType extends _ioTs.Type {
  constructor() {
    super('true', u => typeof u === 'boolean' && u === true, (u, c) => this.is(u) ? (0, _ioTs.success)(u) : (0, _ioTs.failure)(u, c), _function.identity);
    this._tag = 'TrueType';
  }

}

exports.TrueType = TrueType;
const booleanTrue = new TrueType();
exports.booleanTrue = booleanTrue;

class FalseType extends _ioTs.Type {
  constructor() {
    super('false', u => typeof u === 'boolean' && u === false, (u, c) => this.is(u) ? (0, _ioTs.success)(u) : (0, _ioTs.failure)(u, c), _function.identity);
    this._tag = 'FalseType';
  }

}

exports.FalseType = FalseType;
const booleanFalse = new FalseType();
exports.booleanFalse = booleanFalse;