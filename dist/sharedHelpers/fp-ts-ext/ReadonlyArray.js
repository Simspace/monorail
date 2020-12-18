"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.xor = exports.initAndLastT = exports.initAndLastS = exports.headAndTailT = exports.headAndTailS = exports.unsafeCoerceFromArray = exports.unsafeCoerceToArray = void 0;

var _fpTsImports = require("../fp-ts-imports");

/**
 * Unsafely coerce the ReadonlyArray<A> to an Array<A>
 */
const unsafeCoerceToArray = readonlyArray => readonlyArray;
/**
 * Unsafely coerce an Array<A> to a ReadonlyArray<A>
 */


exports.unsafeCoerceToArray = unsafeCoerceToArray;

const unsafeCoerceFromArray = array => array;
/**
 * Gets the head and tail parts of the array as an object, if possible.
 *
 * This is often referred to "uncons," as it's the opposite of constructing an array with a head and tail.
 */


exports.unsafeCoerceFromArray = unsafeCoerceFromArray;

const headAndTailS = a => _fpTsImports.Ap.sequenceS(_fpTsImports.O.option)({
  head: _fpTsImports.RA.head(a),
  tail: _fpTsImports.RA.tail(a)
});
/**
 * Gets the head and tail parts of the array as a tuple, if possible.
 *
 * This is often referred to "uncons," as it's the opposite of constructing an array with a head and tail.
 */


exports.headAndTailS = headAndTailS;

const headAndTailT = a => _fpTsImports.Ap.sequenceT(_fpTsImports.O.option)(_fpTsImports.RA.head(a), _fpTsImports.RA.tail(a));
/**
 * Gets the init and last parts of the array as an object, if possible.
 *
 * This is like an "uncons" for the end of the array.
 */


exports.headAndTailT = headAndTailT;

const initAndLastS = a => _fpTsImports.Ap.sequenceS(_fpTsImports.O.option)({
  init: _fpTsImports.RA.init(a),
  last: _fpTsImports.RA.last(a)
});
/**
 * Gets the init and last parts of the array as a tuple, if possible.
 *
 * This is like an "uncons" for the end of the array.
 */


exports.initAndLastS = initAndLastS;

const initAndLastT = a => _fpTsImports.Ap.sequenceT(_fpTsImports.O.option)(_fpTsImports.RA.init(a), _fpTsImports.RA.last(a));
/**
 * Returns an array of elements which are in both input arrays but not in their
 * intersection. Also known as symmetric difference or disjunctive union.
 */


exports.initAndLastT = initAndLastT;

const xor = eq => (xs, ys) => [..._fpTsImports.RA.difference(eq)(xs, ys), ..._fpTsImports.RA.difference(eq)(ys, xs)];

exports.xor = xor;