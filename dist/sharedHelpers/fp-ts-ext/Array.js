"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  concat: true,
  precat: true,
  append: true,
  prepend: true,
  forEach: true,
  forEachWithIndex: true,
  elemWithEqStrict: true,
  elemP: true,
  elemAny: true,
  len: true,
  liftOption2: true,
  intersperseMap: true,
  intersperseMapWithIndex: true,
  separateT: true,
  any: true,
  all: true,
  notAny: true,
  xor: true,
  arrayToRecord: true,
  isNotEmpty: true,
  without: true,
  fromOption: true,
  fromEither: true,
  toggle: true,
  rle: true,
  zip: true,
  spliceWhere: true,
  findFirstMapWithIndex: true,
  compactNullable: true
};
exports.compactNullable = exports.findFirstMapWithIndex = exports.spliceWhere = exports.zip = exports.rle = exports.toggle = exports.fromEither = exports.fromOption = exports.without = exports.isNotEmpty = exports.arrayToRecord = exports.xor = exports.notAny = exports.all = exports.any = exports.separateT = exports.intersperseMapWithIndex = exports.intersperseMap = exports.liftOption2 = exports.len = exports.elemAny = exports.elemP = exports.elemWithEqStrict = exports.forEachWithIndex = exports.forEach = exports.prepend = exports.append = exports.precat = exports.concat = void 0;

var Ap = _interopRequireWildcard(require("fp-ts/lib/Apply"));

var A = _interopRequireWildcard(require("fp-ts/lib/Array"));

Object.keys(A).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === A[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return A[key];
    }
  });
});

var E = _interopRequireWildcard(require("fp-ts/lib/Either"));

var Eq = _interopRequireWildcard(require("fp-ts/lib/Eq"));

var _function = require("fp-ts/lib/function");

var Mn = _interopRequireWildcard(require("fp-ts/lib/Monoid"));

var O = _interopRequireWildcard(require("fp-ts/lib/Option"));

var _pipeable = require("fp-ts/lib/pipeable");

var R = _interopRequireWildcard(require("fp-ts/lib/Record"));

var OExt = _interopRequireWildcard(require("./Option"));

var _typeGuards = require("../typeGuards");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// TODO: we should copy all these functions to ReadonlyArray (and change the types to ReadonlyArray), then alias those functions here.
// There is also likely some redundancy with some of these and what's available now that we are on fp-ts 2.

/**
 * Curried, pipeable version of concat. Note that the arguments are in order for use with `pipe`, so the argument order might seem backwards at first glance.
 * The first argument is passed as an object with the key of `suffix` to avoid misuse.
 *
 * The result is `prefix.concat(suffix)`
 *
 * @example
 * ```typescript
 * A.concat({ suffix: [1, 2] })([3, 4]) // [3,4,2,1]
 *
 * pipe(
 *   [1,2],
 *   A.concat({ suffix: [3, 4] })
 * ) // [1,2,3,4]
 * ```
 */
const concat = ({
  suffix
}) => prefix => prefix.concat(suffix);
/**
 * Curried, pipeable version of concat with arguments flipped for concatenating at the start of another Array. The result is prefix.concat(suffix).
 * The first argument is passed as an object with the key of `prefix` to avoid misuse.
 *
 * @example
 * ```typescript
 * A.precat({ prefix: [1, 2] })([3, 4]) // [1,2,3,4]
 *
 * pipe(
 *   [1,2],
 *   A.precat({ prefix: [3, 4] })
 * ) // [3,4,1,2]
 * ```
 */


exports.concat = concat;

const precat = ({
  prefix
}) => suffix => prefix.concat(suffix);
/**
 * Curried, pipeable version of `snoc` (aka append), for adding an item to the end of an Array
 */


exports.precat = precat;

const append = x => xs => A.snoc(xs, x);
/**
 * Curried, pipeable version of `cons`, for adding an item to the beginning of an Array
 */


