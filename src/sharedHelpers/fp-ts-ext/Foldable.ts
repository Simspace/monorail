import { HKT, Kind, Kind2, URIS, URIS2, URIS3, Kind3 } from 'fp-ts/lib/HKT'
import { Predicate, identity } from 'fp-ts/lib/function'
import { Foldable, Foldable1, Foldable2, traverse_ } from 'fp-ts/lib/Foldable'
import { monoidAll, monoidAny, monoidSum } from 'fp-ts/lib/Monoid'
import {
  Applicative3,
  Applicative2,
  Applicative2C,
  Applicative1,
  Applicative,
} from 'fp-ts/lib/Applicative'

/**
 * `and` returns the _conjunction_ of all the `boolean` values in a data
 * structure. This function will test whether all of the values in a data
 * structure are `true`.
 *
 * @param F Foldable instance
 * @param bs A foldable container of one or more `boolean`s
 *
 * @example
 * and(remoteData)(initial)          //-> true
 * and(remoteData)(pending)          //-> true
 * and(remoteData)(failure("Oops!")) //-> true
 * and(remoteData)(failure(true))    //-> true
 * and(remoteData)(success(false))   //-> false
 * and(remoteData)(success(true))    //-> true
 *
 * and(option)(none)        //-> true
 * and(option)(some(false)) //-> false
 * and(option)(some(true))  //-> true
 *
 * and(array)([false,false,false]) //-> false
 * and(array)([true,false,false])  //-> false
 * and(array)([])                  //-> true
 * and(array)([true])              //-> true
 */
export function and<F extends URIS2>(
  F: Foldable2<F>,
): <E>(bs: Kind2<F, E, boolean>) => boolean

export function and<F extends URIS>(
  F: Foldable1<F>,
): (bs: Kind<F, boolean>) => boolean

export function and<F>(F: Foldable<F>): (bs: HKT<F, boolean>) => boolean {
  return bs => F.foldMap(monoidAll)(bs, identity)
}

/**
 * `or` returns the _disjunction_ of a data structure containing one or more
 * `boolean`s. This function will test whether any of the values in a data
 * structure is `true`.
 *
 * @param F Foldable instance
 * @param bs A foldable container of one or more `boolean`s
 *
 * @example
 * or(remoteData)(initial)          //-> false
 * or(remoteData)(pending)          //-> false
 * or(remoteData)(failure("Oops!")) //-> false
 * or(remoteData)(failure(true))    //-> false
 * or(remoteData)(success(false))   //-> false
 * or(remoteData)(success(true))    //-> true
 *
 * or(option)(none)        //-> false
 * or(option)(some(false)) //-> false
 * or(option)(some(true))  //-> true
 *
 * or(array)([false,false,false]) //-> false
 * or(array)([true,false,false])  //-> true
 * or(array)([])                  //-> false
 * or(array)([true])              //-> true
 */
export function or<F extends URIS2>(
  F: Foldable2<F>,
): <E>(bs: Kind2<F, E, boolean>) => boolean

export function or<F extends URIS>(
  F: Foldable1<F>,
): (bs: Kind<F, boolean>) => boolean

export function or<F>(F: Foldable<F>): (bs: HKT<F, boolean>) => boolean {
  return bs => F.foldMap(monoidAny)(bs, identity)
}

/**
 * Tests whether _all_ elements of a data structure satisfy a predicate.
 *
 * @param F Foldable instance
 * @param pred Predicate on type `A`
 * @param as A foldable container of one or more values of type `A`
 *
 */
export function all<F extends URIS2>(
  F: Foldable2<F>,
): <E, A>(pred: Predicate<A>, as: Kind2<F, E, A>) => boolean

export function all<F extends URIS>(
  F: Foldable1<F>,
): <A>(pred: Predicate<A>, as: Kind<F, A>) => boolean

export function all<F>(
  F: Foldable<F>,
): <A>(pred: Predicate<A>, as: HKT<F, A>) => boolean {
  return (pred, as) => F.foldMap(monoidAll)(as, pred)
}

/**
 * Tests whether _any_ element of a data structure satisfies a predicate.
 *
 * @param F Foldable instance
 * @param pred Predicate on type `A`
 * @param as A foldable container of one or more values of type `A`
 *
 */
export function any<F extends URIS2>(
  F: Foldable2<F>,
): <E, A>(pred: Predicate<A>, as: Kind2<F, E, A>) => boolean

export function any<F extends URIS>(
  F: Foldable1<F>,
): <A>(pred: Predicate<A>, as: Kind<F, A>) => boolean

export function any<F>(
  F: Foldable<F>,
): <A>(pred: Predicate<A>, as: HKT<F, A>) => boolean {
  return (pred, as) => F.foldMap(monoidAny)(as, pred)
}

/**
 * Counts the number of items that match a predicate in the provided foldable
 * @param F the Foldable instance
 * @param pred Predicate on type `A`
 * @param as A foldable container of one or more values of type `A`
 */
export function count<F extends URIS2>(
  F: Foldable2<F>,
): <E, A>(pred: Predicate<A>) => (as: Kind2<F, E, A>) => number

export function count<F extends URIS>(
  F: Foldable1<F>,
): <A>(pred: Predicate<A>) => (as: Kind<F, A>) => number

export function count<F>(
  F: Foldable<F>,
): <A>(pred: Predicate<A>) => (as: HKT<F, A>) => number {
  return pred => as => F.foldMap(monoidSum)(as, x => (pred(x) ? 1 : 0))
}

/**
/**
 * Sequence a data structure, performing some effects encoded by an `Applicative` functor at each value, ignoring the
 * final result.
 *
 * @since 2.0.0
 */
export function sequence_<M extends URIS3, F extends URIS>(
  M: Applicative3<M>,
  F: Foldable1<F>,
): <R, E, A>(fa: Kind<F, Kind3<M, R, E, A>>) => Kind3<M, R, E, void>
export function sequence_<M extends URIS2, F extends URIS>(
  M: Applicative2<M>,
  F: Foldable1<F>,
): <E, A>(fa: Kind<F, Kind2<M, E, A>>) => Kind2<M, E, void>
export function sequence_<M extends URIS2, F extends URIS, E>(
  M: Applicative2C<M, E>,
  F: Foldable1<F>,
): <A>(fa: Kind<F, Kind2<M, E, A>>) => Kind2<M, E, void>
export function sequence_<M extends URIS, F extends URIS>(
  M: Applicative1<M>,
  F: Foldable1<F>,
): <A>(fa: Kind<F, Kind<M, A>>) => Kind<M, void>
export function sequence_<M, F>(
  M: Applicative<M>,
  F: Foldable<F>,
): <A>(fa: HKT<F, HKT<M, A>>) => HKT<M, void>
export function sequence_<M, F>(
  M: Applicative<M>,
  F: Foldable<F>,
): <A>(fa: HKT<F, HKT<M, A>>) => HKT<M, void> {
  return fa => traverse_(M, F)(fa, identity)
}
