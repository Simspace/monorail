"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  forest: true,
  mapForest: true,
  reduceForest: true,
  reduceRightForest: true,
  foldMapForest: true,
  getForestTraversal: true,
  getForestFold: true,
  getForestOptionalFromPath: true,
  getTreeOptionalFromPath: true,
  fromForestPath: true,
  getArbitrary: true,
  spliceWhere: true,
  spliceWhereAsync: true,
  duplicateWhere: true,
  duplicateWhereAsync: true,
  removeWhere: true,
  addChildWhere: true,
  addChildWhereAsync: true,
  addRoot: true,
  getPath: true,
  getNode: true,
  getLeft: true,
  getValidatedLeft: true,
  getParent: true,
  getValidatedParent: true,
  getRight: true,
  getFirstChild: true,
  isEqualOrDescendentOf: true,
  isNodePathDescendantOf: true,
  isNodePathEqual: true,
  moveNode: true,
  moveLeft: true,
  moveUpBefore: true,
  moveUpAfter: true,
  moveRight: true,
  moveInto: true,
  isLeftmost: true,
  hasParent: true,
  isRightmost: true,
  getAncestorsOf: true,
  findFirst: true
};
exports.getForestOptionalFromPath = getForestOptionalFromPath;
exports.getTreeOptionalFromPath = getTreeOptionalFromPath;
exports.getArbitrary = getArbitrary;
exports.findFirst = exports.getAncestorsOf = exports.isRightmost = exports.hasParent = exports.isLeftmost = exports.moveInto = exports.moveRight = exports.moveUpAfter = exports.moveUpBefore = exports.moveLeft = exports.moveNode = exports.isNodePathEqual = exports.isNodePathDescendantOf = exports.isEqualOrDescendentOf = exports.getFirstChild = exports.getRight = exports.getValidatedParent = exports.getParent = exports.getValidatedLeft = exports.getLeft = exports.getNode = exports.getPath = exports.addRoot = exports.addChildWhereAsync = exports.addChildWhere = exports.removeWhere = exports.duplicateWhereAsync = exports.duplicateWhere = exports.spliceWhereAsync = exports.spliceWhere = exports.fromForestPath = exports.getForestFold = exports.getForestTraversal = exports.foldMapForest = exports.reduceRightForest = exports.reduceForest = exports.mapForest = exports.forest = void 0;

var fc = _interopRequireWildcard(require("fast-check"));

var M = _interopRequireWildcard(require("monocle-ts"));

var _Array = require("monocle-ts/lib/Index/Array");

var Foldable = _interopRequireWildcard(require("fp-ts/Foldable"));

var _function = require("fp-ts/function");

var Arr = _interopRequireWildcard(require("fp-ts/lib/Array"));

var Eq = _interopRequireWildcard(require("fp-ts/lib/Eq"));

var NEA = _interopRequireWildcard(require("fp-ts/lib/NonEmptyArray"));

var O = _interopRequireWildcard(require("fp-ts/lib/Option"));

var _pipeable = require("fp-ts/lib/pipeable");

var TE = _interopRequireWildcard(require("fp-ts/lib/TaskEither"));

var Traversable = _interopRequireWildcard(require("fp-ts/Traversable"));

var T = _interopRequireWildcard(require("fp-ts/Tree"));

var _Array3 = require("./Array");

var _names = require("../names");

var _Tree2 = require("fp-ts/lib/Tree");

Object.keys(_Tree2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Tree2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Tree2[key];
    }
  });
});

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const ForestURI = 'Forest';
const forestInstances = {
  URI: ForestURI,
  ...Foldable.getFoldableComposition(Arr.array, T.tree),
  ...Traversable.getTraversableComposition(Arr.array, T.tree)
};
exports.forest = forestInstances;
const {
  map: mapForest,
  reduce: reduceForest,
  reduceRight: reduceRightForest,
  foldMap: foldMapForest
} = (0, _pipeable.pipeable)(forestInstances);
exports.foldMapForest = foldMapForest;
exports.reduceRightForest = reduceRightForest;
exports.reduceForest = reduceForest;
exports.mapForest = mapForest;
const getForestTraversal = M.fromTraversable(forestInstances);
exports.getForestTraversal = getForestTraversal;
const getForestFold = M.fromFoldable(forestInstances);
exports.getForestFold = getForestFold;

