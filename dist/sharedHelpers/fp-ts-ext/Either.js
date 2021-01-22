"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  isEither: true,
  getOrd: true,
  orElseW: true,
  toUnion: true
};
exports.toUnion = exports.orElseW = exports.getOrd = exports.isEither = void 0;

var _Either = require("fp-ts/lib/Either");

Object.keys(_Either).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Either[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Either[key];
    }
  });
});

var _pipeable = require("fp-ts/lib/pipeable");

var _typeGuards = require("../typeGuards");

/**
 * type guard for Either
 */
const isEither = x => {
  if (!(0, _typeGuards.isNil)(x)) {
    const x_ = x;
    return !(0, _typeGuards.isNil)(x_.right) || !(0, _typeGuards.isNil)(x_.left) && (!(0, _typeGuards.isNil)(x_._tag) && x_._tag === 'Left' || x_._tag === 'Right');
  }

  return false;
};
/**
 * Derives an `Ord` instance for `Either<A, B>` given an `Ord<A>` and an
 * `Ord<B>`.
 */


exports.isEither = isEither;

const getOrd = (ordA, ordB) => ({
  equals: (x, y) => (0, _Either.isLeft)(x) && (0, _Either.isLeft)(y) ? ordA.equals(x.left, y.left) : (0, _Either.isRight)(x) && (0, _Either.isRight)(y) ? ordB.equals(x.right, y.right) : false,
  compare: (x, y) => (0, _Either.isLeft)(x) && (0, _Either.isLeft)(y) ? ordA.compare(x.left, y.left) : (0, _Either.isRight)(x) && (0, _Either.isRight)(y) ? ordB.compare(x.right, y.right) : (0, _Either.isLeft)(x) && (0, _Either.isRight)(y) ? -1 : 1
});

exports.getOrd = getOrd;

const orElseW = f => ma => (0, _pipeable.pipe)(ma, (0, _Either.fold)(f, _Either.right));

exports.orElseW = orElseW;

const toUnion = either => (0, _pipeable.pipe)(either, (0, _Either.fold)(e => e, a => a));

exports.toUnion = toUnion;