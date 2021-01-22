import {
  Applicative as ApplicativeHKT,
  Applicative1,
} from 'fp-ts/lib/Applicative'
import { Apply1 } from 'fp-ts/lib/Apply'
import { Comonad1 } from 'fp-ts/lib/Comonad'
import * as Eq from 'fp-ts/lib/Eq'
import { Extend1 } from 'fp-ts/lib/Extend'
import { Foldable1 } from 'fp-ts/lib/Foldable'
import { identity } from 'fp-ts/lib/function'
import { Functor1 } from 'fp-ts/lib/Functor'
import { FunctorWithIndex1 } from 'fp-ts/lib/FunctorWithIndex'
import { HKT } from 'fp-ts/lib/HKT'
import * as Mn from 'fp-ts/lib/Monoid'
import * as O from 'fp-ts/lib/Option'
import { pipe } from 'fp-ts/lib/pipeable'
import * as RA from 'fp-ts/lib/ReadonlyArray'
import * as RNEA from 'fp-ts/lib/ReadonlyNonEmptyArray'
import * as Sg from 'fp-ts/lib/Semigroup'
import * as Show from 'fp-ts/lib/Show'
import { Traversable1 } from 'fp-ts/lib/Traversable'

import * as RAExt from '@monorail/sharedHelpers/fp-ts-ext/ReadonlyArray'

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
export type ReadonlyArrayZipper<A> = {
  readonly lefts: ReadonlyArray<A>
  readonly focus: A
  readonly rights: ReadonlyArray<A>
}

/**
 * Constructs with the given value at the focus
 */
export const of = <A>(focus: A): ReadonlyArrayZipper<A> => ({
  lefts: [],
  focus,
  rights: [],
})

/**
 * Constructs from the given parts
 */
export const make = <A>(
  lefts: ReadonlyArray<A>,
  focus: A,
  rights: ReadonlyArray<A>,
): ReadonlyArrayZipper<A> => ({ lefts, focus, rights })

/**
 * Constructs from the given ReadonlyArray. The first item in the array will be the focus. If the array is empty, none is returned.
 */
export const fromReadonlyArray = <A>(
  ra: ReadonlyArray<A>,
): O.Option<ReadonlyArrayZipper<A>> =>
  pipe(
    RAExt.headAndTailS(ra),
    O.map(({ head, tail }) => ({ lefts: [], focus: head, rights: tail })),
  )

/**
 * Constructs from the given ReadonlyNonEmptyArray. The head will be the focus and the tail the rights.
 */
export const fromReadonlyNonEmptyArray = <A>(
  rnea: RNEA.ReadonlyNonEmptyArray<A>,
): ReadonlyArrayZipper<A> => make([], RNEA.head(rnea), RNEA.tail(rnea))

/**
 * Dumps the data structure into flattened array with each item flagged with whether it was focused
 */
export const toReadonlyArrayWithFocusFlag = <A>(
  raz: ReadonlyArrayZipper<A>,
): ReadonlyArray<{ value: A; isFocus: boolean }> =>
  raz.lefts
    .map(value => ({ value, isFocus: false }))
    .concat({ value: raz.focus, isFocus: true })
    .concat(raz.rights.map(value => ({ value, isFocus: false })))

/**
 * Dumps the collection into a flattened array
 */
export const toReadonlyArray = <A>(
  raz: ReadonlyArrayZipper<A>,
): ReadonlyArray<A> => raz.lefts.concat(raz.focus).concat(raz.rights)

/**
 * Gets the length of the array
 */
export const length = <A>(raz: ReadonlyArrayZipper<A>): number =>
  raz.lefts.length + 1 + raz.rights.length

/**
 * Moves the focus one item to the left. If the focus is at the left-most item, none is returned.
 */
export const moveLeft = <A>(
  raz: ReadonlyArrayZipper<A>,
): O.Option<ReadonlyArrayZipper<A>> =>
  pipe(
    RAExt.initAndLastT(raz.lefts),
    O.map(([leftInit, leftLast]) => ({
      lefts: leftInit,
      focus: leftLast,
      rights: [raz.focus].concat(raz.rights),
    })),
  )

/**
 * Moves the focus one item to the left. If the focus is at the left-most item, the array is returned unchanged.
 */
export const moveLeftWithClamp = <A>(
  raz: ReadonlyArrayZipper<A>,
): ReadonlyArrayZipper<A> =>
  pipe(
    moveLeft(raz),
    O.getOrElse(() => raz),
  )

