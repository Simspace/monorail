"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flip = flip;
exports.swap = exports.o = void 0;

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