function getForestOptionalFromPath(path) {
  return (0, _function.pipe)(getParent(path), O.getOrElse(() => []), Arr.reduce(new M.Optional(O.some, _function.constant), (fo, i) => fo.compose((0, _Array.indexArray)().index(i)).composeLens(M.Lens.fromProp()('forest'))));
}

function getTreeOptionalFromPath(path) {
  return getForestOptionalFromPath(path).compose((0, _Array.indexArray)().index(NEA.last(path)));
}

const fromForestPath = f => p => {
  return getTreeOptionalFromPath(p).getOption(f);
};
/**
 * Constructs an instance of `Abritrary<Tree<T>>` given an `Arbitrary<T>` and a `maxDepth`
 */


exports.fromForestPath = fromForestPath;

function getArbitrary(arb, opts = {
  maxDepth: 5,
  maxWidth: 5
}) {
  const tree = fc.memo(n => {
    return n <= 1 ? fc.record({
      value: arb,
      forest: fc.constant(Array())
    }) : fc.record({
      value: arb,
      forest: opts.maxWidth === undefined ? fc.array(tree()) : fc.array(tree(), opts.maxWidth)
    });
  });
  return tree(opts.maxDepth);
}
/**
 * Splices trees in a forest that match a predicate. `mapMatch` returns a
 * `Forest` that will be flattened into the match's parent forest, so you can
 * add or remove nodes at the matched level.
 */


const spliceWhere = predicate => (mapMatch, mapNotMatch = _function.identity) => forest => (0, _function.pipe)(forest, Arr.map(tree => T.make(tree.value, spliceWhere(predicate)(mapMatch, mapNotMatch)(tree.forest))), Arr.chain(t => predicate(t) ? mapMatch(t) : [mapNotMatch(t)]));
/**
 * Splices trees in a forest that match a predicate, asynchronously. `mapMatch`
 * returns a `Task<Forest<A>>` that will be flattened into the match's parent
 * forest, so you can add or remove nodes at the matched level.
 */


exports.spliceWhere = spliceWhere;

const spliceWhereAsync = predicate => (mapMatch, mapNotMatch = TE.of) => forest => (0, _function.pipe)(forest, Arr.map(tree => (0, _function.pipe)(tree.forest, spliceWhereAsync(predicate)(mapMatch, mapNotMatch), TE.chain(matched => {
  const t = T.make(tree.value, matched);
  const newF = predicate(t) ? mapMatch(t) : (0, _function.pipe)(mapNotMatch(t), TE.map(x => [x]));
  return newF;
}))), Arr.sequence(TE.taskEither), TE.map(Arr.flatten));
/**
 * Duplicates all trees in a forest that match `predicate`. Does _not_ copy
 * children.
 */


exports.spliceWhereAsync = spliceWhereAsync;

const duplicateWhere = predicate => (modify = _function.identity) => spliceWhere(predicate)(a => [a, T.make(modify(a.value))]);
/**
 * Duplicates all trees in a forest that match `predicate`, asynchronously. Does
 * _not_ copy children.
 */


exports.duplicateWhere = duplicateWhere;

const duplicateWhereAsync = predicate => modify => spliceWhereAsync(predicate)(a => (0, _function.pipe)(a.value, modify, TE.map(dupe => [a, T.make(dupe)])));
/**
 * Removes all trees in a forest that match `predicate`.
 */


exports.duplicateWhereAsync = duplicateWhereAsync;

const removeWhere = predicate => spliceWhere(predicate)(_a => []);
/**
 * Adds a child to all trees in a forest that match `predicate`.
 */


exports.removeWhere = removeWhere;

const addChildWhere = predicate => createChild => spliceWhere(predicate)(a => [T.make(a.value, Arr.snoc(a.forest, createChild(a)))]);
/**
 * Adds a child to all trees in a forest that match `predicate`, asynchronously
 */


exports.addChildWhere = addChildWhere;

const addChildWhereAsync = predicate => createChild => spliceWhereAsync(predicate)(a => (0, _function.pipe)(a, createChild, TE.map(child => [T.make(a.value, Arr.snoc(a.forest, child))])));