/**
 * Moves the focus one item to the right. If the focus is at the right-most item, none is returned.
 */
export const moveRight = <A>(
  raz: ReadonlyArrayZipper<A>,
): O.Option<ReadonlyArrayZipper<A>> =>
  pipe(
    RAExt.headAndTailT(raz.rights),
    O.map(([rightHead, rightTail]) => ({
      lefts: raz.lefts.concat(raz.focus),
      focus: rightHead,
      rights: rightTail,
    })),
  )

/**
 * Moves the focus one item to the right. If the focus is at the right-most item, the array is returned unchanged.
 */
export const moveRightWithClamp = <A>(
  raz: ReadonlyArrayZipper<A>,
): ReadonlyArrayZipper<A> =>
  pipe(
    moveRight(raz),
    O.getOrElse(() => raz),
  )

/**
 * Overwrites the focus with the given value
 */
export const setFocus = <A>(newFocus: A) => (
  raz: ReadonlyArrayZipper<A>,
): ReadonlyArrayZipper<A> => ({
  lefts: raz.lefts,
  focus: newFocus,
  rights: raz.rights,
})

/**
 * Modifies the focus with the given function.
 */
export const modifyFocus = <A>(f: (a: A) => A) => (
  raz: ReadonlyArrayZipper<A>,
): ReadonlyArrayZipper<A> => ({
  lefts: raz.lefts,
  focus: f(raz.focus),
  rights: raz.rights,
})

/**
 * Attempts to find the given value by checking just the focus. If the focus matches the given item,
 * the RAZ is returned wrapped in a some.
 */
export const findInFocus = <A>(eq: Eq.Eq<A>) => (item: A) => (
  raz: ReadonlyArrayZipper<A>,
): O.Option<ReadonlyArrayZipper<A>> =>
  eq.equals(raz.focus, item) ? O.some(raz) : O.none

/**
 * Attempts to find the given value by checking just the values to the left of the focus.
 * If found, a new array is returned focused on the given item.
 */
export const findInLefts = <A>(eq: Eq.Eq<A>) => (item: A) => (
  raz: ReadonlyArrayZipper<A>,
): O.Option<ReadonlyArrayZipper<A>> =>
  pipe(
    moveLeft(raz),
    O.chain(razNext =>
      pipe(
        findInFocus(eq)(item)(razNext),
        O.alt(() => findInLefts(eq)(item)(razNext)), // TODO: not tail recursive
      ),
    ),
  )

/**
 * Attempts to find the given value by checking just the values to the right of the focus.
 * If found, a new array is returned focused on the given item.
 */
export const findInRights = <A>(eq: Eq.Eq<A>) => (item: A) => (
  raz: ReadonlyArrayZipper<A>,
): O.Option<ReadonlyArrayZipper<A>> =>
  pipe(
    moveRight(raz),
    O.chain(razNext =>
      pipe(
        findInFocus(eq)(item)(razNext),
        O.alt(() => findInRights(eq)(item)(razNext)), // TODO: not tail recursive
      ),
    ),
  )

/**
 * Attempts to find the given value by checking the focus, the values to the left of the focus and the values to the right of the focus.
 * If found, a new array is returned focused on the given item.
 */
export const find = <A>(eq: Eq.Eq<A>) => (item: A) => (
  raz: ReadonlyArrayZipper<A>,
): O.Option<ReadonlyArrayZipper<A>> =>
  pipe(
    findInFocus(eq)(item)(raz),
    O.alt(() => findInLefts(eq)(item)(raz)),
    O.alt(() => findInRights(eq)(item)(raz)),
  )

/**
 * Attempts to find the given value by checking the focus, the values to the left of the focus and the values to the right of the focus.
 * If found, a new array is returned focused on the given item.
 * If not found, the input array is returned unchanged.
 */
export const findOrKeep = <A>(eq: Eq.Eq<A>) => (item: A) => (
  raz: ReadonlyArrayZipper<A>,
): ReadonlyArrayZipper<A> =>
  pipe(
    find(eq)(item)(raz),
    O.getOrElse(() => raz),
  )

/**
 * Maps a function over the collection
 */
export const map_: Functor1<URI>['map'] = (raz, f) => ({
  lefts: raz.lefts.map(f),
  focus: f(raz.focus),
  rights: raz.rights.map(f),
})

/**
 * Maps a function (with index) over the collection
 */
