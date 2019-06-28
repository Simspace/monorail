"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.noOpIO = exports.newIO = exports.constRunIO = exports.runIO = void 0;

var _function = require("fp-ts/lib/function");

var _IO = require("fp-ts/lib/IO");

/**
 * Run IO
 */
const runIO = x => x.run();
/**
 * Returns the run function for an IO<A>
 */


exports.runIO = runIO;

const constRunIO = x => x.run;
/**
 * IO constructor function
 *
 */


exports.constRunIO = constRunIO;

const newIO = f => new _IO.IO(f);
/**
 * noOp IO function
 */


exports.newIO = newIO;
const noOpIO = new _IO.IO(_function.constVoid);
exports.noOpIO = noOpIO;