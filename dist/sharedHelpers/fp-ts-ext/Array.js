"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rle = exports.toggle = exports.fromEither = exports.fromOption = exports.without = exports.isNotEmpty = exports.arrayToRecord = exports.xor = exports.notAny = exports.all = exports.any = exports.intersperseMapWithIndex = exports.intersperseMap = exports.intersperse = exports.liftOption2 = exports.sortByNumeric = exports.sortByAlpha = exports.splitEithers = exports.leftsAndRights = exports.traverseTaskEithers = exports.traverseTasks = exports.traverseEithers = exports.traverseOptions = exports.sequenceRemoteData = exports.sequenceTaskEithers = exports.sequenceTasks = exports.sequenceEithers = exports.sequenceOptions = exports.len = exports.containsAny = exports.containsEq = exports.contains = exports.runIOs = exports.forEachWithIndex = exports.forEach = exports.concatFlipped = exports.concat = exports.map = void 0;

var _fpTsImports = require("../fp-ts-imports");

var _remoteDataTs = require("@devexperts/remote-data-ts");

var _Apply = require("fp-ts/lib/Apply");

var _Array = require("fp-ts/lib/Array");

var _Either = require("fp-ts/lib/Either");

var _function = require("fp-ts/lib/function");

var _pipeable = require("fp-ts/lib/pipeable");

var _Option = require("fp-ts/lib/Option");

var _Record = require("fp-ts/lib/Record");

var _Task = require("fp-ts/lib/Task");

var _TaskEither = require("fp-ts/lib/TaskEither");

var _typeGuards = require("../typeGuards");

var _IO = require("./IO");

var _Option2 = require("./Option");

var _Ord = require("./Ord");

var _Eq = require("./Eq");

var _Monoid = require("fp-ts/lib/Monoid");

var _lodash = require("lodash");

/**
 * Curried version of fp-ts' `map` for Arrays
 */
const map = f => xs => _Array.array.map(xs, f);
/**
 * Curried version of fp-ts' `concat`/'alt' for Arrays.
 */


exports.map = map;

const concat = xs => ys => _Array.array.alt(xs, () => ys);
/**
 * Curried version of fp-ts' `concat` or `alt` for Arrays
 * with its arguments reversed
 */


exports.concat = concat;

const concatFlipped = xs => ys => _Array.array.alt(xs, () => ys);
/**
 * Function wrapper around the native `array.forEach`
 */


exports.concatFlipped = concatFlipped;

const forEach = (xs, f) => xs.forEach(f);
/**
 * Function wrapper around the native `array.forEach` including an index
 */


exports.forEach = forEach;

const forEachWithIndex = (xs, f) => xs.forEach(f);
/**
 * Runs each IO<A> in an Array<IO<A>>, ignoring their return values
 */


exports.forEachWithIndex = forEachWithIndex;

const runIOs = xs => forEach(xs, _IO.runIO);
/**
 * Tests whether or not something is a member of an array via strict equality
 */


exports.runIOs = runIOs;

const contains = x => xs => (0, _Array.elem)(_Eq.eqStrict)(x, xs);
/**
 * Tests whether or not something is a member of an array based on the supplied Eq instance
 */


exports.contains = contains;

const containsEq = eq => x => xs => (0, _Array.elem)(eq)(x, xs);
/**
 * Returns true if any values from xs exist in ys
 * @param E the Eq insance that's used to compare
 */


exports.containsEq = containsEq;

const containsAny = eq => xs => ys => _Array.array.foldMap(_Monoid.monoidAny)(xs, x => containsEq(eq)(x)(ys));
/**
 * Gets the length of an ArrayLike or string
 */


exports.containsAny = containsAny;

const len = xs => xs.length;
/**
 * sequence utility for the Option instance of Applicative and the Array
 * instance of Traversable2v1
 */


exports.len = len;

const sequenceOptions = _Array.array.sequence(_Option.option);
/**
 * sequence utility for the Either instance of Applicative and the Array
 * instance of Traversable2v1
 */


exports.sequenceOptions = sequenceOptions;

const sequenceEithers = _Array.array.sequence(_Either.either);
/**
 * sequence utility for the Task instance of Applicative and the Array
 * instance of Traversable2v1
 */


exports.sequenceEithers = sequenceEithers;

const sequenceTasks = _Array.array.sequence(_Task.task);
/**
 * sequence utility for the TaskEither instance of Applicative and the Array
 * instance of Traversable2v1
 */


exports.sequenceTasks = sequenceTasks;

