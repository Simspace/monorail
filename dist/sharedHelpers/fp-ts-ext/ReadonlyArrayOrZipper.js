"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.readonlyArrayOrZipper = exports.Functor = exports.getEq = exports.getShow = exports.URI = exports.map = exports.map_ = exports.findOptionalOrClear = exports.findOptionalOrKeep = exports.findOrClear = exports.findOrKeep = exports.find = exports.clearFocus = exports.getFocus = exports.hasFocus = exports.toReadonlyArray = exports.toReadonlyArrayWithFocusFlag = exports.empty = exports.of = exports.makeWithReadonlyArrayZipper = exports.makeWithFocus = exports.makeWithReadonlyArray = exports.makeWithNoFocus = void 0;

var _function = require("fp-ts/lib/function");

var _fpTsImports = require("../fp-ts-imports");

var RAZ = _interopRequireWildcard(require("./ReadonlyArrayZipper"));

var _matchers = require("../matchers");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Constructs the variant that has no focus (ReadonlyArray)
 */
const makeWithNoFocus = value => ({
  tag: 'isReadonlyArray',
  value
});
/**
 * Alias for `makeWithNoFocus`
 */


exports.makeWithNoFocus = makeWithNoFocus;
const makeWithReadonlyArray = makeWithNoFocus;
/**
 * Constructs the variant that has a focused value (ReadonlyArrayZipper)
 */

exports.makeWithReadonlyArray = makeWithReadonlyArray;

const makeWithFocus = value => ({
  tag: 'isReadonlyArrayZipper',
  value
});
/**
 * Alias for `makeWithFocus`
 */


exports.makeWithFocus = makeWithFocus;
const makeWithReadonlyArrayZipper = makeWithFocus;
/**
 * Constructs with the given value at the focus
 */

exports.makeWithReadonlyArrayZipper = makeWithReadonlyArrayZipper;

const of = focus => makeWithFocus(RAZ.of(focus));
/**
 * Constructs an empty ReadonlyArrayOrZipper, which is the variant with no focus (and no values)
 */


exports.of = of;
const empty = makeWithNoFocus([]);
/**
 * Converts the given value to a ReadonlyArray with each item and an indicator for each item for whether it was focused
 */

exports.empty = empty;

const toReadonlyArrayWithFocusFlag = fa => (0, _matchers.matchI)(fa)({
  isReadonlyArray: a => a.value.map(value => ({
    value,
    isFocus: false
  })),
  isReadonlyArrayZipper: a => RAZ.toReadonlyArrayWithFocusFlag(a.value)
});
/**
 * Converts the given value to a ReadonlyArray
 */


exports.toReadonlyArrayWithFocusFlag = toReadonlyArrayWithFocusFlag;

const toReadonlyArray = fa => (0, _matchers.matchI)(fa)({
  isReadonlyArray: a => a.value,
  isReadonlyArrayZipper: a => RAZ.toReadonlyArray(a.value)
});
/**
 * Indicates if the given value has a focused item
 */


exports.toReadonlyArray = toReadonlyArray;

const hasFocus = fa => (0, _matchers.matchI)(fa)({
  isReadonlyArray: _ => false,
  isReadonlyArrayZipper: _ => true
});
/**
 * Gets the currently-focused value (if there is one)
 */


exports.hasFocus = hasFocus;

const getFocus = fa => (0, _matchers.matchI)(fa)({
  isReadonlyArray: _ => _fpTsImports.O.none,
  isReadonlyArrayZipper: a => _fpTsImports.O.some(a.value.focus)
});
/**
 * Clears the focus (if there is one)
 */


exports.getFocus = getFocus;

const clearFocus = fa => (0, _matchers.matchI)(fa)({
  isReadonlyArray: _function.identity,
  isReadonlyArrayZipper: ({
    value
  }) => makeWithNoFocus(RAZ.toReadonlyArray(value))
});
/**
 * Attempts to move the focus to the given item by finding it in the collection
 */


exports.clearFocus = clearFocus;