exports.append = append;

const prepend = x => xs => A.cons(x, xs);
/**
 * Pipeable forEach. Runs an effect on each element of the input Array, then returns the input Array unchanged.
 */


exports.prepend = prepend;

const forEach = f => xs => {
  xs.forEach(f);
  return xs;
};
/**
 * Pipeable forEach with index. Runs an effect on each element of the input Array, then returns the Array unchanged.
 */


exports.forEach = forEach;

const forEachWithIndex = f => xs => {
  xs.forEach(f);
  return xs;
};
/**
 * Tests whether or not something is a member of an array via strict (===) equality
 */


exports.forEachWithIndex = forEachWithIndex;

const elemWithEqStrict = x => xs => A.elem(Eq.eqStrict)(x, xs);
/**
 * Tests whether or not something is a member of an array based on the supplied Eq instance
 *
 * Same as base A.elem, but a more pipeable signature. Named `elemP` to disambiguate from base `elem`.
 */


exports.elemWithEqStrict = elemWithEqStrict;

const elemP = eq => x => xs => A.elem(eq)(x, xs);
/**
 * Returns true if any values from xs exist in ys
 * @param E the Eq insance that's used to compare
 */


exports.elemP = elemP;

const elemAny = eq => xs => ys => A.array.foldMap(Mn.monoidAny)(xs, x => elemP(eq)(x)(ys));
/**
 * Gets the length of an ArrayLike or string
 */


exports.elemAny = elemAny;

const len = xs => xs.length;
/**
 * Lift a function of two arguments to a function which accepts and returns
 * those same values in the context of Options
 */


exports.len = len;

const liftOption2 = f => oa => ob => (0, _pipeable.pipe)(Ap.sequenceT(O.option)(oa, ob), O.map(([a, b]) => f(a)(b)));
/**
 * Like `intersperse`, but takes a map function that returns the item to be
 * "interspersed" instead of directly taking the item itself
 */


exports.liftOption2 = liftOption2;

const intersperseMap = f => as => {
  if (len(as) < 2) {
    return as;
  } else {
    const initAs = A.init(as);
    const lastA = A.last(as);
    const result = liftOption2(init_ => last_ => {
      const interspersedInit = A.array.chain(init_, x => (0, _function.tuple)(x, f(x)));
      return A.snoc(interspersedInit, last_);
    })(initAs)(lastA);
    return O.getOrElse(() => as)(result);
  }
};
/**
 * An indexed version of `intersperseMap`-- adds an index to the map function
 */


exports.intersperseMap = intersperseMap;

const intersperseMapWithIndex = f => as => {
  if (len(as) < 2) {
    return as;
  } else {
    const initAs = A.init(as);
    const lastA = A.last(as);
    const result = liftOption2(init_ => last_ => {
      const pairs = A.array.mapWithIndex(init_, (i, x) => (0, _function.tuple)(x, f(x, i)));
      const interspersedInit = A.flatten(pairs);
      return A.snoc(interspersedInit, last_);
    })(initAs)(lastA);
    return OExt.getOrElse(() => as)(result);
  }
};
/**
 * Variant of separate that returns the resulting arrays in a tuple
 */


exports.intersperseMapWithIndex = intersperseMapWithIndex;

const separateT = eithers => {
  const {
    left,
    right
  } = A.separate(eithers);
  return [left, right];
};
/**
 * Returns a boolean indicating whether the specified predicate function
 * holds true for any element of an array.
 */


exports.separateT = separateT;

const any = (as, p) => {
  return as.some(p);
};
/**
 * Returns a boolean indicating whether the specified predicate function
 * holds true for all elements of an array.
 */


exports.any = any;

const all = (as, p) => {
  return as.every(p);
};
/**
 * Returns a boolean indicating whether the specified predicate function
 * holds true for no elements of an array.
 */


exports.all = all;