const sequenceTaskEithers = _Array.array.sequence(_TaskEither.taskEither);
/**
 * sequence utility for the RemoteData instance of Applicative and the Array
 * instance of Traversable2v1
 */


exports.sequenceTaskEithers = sequenceTaskEithers;

const sequenceRemoteData = _Array.array.sequence(_remoteDataTs.remoteData);
/**
 * traverse utility for the Option instance of Applicative and the Array
 * instance of Traversable2v1
 */


exports.sequenceRemoteData = sequenceRemoteData;

const traverseOptions = _Array.array.traverse(_Option.option);
/**
 * traverse utility for the Either instance of Applicative and the Array
 * instance of Traversable2v1
 */


exports.traverseOptions = traverseOptions;

const traverseEithers = _Array.array.traverse(_Either.either);
/**
 * traverse utility for the Task instance of Applicative and the Array
 * instance of Traversable2v1
 */


exports.traverseEithers = traverseEithers;

const traverseTasks = _Array.array.traverse(_Task.task);
/**
 * traverse utility for the TaskEither instance of Applicative and the Array
 * instance of Traversable2v1
 */


exports.traverseTasks = traverseTasks;

const traverseTaskEithers = _Array.array.traverse(_TaskEither.taskEither);
/**
 * Type representing the Left and Right values of an Array of Eithers
 */


exports.traverseTaskEithers = traverseTaskEithers;

/**
 * Gets both the Lefts and Rights from an Array of Eithers simultaneously
 */
const leftsAndRights = xs => {
  const {
    left,
    right
  } = _Array.array.partition(xs, _Either.isRight);

  const getValue = x => (0, _pipeable.pipe)(x, (0, _Either.fold)(_lodash.identity, _lodash.identity));

  const ls = _Array.array.map(left, getValue);

  const rs = _Array.array.map(right, getValue);

  return {
    lefts: ls,
    rights: rs
  };
};
/**
 * Splits an Array of eithers using {@link leftsAndRights},
 * but wraps it in a tuple for easier renaming
 * @param xs the array of Eithers to split
 */


exports.leftsAndRights = leftsAndRights;

const splitEithers = xs => {
  const {
    lefts,
    rights
  } = leftsAndRights(xs);
  return [lefts, rights];
};
/**
 * Sorts an array of strings alphabetically
 */


exports.splitEithers = splitEithers;
const sortByAlpha = (0, _Array.sort)(_Ord.ordAlpha);
/**
 * Sorts an array of strings numerically
 */

exports.sortByAlpha = sortByAlpha;
const sortByNumeric = (0, _Array.sort)(_Ord.ordNumeric);
/**
 * Lift a function of two arguments to a function which accepts and returns
 * those same values in the context of Options
 */

exports.sortByNumeric = sortByNumeric;

const liftOption2 = f => oa => ob => (0, _pipeable.pipe)((0, _Apply.sequenceT)(_fpTsImports.O.option)(oa, ob), _fpTsImports.O.map(([a, b]) => f(a)(b)));
/**
 * Takes an element and a list and "intersperses", or "mixes in", that element
 * between the elements of the list
 */


exports.liftOption2 = liftOption2;

const intersperse = (a, as) => {
  if (len(as) < 2) {
    return as;
  } else {
    const initAs = (0, _Array.init)(as);
    const lastA = (0, _Array.last)(as);
    const result = liftOption2(init_ => last_ => {
      const interspersedInit = _Array.array.chain(init_, x => (0, _function.tuple)(x, a));

      return (0, _Array.snoc)(interspersedInit, last_);
    })(initAs)(lastA);
    return (0, _Option2.getOrElse)(as)(result);
  }
};
/**
 * Like `intersperse`, but takes a map function that returns the item to be
 * "interspersed" instead of directly taking the item itself
 */


exports.intersperse = intersperse;

const intersperseMap = (f, as) => {
  if (len(as) < 2) {
    return as;
  } else {
    const initAs = (0, _Array.init)(as);
    const lastA = (0, _Array.last)(as);
    const result = liftOption2(init_ => last_ => {
      const interspersedInit = _Array.array.chain(init_, x => (0, _function.tuple)(x, f(x)));

      return (0, _Array.snoc)(interspersedInit, last_);
    })(initAs)(lastA);
    return (0, _Option2.getOrElse)(as)(result);
  }
};
/**
 * An indexed version of `intersperseMap`-- adds an index to the map function
 */


exports.intersperseMap = intersperseMap;

