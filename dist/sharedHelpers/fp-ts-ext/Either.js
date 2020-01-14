"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOrd = exports.fold = void 0;

var _Either = require("fp-ts/lib/Either");

/**
 * Standalone version of fp-ts' `fold` for Eithers
 */
const fold = (x, onLeft, onRight) => x.fold(onLeft, onRight);
/**
 * Derives an `Ord` instance for `Either<A, B>` given an `Ord<A>` and an
 * `Ord<B>`.
 */


exports.fold = fold;

const getOrd = (ordA, ordB) => ({
  equals: (x, y) => (0, _Either.isLeft)(x) && (0, _Either.isLeft)(y) ? ordA.equals(x.value, y.value) : (0, _Either.isRight)(x) && (0, _Either.isRight)(y) ? ordB.equals(x.value, y.value) : false,
  compare: (x, y) => (0, _Either.isLeft)(x) && (0, _Either.isLeft)(y) ? ordA.compare(x.value, y.value) : (0, _Either.isRight)(x) && (0, _Either.isRight)(y) ? ordB.compare(x.value, y.value) : (0, _Either.isLeft)(x) && (0, _Either.isRight)(y) ? -1 : 1
});

exports.getOrd = getOrd;