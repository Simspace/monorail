import * as M from 'monocle-ts';
import * as Foldable from 'fp-ts/Foldable';
import { Predicate } from 'fp-ts/function';
import * as TE from 'fp-ts/lib/TaskEither';
import * as Traversable from 'fp-ts/Traversable';
import * as T from 'fp-ts/Tree';
import { NEA, O } from '@monorail/sharedHelpers/fp-ts-imports';
import { Named } from '@monorail/sharedHelpers/names';
declare const ForestURI = "Forest";
declare type ForestURI = typeof ForestURI;
declare module 'fp-ts/HKT' {
    interface URItoKind<A> {
        readonly [ForestURI]: T.Forest<A>;
    }
}
declare const forestInstances: Foldable.Foldable1<ForestURI> & Traversable.Traversable1<ForestURI>;
export { forestInstances as forest };
export declare const mapForest: <A, B>(f: (a: A) => B) => (fa: T.Forest<A>) => T.Forest<B>, reduceForest: <A, B>(b: B, f: (b: B, a: A) => B) => (fa: T.Forest<A>) => B, reduceRightForest: <A, B>(b: B, f: (a: A, b: B) => B) => (fa: T.Forest<A>) => B, foldMapForest: <M>(M: import("fp-ts/lib/Monoid").Monoid<M>) => <A>(f: (a: A) => M) => (fa: T.Forest<A>) => M;
export declare const getForestTraversal: <A>() => M.Traversal<T.Forest<A>, A>;
export declare const getForestFold: <A>() => M.Fold<T.Forest<A>, A>;
export declare function getForestOptionalFromPath<A>(path: NEA.NonEmptyArray<number>): M.Optional<T.Forest<A>, T.Forest<A>>;
export declare function getTreeOptionalFromPath<A>(path: NEA.NonEmptyArray<number>): M.Optional<T.Forest<A>, T.Tree<A>>;
export declare const fromForestPath: <A>(f: T.Forest<A>) => (p: NodePath) => O.Option<T.Tree<A>>;
/**
 * Splices trees in a forest that match a predicate. `mapMatch` returns a
 * `Forest` that will be flattened into the match's parent forest, so you can
 * add or remove nodes at the matched level.
 */
export declare const spliceWhere: <A>(predicate: Predicate<T.Tree<A>>) => (mapMatch: (a: T.Tree<A>) => T.Forest<A>, mapNotMatch?: (a: T.Tree<A>) => T.Tree<A>) => (forest: T.Forest<A>) => T.Forest<A>;
/**
 * Splices trees in a forest that match a predicate, asynchronously. `mapMatch`
 * returns a `Task<Forest<A>>` that will be flattened into the match's parent
 * forest, so you can add or remove nodes at the matched level.
 */
export declare const spliceWhereAsync: <E, A>(predicate: Predicate<T.Tree<A>>) => (mapMatch: (a: T.Tree<A>) => TE.TaskEither<E, T.Forest<A>>, mapNotMatch?: (a: T.Tree<A>) => TE.TaskEither<E, T.Tree<A>>) => (forest: T.Forest<A>) => TE.TaskEither<E, T.Forest<A>>;
/**
 * Duplicates all trees in a forest that match `predicate`. Does _not_ copy
 * children.
 */
export declare const duplicateWhere: <A>(predicate: Predicate<T.Tree<A>>) => (modify?: (a: A) => A) => (forest: T.Forest<A>) => T.Forest<A>;
/**
 * Duplicates all trees in a forest that match `predicate`, asynchronously. Does
 * _not_ copy children.
 */
export declare const duplicateWhereAsync: <A>(predicate: Predicate<T.Tree<A>>) => <E>(modify: (a: A) => TE.TaskEither<E, A>) => (forest: T.Forest<A>) => TE.TaskEither<E, T.Forest<A>>;
/**
 * Removes all trees in a forest that match `predicate`.
 */
export declare const removeWhere: <A>(predicate: Predicate<T.Tree<A>>) => (forest: T.Forest<A>) => T.Forest<A>;
/**
 * Adds a child to all trees in a forest that match `predicate`.
 */
export declare const addChildWhere: <A>(predicate: Predicate<T.Tree<A>>) => (createChild: (a: T.Tree<A>) => T.Tree<A>) => (forest: T.Forest<A>) => T.Forest<A>;
/**
 * Adds a child to all trees in a forest that match `predicate`, asynchronously
 */
