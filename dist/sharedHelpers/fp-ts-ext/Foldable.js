"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  and: true,
  or: true,
  all: true,
  any: true,
  count: true,
  sequence_: true
};
exports.and = and;
exports.or = or;
exports.all = all;
exports.any = any;
exports.count = count;
exports.sequence_ = sequence_;

var _Foldable = require("fp-ts/lib/Foldable");

Object.keys(_Foldable).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Foldable[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Foldable[key];
    }
  });
});

var _function = require("fp-ts/lib/function");

var _Monoid = require("fp-ts/lib/Monoid");

function and(F) {
  return bs => F.foldMap(_Monoid.monoidAll)(bs, _function.identity);
}
/**
 * `or` returns the _disjunction_ of a data structure containing one or more
 * `boolean`s. This function will test whether any of the values in a data
 * structure is `true`.
 *
 * @param F Foldable instance
 * @param bs A foldable container of one or more `boolean`s
 *
 * @example
 * or(remoteData)(initial)          //-> false
 * or(remoteData)(pending)          //-> false
 * or(remoteData)(failure("Oops!")) //-> false
 * or(remoteData)(failure(true))    //-> false
 * or(remoteData)(success(false))   //-> false
 * or(remoteData)(success(true))    //-> true
 *
 * or(option)(none)        //-> false
 * or(option)(some(false)) //-> false
 * or(option)(some(true))  //-> true
 *
 * or(array)([false,false,false]) //-> false
 * or(array)([true,false,false])  //-> true
 * or(array)([])                  //-> false
 * or(array)([true])              //-> true
 */


function or(F) {
  return bs => F.foldMap(_Monoid.monoidAny)(bs, _function.identity);
}
/**
 * Tests whether _all_ elements of a data structure satisfy a predicate.
 *
 * @param F Foldable instance
 * @param pred Predicate on type `A`
 * @param as A foldable container of one or more values of type `A`
 *
 */


function all(F) {
  return (pred, as) => F.foldMap(_Monoid.monoidAll)(as, pred);
}
/**
 * Tests whether _any_ element of a data structure satisfies a predicate.
 *
 * @param F Foldable instance
 * @param pred Predicate on type `A`
 * @param as A foldable container of one or more values of type `A`
 *
 */


function any(F) {
  return (pred, as) => F.foldMap(_Monoid.monoidAny)(as, pred);
}
/**
 * Counts the number of items that match a predicate in the provided foldable
 * @param F the Foldable instance
 * @param pred Predicate on type `A`
 * @param as A foldable container of one or more values of type `A`
 */


function count(F) {
  return pred => as => F.foldMap(_Monoid.monoidSum)(as, x => pred(x) ? 1 : 0);
}
/**
/**
 * Sequence a data structure, performing some effects encoded by an `Applicative` functor at each value, ignoring the
 * final result.
 *
 * @since 2.0.0
 */


function sequence_(M, F) {
  return fa => (0, _Foldable.traverse_)(M, F)(fa, _function.identity);
}