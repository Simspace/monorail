import * as fc from 'fast-check'
import * as M from 'monocle-ts'
import { indexArray } from 'monocle-ts/lib/Index/Array'
import * as Foldable from 'fp-ts/Foldable'
import { constant, flow, identity, pipe, Predicate } from 'fp-ts/function'
import * as Arr from 'fp-ts/lib/Array'
import * as Eq from 'fp-ts/lib/Eq'
import * as NEA from 'fp-ts/lib/NonEmptyArray'
import * as O from 'fp-ts/lib/Option'
import { pipeable } from 'fp-ts/lib/pipeable'
import * as TE from 'fp-ts/lib/TaskEither'
import * as Traversable from 'fp-ts/Traversable'
import * as T from 'fp-ts/Tree'

import { findFirstMapWithIndex } from '@monorail/sharedHelpers/fp-ts-ext/Array'
import { coerce, iso, name, Named, the } from '@monorail/sharedHelpers/names'

export * from 'fp-ts/lib/Tree'
export { forestInstances as forest }

const ForestURI = 'Forest'
type ForestURI = typeof ForestURI
declare module 'fp-ts/HKT' {
  interface URItoKind<A> {
    readonly [ForestURI]: T.Forest<A>
  }
}

const forestInstances: Foldable.Foldable1<ForestURI> &
  Traversable.Traversable1<ForestURI> = {
  URI: ForestURI,
  ...Foldable.getFoldableComposition(Arr.array, T.tree),
  ...Traversable.getTraversableComposition(Arr.array, T.tree),
}

export const {
  map: mapForest,
  reduce: reduceForest,
  reduceRight: reduceRightForest,
  foldMap: foldMapForest,
} = pipeable(forestInstances)

export const getForestTraversal = M.fromTraversable(forestInstances)

export const getForestFold = M.fromFoldable(forestInstances)

export function getForestOptionalFromPath<A>(path: NEA.NonEmptyArray<number>) {
  return pipe(
    getParent(path),
    O.getOrElse<Array<number>>(() => []),
    Arr.reduce(
      new M.Optional<T.Forest<A>, T.Forest<A>>(O.some, constant),
      (fo, i) =>
        fo
          .compose(indexArray<T.Tree<A>>().index(i))
          .composeLens(M.Lens.fromProp<T.Tree<A>>()('forest')),
    ),
  )
}

export function getTreeOptionalFromPath<A>(
  path: NEA.NonEmptyArray<number>,
): M.Optional<T.Forest<A>, T.Tree<A>> {
  return getForestOptionalFromPath<A>(path).compose(
    indexArray<T.Tree<A>>().index(NEA.last(path)),
  )
}

export const fromForestPath = <A>(f: T.Forest<A>) => (p: NodePath) => {
  return getTreeOptionalFromPath<A>(p).getOption(f)
}

/**
 * Constructs an instance of `Abritrary<Tree<T>>` given an `Arbitrary<T>` and a `maxDepth`
 */
export function getArbitrary<T>(
  arb: fc.Arbitrary<T>,
  opts: { maxDepth?: number; maxWidth?: number } = { maxDepth: 5, maxWidth: 5 },
): fc.Arbitrary<T.Tree<T>> {
  const tree: fc.Memo<T.Tree<T>> = fc.memo<T.Tree<T>>(n => {
    return n <= 1
      ? fc.record({
          value: arb,
          forest: fc.constant(Array<T.Tree<T>>()),
        })
      : fc.record({
          value: arb,
          forest:
            opts.maxWidth === undefined
              ? fc.array(tree())
              : fc.array(tree(), opts.maxWidth),
        })
  })

  return tree(opts.maxDepth)
}

/**
 * Splices trees in a forest that match a predicate. `mapMatch` returns a
 * `Forest` that will be flattened into the match's parent forest, so you can
 * add or remove nodes at the matched level.
 */
export const spliceWhere = <A>(predicate: Predicate<T.Tree<A>>) => (
  mapMatch: (a: T.Tree<A>) => T.Forest<A>,
  mapNotMatch: (a: T.Tree<A>) => T.Tree<A> = identity,
) => (forest: T.Forest<A>): T.Forest<A> =>
  pipe(
    forest,
    Arr.map(tree =>
      T.make(
        tree.value,
        spliceWhere(predicate)(mapMatch, mapNotMatch)(tree.forest),
      ),
    ),
    Arr.chain(t => (predicate(t) ? mapMatch(t) : [mapNotMatch(t)])),
  )

/**
 * Splices trees in a forest that match a predicate, asynchronously. `mapMatch`
 * returns a `Task<Forest<A>>` that will be flattened into the match's parent
 * forest, so you can add or remove nodes at the matched level.
 */
