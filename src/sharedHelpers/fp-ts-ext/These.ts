import { ModifyF, Prism, Traversal } from 'monocle-ts'
import * as Apl from 'fp-ts/lib/Applicative'
import { HKT } from 'fp-ts/lib/HKT'
import * as O from 'fp-ts/lib/Option'
import * as Th from 'fp-ts/lib/These'

export * from 'fp-ts/lib/These'

/**
 * A Prism to select the Left constructor of a These
 */
export const getLeftPrism = <E, A>(): Prism<Th.These<E, A>, E> =>
  new Prism(
    Th.fold<E, A, O.Option<E>>(
      O.some,
      _a => O.none,
      (_e, _a) => O.none,
    ),
    e => Th.left<E, A>(e),
  )

/**
 * A Prism to select the Right constructor of a These
 */
export const getRightPrism = <E, A>(): Prism<Th.These<E, A>, A> =>
  new Prism(
    Th.fold<E, A, O.Option<A>>(
      _e => O.none,
      O.some,
      (_e, _a) => O.none,
    ),
    a => Th.right<E, A>(a),
  )

/**
 * A Prism to select the Both constructor of a These
 */
export const getBothPrism = <E, A>(): Prism<Th.These<E, A>, [E, A]> =>
  new Prism(
    Th.fold<E, A, O.Option<[E, A]>>(
      _e => O.none,
      _a => O.none,
      (e, a) => O.some([e, a]),
    ),
    ([e, a]) => Th.both<E, A>(e, a),
  )

/**
 * A ModifyF function for the E value of a These (including Left and Both)
 *
 * This allows you to apply an effectful function to modify an E value, whether it's in the Left or Both E slot
 */
export const getEModifyF = <E, A>(): ModifyF<Th.These<E, A>, E> => <F>(
  F_: Apl.Applicative<F>,
) => (f: (e: E) => HKT<F, E>) => (
  these: Th.These<E, A>,
): HKT<F, Th.These<E, A>> =>
  Th.fold<E, A, HKT<F, Th.These<E, A>>>(
    e => F_.map(f(e), Th.left),
    _a => F_.of(these),
    (e, a) => F_.map(f(e), e2 => Th.both(e2, a)),
  )(these)

/**
 * Traversal for the E value of a These (including Left and Both)
 *
 * This is an optic for "traversing" the E value of a These<E, A>, whether it's in the Left or Both slot.
 */
export const getETraversal = <E, A>(): Traversal<Th.These<E, A>, E> =>
  new Traversal(getEModifyF<E, A>())

/**
 * A ModifyF function for the A value of a These (including Right and Both)
 *
 * This allows you to apply an effectful function to modify an A value, whether it's in the Right or Both A slot
 */
export const getAModifyF = <E, A>(): ModifyF<Th.These<E, A>, A> => <F>(
  F_: Apl.Applicative<F>,
) => (f: (a: A) => HKT<F, A>) => (
  these: Th.These<E, A>,
): HKT<F, Th.These<E, A>> =>
  Th.fold<E, A, HKT<F, Th.These<E, A>>>(
    _e => F_.of(these),
    a => F_.map(f(a), Th.right),
    (e, a) => F_.map(f(a), a2 => Th.both(e, a2)),
  )(these)

/**
 * Traversal for the A value of a These (including Right and Both)
 *
 * This is an optic for "traversing" the A value of a These<E, A>, whether it's in the Right or Both slot.
 */
export const getATraversal = <E, A>(): Traversal<Th.These<E, A>, A> =>
  new Traversal(getAModifyF<E, A>())