const intersperseMapWithIndex = (f, as) => {
  if (len(as) < 2) {
    return as;
  } else {
    const initAs = (0, _Array.init)(as);
    const lastA = (0, _Array.last)(as);
    const result = liftOption2(init_ => last_ => {
      const pairs = _Array.array.mapWithIndex(init_, (i, x) => (0, _function.tuple)(x, f(x, i)));

      const interspersedInit = (0, _Array.flatten)(pairs);
      return (0, _Array.snoc)(interspersedInit, last_);
    })(initAs)(lastA);
    return (0, _Option2.getOrElse)(as)(result);
  }
};
/**
 * Returns a boolean indicating whether or not the specified predicate function
 * holds true for any element of an array.
 */


exports.intersperseMapWithIndex = intersperseMapWithIndex;

const any = (as, p) => {
  const resultOpt = traverseOptions(as, a => p(a) ? _Option.none : (0, _Option.some)(a));
  return _fpTsImports.O.fold(_function.constTrue, _function.constFalse)(resultOpt);
};
/**
 * Returns a boolean indicating whether or not the specified predicate function
 * holds true for all elements of an array.
 */


exports.any = any;

const all = (as, p) => {
  const resultOpt = traverseOptions(as, a => p(a) ? (0, _Option.some)(a) : _Option.none);
  return _fpTsImports.O.fold(_function.constFalse, _function.constTrue)(resultOpt);
};
/**
 * Returns a boolean indicating whether or not the specified predicate function
 * holds true for no elements of an array.
 */


exports.all = all;

const notAny = (as, p) => {
  const resultOpt = traverseOptions(as, a => p(a) ? _Option.none : (0, _Option.some)(a));
  return _fpTsImports.O.fold(_function.constFalse, _function.constTrue)(resultOpt);
};
/**
 * Returns an array of elements which are in both input arrays but not in their
 * intersection. Also known as symmetric difference or disjunctive union.
 */


exports.notAny = notAny;

const xor = eq => (xs, ys) => [...(0, _Array.difference)(eq)(xs, ys), ...(0, _Array.difference)(eq)(ys, xs)];
/**
 * Returns an object made up of a keys from the result the accessor function
 */


exports.xor = xor;

const arrayToRecord = (keyAccessor, mapValue) => arr => {
  return arr.reduce((acc, curr) => {
    const key = keyAccessor(curr);
    const value = (0, _typeGuards.isNotNil)(mapValue) ? mapValue(curr) : curr;
    return (0, _pipeable.pipe)((0, _Record.lookup)(key, acc), _fpTsImports.O.fold(() => ({ ...acc,
      [key]: value
    }), () => acc));
  }, {});
};
/**
 * Checks if an array is *not* empty
 */


exports.arrayToRecord = arrayToRecord;

const isNotEmpty = arr => !(0, _Array.isEmpty)(arr);
/**
 * removes all occurences of an element from an Array
 * @param E equals instance for comapring elements in the array
 * @param t the value to remove
 */


exports.isNotEmpty = isNotEmpty;

const without = (eq, t) => xs => xs.filter(x => !eq.equals(x, t));
/**
 * Converts an Option into an Array, if the Option is none,
 * an empty array will be returned,
 * if the option is some, and array with the value will be returned
 * @param o the Option to convert
 */


exports.without = without;

const fromOption = o => (0, _pipeable.pipe)(o, _fpTsImports.O.fold(() => [], v => [v]));
/**
 * Converts an Either into an Array, returning an empty array if the either
 * is Left, and an array of length one with the right value if the either
 * is Right
 * @param e the Either to convert
 */


exports.fromOption = fromOption;

const fromEither = e => (0, _pipeable.pipe)(e, (0, _Either.fold)(() => [], r => [r]));

exports.fromEither = fromEither;

const toggle = eq => a => as => ((0, _Array.elem)(eq)(a, as) ? _Array.difference : _Array.union)(eq)(as, [a]);
/**
 * Calculates the run length encoding of an array. Given a sorted array, this is
 * equivalent to finding the counts of each entry.
 *
 * @example
 *
 * expect(rle(eqString)('aaabba'.split(''))).toEqual([
 *   ['a', 3], ['b', 2], ['a', 1]
 * ])
 */


exports.toggle = toggle;

const rle = eq => as => (0, _pipeable.pipe)(as, (0, _Array.reduce)([], (runLengths, next) => (0, _pipeable.pipe)((0, _Array.last)(runLengths), _fpTsImports.O.fold(() => [[next, 1]], ([prev, n]) => eq.equals(prev, next) ? runLengths.slice(0, -1).concat([[prev, n + 1]]) : runLengths.concat([[next, 1]])))));

exports.rle = rle;