export const spliceWhereAsync = <E, A>(predicate: Predicate<T.Tree<A>>) => (
  mapMatch: (a: T.Tree<A>) => TE.TaskEither<E, T.Forest<A>>,
  mapNotMatch: (a: T.Tree<A>) => TE.TaskEither<E, T.Tree<A>> = TE.of,
) => (forest: T.Forest<A>): TE.TaskEither<E, T.Forest<A>> =>
  pipe(
    forest,
    Arr.map(
      (tree): TE.TaskEither<E, T.Forest<A>> =>
        pipe(
          tree.forest,
          spliceWhereAsync<E, A>(predicate)(mapMatch, mapNotMatch),
          TE.chain(matched => {
            const t = T.make(tree.value, matched)
            const newF = predicate(t)
              ? mapMatch(t)
              : pipe(
                  mapNotMatch(t),
                  TE.map(x => [x]),
                )
            return newF
          }),
        ),
    ),
    Arr.sequence(TE.taskEither),
    TE.map(Arr.flatten),
  )

/**
 * Duplicates all trees in a forest that match `predicate`. Does _not_ copy
 * children.
 */
export const duplicateWhere = <A>(predicate: Predicate<T.Tree<A>>) => (
  modify: (a: A) => A = identity,
) => spliceWhere(predicate)(a => [a, T.make(modify(a.value))])

/**
 * Duplicates all trees in a forest that match `predicate`, asynchronously. Does
 * _not_ copy children.
 */
export const duplicateWhereAsync = <A>(predicate: Predicate<T.Tree<A>>) => <E>(
  modify: (a: A) => TE.TaskEither<E, A>,
) =>
  spliceWhereAsync<E, A>(predicate)(a =>
    pipe(
      a.value,
      modify,
      TE.map(dupe => [a, T.make(dupe)]),
    ),
  )

/**
 * Removes all trees in a forest that match `predicate`.
 */
export const removeWhere = <A>(predicate: Predicate<T.Tree<A>>) =>
  spliceWhere(predicate)(_a => [])

/**
 * Adds a child to all trees in a forest that match `predicate`.
 */
export const addChildWhere = <A>(predicate: Predicate<T.Tree<A>>) => (
  createChild: (a: T.Tree<A>) => T.Tree<A>,
) =>
  spliceWhere(predicate)(a => [
    T.make(a.value, Arr.snoc(a.forest, createChild(a))),
  ])

/**
 * Adds a child to all trees in a forest that match `predicate`, asynchronously
 */
export const addChildWhereAsync = <A>(predicate: Predicate<T.Tree<A>>) => <E>(
  createChild: (a: T.Tree<A>) => TE.TaskEither<E, T.Tree<A>>,
): ((forest: T.Forest<A>) => TE.TaskEither<E, T.Forest<A>>) =>
  spliceWhereAsync<E, A>(predicate)(a =>
    pipe(
      a,
      createChild,
      TE.map(child => [T.make(a.value, Arr.snoc(a.forest, child))]),
    ),
  )

export const addRoot = <A>(root: A) => (forest: T.Forest<A>): T.Forest<A> => [
  ...forest,
  T.make(root),
]

/**
 * A NodePath represents a path from a forest to a particular tree.
 */
type NodePath = NEA.NonEmptyArray<number>

/**
 * Returns an index-path to the first node in a forest that matches `predicate`,
 * or `none` if no such node exists.
 *
 * A named `NodePath` should always lead to a tree for the associated forest.
 */
export const getPath = <A>(predicate: Predicate<T.Tree<A>>) => <Name>(
  forest: Named<T.Forest<A>, Name>,
): O.Option<Named<NodePath, Name>> =>
  pipe(
    the(forest),
    findFirstMapWithIndex((i, t) =>
      predicate(t)
        ? O.some([i])
        : pipe(
            getPath(predicate)(coerce(t.forest)),
            O.map(p => [i, ...the(p)]),
          ),
    ),
    O.map(p => coerce(p)),
  )

/**
 * Returns the node pointed to by a named path
 */
export const getNode = <A, Name>(forest: Named<T.Forest<A>, Name>) => (
  path: Named<NodePath, Name>,
): A =>
  pipe(
    the(path),
    NEA.init,
    Arr.reduce(the(forest), (f, i) => f[i].forest),
    f => f[NEA.last(the(path))].value,
  )

/**
 * Changes a path to the position left of a node.
 */
export const getLeft = (path: NodePath): NodePath =>
  NEA.snoc(NEA.init(path), NEA.last(path) - 1)

/**
 * Changes a named path to the position left of a node, if one exists.
 *
 * Guaranteed to be either a valid path for the associated forest, or `none`.
 */