export declare const addChildWhereAsync: <A>(predicate: Predicate<T.Tree<A>>) => <E>(createChild: (a: T.Tree<A>) => TE.TaskEither<E, T.Tree<A>>) => (forest: T.Forest<A>) => TE.TaskEither<E, T.Forest<A>>;
export declare const addRoot: <A>(root: A) => (forest: T.Forest<A>) => T.Forest<A>;
/**
 * A NodePath represents a path from a forest to a particular tree.
 */
declare type NodePath = NEA.NonEmptyArray<number>;
/**
 * Returns an index-path to the first node in a forest that matches `predicate`,
 * or `none` if no such node exists.
 *
 * A named `NodePath` should always lead to a tree for the associated forest.
 */
export declare const getPath: <A>(predicate: Predicate<T.Tree<A>>) => <Name>(forest: Named<T.Forest<A>, Name>) => O.Option<Named<NodePath, Name>>;
/**
 * Returns the node pointed to by a named path
 */
export declare const getNode: <A, Name>(forest: Named<T.Forest<A>, Name>) => (path: Named<NodePath, Name>) => A;
/**
 * Changes a path to the position left of a node.
 */
export declare const getLeft: (path: NodePath) => NodePath;
/**
 * Changes a named path to the position left of a node, if one exists.
 *
 * Guaranteed to be either a valid path for the associated forest, or `none`.
 */
export declare const getValidatedLeft: <Name>(path: Named<NodePath, Name>) => O.Option<Named<NodePath, Name>>;
/**
 * Changes a path to the parent of a node, if one exists.
 */
export declare const getParent: (path: NodePath) => O.Option<NodePath>;
/**
 * Changes a named path to the parent of a node, if one exists.
 */
export declare const getValidatedParent: <Name>(path: Named<NodePath, Name>) => O.Option<Named<NodePath, Name>>;
/**
 * Changes a path to the position right of a node
 */
export declare const getRight: (path: NodePath) => NodePath;
/**
 * Changes a path to the first child of a node
 */
export declare const getFirstChild: (path: NodePath) => NodePath;
/**
 * Returns true if the node at path `b` is the same node as or a descendent of
 * the node at path `a`
 */
export declare const isEqualOrDescendentOf: <Name>(a: Named<NodePath, Name>) => (b: Named<NodePath, Name>) => boolean;
export declare const isNodePathDescendantOf: <Name>(a: Named<NodePath, Name>) => (b: Named<NodePath, Name>) => boolean;
export declare const isNodePathEqual: <Name>(a: Named<NodePath, Name>) => (b: Named<NodePath, Name>) => boolean;
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
export declare const moveNode: <Name>(from: Named<NodePath, Name>, to: Named<NodePath, Name>) => <A>(forest: Named<T.Forest<A>, Name>) => O.Option<T.Forest<A>>;
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
export declare const moveLeft: <A>(predicate: Predicate<T.Tree<A>>) => (forest: T.Forest<A>) => O.Option<T.Forest<A>>;
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
export declare const moveUpBefore: <A>(predicate: Predicate<T.Tree<A>>) => (forest: T.Forest<A>) => O.Option<T.Forest<A>>;
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
export declare const moveUpAfter: <A>(predicate: Predicate<T.Tree<A>>) => (forest: T.Forest<A>) => O.Option<T.Forest<A>>;
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
export declare const moveRight: <A>(predicate: Predicate<T.Tree<A>>) => (forest: T.Forest<A>) => O.Option<T.Forest<A>>;
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
export declare const moveInto: <A>(predicate: Predicate<T.Tree<A>>) => (forest: T.Forest<A>) => O.Option<T.Forest<A>>;
/**
 * Returns true if the first node matching the predicate is the leftmost node of
 * its forest.
 */
export declare const isLeftmost: <A>(predicate: Predicate<T.Tree<A>>) => (forest: T.Forest<A>) => boolean;
/**
 * Returns true if the first node matching the predicate has a parent node
 */
export declare const hasParent: <A>(predicate: Predicate<T.Tree<A>>) => (forest: T.Forest<A>) => boolean;
/**
 * Returns true if the first node matching the predicate is the rightmost node of
 * its forest. Returns false otherwise, or if no node is found.
 */
export declare const isRightmost: <A>(predicate: Predicate<T.Tree<A>>) => (forest: T.Forest<A>) => boolean;
/**
 * Gets all parents of the first matching node
 */
export declare const getAncestorsOf: <A>(predicate: Predicate<T.Tree<A>>) => (forest: T.Forest<A>) => O.Option<A[]>;
export declare const findFirst: <A>(predicate: Predicate<A>) => (forest: T.Forest<A>) => O.Option<A>;