exports.addChildWhereAsync = addChildWhereAsync;

const addRoot = root => forest => [...forest, T.make(root)];
/**
 * A NodePath represents a path from a forest to a particular tree.
 */


exports.addRoot = addRoot;

/**
 * Returns an index-path to the first node in a forest that matches `predicate`,
 * or `none` if no such node exists.
 *
 * A named `NodePath` should always lead to a tree for the associated forest.
 */
const getPath = predicate => forest => (0, _function.pipe)((0, _names.the)(forest), (0, _Array3.findFirstMapWithIndex)((i, t) => predicate(t) ? O.some([i]) : (0, _function.pipe)(getPath(predicate)((0, _names.coerce)(t.forest)), O.map(p => [i, ...(0, _names.the)(p)]))), O.map(p => (0, _names.coerce)(p)));
/**
 * Returns the node pointed to by a named path
 */


exports.getPath = getPath;

const getNode = forest => path => (0, _function.pipe)((0, _names.the)(path), NEA.init, Arr.reduce((0, _names.the)(forest), (f, i) => f[i].forest), f => f[NEA.last((0, _names.the)(path))].value);
/**
 * Changes a path to the position left of a node.
 */


exports.getNode = getNode;

const getLeft = path => NEA.snoc(NEA.init(path), NEA.last(path) - 1);
/**
 * Changes a named path to the position left of a node, if one exists.
 *
 * Guaranteed to be either a valid path for the associated forest, or `none`.
 */


exports.getLeft = getLeft;

const getValidatedLeft = path => (0, _function.pipe)((0, _names.the)(path), O.fromPredicate(p => NEA.last(p) > 0), O.map(p => (0, _names.coerce)(getLeft(p))));
/**
 * Changes a path to the parent of a node, if one exists.
 */


exports.getValidatedLeft = getValidatedLeft;

const getParent = path => (0, _function.pipe)(path, NEA.init, NEA.fromArray);
/**
 * Changes a named path to the parent of a node, if one exists.
 */


exports.getParent = getParent;

const getValidatedParent = path => (0, _function.pipe)((0, _names.the)(path), getParent, O.map(p => (0, _names.coerce)(p)));
/**
 * Changes a path to the position right of a node
 */


exports.getValidatedParent = getValidatedParent;

const getRight = path => NEA.snoc(NEA.init(path), NEA.last(path) + 1);
/**
 * Changes a path to the first child of a node
 */


exports.getRight = getRight;

const getFirstChild = path => NEA.snoc(path, 0);
/**
 * Returns true if the node at path `b` is the same node as or a descendent of
 * the node at path `a`
 */


exports.getFirstChild = getFirstChild;

const isEqualOrDescendentOf = a => b => (0, _names.the)(a).every((n, i) => n === (0, _names.the)(b)[i]);

exports.isEqualOrDescendentOf = isEqualOrDescendentOf;

const isNodePathDescendantOf = a => b => (0, _names.the)(b).length > (0, _names.the)(a).length && (0, _names.the)(a).every((n, i) => n === (0, _names.the)(b)[i]);

exports.isNodePathDescendantOf = isNodePathDescendantOf;

const isNodePathEqual = a => b => NEA.getEq(Eq.eqNumber).equals((0, _names.the)(a), (0, _names.the)(b));

exports.isNodePathEqual = isNodePathEqual;

const namedRootOptional = () => (0, _names.iso)().asOptional();

const pathToForestOptional = path => (0, _function.pipe)(getParent(path), O.getOrElse(() => []), Arr.reduce(namedRootOptional(), (fo, i) => fo.compose((0, _Array.indexArray)().index(i)).composeLens(M.Lens.fromProp()('forest'))));

const pathToOptional = path => pathToForestOptional(path).compose((0, _Array.indexArray)().index(NEA.last(path)));
/**
 * Moves a node at `from` to `to`. The paths must be created from a named forest.
 *
 * @example
 * const forest = [
 *   T.make('a', [
 *     T.make('b', [
 *       T.make('d'),
 *     ]),
 *     T.make('c'),
 *   ]),
 * ]
 * name(forest)(nf => {
 *   const from = getPath(n => n.value === 'b')(nf)
 *   const to = getPath(n => n.value === 'a')(nf)
 *   expect(moveNode(from, to)(nf)).toEqual(
 *     O.some([
 *       T.make('b', [
 *         T.make('d'),
 *       ]),
 *       T.make('a', [
 *         T.make('c'),
 *       ]),
 *      ]),
 *   )
 * })
 */