const find = eq => item => fa => (0, _matchers.matchI)(fa)({
  isReadonlyArray: ({
    value
  }) => (0, _fpTsImports.pipe)(RAZ.fromReadonlyArray(value), _fpTsImports.O.chain(raz => RAZ.find(eq)(item)(raz)), _fpTsImports.O.map(raz => makeWithFocus(raz))),
  isReadonlyArrayZipper: ({
    value
  }) => (0, _fpTsImports.pipe)(value, RAZ.find(eq)(item), _fpTsImports.O.map(raz => makeWithFocus(raz)))
});
/**
 * Attempts to move the focus to the given item, and if no item is found, returns the input collection unchanged
 */


exports.find = find;

const findOrKeep = eq => item => fa => (0, _fpTsImports.pipe)(find(eq)(item)(fa), _fpTsImports.O.getOrElse(() => fa));
/**
 * Attempts to move the focus to the given item, and if it's not found, clears the focus.
 */


exports.findOrKeep = findOrKeep;

const findOrClear = eq => item => fa => (0, _fpTsImports.pipe)(find(eq)(item)(fa), _fpTsImports.O.getOrElse(() => clearFocus(fa)));
/**
 * If the given item is none, clears the focus. If the given item is some, it attempts to focus on it. If the item is not found,
 * the focus is kept as-is.
 */


exports.findOrClear = findOrClear;

const findOptionalOrKeep = eq => oa => fa => (0, _fpTsImports.pipe)(oa, _fpTsImports.O.fold(() => clearFocus(fa), a => findOrKeep(eq)(a)(fa)));
/**
 * If the given item is none, clears the focus. If the given item is some, it attempts to focus on it. If the item is not found,
 * the focus is cleared.
 */


exports.findOptionalOrKeep = findOptionalOrKeep;

const findOptionalOrClear = eq => oa => fa => (0, _fpTsImports.pipe)(oa, _fpTsImports.O.fold(() => clearFocus(fa), a => findOrClear(eq)(a)(fa)));
/**
 * Maps a function over the collection
 */


exports.findOptionalOrClear = findOptionalOrClear;

const map_ = (fa, f) => (0, _matchers.matchI)(fa)({
  isReadonlyArray: ({
    value
  }) => makeWithNoFocus(value.map(f)),
  isReadonlyArrayZipper: ({
    value
  }) => makeWithFocus(RAZ.map(f)(value))
});
/**
 * Maps a function over the collection (pipeable)
 */


exports.map_ = map_;

const map = f => fa => map_(fa, f);

exports.map = map;
const URI = 'ReadonlyArrayOrZipper';
exports.URI = URI;

const getShow = showA => {
  return {
    show: raof => (0, _matchers.matchI)(raof)({
      isReadonlyArray: x => `IsReadonlyArray(${_fpTsImports.RA.getShow(showA).show(x.value)})`,
      isReadonlyArrayZipper: x => `IsReadonlyArrayZipper(${RAZ.getShow(showA).show(x.value)})`
    })
  };
};

exports.getShow = getShow;

const getEq = eqA => {
  return {
    equals: (a, b) => {
      if (a.tag === 'isReadonlyArray' && b.tag === 'isReadonlyArray') {
        return _fpTsImports.RA.getEq(eqA).equals(a.value, b.value);
      } else if (a.tag === 'isReadonlyArrayZipper' && b.tag === 'isReadonlyArrayZipper') {
        return RAZ.getEq(eqA).equals(a.value, b.value);
      } else {
        return false;
      }
    }
  };
};

exports.getEq = getEq;
const Functor = {
  URI,
  map: map_
};
exports.Functor = Functor;
const readonlyArrayOrZipper = {
  URI,
  map: map_
}; // TODO: add more stuff as needed, including fp-ts typeclass machinery, etc.
// Should be able to add these, and maybe more:
// getSemigroup
// getMonoid
// FunctorWithIndex1
// Apply1
// Applicative1
// (no Monad - RAZ is not a Monad)
// Foldable1
// Traversable1
// (no Comonad - RA is not a Comonad)

exports.readonlyArrayOrZipper = readonlyArrayOrZipper;