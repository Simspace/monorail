"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tapIO = exports.logIO = exports.noOpIO = exports.newIO = exports.constRunIO = exports.runIO = void 0;

var logger = _interopRequireWildcard(require("fp-ts/lib/Console"));

var _function = require("fp-ts/lib/function");

var _IO = require("fp-ts/lib/IO");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

const logIO = (cb, logLevel = 'log') => value => _IO.io.map(logger[logLevel](cb(value)), () => value).run();

exports.logIO = logIO;

const tapIO = logIO_ => value => _IO.io.map(logIO_(value), () => value).run();

exports.tapIO = tapIO;