export const mapWithIndex_: FunctorWithIndex1<URI, number>['mapWithIndex'] = <
  A,
  B
>(
  raz: ReadonlyArrayZipper<A>,
  f: (index: number, a: A) => B,
): ReadonlyArrayZipper<B> =>
  make(
    raz.lefts.map((value, index) => f(index, value)),
    f(raz.lefts.length, raz.focus),
    raz.rights.map((value, index) => f(raz.lefts.length + 1 + index, value)),
  )

/**
 * Applies a wrapped function to a collection
 */
export const ap_: Apply1<URI>['ap'] = (fab, fa) => ({
  lefts: RA.readonlyArray.ap(fab.lefts, fa.lefts),
  focus: fab.focus(fa.focus),
  rights: RA.readonlyArray.ap(fab.rights, fa.rights),
})

export const extend_: Extend1<URI>['extend'] = (fa, f) => {
  const lefts = fa.lefts.map((a, i) =>
    f(
      make(
        pipe(fa.lefts, RA.takeLeft(i)),
        a,
        RA.snoc(pipe(fa.lefts, RA.dropLeft(i + 1)), fa.focus).concat(fa.rights),
      ),
    ),
  )
  const rights = fa.rights.map((a, i) =>
    f(
      make(
        RA.snoc(fa.lefts, fa.focus).concat(pipe(fa.rights, RA.takeLeft(i))),
        a,
        pipe(fa.rights, RA.dropLeft(i + 1)),
      ),
    ),
  )
  return make(lefts, f(fa), rights)
}

const reduce_: Foldable1<URI>['reduce'] = (fa, b, f) =>
  fa.rights.reduce(f, f(fa.lefts.reduce(f, b), fa.focus))

const reduceRight_: Foldable1<URI>['reduceRight'] = (fa, b, f) => {
  const rights = fa.rights.reduceRight((acc, a) => f(a, acc), b)
  const focus = f(fa.focus, rights)
  return fa.lefts.reduceRight((acc, a) => f(a, acc), focus)
}

const foldMap_: Foldable1<URI>['foldMap'] = M => (fa, f) => {
  const lefts = fa.lefts.reduce((acc, a) => M.concat(acc, f(a)), M.empty)
  const rights = fa.rights.reduce((acc, a) => M.concat(acc, f(a)), M.empty)
  return M.concat(M.concat(lefts, f(fa.focus)), rights)
}

const traverse_ = <F>(
  F: ApplicativeHKT<F>,
): (<A, B>(
  ta: ReadonlyArrayZipper<A>,
  f: (a: A) => HKT<F, B>,
) => HKT<F, ReadonlyArrayZipper<B>>) => {
  const traverseF = RA.readonlyArray.traverse(F)
  return <A, B>(ta: ReadonlyArrayZipper<A>, f: (a: A) => HKT<F, B>) =>
    F.ap(
      F.ap(
        F.map(
          traverseF(ta.lefts, f),
          lefts => (focus: B) => (rights: ReadonlyArray<B>) =>
            make(lefts, focus, rights),
        ),
        f(ta.focus),
      ),
      traverseF(ta.rights, f),
    )
}

export const map = <A, B>(f: (a: A) => B) => (
  raz: ReadonlyArrayZipper<A>,
): ReadonlyArrayZipper<B> => map_(raz, f)

export const mapWithIndex = <A, B>(f: (index: number, a: A) => B) => (
  raz: ReadonlyArrayZipper<A>,
): ReadonlyArrayZipper<B> => mapWithIndex_(raz, f)

export const ap = <A, B>(fa: ReadonlyArrayZipper<A>) => (
  fab: ReadonlyArrayZipper<(a: A) => B>,
): ReadonlyArrayZipper<B> => ap_(fab, fa)

export const apFirst = <B>(fb: ReadonlyArrayZipper<B>) => <A>(
  fa: ReadonlyArrayZipper<A>,
): ReadonlyArrayZipper<A> =>
  pipe(
    fa,
    map(a => (_: B) => a),
    ap(fb),
  )

export const apSecond = <B>(fb: ReadonlyArrayZipper<B>) => <A>(
  fa: ReadonlyArrayZipper<A>,
): ReadonlyArrayZipper<B> =>
  pipe(
    fa,
    map(_a => (b: B) => b),
    ap(fb),
  )

export const extend: <A, B>(
  f: (fa: ReadonlyArrayZipper<A>) => B,
) => (wa: ReadonlyArrayZipper<A>) => ReadonlyArrayZipper<B> = f => wa =>
  extend_(wa, f)

