"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.o = exports.flip_ = void 0;

/**
 * Flips the order of the arguments to an uncurried function taking two
 * arguments.
 */
const flip_ = f => (b, a) => f(a, b);
/**
 * Simple binary composition. Also known as `compose2`
 */


exports.flip_ = flip_;

const o = (f, g) => x => f(g(x));

exports.o = o;