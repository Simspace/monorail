"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.readonlyArrayZipper = exports.Comonad = exports.Traversable = exports.Foldable = exports.Applicative = exports.Apply = exports.FunctorWithIndex = exports.Functor = exports.getMonoid = exports.getSemigroup = exports.getEq = exports.getShow = exports.URI = exports.extract = exports.sequence = exports.reduceRight = exports.reduce = exports.foldMap = exports.duplicate = exports.extend = exports.apSecond = exports.apFirst = exports.ap = exports.mapWithIndex = exports.map = exports.extend_ = exports.ap_ = exports.mapWithIndex_ = exports.map_ = exports.findOrKeep = exports.find = exports.findInRights = exports.findInLefts = exports.findInFocus = exports.modifyFocus = exports.setFocus = exports.moveRightWithClamp = exports.moveRight = exports.moveLeftWithClamp = exports.moveLeft = exports.length = exports.toReadonlyArray = exports.toReadonlyArrayWithFocusFlag = exports.fromReadonlyNonEmptyArray = exports.fromReadonlyArray = exports.make = exports.of = void 0;

var _function = require("fp-ts/lib/function");

var RNEA = _interopRequireWildcard(require("fp-ts/lib/ReadonlyNonEmptyArray"));

var _fpTsImports = require("../fp-ts-imports");