export const getValidatedLeft = <Name>(
  path: Named<NodePath, Name>,
): O.Option<Named<NodePath, Name>> =>
  pipe(
    the(path),
    O.fromPredicate(p => NEA.last(p) > 0),
    O.map(p => coerce(getLeft(p))),
  )

/**
 * Changes a path to the parent of a node, if one exists.
 */
export const getParent = (path: NodePath): O.Option<NodePath> =>
  pipe(path, NEA.init, NEA.fromArray)

/**
 * Changes a named path to the parent of a node, if one exists.
 */
export const getValidatedParent = <Name>(
  path: Named<NodePath, Name>,
): O.Option<Named<NodePath, Name>> =>
  pipe(
    the(path),
    getParent,
    O.map(p => coerce(p)),
  )

/**
 * Changes a path to the position right of a node
 */
export const getRight = (path: NodePath): NodePath =>
  NEA.snoc(NEA.init(path), NEA.last(path) + 1)

/**
 * Changes a path to the first child of a node
 */
export const getFirstChild = (path: NodePath): NodePath => NEA.snoc(path, 0)

/**
 * Returns true if the node at path `b` is the same node as or a descendent of
 * the node at path `a`
 */
export const isEqualOrDescendentOf = <Name>(a: Named<NodePath, Name>) => (
  b: Named<NodePath, Name>,
): boolean => the(a).every((n, i) => n === the(b)[i])

export const isNodePathDescendantOf = <Name>(a: Named<NodePath, Name>) => (
  b: Named<NodePath, Name>,
): boolean =>
  the(b).length > the(a).length && the(a).every((n, i) => n === the(b)[i])

export const isNodePathEqual = <Name>(a: Named<NodePath, Name>) => (
  b: Named<NodePath, Name>,
): boolean => NEA.getEq(Eq.eqNumber).equals(the(a), the(b))

const namedRootOptional = <A, Name>(): M.Optional<
  Named<T.Forest<A>, Name>,
  T.Forest<A>
> => iso<T.Forest<A>, Name>().asOptional()

const pathToForestOptional = <A, Name>(
  path: NodePath,
): M.Optional<Named<T.Forest<A>, Name>, T.Forest<A>> =>
  pipe(
    getParent(path),
    O.getOrElse<Array<number>>(() => []),
    Arr.reduce(namedRootOptional<A, Name>(), (fo, i) =>
      fo
        .compose(indexArray<T.Tree<A>>().index(i))
        .composeLens(M.Lens.fromProp<T.Tree<A>>()('forest')),
    ),
  )

