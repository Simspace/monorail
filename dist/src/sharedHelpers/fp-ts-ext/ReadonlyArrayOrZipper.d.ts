import * as Eq from 'fp-ts/lib/Eq';
import { Functor1 } from 'fp-ts/lib/Functor';
import * as O from 'fp-ts/lib/Option';
import * as Show from 'fp-ts/lib/Show';
import * as RAZ from '@monorail/sharedHelpers/fp-ts-ext/ReadonlyArrayZipper';
/**
 * A variant of ReadonlyArrayOrZipper which represents the case where no item is selected
 */
export declare type IsReadonlyArray<A> = {
    readonly tag: 'isReadonlyArray';
    readonly value: ReadonlyArray<A>;
};
/**
 * A variant of ReadonlyArrayOrZipper which represents the case where an item is selected
 */
export declare type IsReadonlyArrayZipper<A> = {
    readonly tag: 'isReadonlyArrayZipper';
    readonly value: RAZ.ReadonlyArrayZipper<A>;
};
/**
 * Represents a an array-like structure where zero or one item is focused/selected. This is basically a tagged union
 * with a member that is just a ReadonlyArray and a member that is a ReadonlyArrayZipper. Focus can be set or unset
 * by using functions that might switch the value between these types.
 *
 * If you need a collection that is guaranteed to have a single item focused/selected at all times, see ReadonlyArrayZipper.
 *
 * The purpose of this is to make sure the selected item is tracked as an actual member of the collection and not
 * an optional value that is tracked off to the side. The selected item is a first-class member of the collection.
 */
export declare type ReadonlyArrayOrZipper<A> = IsReadonlyArray<A> | IsReadonlyArrayZipper<A>;
/**
 * Constructs the variant that has no focus (ReadonlyArray)
 */
export declare const makeWithNoFocus: <A>(value: readonly A[]) => IsReadonlyArray<A>;
/**
 * Alias for `makeWithNoFocus`
 */
export declare const makeWithReadonlyArray: <A>(value: readonly A[]) => IsReadonlyArray<A>;
/**
 * Constructs the variant that has a focused value (ReadonlyArrayZipper)
 */
export declare const makeWithFocus: <A>(value: RAZ.ReadonlyArrayZipper<A>) => IsReadonlyArrayZipper<A>;
/**
 * Alias for `makeWithFocus`
 */
export declare const makeWithReadonlyArrayZipper: <A>(value: RAZ.ReadonlyArrayZipper<A>) => IsReadonlyArrayZipper<A>;
/**
 * Constructs with the given value at the focus
 */
export declare const of: <A>(focus: A) => ReadonlyArrayOrZipper<A>;
/**
 * Constructs an empty ReadonlyArrayOrZipper, which is the variant with no focus (and no values)
 */
export declare const empty: ReadonlyArrayOrZipper<never>;
/**
 * Converts the given value to a ReadonlyArray with each item and an indicator for each item for whether it was focused
 */
export declare const toReadonlyArrayWithFocusFlag: <A>(fa: ReadonlyArrayOrZipper<A>) => readonly {
    value: A;
    isFocus: boolean;
}[];
/**
 * Converts the given value to a ReadonlyArray
 */
export declare const toReadonlyArray: <A>(fa: ReadonlyArrayOrZipper<A>) => readonly A[];
/**
 * Indicates if the given value has a focused item
 */
export declare const hasFocus: <A>(fa: ReadonlyArrayOrZipper<A>) => boolean;
/**
 * Gets the currently-focused value (if there is one)
 */
export declare const getFocus: <A>(fa: ReadonlyArrayOrZipper<A>) => O.Option<A>;
/**
 * Clears the focus (if there is one)
 */
export declare const clearFocus: <A>(fa: ReadonlyArrayOrZipper<A>) => IsReadonlyArray<A>;
/**
 * Attempts to move the focus to the given item by finding it in the collection
 */
export declare const find: <A>(eq: Eq.Eq<A>) => (item: A) => (fa: ReadonlyArrayOrZipper<A>) => O.Option<IsReadonlyArrayZipper<A>>;
/**
 * Attempts to move the focus to the given item, and if no item is found, returns the input collection unchanged
 */
export declare const findOrKeep: <A>(eq: Eq.Eq<A>) => (item: A) => (fa: ReadonlyArrayOrZipper<A>) => ReadonlyArrayOrZipper<A>;
/**
 * Attempts to move the focus to the given item, and if it's not found, clears the focus.
 */
export declare const findOrClear: <A>(eq: Eq.Eq<A>) => (item: A) => (fa: ReadonlyArrayOrZipper<A>) => ReadonlyArrayOrZipper<A>;
/**
 * If the given item is none, clears the focus. If the given item is some, it attempts to focus on it. If the item is not found,
 * the focus is kept as-is.
 */
export declare const findOptionalOrKeep: <A>(eq: Eq.Eq<A>) => (oa: O.Option<A>) => (fa: ReadonlyArrayOrZipper<A>) => ReadonlyArrayOrZipper<A>;
/**
 * If the given item is none, clears the focus. If the given item is some, it attempts to focus on it. If the item is not found,
 * the focus is cleared.
 */
export declare const findOptionalOrClear: <A>(eq: Eq.Eq<A>) => (oa: O.Option<A>) => (fa: ReadonlyArrayOrZipper<A>) => ReadonlyArrayOrZipper<A>;
/**
 * Maps a function over the collection
 */
export declare const map_: <A, B>(fa: ReadonlyArrayOrZipper<A>, f: (a: A) => B) => ReadonlyArrayOrZipper<B>;
/**
 * Maps a function over the collection (pipeable)
 */
export declare const map: <A, B>(f: (a: A) => B) => (fa: ReadonlyArrayOrZipper<A>) => ReadonlyArrayOrZipper<B>;
export declare const URI = "ReadonlyArrayOrZipper";
export declare type URI = typeof URI;
declare module 'fp-ts/lib/HKT' {
    interface URItoKind<A> {
        ReadonlyArrayOrZipper: ReadonlyArrayOrZipper<A>;
    }
}
export declare const getShow: <A>(showA: Show.Show<A>) => Show.Show<ReadonlyArrayOrZipper<A>>;
export declare const getEq: <A>(eqA: Eq.Eq<A>) => Eq.Eq<ReadonlyArrayOrZipper<A>>;
export declare const Functor: Functor1<URI>;
export declare const readonlyArrayOrZipper: Functor1<URI>;
