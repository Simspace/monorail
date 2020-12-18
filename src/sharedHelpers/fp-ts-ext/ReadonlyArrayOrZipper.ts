import { identity } from 'fp-ts/lib/function'
import { Functor1 } from 'fp-ts/lib/Functor'
import { Eq, O, pipe, RA, Show } from '@monorail/sharedHelpers/fp-ts-imports'

import * as RAZ from '@monorail/sharedHelpers/fp-ts-ext/ReadonlyArrayZipper'
import { matchI } from '@monorail/sharedHelpers/matchers'

/**
 * A variant of ReadonlyArrayWithPossibleFocus which represents the case where no item is selected
 */
export type IsReadonlyArray<A> = {
  readonly tag: 'isReadonlyArray'
  readonly value: ReadonlyArray<A>
}

/**
 * A variant of ReadonlyArrayWithPossibleFocus which represents the case where an item is selected
 */
export type IsReadonlyArrayZipper<A> = {
  readonly tag: 'isReadonlyArrayZipper'
  readonly value: RAZ.ReadonlyArrayZipper<A>
}

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
export type ReadonlyArrayOrZipper<A> =
  | IsReadonlyArray<A>
  | IsReadonlyArrayZipper<A>

/**
 * Constructs the variant that has no focus (ReadonlyArray)
 */
export const makeWithNoFocus = <A>(
  value: ReadonlyArray<A>,
): IsReadonlyArray<A> => ({
  tag: 'isReadonlyArray',
  value,
})

/**
 * Alias for `makeWithNoFocus`
 */
export const makeWithReadonlyArray = makeWithNoFocus

/**
 * Constructs the variant that has a focused value (ReadonlyArrayZipper)
 */
export const makeWithFocus = <A>(
  value: RAZ.ReadonlyArrayZipper<A>,
): IsReadonlyArrayZipper<A> => ({ tag: 'isReadonlyArrayZipper', value })

/**
 * Alias for `makeWithFocus`
 */
export const makeWithReadonlyArrayZipper = makeWithFocus

/**
 * Constructs with the given value at the focus
 */
export const of = <A>(focus: A): ReadonlyArrayOrZipper<A> =>
  makeWithFocus(RAZ.of(focus))

/**
 * Constructs an empty ReadonlyArrayOrZipper, which is the variant with no focus (and no values)
 */
export const empty: ReadonlyArrayOrZipper<never> = makeWithNoFocus([])

/**
 * Converts the given value to a ReadonlyArray with each item and an indicator for each item for whether it was focused
 */
export const toReadonlyArrayWithFocusFlag = <A>(
  fa: ReadonlyArrayOrZipper<A>,
): ReadonlyArray<{ value: A; isFocus: boolean }> =>
  matchI(fa)({
    isReadonlyArray: a => a.value.map(value => ({ value, isFocus: false })),
    isReadonlyArrayZipper: a => RAZ.toReadonlyArrayWithFocusFlag(a.value),
  })

/**
 * Converts the given value to a ReadonlyArray
 */
export const toReadonlyArray = <A>(
  fa: ReadonlyArrayOrZipper<A>,
): ReadonlyArray<A> =>
  matchI(fa)({
    isReadonlyArray: a => a.value,
    isReadonlyArrayZipper: a => RAZ.toReadonlyArray(a.value),
  })

/**
 * Indicates if the given value has a focused item
 */
export const hasFocus = <A>(fa: ReadonlyArrayOrZipper<A>): boolean =>
  matchI(fa)({
    isReadonlyArray: _ => false,
    isReadonlyArrayZipper: _ => true,
  })

/**
 * Gets the currently-focused value (if there is one)
 */
export const getFocus = <A>(fa: ReadonlyArrayOrZipper<A>): O.Option<A> =>
  matchI(fa)<O.Option<A>>({
    isReadonlyArray: _ => O.none,
    isReadonlyArrayZipper: a => O.some(a.value.focus),
  })

/**
 * Clears the focus (if there is one)
 */
export const clearFocus = <A>(
  fa: ReadonlyArrayOrZipper<A>,
): IsReadonlyArray<A> =>
  matchI(fa)<IsReadonlyArray<A>>({
    isReadonlyArray: identity,
    isReadonlyArrayZipper: ({ value }) =>
      makeWithNoFocus(RAZ.toReadonlyArray(value)),
  })

/**
 * Attempts to move the focus to the given item by finding it in the collection
 */