const moveNode = (from, to) => forest => {
  if (isEqualOrDescendentOf(from)(to)) {
    return O.none;
  }

  const toIndex = NEA.last((0, _names.the)(to));
  const fromIndex = NEA.last((0, _names.the)(from));
  const adjustedTo = (0, _function.pipe)((0, _names.the)(to), NEA.mapWithIndex((i, p) => i === (0, _names.the)(from).length - 1 && (0, _names.the)(from)[i] < p ? p - 1 : p));
  const toForestOptional = pathToForestOptional(adjustedTo);
  const fromForestOptional = pathToForestOptional((0, _names.the)(from));
  const fromOptional = pathToOptional((0, _names.the)(from));
  const fromTree = (0, _function.pipe)(forest, fromOptional.getOption);
  const removeFrom = fromForestOptional.modify(f => (0, _function.pipe)(f, Arr.deleteAt(fromIndex), O.getOrElse(() => f)));
  const injectTo = (0, _function.pipe)(fromTree, O.fold(() => _function.identity, ft => toForestOptional.modify(f => [...f.slice(0, toIndex), ft, ...f.slice(toIndex)])));
  return O.some((0, _names.the)((0, _function.pipe)(forest, removeFrom, injectTo)));
};
/**
 * Moves a node to the left if possible.
 *
 * @example
 * const forest = [
 *   T.make('a', [
 *     T.make('b', [
 *       T.make('d'),
 *     ]),
 *     T.make('c'),
 *   ]),
 * ]
 * expect(moveLeft(n => n.value === 'c')(forest)).toEqual(O.some([
 *   T.make('a', [
 *     T.make('c'),
 *     T.make('b', [
 *       T.make('d'),
 *     ]),
 *   ]),
 * ]))
 */


exports.moveNode = moveNode;

const moveLeft = predicate => forest => (0, _names.name)(forest)(nf => (0, _function.pipe)(nf, getPath(predicate), O.bindTo('from'), O.bind('to', ({
  from
}) => (0, _function.pipe)(getValidatedLeft(from))), O.chain(({
  from,
  to
}) => moveNode(from, to)(nf))));
/**
 * Moves a node to the left of the parent
 *
 * @example
 * const forest = [
 *   T.make('a', [
 *     T.make('b', [
 *       T.make('d'),
 *     ]),
 *     T.make('c'),
 *   ]),
 * ]
 * expect(moveUp(n => n.value === 'd')(forest)).toEqual(O.some([
 *   T.make('a', [
 *     T.make('d'),
 *     T.make('b'),
 *     T.make('c'),
 *   ]),
 * ]))
 */


exports.moveLeft = moveLeft;

const moveUpBefore = predicate => forest => (0, _names.name)(forest)(nf => (0, _function.pipe)(getPath(predicate)(nf), O.bindTo('from'), O.bind('to', ({
  from
}) => getValidatedParent(from)), O.chain(({
  from,
  to
}) => moveNode(from, to)(nf))));
/**
 * Moves a node to the right of the parent
 *
 * @example
 * const forest = [
 *   T.make('a', [
 *     T.make('b', [
 *       T.make('d'),
 *     ]),
 *     T.make('c'),
 *   ]),
 * ]
 * expect(moveUp(n => n.value === 'd')(forest)).toEqual(O.some([
 *   T.make('a', [
 *     T.make('b'),
 *     T.make('d'),
 *     T.make('c'),
 *   ]),
 * ]))
 */


exports.moveUpBefore = moveUpBefore;