var RAE = _interopRequireWildcard(require("./ReadonlyArray"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Constructs with the given value at the focus
 */
const of = focus => ({
  lefts: [],
  focus,
  rights: []
});
/**
 * Constructs from the given parts
 */


exports.of = of;

const make = (lefts, focus, rights) => ({
  lefts,
  focus,
  rights
});
/**
 * Constructs from the given ReadonlyArray. The first item in the array will be the focus. If the array is empty, none is returned.
 */


exports.make = make;

const fromReadonlyArray = ra => (0, _fpTsImports.pipe)(RAE.headAndTailS(ra), _fpTsImports.O.map(({
  head,
  tail
}) => ({
  lefts: [],
  focus: head,
  rights: tail
})));
/**
 * Constructs from the given ReadonlyNonEmptyArray. The head will be the focus and the tail the rights.
 */


exports.fromReadonlyArray = fromReadonlyArray;

const fromReadonlyNonEmptyArray = rnea => make([], RNEA.head(rnea), RNEA.tail(rnea));
/**
 * Dumps the data structure into flattened array with each item flagged with whether it was focused
 */


exports.fromReadonlyNonEmptyArray = fromReadonlyNonEmptyArray;

const toReadonlyArrayWithFocusFlag = raz => raz.lefts.map(value => ({
  value,
  isFocus: false
})).concat({
  value: raz.focus,
  isFocus: true
}).concat(raz.rights.map(value => ({
  value,
  isFocus: false
})));
/**
 * Dumps the collection into a flattened array
 */


exports.toReadonlyArrayWithFocusFlag = toReadonlyArrayWithFocusFlag;

const toReadonlyArray = raz => raz.lefts.concat(raz.focus).concat(raz.rights);
/**
 * Gets the length of the array
 */


exports.toReadonlyArray = toReadonlyArray;

const length = raz => raz.lefts.length + 1 + raz.rights.length;
/**
 * Moves the focus one item to the left. If the focus is at the left-most item, none is returned.
 */


exports.length = length;

const moveLeft = raz => (0, _fpTsImports.pipe)(RAE.initAndLastT(raz.lefts), _fpTsImports.O.map(([leftInit, leftLast]) => ({
  lefts: leftInit,
  focus: leftLast,
  rights: [raz.focus].concat(raz.rights)
})));
/**
 * Moves the focus one item to the left. If the focus is at the left-most item, the array is returned unchanged.
 */


exports.moveLeft = moveLeft;

const moveLeftWithClamp = raz => (0, _fpTsImports.pipe)(moveLeft(raz), _fpTsImports.O.getOrElse(() => raz));
/**
 * Moves the focus one item to the right. If the focus is at the right-most item, none is returned.
 */


exports.moveLeftWithClamp = moveLeftWithClamp;

const moveRight = raz => (0, _fpTsImports.pipe)(RAE.headAndTailT(raz.rights), _fpTsImports.O.map(([rightHead, rightTail]) => ({
  lefts: raz.lefts.concat(raz.focus),
  focus: rightHead,
  rights: rightTail
})));
/**
 * Moves the focus one item to the right. If the focus is at the right-most item, the array is returned unchanged.
 */


exports.moveRight = moveRight;

const moveRightWithClamp = raz => (0, _fpTsImports.pipe)(moveRight(raz), _fpTsImports.O.getOrElse(() => raz));
/**
 * Overwrites the focus with the given value
 */


exports.moveRightWithClamp = moveRightWithClamp;

const setFocus = newFocus => raz => ({
  lefts: raz.lefts,
  focus: newFocus,
  rights: raz.rights
});
/**
 * Modifies the focus with the given function.
 */


exports.setFocus = setFocus;

const modifyFocus = f => raz => ({
  lefts: raz.lefts,
  focus: f(raz.focus),
  rights: raz.rights
});
/**
 * Attempts to find the given value by checking just the focus. If the focus matches the given item,
 * the RAZ is returned wrapped in a some.
 */


exports.modifyFocus = modifyFocus;

const findInFocus = eq => item => raz => eq.equals(raz.focus, item) ? _fpTsImports.O.some(raz) : _fpTsImports.O.none;
/**
 * Attempts to find the given value by checking just the values to the left of the focus.
 * If found, a new array is returned focused on the given item.
 */


exports.findInFocus = findInFocus;

const findInLefts = eq => item => raz => (0, _fpTsImports.pipe)(moveLeft(raz), _fpTsImports.O.chain(razNext => (0, _fpTsImports.pipe)(findInFocus(eq)(item)(razNext), _fpTsImports.O.alt(() => findInLefts(eq)(item)(razNext)) // TODO: not tail recursive
)));
/**
 * Attempts to find the given value by checking just the values to the right of the focus.
 * If found, a new array is returned focused on the given item.
 */


exports.findInLefts = findInLefts;

const findInRights = eq => item => raz => (0, _fpTsImports.pipe)(moveRight(raz), _fpTsImports.O.chain(razNext => (0, _fpTsImports.pipe)(findInFocus(eq)(item)(razNext), _fpTsImports.O.alt(() => findInRights(eq)(item)(razNext)) // TODO: not tail recursive
)));
/**
 * Attempts to find the given value by checking the focus, the values to the left of the focus and the values to the right of the focus.
 * If found, a new array is returned focused on the given item.
 */


exports.findInRights = findInRights;

const find = eq => item => raz => (0, _fpTsImports.pipe)(findInFocus(eq)(item)(raz), _fpTsImports.O.alt(() => findInLefts(eq)(item)(raz)), _fpTsImports.O.alt(() => findInRights(eq)(item)(raz)));
/**
 * Attempts to find the given value by checking the focus, the values to the left of the focus and the values to the right of the focus.
 * If found, a new array is returned focused on the given item.
 * If not found, the input array is returned unchanged.
 */


exports.find = find;

const findOrKeep = eq => item => raz => (0, _fpTsImports.pipe)(find(eq)(item)(raz), _fpTsImports.O.getOrElse(() => raz));
/**
 * Maps a function over the collection
 */


exports.findOrKeep = findOrKeep;

const map_ = (raz, f) => ({
  lefts: raz.lefts.map(f),
  focus: f(raz.focus),
  rights: raz.rights.map(f)
});
/**
 * Maps a function (with index) over the collection
 */


exports.map_ = map_;

const mapWithIndex_ = (raz, f) => make(raz.lefts.map((value, index) => f(index, value)), f(raz.lefts.length, raz.focus), raz.rights.map((value, index) => f(raz.lefts.length + 1 + index, value)));
/**
 * Applies a wrapped function to a collection
 */


exports.mapWithIndex_ = mapWithIndex_;

const ap_ = (fab, fa) => ({
  lefts: _fpTsImports.RA.readonlyArray.ap(fab.lefts, fa.lefts),
  focus: fab.focus(fa.focus),
  rights: _fpTsImports.RA.readonlyArray.ap(fab.rights, fa.rights)
});

exports.ap_ = ap_;

const extend_ = (fa, f) => {
  const lefts = fa.lefts.map((a, i) => f(make((0, _fpTsImports.pipe)(fa.lefts, _fpTsImports.RA.takeLeft(i)), a, _fpTsImports.RA.snoc((0, _fpTsImports.pipe)(fa.lefts, _fpTsImports.RA.dropLeft(i + 1)), fa.focus).concat(fa.rights))));
  const rights = fa.rights.map((a, i) => f(make(_fpTsImports.RA.snoc(fa.lefts, fa.focus).concat((0, _fpTsImports.pipe)(fa.rights, _fpTsImports.RA.takeLeft(i))), a, (0, _fpTsImports.pipe)(fa.rights, _fpTsImports.RA.dropLeft(i + 1)))));
  return make(lefts, f(fa), rights);
};

exports.extend_ = extend_;

const reduce_ = (fa, b, f) => fa.rights.reduce(f, f(fa.lefts.reduce(f, b), fa.focus));

const reduceRight_ = (fa, b, f) => {
  const rights = fa.rights.reduceRight((acc, a) => f(a, acc), b);
  const focus = f(fa.focus, rights);
  return fa.lefts.reduceRight((acc, a) => f(a, acc), focus);
};

const foldMap_ = M => (fa, f) => {
  const lefts = fa.lefts.reduce((acc, a) => M.concat(acc, f(a)), M.empty);
  const rights = fa.rights.reduce((acc, a) => M.concat(acc, f(a)), M.empty);
  return M.concat(M.concat(lefts, f(fa.focus)), rights);
};

const traverse_ = F => {
  const traverseF = _fpTsImports.RA.readonlyArray.traverse(F);

  return (ta, f) => F.ap(F.ap(F.map(traverseF(ta.lefts, f), lefts => focus => rights => make(lefts, focus, rights)), f(ta.focus)), traverseF(ta.rights, f));
};

const map = f => raz => map_(raz, f);

exports.map = map;

const mapWithIndex = f => raz => mapWithIndex_(raz, f);

exports.mapWithIndex = mapWithIndex;

const ap = fa => fab => ap_(fab, fa);

exports.ap = ap;

const apFirst = fb => fa => (0, _fpTsImports.pipe)(fa, map(a => _ => a), ap(fb));

exports.apFirst = apFirst;

const apSecond = fb => fa => (0, _fpTsImports.pipe)(fa, map(_a => b => b), ap(fb));

exports.apSecond = apSecond;

const extend = f => wa => extend_(wa, f);

exports.extend = extend;
const duplicate = extend(_function.identity);
exports.duplicate = duplicate;

const foldMap = M => f => fa => foldMap_(M)(fa, f);

exports.foldMap = foldMap;

const reduce = (b, f) => fa => reduce_(fa, b, f);

exports.reduce = reduce;

const reduceRight = (b, f) => fa => reduceRight_(fa, b, f);

exports.reduceRight = reduceRight;

const sequence = F => {
  const sequenceF = _fpTsImports.RA.readonlyArray.sequence(F);

  return ta => F.ap(F.ap(F.map(sequenceF(ta.lefts), lefts => focus => rights => make(lefts, focus, rights)), ta.focus), sequenceF(ta.rights));
};

exports.sequence = sequence;

const extract = fa => fa.focus;

exports.extract = extract;
const URI = 'ReadonlyArrayZipper';
exports.URI = URI;

const getShow = showA => {
  const showRA = _fpTsImports.RA.getShow(showA);

  return {
    show: raz => `ReadonlyArrayZipper(${showRA.show(raz.lefts)}, ${showA.show(raz.focus)}, ${showRA.show(raz.rights)})`
  };
};

exports.getShow = getShow;

const getEq = eqA => {
  const eqRA = _fpTsImports.RA.getEq(eqA);

  return {
    equals: (a, b) => eqRA.equals(a.lefts, b.lefts) && eqA.equals(a.focus, b.focus) && eqRA.equals(a.rights, b.rights)
  };
};

exports.getEq = getEq;

const getSemigroup = semigroupA => {
  return {
    concat: (a, b) => make(a.lefts.concat(b.lefts), semigroupA.concat(a.focus, b.focus), a.rights.concat(b.rights))
  };
};

exports.getSemigroup = getSemigroup;

const getMonoid = monoidA => {
  return { ...getSemigroup(monoidA),
    empty: make(_fpTsImports.RA.empty, monoidA.empty, _fpTsImports.RA.empty)
  };
};

exports.getMonoid = getMonoid;
const Functor = {
  URI,
  map: map_
};
exports.Functor = Functor;
const FunctorWithIndex = { ...Functor,
  mapWithIndex: mapWithIndex_
};
exports.FunctorWithIndex = FunctorWithIndex;
const Apply = { ...Functor,
  ap: ap_
};
exports.Apply = Apply;
const Applicative = { ...Apply,
  of
};
exports.Applicative = Applicative;
const Foldable = {
  URI,
  foldMap: foldMap_,
  reduce: reduce_,
  reduceRight: reduceRight_
};
exports.Foldable = Foldable;
const Traversable = { ...Functor,
  ...Foldable,
  traverse: traverse_,
  sequence
};
exports.Traversable = Traversable;
const Comonad = { ...Functor,
  extend: extend_,
  extract
};
exports.Comonad = Comonad;
const readonlyArrayZipper = {
  URI,
  map: map_,
  of,
  ap: ap_,
  extend: extend_,
  extract,
  reduce: reduce_,
  reduceRight: reduceRight_,
  foldMap: foldMap_,
  traverse: traverse_,
  sequence,
  mapWithIndex: mapWithIndex_
};
exports.readonlyArrayZipper = readonlyArrayZipper;