const notAny = (as, p) => {
  return !as.some(p);
};
/**
 * Returns an array of elements which are in both input arrays but not in their
 * intersection. Also known as symmetric difference or disjunctive union.
 */


exports.notAny = notAny;

const xor = eq => (xs, ys) => [...A.difference(eq)(xs, ys), ...A.difference(eq)(ys, xs)];
/**
 * Returns an object made up of a keys from the result the accessor function
 */


exports.xor = xor;

const arrayToRecord = (keyAccessor, mapValue) => arr => {
  return arr.reduce((acc, curr) => {
    const key = keyAccessor(curr);
    const value = (0, _typeGuards.isNotNil)(mapValue) ? mapValue(curr) : curr;
    return (0, _pipeable.pipe)(R.lookup(key, acc), O.fold(() => ({ ...acc,
      [key]: value
    }), () => acc));
  }, {});
};
/**
 * Checks if an array is *not* empty
 */


exports.arrayToRecord = arrayToRecord;

const isNotEmpty = arr => !A.isEmpty(arr);
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

const fromOption = o => (0, _pipeable.pipe)(o, O.fold(() => [], v => [v]));
/**
 * Converts an Either into an Array, returning an empty array if the either
 * is Left, and an array of length one with the right value if the either
 * is Right
 * @param e the Either to convert
 */


exports.fromOption = fromOption;

const fromEither = e => (0, _pipeable.pipe)(e, E.fold(() => [], r => [r]));
/**
 * Adds or removes an item from an Array, depending on whether it's already in the Array
 */


exports.fromEither = fromEither;

const toggle = eq => a => as => (A.elem(eq)(a, as) ? A.difference : A.union)(eq)(as, [a]);
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

const rle = eq => as => (0, _pipeable.pipe)(as, A.reduce([], (runLengths, next) => (0, _pipeable.pipe)(A.last(runLengths), O.fold(() => [[next, 1]], ([prev, n]) => eq.equals(prev, next) ? runLengths.slice(0, -1).concat([[prev, n + 1]]) : runLengths.concat([[next, 1]])))));

exports.rle = rle;

/**
 * Variadic zip with type inference.
 *
 * Note: fp-ts Array has a more naive zip function, but because this is better-typed,
 * we'll override the base `zip` function with this. If you want the base `zip`, you can import
 * it directly from `fp-ts/lib/Array`.
 *
 * @example
 * declare const ns: Array<number>
 * declare const ss: Array<string>
 * declare const bs: Array<boolean>
 * zip(ns, ns, ns) // :: Array<[number, number, number]>
 * zip(ss, ns) // :: Array<[string, number]>
 * zip(bs, ns, ss, ss) // :: Array<[boolean, number, string, string]>
 */
const zip = (...as) => {
  const res = [];
  const l = as.length === 0 ? 0 : Math.min(...as.map(a => a.length));

  for (let i = 0; i < l; i++) {
    res[i] = as.map(a => a[i]);
  }

  return res;
};
/**
 * Immutable, predicate-based splice
 */


exports.zip = zip;

const spliceWhere = predicate => (mapMatch, mapNotMatch = _function.identity) => arr => (0, _pipeable.pipe)(arr, A.chain(a => predicate(a) ? mapMatch(a) : [mapNotMatch(a)]));
/**
 * Finds first element in an array for which `f` returns a `some`
 */


exports.spliceWhere = spliceWhere;

const findFirstMapWithIndex = f => as => {
  const l = as.length;

  for (let i = 0; i < l; i++) {
    const v = f(i, as[i]);

    if (O.isSome(v)) {
      return v;
    }
  }

  return O.none;
};
/**
 * Array.compact that works on Array<Nullable> as opposed to Array<Option>
 * Does not affect falsey values
 * @param as
 */


exports.findFirstMapWithIndex = findFirstMapWithIndex;

const compactNullable = as => (0, _pipeable.pipe)(as, A.filter(_typeGuards.isNotNil));

exports.compactNullable = compactNullable;