const moveUpAfter = predicate => forest => (0, _names.name)(forest)(nf => (0, _function.pipe)(getPath(predicate)(nf), O.bindTo('from'), O.bind('to', ({
  from
}) => (0, _function.pipe)(from, getValidatedParent, O.map((0, _function.flow)(_names.the, getRight)))), O.chain(({
  from,
  to
}) => moveNode(from, (0, _names.coerce)(to))(nf))));
/**
 * Moves a node to the right if possible.
 *
 * @example
 * const forest = [
 *   T.make('a', [
 *     T.make('b', [
 *       T.make('d'),
 *     ]),
 *     T.make('c'),
 *   ]),
 * ]
 * expect(moveDown(n => n.value === 'b')(forest)).toEqual(O.some([
 *   T.make('a', [
 *     T.make('c'),
 *     T.make('b', [
 *       T.make('d'),
 *     ]),
 *   ]),
 * ]))
 */


exports.moveUpAfter = moveUpAfter;

const moveRight = predicate => forest => (0, _names.name)(forest)(nf => (0, _function.pipe)(getPath(predicate)(nf), O.bindTo('from'), O.bind('to', ({
  from
}) => (0, _function.pipe)(getRight((0, _names.the)(from)), O.some, O.chainFirst(right => pathToOptional(right).getOption(nf)))), O.chain(({
  from,
  to
}) => moveNode(from, (0, _names.coerce)(to))(nf))));
/**
 * Moves a node into the children of the next node, if possible.
 *
 * @example
 * const forest = [
 *   T.make('a', [
 *     T.make('b', [
 *       T.make('d'),
 *     ]),
 *     T.make('c'),
 *   ]),
 * ]
 * expect(moveInto(n => n.value === 'b')(forest)).toEqual(O.some([
 *   T.make('a', [
 *     T.make('c', [
 *       T.make('b', [
 *         T.make('d'),
 *       ]),
 *     ]),
 *   ]),
 * ]))
 */


exports.moveRight = moveRight;

const moveInto = predicate => forest => (0, _names.name)(forest)(nf => (0, _function.pipe)(getPath(predicate)(nf), O.bindTo('from'), O.bind('to', ({
  from
}) => (0, _function.pipe)(getRight((0, _names.the)(from)), O.some, O.chainFirst(right => pathToOptional(right).getOption(nf)), O.map(getFirstChild))), O.chain(({
  from,
  to
}) => moveNode(from, (0, _names.coerce)(to))(nf))));
/**
 * Returns true if the first node matching the predicate is the leftmost node of
 * its forest.
 */


exports.moveInto = moveInto;

const isLeftmost = predicate => forest => (0, _names.name)(forest)((0, _function.flow)(getPath(predicate), O.fold(() => false, p => NEA.last((0, _names.the)(p)) === 0)));
/**
 * Returns true if the first node matching the predicate has a parent node
 */


exports.isLeftmost = isLeftmost;

const hasParent = predicate => forest => (0, _names.name)(forest)((0, _function.flow)(getPath(predicate), O.fold(() => false, p => (0, _names.the)(p).length > 1)));
/**
 * Returns true if the first node matching the predicate is the rightmost node of
 * its forest. Returns false otherwise, or if no node is found.
 */


exports.hasParent = hasParent;

const isRightmost = predicate => forest => (0, _names.name)(forest)(nf => (0, _function.pipe)(getPath(predicate)(nf), O.fold(() => false, (0, _function.flow)(_names.the, getRight, pathToOptional, pto => pto.getOption(nf), O.fold(() => true, () => false)))));
/**
 * Gets all parents of the first matching node
 */


exports.isRightmost = isRightmost;

const getAncestorsOf = predicate => forest => (0, _names.name)(forest)(nf => (0, _function.pipe)(nf, getPath(predicate), O.chain((0, _function.flow)(_names.the, // create an array of paths, e.g. [1, 2] => [[1], [1,2]]
Arr.scanLeft([], Arr.snoc), // get rid of the last path, since that's the target node
Arr.dropRight(1), Arr.filterMap(NEA.fromArray), NEA.fromArray)), O.map(Arr.map(p => getNode(nf)((0, _names.coerce)(p))))));

exports.getAncestorsOf = getAncestorsOf;

const findFirst = predicate => forest => (0, _function.pipe)(forest, Arr.foldMap(O.getFirstMonoid())(T.foldMap(O.getFirstMonoid())(O.fromPredicate(predicate))));

exports.findFirst = findFirst;