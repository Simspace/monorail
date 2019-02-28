"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.noOpIO = exports.mkIO = exports.constRunIO = exports.runIO = void 0;

var _IO = require("fp-ts/lib/IO");

var _general = require("./general");

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

const mkIO = f => new _IO.IO(f);
/**
 * noOp IO function
 */


exports.mkIO = mkIO;
const noOpIO = new _IO.IO(_general.constVoid);
exports.noOpIO = noOpIO;