export const duplicate: <A>(
  wa: ReadonlyArrayZipper<A>,
) => ReadonlyArrayZipper<ReadonlyArrayZipper<A>> = extend(identity)

export const foldMap: <M>(
  M: Mn.Monoid<M>,
) => <A>(f: (a: A) => M) => (fa: ReadonlyArrayZipper<A>) => M = M => f => fa =>
  foldMap_(M)(fa, f)

export const reduce: <A, B>(
  b: B,
  f: (b: B, a: A) => B,
) => (fa: ReadonlyArrayZipper<A>) => B = (b, f) => fa => reduce_(fa, b, f)

export const reduceRight: <A, B>(
  b: B,
  f: (a: A, b: B) => B,
) => (fa: ReadonlyArrayZipper<A>) => B = (b, f) => fa => reduceRight_(fa, b, f)

export const sequence: Traversable1<URI>['sequence'] = <F>(
  F: ApplicativeHKT<F>,
): (<A>(
  ta: ReadonlyArrayZipper<HKT<F, A>>,
) => HKT<F, ReadonlyArrayZipper<A>>) => {
  const sequenceF = RA.readonlyArray.sequence(F)
  return <A>(ta: ReadonlyArrayZipper<HKT<F, A>>) =>
    F.ap(
      F.ap(
        F.map(
          sequenceF(ta.lefts),
          lefts => (focus: A) => (rights: ReadonlyArray<A>) =>
            make(lefts, focus, rights),
        ),
        ta.focus,
      ),
      sequenceF(ta.rights),
    )
}

export const extract: Comonad1<URI>['extract'] = fa => fa.focus

export const URI = 'ReadonlyArrayZipper'

export type URI = typeof URI

declare module 'fp-ts/lib/HKT' {
  interface URItoKind<A> {
    ReadonlyArrayZipper: ReadonlyArrayZipper<A>
  }
}

export const getShow: <A>(
  showA: Show.Show<A>,
) => Show.Show<ReadonlyArrayZipper<A>> = showA => {
  const showRA = RA.getShow(showA)
  return {
    show: raz =>
      `ReadonlyArrayZipper(${showRA.show(raz.lefts)}, ${showA.show(
        raz.focus,
      )}, ${showRA.show(raz.rights)})`,
  }
}

export const getEq = <A>(eqA: Eq.Eq<A>): Eq.Eq<ReadonlyArrayZipper<A>> => {
  const eqRA = RA.getEq(eqA)
  return {
    equals: (a, b) =>
      eqRA.equals(a.lefts, b.lefts) &&
      eqA.equals(a.focus, b.focus) &&
      eqRA.equals(a.rights, b.rights),
  }
}

export const getSemigroup = <A>(
  semigroupA: Sg.Semigroup<A>,
): Sg.Semigroup<ReadonlyArrayZipper<A>> => {
  return {
    concat: (a, b) =>
      make(
        a.lefts.concat(b.lefts),
        semigroupA.concat(a.focus, b.focus),
        a.rights.concat(b.rights),
      ),
  }
}

export const getMonoid = <A>(
  monoidA: Mn.Monoid<A>,
): Mn.Monoid<ReadonlyArrayZipper<A>> => {
  return {
    ...getSemigroup(monoidA),
    empty: make(RA.empty, monoidA.empty, RA.empty),
  }
}

export const Functor: Functor1<URI> = {
  URI,
  map: map_,
}

export const FunctorWithIndex: FunctorWithIndex1<URI, number> = {
  ...Functor,
  mapWithIndex: mapWithIndex_,
}

export const Apply: Apply1<URI> = {
  ...Functor,
  ap: ap_,
}

export const Applicative: Applicative1<URI> = {
  ...Apply,
  of,
}

export const Foldable: Foldable1<URI> = {
  URI,
  foldMap: foldMap_,
  reduce: reduce_,
  reduceRight: reduceRight_,
}

export const Traversable: Traversable1<URI> = {
  ...Functor,
  ...Foldable,
  traverse: traverse_,
  sequence,
}

export const Comonad: Comonad1<URI> = {
  ...Functor,
  extend: extend_,
  extract,
}

export const readonlyArrayZipper: Applicative1<URI> &
  Foldable1<URI> &
  Traversable1<URI> &
  Comonad1<URI> &
  FunctorWithIndex1<URI, number> = {
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
  mapWithIndex: mapWithIndex_,
}
