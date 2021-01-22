import { Applicative1 } from 'fp-ts/lib/Applicative';
import { Apply1 } from 'fp-ts/lib/Apply';
import { Comonad1 } from 'fp-ts/lib/Comonad';
import * as Eq from 'fp-ts/lib/Eq';
import { Extend1 } from 'fp-ts/lib/Extend';
import { Foldable1 } from 'fp-ts/lib/Foldable';
import { Functor1 } from 'fp-ts/lib/Functor';
import { FunctorWithIndex1 } from 'fp-ts/lib/FunctorWithIndex';
import * as Mn from 'fp-ts/lib/Monoid';
import * as O from 'fp-ts/lib/Option';
import * as RNEA from 'fp-ts/lib/ReadonlyNonEmptyArray';
import * as Sg from 'fp-ts/lib/Semigroup';
import * as Show from 'fp-ts/lib/Show';
import { Traversable1 } from 'fp-ts/lib/Traversable';
/**
 * ReadonlyArrayZipper is a "zipper" type for arrays - an array with a selected or "focused" item.
 *
 * Note: there is a fp-ts-contrib/lib/Zipper, but that is backed by `Array` rather than `ReadonlyArray`, so I'll go ahead with this
 * for now. Some of the functions were copied from fp-ts-contrib/lib/Zipper.
 *
 * If you need a type where zero or one items can be selected, see `ReadonlyArrayOrZipper`
 *
 * Some implementations of list zippers use the FP-style linked list, and with that, it makes sense to store the lefts
 * in reverse for O(1) moving the focus to the left. However, this is just using an Array, so I'm not going to reverse
 * the lefts.
 *
 * For more information, see here: http://data.tmorris.net/talks/zippers/bd054c210649101b84662c614fc45af3c27a5eef/zippers.pdf
 */
export declare type ReadonlyArrayZipper<A> = {
    readonly lefts: ReadonlyArray<A>;
    readonly focus: A;
    readonly rights: ReadonlyArray<A>;
};
/**
 * Constructs with the given value at the focus
 */
export declare const of: <A>(focus: A) => ReadonlyArrayZipper<A>;
/**
 * Constructs from the given parts
 */
export declare const make: <A>(lefts: readonly A[], focus: A, rights: readonly A[]) => ReadonlyArrayZipper<A>;
/**
 * Constructs from the given ReadonlyArray. The first item in the array will be the focus. If the array is empty, none is returned.
 */
export declare const fromReadonlyArray: <A>(ra: readonly A[]) => O.Option<ReadonlyArrayZipper<A>>;
/**
 * Constructs from the given ReadonlyNonEmptyArray. The head will be the focus and the tail the rights.
 */
export declare const fromReadonlyNonEmptyArray: <A>(rnea: RNEA.ReadonlyNonEmptyArray<A>) => ReadonlyArrayZipper<A>;
/**
 * Dumps the data structure into flattened array with each item flagged with whether it was focused
 */
export declare const toReadonlyArrayWithFocusFlag: <A>(raz: ReadonlyArrayZipper<A>) => readonly {
    value: A;
    isFocus: boolean;
}[];
/**
 * Dumps the collection into a flattened array
 */
export declare const toReadonlyArray: <A>(raz: ReadonlyArrayZipper<A>) => readonly A[];
/**
 * Gets the length of the array
 */
export declare const length: <A>(raz: ReadonlyArrayZipper<A>) => number;
/**
 * Moves the focus one item to the left. If the focus is at the left-most item, none is returned.
 */
export declare const moveLeft: <A>(raz: ReadonlyArrayZipper<A>) => O.Option<ReadonlyArrayZipper<A>>;
/**
 * Moves the focus one item to the left. If the focus is at the left-most item, the array is returned unchanged.
 */
export declare const moveLeftWithClamp: <A>(raz: ReadonlyArrayZipper<A>) => ReadonlyArrayZipper<A>;
/**
 * Moves the focus one item to the right. If the focus is at the right-most item, none is returned.
 */
export declare const moveRight: <A>(raz: ReadonlyArrayZipper<A>) => O.Option<ReadonlyArrayZipper<A>>;
/**
 * Moves the focus one item to the right. If the focus is at the right-most item, the array is returned unchanged.
 */
export declare const moveRightWithClamp: <A>(raz: ReadonlyArrayZipper<A>) => ReadonlyArrayZipper<A>;
/**
 * Overwrites the focus with the given value
 */
export declare const setFocus: <A>(newFocus: A) => (raz: ReadonlyArrayZipper<A>) => ReadonlyArrayZipper<A>;
/**
 * Modifies the focus with the given function.
 */
export declare const modifyFocus: <A>(f: (a: A) => A) => (raz: ReadonlyArrayZipper<A>) => ReadonlyArrayZipper<A>;
/**
 * Attempts to find the given value by checking just the focus. If the focus matches the given item,
 * the RAZ is returned wrapped in a some.
 */
