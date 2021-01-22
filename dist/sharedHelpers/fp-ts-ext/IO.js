"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  runIO: true,
  constRunIO: true,
  newIO: true,
  noOpIO: true,
  logIO: true,
  tapIO: true
};
exports.tapIO = exports.logIO = exports.noOpIO = exports.newIO = exports.constRunIO = exports.runIO = void 0;

var logger = _interopRequireWildcard(require("fp-ts/lib/Console"));

var _function = require("fp-ts/lib/function");

var _IO = require("fp-ts/lib/IO");

Object.keys(_IO).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _IO[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _IO[key];
    }
  });
});

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Run IO
 */
const runIO = x => x();
/**
 * Returns the run function for an IO<A>
 */


exports.runIO = runIO;

const constRunIO = x => x;
/**
 * IO constructor function
 *
 */


exports.constRunIO = constRunIO;

const newIO = f => f;
/**
 * noOp IO function
 */


exports.newIO = newIO;
const noOpIO = newIO(_function.constVoid);
exports.noOpIO = noOpIO;

const logIO = (cb, logLevel = 'log') => value => _IO.io.map(logger[logLevel](cb(value)), () => value)();

exports.logIO = logIO;

const tapIO = logIO_ => value => _IO.io.map(logIO_(value), () => value)();

exports.tapIO = tapIO;