const pathToOptional = <A, Name>(
  path: NodePath,
): M.Optional<Named<T.Forest<A>, Name>, T.Tree<A>> =>
  pathToForestOptional<A, Name>(path).compose(
    indexArray<T.Tree<A>>().index(NEA.last(path)),
  )

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
export const moveNode = <Name>(
  from: Named<NodePath, Name>,
  to: Named<NodePath, Name>,
) => <A>(forest: Named<T.Forest<A>, Name>): O.Option<T.Forest<A>> => {
  if (isEqualOrDescendentOf(from)(to)) {
    return O.none
  }
  const toIndex = NEA.last(the(to))
  const fromIndex = NEA.last(the(from))
  const adjustedTo: NodePath = pipe(
    the(to),
    NEA.mapWithIndex((i, p) =>
      i === the(from).length - 1 && the(from)[i] < p ? p - 1 : p,
    ),
  )
  const toForestOptional = pathToForestOptional<A, Name>(adjustedTo)
  const fromForestOptional = pathToForestOptional<A, Name>(the(from))
  const fromOptional = pathToOptional<A, Name>(the(from))
  const fromTree = pipe(forest, fromOptional.getOption)
  const removeFrom = fromForestOptional.modify(f =>
    pipe(
      f,
      Arr.deleteAt(fromIndex),
      O.getOrElse(() => f),
    ),
  )
  const injectTo = pipe(
    fromTree,
    O.fold(
      () => identity,
      ft =>
        toForestOptional.modify(f => [
          ...f.slice(0, toIndex),
          ft,
          ...f.slice(toIndex),
        ]),
    ),
  )
  return O.some(the(pipe(forest, removeFrom, injectTo)))
}

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
export const moveLeft = <A>(predicate: Predicate<T.Tree<A>>) => (
  forest: T.Forest<A>,
): O.Option<T.Forest<A>> =>
  name(forest)(nf =>
    pipe(
      nf,
      getPath(predicate),
      O.bindTo('from'),
      O.bind('to', ({ from }) => pipe(getValidatedLeft(from))),
      O.chain(({ from, to }) => moveNode(from, to)(nf)),
    ),
  )

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
export const moveUpBefore = <A>(predicate: Predicate<T.Tree<A>>) => (
  forest: T.Forest<A>,
): O.Option<T.Forest<A>> =>
  name(forest)(nf =>
    pipe(
      getPath(predicate)(nf),
      O.bindTo('from'),
      O.bind('to', ({ from }) => getValidatedParent(from)),
      O.chain(({ from, to }) => moveNode(from, to)(nf)),
    ),
  )

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
export const moveUpAfter = <A>(predicate: Predicate<T.Tree<A>>) => (
  forest: T.Forest<A>,
): O.Option<T.Forest<A>> =>
  name(forest)(nf =>
    pipe(
      getPath(predicate)(nf),
      O.bindTo('from'),
      O.bind('to', ({ from }) =>
        pipe(from, getValidatedParent, O.map(flow(the, getRight))),
      ),
      O.chain(({ from, to }) => moveNode(from, coerce(to))(nf)),
    ),
  )

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
export const moveRight = <A>(predicate: Predicate<T.Tree<A>>) => (
  forest: T.Forest<A>,
): O.Option<T.Forest<A>> =>
  name(forest)(nf =>
    pipe(
      getPath(predicate)(nf),
      O.bindTo('from'),
      O.bind('to', ({ from }) =>
        pipe(
          getRight(the(from)),
          O.some,
          O.chainFirst(right => pathToOptional(right).getOption(nf)),
        ),
      ),
      O.chain(({ from, to }) => moveNode(from, coerce(to))(nf)),
    ),
  )

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
export const moveInto = <A>(predicate: Predicate<T.Tree<A>>) => (
  forest: T.Forest<A>,
): O.Option<T.Forest<A>> =>
  name(forest)(nf =>
    pipe(
      getPath(predicate)(nf),
      O.bindTo('from'),
      O.bind('to', ({ from }) =>
        pipe(
          getRight(the(from)),
          O.some,
          O.chainFirst(right => pathToOptional(right).getOption(nf)),
          O.map(getFirstChild),
        ),
      ),
      O.chain(({ from, to }) => moveNode(from, coerce(to))(nf)),
    ),
  )

/**
 * Returns true if the first node matching the predicate is the leftmost node of
 * its forest.
 */
export const isLeftmost = <A>(predicate: Predicate<T.Tree<A>>) => (
  forest: T.Forest<A>,
): boolean =>
  name(forest)(
    flow(
      getPath(predicate),
      O.fold(
        () => false,
        p => NEA.last(the(p)) === 0,
      ),
    ),
  )

/**
 * Returns true if the first node matching the predicate has a parent node
 */
export const hasParent = <A>(predicate: Predicate<T.Tree<A>>) => (
  forest: T.Forest<A>,
): boolean =>
  name(forest)(
    flow(
      getPath(predicate),
      O.fold(
        () => false,
        p => the(p).length > 1,
      ),
    ),
  )

/**
 * Returns true if the first node matching the predicate is the rightmost node of
 * its forest. Returns false otherwise, or if no node is found.
 */
export const isRightmost = <A>(predicate: Predicate<T.Tree<A>>) => (
  forest: T.Forest<A>,
): boolean =>
  name(forest)(nf =>
    pipe(
      getPath(predicate)(nf),
      O.fold(
        () => false,
        flow(
          the,
          getRight,
          pathToOptional,
          pto => pto.getOption(nf),
          O.fold(
            () => true,
            () => false,
          ),
        ),
      ),
    ),
  )

/**
 * Gets all parents of the first matching node
 */
export const getAncestorsOf = <A>(predicate: Predicate<T.Tree<A>>) => (
  forest: T.Forest<A>,
): O.Option<Array<A>> =>
  name(forest)(nf =>
    pipe(
      nf,
      getPath(predicate),
      O.chain(
        flow(
          the,
          // create an array of paths, e.g. [1, 2] => [[1], [1,2]]
          Arr.scanLeft([] as Array<number>, Arr.snoc),
          // get rid of the last path, since that's the target node
          Arr.dropRight(1),
          Arr.filterMap(NEA.fromArray),
          NEA.fromArray,
        ),
      ),
      O.map(Arr.map(p => getNode(nf)(coerce(p)))),
    ),
  )

export const findFirst = <A>(predicate: Predicate<A>) => (
  forest: T.Forest<A>,
): O.Option<A> =>
  pipe(
    forest,
    Arr.foldMap(O.getFirstMonoid<A>())(
      T.foldMap(O.getFirstMonoid<A>())(O.fromPredicate(predicate)),
    ),
  )