export const find = <A>(eq: Eq.Eq<A>) => (item: A) => (
  fa: ReadonlyArrayOrZipper<A>,
): O.Option<IsReadonlyArrayZipper<A>> =>
  matchI(fa)({
    isReadonlyArray: ({ value }) =>
      pipe(
        RAZ.fromReadonlyArray(value),
        O.chain(raz => RAZ.find(eq)(item)(raz)),
        O.map(raz => makeWithFocus(raz)),
      ),
    isReadonlyArrayZipper: ({ value }) =>
      pipe(
        value,
        RAZ.find(eq)(item),
        O.map(raz => makeWithFocus(raz)),
      ),
  })

/**
 * Attempts to move the focus to the given item, and if no item is found, returns the input collection unchanged
 */
export const findOrKeep = <A>(eq: Eq.Eq<A>) => (item: A) => (
  fa: ReadonlyArrayOrZipper<A>,
): ReadonlyArrayOrZipper<A> =>
  pipe(
    find(eq)(item)(fa),
    O.getOrElse(() => fa),
  )

/**
 * Attempts to move the focus to the given item, and if it's not found, clears the focus.
 */
export const findOrClear = <A>(eq: Eq.Eq<A>) => (item: A) => (
  fa: ReadonlyArrayOrZipper<A>,
): ReadonlyArrayOrZipper<A> =>
  pipe(
    find(eq)(item)(fa),
    O.getOrElse<ReadonlyArrayOrZipper<A>>(() => clearFocus(fa)),
  )

/**
 * If the given item is none, clears the focus. If the given item is some, it attempts to focus on it. If the item is not found,
 * the focus is kept as-is.
 */
export const findOptionalOrKeep = <A>(eq: Eq.Eq<A>) => (oa: O.Option<A>) => (
  fa: ReadonlyArrayOrZipper<A>,
): ReadonlyArrayOrZipper<A> =>
  pipe(
    oa,
    O.fold(
      () => clearFocus(fa),
      a => findOrKeep(eq)(a)(fa),
    ),
  )

/**
 * If the given item is none, clears the focus. If the given item is some, it attempts to focus on it. If the item is not found,
 * the focus is cleared.
 */
export const findOptionalOrClear = <A>(eq: Eq.Eq<A>) => (oa: O.Option<A>) => (
  fa: ReadonlyArrayOrZipper<A>,
): ReadonlyArrayOrZipper<A> =>
  pipe(
    oa,
    O.fold(
      () => clearFocus(fa),
      a => findOrClear(eq)(a)(fa),
    ),
  )

/**
 * Maps a function over the collection
 */
export const map_ = <A, B>(
  fa: ReadonlyArrayOrZipper<A>,
  f: (a: A) => B,
): ReadonlyArrayOrZipper<B> =>
  matchI(fa)<ReadonlyArrayOrZipper<B>>({
    isReadonlyArray: ({ value }) => makeWithNoFocus(value.map(f)),
    isReadonlyArrayZipper: ({ value }) => makeWithFocus(RAZ.map(f)(value)),
  })

/**
 * Maps a function over the collection (pipeable)
 */
export const map = <A, B>(f: (a: A) => B) => (
  fa: ReadonlyArrayOrZipper<A>,
): ReadonlyArrayOrZipper<B> => map_(fa, f)

export const URI = 'ReadonlyArrayOrZipper'

export type URI = typeof URI

declare module 'fp-ts/lib/HKT' {
  interface URItoKind<A> {
    ReadonlyArrayOrZipper: ReadonlyArrayOrZipper<A>
  }
}

export const getShow: <A>(
  showA: Show.Show<A>,
) => Show.Show<ReadonlyArrayOrZipper<A>> = showA => {
  return {
    show: raof =>
      matchI(raof)({
        isReadonlyArray: x =>
          `IsReadonlyArray(${RA.getShow(showA).show(x.value)})`,
        isReadonlyArrayZipper: x =>
          `IsReadonlyArrayZipper(${RAZ.getShow(showA).show(x.value)})`,
      }),
  }
}

export const getEq = <A>(eqA: Eq.Eq<A>): Eq.Eq<ReadonlyArrayOrZipper<A>> => {
  return {
    equals: (a, b) => {
      if (a.tag === 'isReadonlyArray' && b.tag === 'isReadonlyArray') {
        return RA.getEq(eqA).equals(a.value, b.value)
      } else if (
        a.tag === 'isReadonlyArrayZipper' &&
        b.tag === 'isReadonlyArrayZipper'
      ) {
        return RAZ.getEq(eqA).equals(a.value, b.value)
      } else {
        return false
      }
    },
  }
}

export const Functor: Functor1<URI> = {
  URI,
  map: map_,
}

export const readonlyArrayOrZipper: Functor1<URI> = {
  URI,
  map: map_,
}

// TODO: add more stuff as needed, including fp-ts typeclass machinery, etc.
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
