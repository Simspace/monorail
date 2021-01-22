"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  unsafeCoerceToArray: true,
  unsafeCoerceFromArray: true,
  headAndTailS: true,
  headAndTailT: true,
  initAndLastS: true,
  initAndLastT: true,
  xor: true
};
exports.xor = exports.initAndLastT = exports.initAndLastS = exports.headAndTailT = exports.headAndTailS = exports.unsafeCoerceFromArray = exports.unsafeCoerceToArray = void 0;

var Ap = _interopRequireWildcard(require("fp-ts/lib/Apply"));

var O = _interopRequireWildcard(require("fp-ts/lib/Option"));

var RA = _interopRequireWildcard(require("fp-ts/lib/ReadonlyArray"));

Object.keys(RA).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === RA[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return RA[key];
    }
  });
});

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

const headAndTailS = a => Ap.sequenceS(O.option)({
  head: RA.head(a),
  tail: RA.tail(a)
});
/**
 * Gets the head and tail parts of the array as a tuple, if possible.
 *
 * This is often referred to "uncons," as it's the opposite of constructing an array with a head and tail.
 */


exports.headAndTailS = headAndTailS;

const headAndTailT = a => Ap.sequenceT(O.option)(RA.head(a), RA.tail(a));
/**
 * Gets the init and last parts of the array as an object, if possible.
 *
 * This is like an "uncons" for the end of the array.
 */


exports.headAndTailT = headAndTailT;

const initAndLastS = a => Ap.sequenceS(O.option)({
  init: RA.init(a),
  last: RA.last(a)
});
/**
 * Gets the init and last parts of the array as a tuple, if possible.
 *
 * This is like an "uncons" for the end of the array.
 */


exports.initAndLastS = initAndLastS;

const initAndLastT = a => Ap.sequenceT(O.option)(RA.init(a), RA.last(a));
/**
 * Returns an array of elements which are in both input arrays but not in their
 * intersection. Also known as symmetric difference or disjunctive union.
 */


exports.initAndLastT = initAndLastT;

const xor = eq => (xs, ys) => [...RA.difference(eq)(xs, ys), ...RA.difference(eq)(ys, xs)];

exports.xor = xor;