export declare const findInFocus: <A>(eq: Eq.Eq<A>) => (item: A) => (raz: ReadonlyArrayZipper<A>) => O.Option<ReadonlyArrayZipper<A>>;
/**
 * Attempts to find the given value by checking just the values to the left of the focus.
 * If found, a new array is returned focused on the given item.
 */
export declare const findInLefts: <A>(eq: Eq.Eq<A>) => (item: A) => (raz: ReadonlyArrayZipper<A>) => O.Option<ReadonlyArrayZipper<A>>;
/**
 * Attempts to find the given value by checking just the values to the right of the focus.
 * If found, a new array is returned focused on the given item.
 */
export declare const findInRights: <A>(eq: Eq.Eq<A>) => (item: A) => (raz: ReadonlyArrayZipper<A>) => O.Option<ReadonlyArrayZipper<A>>;
/**
 * Attempts to find the given value by checking the focus, the values to the left of the focus and the values to the right of the focus.
 * If found, a new array is returned focused on the given item.
 */
export declare const find: <A>(eq: Eq.Eq<A>) => (item: A) => (raz: ReadonlyArrayZipper<A>) => O.Option<ReadonlyArrayZipper<A>>;
/**
 * Attempts to find the given value by checking the focus, the values to the left of the focus and the values to the right of the focus.
 * If found, a new array is returned focused on the given item.
 * If not found, the input array is returned unchanged.
 */
export declare const findOrKeep: <A>(eq: Eq.Eq<A>) => (item: A) => (raz: ReadonlyArrayZipper<A>) => ReadonlyArrayZipper<A>;
/**
 * Maps a function over the collection
 */
export declare const map_: Functor1<URI>['map'];
/**
 * Maps a function (with index) over the collection
 */
export declare const mapWithIndex_: FunctorWithIndex1<URI, number>['mapWithIndex'];
/**
 * Applies a wrapped function to a collection
 */
export declare const ap_: Apply1<URI>['ap'];
export declare const extend_: Extend1<URI>['extend'];
export declare const map: <A, B>(f: (a: A) => B) => (raz: ReadonlyArrayZipper<A>) => ReadonlyArrayZipper<B>;
export declare const mapWithIndex: <A, B>(f: (index: number, a: A) => B) => (raz: ReadonlyArrayZipper<A>) => ReadonlyArrayZipper<B>;
export declare const ap: <A, B>(fa: ReadonlyArrayZipper<A>) => (fab: ReadonlyArrayZipper<(a: A) => B>) => ReadonlyArrayZipper<B>;
export declare const apFirst: <B>(fb: ReadonlyArrayZipper<B>) => <A>(fa: ReadonlyArrayZipper<A>) => ReadonlyArrayZipper<A>;
export declare const apSecond: <B>(fb: ReadonlyArrayZipper<B>) => <A>(fa: ReadonlyArrayZipper<A>) => ReadonlyArrayZipper<B>;
export declare const extend: <A, B>(f: (fa: ReadonlyArrayZipper<A>) => B) => (wa: ReadonlyArrayZipper<A>) => ReadonlyArrayZipper<B>;
export declare const duplicate: <A>(wa: ReadonlyArrayZipper<A>) => ReadonlyArrayZipper<ReadonlyArrayZipper<A>>;
export declare const foldMap: <M>(M: Mn.Monoid<M>) => <A>(f: (a: A) => M) => (fa: ReadonlyArrayZipper<A>) => M;
export declare const reduce: <A, B>(b: B, f: (b: B, a: A) => B) => (fa: ReadonlyArrayZipper<A>) => B;
export declare const reduceRight: <A, B>(b: B, f: (a: A, b: B) => B) => (fa: ReadonlyArrayZipper<A>) => B;
export declare const sequence: Traversable1<URI>['sequence'];
export declare const extract: Comonad1<URI>['extract'];
export declare const URI = "ReadonlyArrayZipper";
export declare type URI = typeof URI;
declare module 'fp-ts/lib/HKT' {
    interface URItoKind<A> {
        ReadonlyArrayZipper: ReadonlyArrayZipper<A>;
    }
}
export declare const getShow: <A>(showA: Show.Show<A>) => Show.Show<ReadonlyArrayZipper<A>>;
export declare const getEq: <A>(eqA: Eq.Eq<A>) => Eq.Eq<ReadonlyArrayZipper<A>>;
export declare const getSemigroup: <A>(semigroupA: Sg.Semigroup<A>) => Sg.Semigroup<ReadonlyArrayZipper<A>>;
export declare const getMonoid: <A>(monoidA: Mn.Monoid<A>) => Mn.Monoid<ReadonlyArrayZipper<A>>;
export declare const Functor: Functor1<URI>;
export declare const FunctorWithIndex: FunctorWithIndex1<URI, number>;
export declare const Apply: Apply1<URI>;
export declare const Applicative: Applicative1<URI>;
export declare const Foldable: Foldable1<URI>;
export declare const Traversable: Traversable1<URI>;
export declare const Comonad: Comonad1<URI>;
export declare const readonlyArrayZipper: Applicative1<URI> & Foldable1<URI> & Traversable1<URI> & Comonad1<URI> & FunctorWithIndex1<URI, number>;
