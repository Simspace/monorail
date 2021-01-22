"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  flip: true,
  o: true,
  swap: true
};
exports.flip = flip;
exports.swap = exports.o = void 0;

var _function = require("fp-ts/lib/function");

Object.keys(_function).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _function[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _function[key];
    }
  });
});

/**
 * Flips the order of the arguments of a binary function.
 *
 * Curried version of `flip` from 'fp-ts/lib/function'
 */
function flip(f) {
  return b => a => f(a)(b);
}
/**
 * Simple binary composition. Also known as `compose2`
 */


const o = (f, g) => x => f(g(x));
/**
 * Flips the position of each item in a 2-tuple
 */


exports.o = o;

const swap = ([x, y]) => [y, x];

exports.swap = swap;