import { Alt3, Alt3C } from 'fp-ts/lib/Alt'
import { Applicative3, Applicative3C } from 'fp-ts/lib/Applicative'
import { Apply1 } from 'fp-ts/lib/Apply'
import { Bifunctor3 } from 'fp-ts/lib/Bifunctor'
import * as E from 'fp-ts/lib/Either'
import {
  flow,
  identity,
  Lazy,
  pipe,
  Predicate,
  Refinement,
  unsafeCoerce,
} from 'fp-ts/lib/function'
import { Functor3 } from 'fp-ts/lib/Functor'
import * as I from 'fp-ts/lib/IO'
import * as IE from 'fp-ts/lib/IOEither'
import { Monad3, Monad3C } from 'fp-ts/lib/Monad'
import { MonadIO3, MonadIO3C } from 'fp-ts/lib/MonadIO'
import { MonadThrow3, MonadThrow3C } from 'fp-ts/lib/MonadThrow'
import { Monoid } from 'fp-ts/lib/Monoid'
import { Option } from 'fp-ts/lib/Option'
import * as R from 'fp-ts/lib/Reader'
import * as RE from 'fp-ts/lib/ReaderEither'
import * as S from 'fp-ts/lib/Semigroup'
import * as RI from 'fp-ts-contrib/lib/ReaderIO'

import {
  EmptyEnv,
  Subtract,
} from '@monorail/sharedHelpers/fp-ts-ext/effectsUtils'
import { noOpIO } from '@monorail/sharedHelpers/fp-ts-ext/IO'

// -------------------------------------------------------------------------------------
// model
// -------------------------------------------------------------------------------------

/* eslint-disable @typescript-eslint/prefer-function-type */
export interface ReaderIOEither<R, E, A> {
  (r: R): IE.IOEither<E, A>
}
/* eslint-enable @typescript-eslint/prefer-function-type */

// -------------------------------------------------------------------------------------
// internal utilities
// -------------------------------------------------------------------------------------

/* eslint-disable @typescript-eslint/no-explicit-any */
type SafeAny = any
/* eslint-enable @typescript-eslint/no-explicit-any */

/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable prefer-object-spread */
export const bind_ = <A, N extends string, B>(
  a: A,
  name: Exclude<N, keyof A>,
  b: B,
): { [K in keyof A | N]: K extends keyof A ? A[K] : B } =>
  Object.assign({}, a, { [name]: b }) as SafeAny

/**
 * @internal
 */
export const bindTo_ = <N extends string>(name: N) => <B>(
  b: B,
): { [K in N]: B } => ({ [name]: b } as SafeAny)
/* eslint-enable prefer-object-spread */
/* eslint-enable @typescript-eslint/no-unsafe-return */

// -------------------------------------------------------------------------------------
// constructors
// -------------------------------------------------------------------------------------

/**
 * @category constructors
 */
export const fromIOEither: <R, E, A>(
  ma: IE.IOEither<E, A>,
) => ReaderIOEither<R, E, A> = R.of

/**
 * @category constructors
 */
export const left: <R, E = never, A = never>(
  e: E,
) => ReaderIOEither<R, E, A> = flow(IE.left, fromIOEither)

/**
 * @category constructors
 */
export const right: <R, E = never, A = never>(
  a: A,
) => ReaderIOEither<R, E, A> = flow(IE.right, fromIOEither)

/**
 * @category constructors
 */
export const rightIO: <R, E = never, A = never>(
  ma: I.IO<A>,
) => ReaderIOEither<R, E, A> = flow(IE.rightIO, fromIOEither)

/**
 * @category constructors
 */
export const leftIO: <R, E = never, A = never>(
  me: I.IO<E>,
) => ReaderIOEither<R, E, A> = flow(IE.leftIO, fromIOEither)

/**
 * @category constructors
 */
export const rightReader: <R, E = never, A = never>(
  ma: R.Reader<R, A>,
) => ReaderIOEither<R, E, A> = ma => flow(ma, IE.right)

/**
 * @category constructors
 */
export const leftReader: <R, E = never, A = never>(
  me: R.Reader<R, E>,
) => ReaderIOEither<R, E, A> = me => flow(me, IE.left)

/**
 * @category constructors
 */
export const rightReaderIO: <R, E = never, A = never>(
  ma: RI.ReaderIO<R, A>,
) => ReaderIOEither<R, E, A> = ma => flow(ma, IE.rightIO)

/**
 * @category constructors
 */
export const leftReaderIO: <R, E = never, A = never>(
  me: RI.ReaderIO<R, E>,
) => ReaderIOEither<R, E, A> = me => flow(me, IE.leftIO)

/**
 * @category constructors
 */
export const fromReaderEither = <R, E, A>(
  ma: RE.ReaderEither<R, E, A>,
): ReaderIOEither<R, E, A> => flow(ma, IE.fromEither)

/**
 * @category constructors
 */
export const ask: <R, E = never>() => ReaderIOEither<R, E, R> = () => IE.right

/**
 * @category constructors
 */
export const asks: <R, E = never, A = never>(
  f: (r: R) => A,
) => ReaderIOEither<R, E, A> = f => flow(IE.right, IE.map(f))

/**
 * Derivable from `MonadThrow`.
 *
 * @category constructors
 */
export const fromEither: <R, E, A>(
  ma: E.Either<E, A>,
) => ReaderIOEither<R, E, A> = E.fold(left, a => right(a))

/**
 * Derivable from `MonadThrow`.
 *
 * @category constructors
 */
export const fromOption: <E>(
  onNone: Lazy<E>,
) => <R, A>(ma: Option<A>) => ReaderIOEither<R, E, A> = onNone => ma =>
  ma._tag === 'None' ? left(onNone()) : right(ma.value)

/**
 * Derivable from `MonadThrow`.
 *
 * @category constructors
 */
export const fromPredicate: {
  <E, A, B extends A>(refinement: Refinement<A, B>, onFalse: (a: A) => E): <U>(
    a: A,
  ) => ReaderIOEither<U, E, B>
  <E, A>(predicate: Predicate<A>, onFalse: (a: A) => E): <R>(
    a: A,
  ) => ReaderIOEither<R, E, A>
} = <E, A>(predicate: Predicate<A>, onFalse: (a: A) => E) => (a: A) =>
  predicate(a) ? right(a) : left(onFalse(a))

// -------------------------------------------------------------------------------------
// destructors
// -------------------------------------------------------------------------------------

/**
 * @category destructors
 */
export function fold<R, E, A, B>(
  onLeft: (e: E) => RI.ReaderIO<R, B>,
  onRight: (a: A) => RI.ReaderIO<R, B>,
): (ma: ReaderIOEither<R, E, A>) => RI.ReaderIO<R, B> {
  return ma => r =>
    pipe(
      ma(r),
      IE.fold(
        e => onLeft(e)(r),
        a => onRight(a)(r),
      ),
    )
}

/**
 * Less strict version of [`getOrElse`](#getOrElse).
 *
 * @category destructors
 */
export const getOrElseW = <R, E, B>(
  onLeft: (e: E) => RI.ReaderIO<R, B>,
): (<Q, A>(
  ma: ReaderIOEither<Q, E, A>,
) => RI.ReaderIO<Q & R, A | B>) => ma => r =>
  IE.getOrElseW((e: E) => onLeft(e)(r))(ma(r))

/**
 * @category destructors
 */
export const getOrElse: <R, E, A>(
  onLeft: (e: E) => RI.ReaderIO<R, A>,
) => (ma: ReaderIOEither<R, E, A>) => RI.ReaderIO<R, A> = getOrElseW

// -------------------------------------------------------------------------------------
// combinators
// -------------------------------------------------------------------------------------

/**
 * @category combinators
 */
export function orElse<R, E, A, M>(
  onLeft: (e: E) => ReaderIOEither<R, M, A>,
): (ma: ReaderIOEither<R, E, A>) => ReaderIOEither<R, M, A> {
  return ma => r => IE.orElse<E, A, M>(e => onLeft(e)(r))(ma(r))
}

/**
 * @category combinators
 */
export const swap = <R, E, A>(
  ma: ReaderIOEither<R, E, A>,
): ReaderIOEither<R, A, E> => flow(ma, IE.swap)

/**
 * @category combinators
 *
 * NOTE: The equivalent of this for ReaderTaskEither is being removed in fp-ts version 3.0.
 */
export const local: <Q, R>(
  f: (f: Q) => R,
) => <E, A>(ma: ReaderIOEither<R, E, A>) => ReaderIOEither<Q, E, A> = R.local

/**
 * Less strict version of [`filterOrElse`](#filterOrElse).
 *
 * @category combinators
 */
export const filterOrElseW: {
  <A, B extends A, E2>(refinement: Refinement<A, B>, onFalse: (a: A) => E2): <
    R,
    E1
  >(
    ma: ReaderIOEither<R, E1, A>,
  ) => ReaderIOEither<R, E1 | E2, B>
  <A, E2>(predicate: Predicate<A>, onFalse: (a: A) => E2): <R, E1>(
    ma: ReaderIOEither<R, E1, A>,
  ) => ReaderIOEither<R, E1 | E2, A>
} = <A, E2>(
  predicate: Predicate<A>,
  onFalse: (a: A) => E2,
): (<R, E1>(ma: ReaderIOEither<R, E1, A>) => ReaderIOEither<R, E1 | E2, A>) =>
  chainW(a => (predicate(a) ? right(a) : left(onFalse(a))))

/**
 * Derivable from `MonadThrow`.
 *
 * @category combinators
 */
export const filterOrElse: {
  <E, A, B extends A>(refinement: Refinement<A, B>, onFalse: (a: A) => E): <R>(
    ma: ReaderIOEither<R, E, A>,
  ) => ReaderIOEither<R, E, B>
  <E, A>(predicate: Predicate<A>, onFalse: (a: A) => E): <R>(
    ma: ReaderIOEither<R, E, A>,
  ) => ReaderIOEither<R, E, A>
} = filterOrElseW

/**
 * @category combinators
 */
export function fromEitherK<E, A extends ReadonlyArray<unknown>, B>(
  f: (...a: A) => E.Either<E, B>,
): <R>(...a: A) => ReaderIOEither<R, E, B> {
  return (...a) => fromEither(f(...a))
}

/**
 * Less strict version of [`chainEitherK`](#chainEitherK).
 *
 * @category combinators
 */
export const chainEitherKW: <E, A, B>(
  f: (a: A) => E.Either<E, B>,
) => <R, D>(ma: ReaderIOEither<R, D, A>) => ReaderIOEither<R, D | E, B> = f =>
  chainW(fromEitherK(f))

/**
 * @category combinators
 */
export const chainEitherK: <E, A, B>(
  f: (a: A) => E.Either<E, B>,
) => <R>(ma: ReaderIOEither<R, E, A>) => ReaderIOEither<R, E, B> = chainEitherKW

/**
 * @category combinators
 */
export function fromIOEitherK<E, A extends ReadonlyArray<unknown>, B>(
  f: (...a: A) => IE.IOEither<E, B>,
): <R>(...a: A) => ReaderIOEither<R, E, B> {
  return (...a) => fromIOEither(f(...a))
}

/**
 * Less strict version of [`chainIOEitherK`](#chainIOEitherK).
 *
 * @category combinators
 */
export const chainIOEitherKW: <E, A, B>(
  f: (a: A) => IE.IOEither<E, B>,
) => <R, D>(ma: ReaderIOEither<R, D, A>) => ReaderIOEither<R, D | E, B> = f =>
  chainW(fromIOEitherK(f))

/**
 * @category combinators
 */
export const chainIOEitherK: <E, A, B>(
  f: (a: A) => IE.IOEither<E, B>,
) => <R>(
  ma: ReaderIOEither<R, E, A>,
) => ReaderIOEither<R, E, B> = chainIOEitherKW

// -------------------------------------------------------------------------------------
// non-pipeables
// -------------------------------------------------------------------------------------

const map_: Monad3<URI>['map'] = (fa, f) => pipe(fa, map(f))
const apPar_: Monad3<URI>['ap'] = (fab, fa) => pipe(fab, ap(fa))
const apSeq_: Monad3<URI>['ap'] = (fab, fa) =>
  pipe(
    fab,
    chain(f => pipe(fa, map(f))),
  )
const chain_: Monad3<URI>['chain'] = (ma, f) => pipe(ma, chain(f))
const alt_: Alt3<URI>['alt'] = (fa, that) => pipe(fa, alt(that))
const bimap_: Bifunctor3<URI>['bimap'] = (fa, f, g) => pipe(fa, bimap(f, g))
const mapLeft_: Bifunctor3<URI>['mapLeft'] = (fa, f) => pipe(fa, mapLeft(f))

// -------------------------------------------------------------------------------------
// pipeables
// -------------------------------------------------------------------------------------

export const map: <A, B>(
  f: (a: A) => B,
) => <R, E>(fa: ReaderIOEither<R, E, A>) => ReaderIOEither<R, E, B> = f => fa =>
  flow(fa, IE.map(f))

/**
 * Map a pair of functions over the two last type arguments of the bifunctor.
 *
 * @category Bifunctor
 */
export const bimap: <E, G, A, B>(
  f: (e: E) => G,
  g: (a: A) => B,
) => <R>(fa: ReaderIOEither<R, E, A>) => ReaderIOEither<R, G, B> = (
  f,
  g,
) => fa => r => pipe(fa(r), IE.bimap(f, g))

/**
 * Map a function over the second type argument of a bifunctor.
 *
 * @category Bifunctor
 */
export const mapLeft: <E, G>(
  f: (e: E) => G,
) => <R, A>(
  fa: ReaderIOEither<R, E, A>,
) => ReaderIOEither<R, G, A> = f => fa => r => pipe(fa(r), IE.mapLeft(f))

/**
 * Less strict version of [`ap`](#ap).
 *
 * @category Apply
 */
export const apW = <Q, D, A>(fa: ReaderIOEither<Q, D, A>) => <R, E, B>(
  fab: ReaderIOEither<R, E, (a: A) => B>,
): ReaderIOEither<Q & R, D | E, B> => r => pipe(fab(r), IE.apW(fa(r)))

/**
 * Apply a function to an argument under a type constructor.
 *
 * @category Apply
 */
export const ap: <R, E, A>(
  fa: ReaderIOEither<R, E, A>,
) => <B>(
  fab: ReaderIOEither<R, E, (a: A) => B>,
) => ReaderIOEither<R, E, B> = apW

/**
 * Combine two effectful actions, keeping only the result of the first.
 *
 * Derivable from `Apply`.
 *
 * @category combinators
 */
export const apFirst: <R, E, B>(
  fb: ReaderIOEither<R, E, B>,
) => <A>(fa: ReaderIOEither<R, E, A>) => ReaderIOEither<R, E, A> = fb =>
  flow(
    map(a => () => a),
    ap(fb),
  )

/**
 * Combine two effectful actions, keeping only the result of the second.
 *
 * Derivable from `Apply`.
 *
 * @category combinators
 */
export const apSecond = <R, E, B>(
  fb: ReaderIOEither<R, E, B>,
): (<A>(fa: ReaderIOEither<R, E, A>) => ReaderIOEither<R, E, B>) =>
  flow(
    map(() => (b: B) => b),
    ap(fb),
  )

/**
 * Wrap a value into the type constructor.
 *
 * Equivalent to [`right`](#right).
 *
 * @category Applicative
 */
export const of: Applicative3<URI>['of'] = right

/**
 * Less strict version of [`chain`](#chain).
 *
 * @category Monad
 */
export const chainW: <R, E, A, B>(
  f: (a: A) => ReaderIOEither<R, E, B>,
) => <Q, D>(
  ma: ReaderIOEither<Q, D, A>,
) => ReaderIOEither<Q & R, D | E, B> = f => fa => r =>
  pipe(
    fa(r),
    IE.chainW(a => f(a)(r)),
  )

/**
 * Composes computations in sequence, using the return value of one computation to determine the next computation.
 *
 * @category Monad
 */
export const chain: <R, E, A, B>(
  f: (a: A) => ReaderIOEither<R, E, B>,
) => (ma: ReaderIOEither<R, E, A>) => ReaderIOEither<R, E, B> = chainW

/**
 * Less strict version of [`chainFirst`](#chainFirst).
 *
 * Derivable from `Monad`.
 *
 * @category combinators
 */
export const chainFirstW: <R, E, A, B>(
  f: (a: A) => ReaderIOEither<R, E, B>,
) => <Q, D>(
  ma: ReaderIOEither<Q, D, A>,
) => ReaderIOEither<Q & R, D | E, A> = f =>
  chainW(a =>
    pipe(
      f(a),
      map(() => a),
    ),
  )

/**
 * Composes computations in sequence, using the return value of one computation to determine the next computation and
 * keeping only the result of the first.
 *
 * Derivable from `Monad`.
 *
 * @category combinators
 */
export const chainFirst: <R, E, A, B>(
  f: (a: A) => ReaderIOEither<R, E, B>,
) => (ma: ReaderIOEither<R, E, A>) => ReaderIOEither<R, E, A> = chainFirstW

/**
 * Derivable from `Monad`.
 *
 * @category combinators
 */
export const flatten: <R, E, A>(
  mma: ReaderIOEither<R, E, ReaderIOEither<R, E, A>>,
) => ReaderIOEither<R, E, A> = chain(identity)

/**
 * Less strict version of [`alt`](#alt).
 *
 * @category Alt
 */
export const altW = <R2, E2, B>(that: () => ReaderIOEither<R2, E2, B>) => <
  R1,
  E1,
  A
>(
  fa: ReaderIOEither<R1, E1, A>,
): ReaderIOEither<R1 & R2, E1 | E2, A | B> => r =>
  pipe(
    fa(r),
    IE.altW(() => that()(r)),
  )

/**
 * Identifies an associative operation on a type constructor. It is similar to `Semigroup`, except that it applies to
 * types of kind `* -> *`.
 *
 * @category Alt
 */
export const alt: <R, E, A>(
  that: () => ReaderIOEither<R, E, A>,
) => (fa: ReaderIOEither<R, E, A>) => ReaderIOEither<R, E, A> = altW

/**
 * @category MonadIO
 */
export const fromIO: MonadIO3<URI>['fromIO'] = rightIO

/**
 * @category MonadThrow
 */
export const throwError: MonadThrow3<URI>['throwError'] = left

// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------

export const URI = 'ReaderIOEither'

export type URI = typeof URI

declare module 'fp-ts/lib/HKT' {
  interface URItoKind3<R, E, A> {
    readonly [URI]: ReaderIOEither<R, E, A>
  }
}

/**
 * Semigroup returning the left-most non-`Left` value. If both operands are `Right`s then the inner values are
 * concatenated using the provided `Semigroup`
 *
 * @category instances
 */
export function getSemigroup<R, E, A>(
  S: S.Semigroup<A>,
): S.Semigroup<ReaderIOEither<R, E, A>> {
  return R.getSemigroup(IE.getSemigroup(S))
}

/**
 * Semigroup returning the left-most `Left` value. If both operands are `Right`s then the inner values
 * are concatenated using the provided `Semigroup`
 *
 * @category instances
 */
export function getApplySemigroup<R, E, A>(
  S: S.Semigroup<A>,
): S.Semigroup<ReaderIOEither<R, E, A>> {
  return R.getSemigroup(IE.getApplySemigroup(S))
}

/**
 * @category instances
 */
export function getApplyMonoid<R, E, A>(
  M: Monoid<A>,
): Monoid<ReaderIOEither<R, E, A>> {
  return {
    concat: getApplySemigroup<R, E, A>(M).concat,
    empty: right(M.empty),
  }
}

/**
 * @category instances
 */
export function getApplicativeReaderIOValidation<E>(
  A: Apply1<I.URI>,
  SE: S.Semigroup<E>,
): Applicative3C<URI, E> {
  const AV = IE.getApplicativeIOValidation(SE)
  const ap = <EF, A>(
    fga: R.Reader<EF, IE.IOEither<E, A>>,
  ): (<B>(
    fgab: R.Reader<EF, IE.IOEither<E, (a: A) => B>>,
  ) => R.Reader<EF, IE.IOEither<E, B>>) =>
    flow(
      R.map(gab => (ga: IE.IOEither<E, A>) => AV.ap(gab, ga)),
      R.ap(fga),
    )
  return {
    URI,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    _E: undefined as SafeAny,
    map: map_,
    ap: (fab, fa) => pipe(fab, ap(fa)),
    of,
  }
}

/**
 * @category instances
 */
export function getAltReaderIOValidation<E>(SE: S.Semigroup<E>): Alt3C<URI, E> {
  const A = IE.getAltIOValidation(SE)
  return {
    URI,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    _E: undefined as SafeAny,
    map: map_,
    alt: (me, that) => r => A.alt(me(r), () => that()(r)),
  }
}

/**
 * @category instances
 *
 * NOTE: This is just for convenience. This style of exporting the full set of type class instances is being removed in fp-ts version 3.
 */
export function getReaderIOValidation<E>(
  SE: S.Semigroup<E>,
): Monad3C<URI, E> &
  Bifunctor3<URI> &
  Alt3C<URI, E> &
  MonadIO3C<URI, E> &
  MonadThrow3C<URI, E> {
  const applicativeReaderIOValidation = getApplicativeReaderIOValidation(
    I.Applicative,
    SE,
  )
  const altReaderIOValidation = getAltReaderIOValidation(SE)
  return {
    URI,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    _E: undefined as SafeAny,
    map: map_,
    of,
    chain: chain_,
    bimap: bimap_,
    mapLeft: mapLeft_,
    ap: applicativeReaderIOValidation.ap,
    alt: altReaderIOValidation.alt,
    fromIO,
    throwError,
  }
}

/**
 * @category instances
 */
export const Functor: Functor3<URI> = {
  URI,
  map: map_,
}

/**
 * @category instances
 * @since 2.8.4
 */
export const ApplicativePar: Applicative3<URI> = {
  URI,
  map: map_,
  ap: apPar_,
  of,
}

/**
 * @category instances
 * @since 2.8.4
 */
export const ApplicativeSeq: Applicative3<URI> = {
  URI,
  map: map_,
  ap: apSeq_,
  of,
}

/**
 * @category instances
 */
export const Bifunctor: Bifunctor3<URI> = {
  URI,
  bimap: bimap_,
  mapLeft: mapLeft_,
}

/**
 * @category instances
 */
export const Alt: Alt3<URI> = {
  URI,
  map: map_,
  alt: alt_,
}

/**
 * @category instances
 *
 * NOTE: This is just for convenience. This style of exporting the full set of
 * type class instances is being removed in fp-ts version 3.
 */
export const readerIOEither: Monad3<URI> &
  Bifunctor3<URI> &
  Alt3<URI> &
  MonadIO3<URI> &
  MonadThrow3<URI> = {
  URI,
  map: map_,
  of,
  ap: apPar_,
  chain: chain_,
  alt: alt_,
  bimap: bimap_,
  mapLeft: mapLeft_,
  fromIO,
  throwError,
}

/**
 * @category instances
 *
 * NOTE: This is just for convenience. This style of exporting the full set of
 * type class instances is being removed in fp-ts version 3.
 */
export const readerIOEitherSeq: typeof readerIOEither = {
  URI,
  map: map_,
  of,
  ap: apSeq_,
  chain: chain_,
  alt: alt_,
  bimap: bimap_,
  mapLeft: mapLeft_,
  fromIO,
  throwError,
}

// -------------------------------------------------------------------------------------
// utils
// -------------------------------------------------------------------------------------

/**
 * NOTE: The equivalent of this for ReaderTaskEither is being removed in fp-ts version 3.0.
 */
export function run<R, E, A>(
  ma: ReaderIOEither<R, E, A>,
  r: R,
): E.Either<E, A> {
  return ma(r)()
}

/**
 * Make sure that a resource is cleaned up in the event of an exception (\*). The release action is called regardless of
 * whether the body action throws (\*) or returns.
 *
 * (\*) i.e. returns a `Left`
 *
 * Derivable from `MonadThrow`.
 */
export function bracket<R, E, A, B>(
  aquire: ReaderIOEither<R, E, A>,
  use: (a: A) => ReaderIOEither<R, E, B>,
  release: (a: A, e: E.Either<E, B>) => ReaderIOEither<R, E, void>,
): ReaderIOEither<R, E, B> {
  return r =>
    IE.bracket(
      aquire(r),
      a => use(a)(r),
      (a, e) => release(a, e)(r),
    )
}

// -------------------------------------------------------------------------------------
// do notation
// -------------------------------------------------------------------------------------

export const Do: ReaderIOEither<unknown, never, {}> = of({})

export const bindTo = <N extends string>(
  name: N,
): (<R, E, A>(
  fa: ReaderIOEither<R, E, A>,
) => ReaderIOEither<R, E, { [K in N]: A }>) => map(bindTo_(name))

export const bindW = <N extends string, A, Q, D, B>(
  name: Exclude<N, keyof A>,
  f: (a: A) => ReaderIOEither<Q, D, B>,
): (<R, E>(
  fa: ReaderIOEither<R, E, A>,
) => ReaderIOEither<
  Q & R,
  E | D,
  { [K in keyof A | N]: K extends keyof A ? A[K] : B }
>) =>
  chainW(a =>
    pipe(
      f(a),
      map(b => bind_(a, name, b)),
    ),
  )

export const bind: <N extends string, A, R, E, B>(
  name: Exclude<N, keyof A>,
  f: (a: A) => ReaderIOEither<R, E, B>,
) => (
  fa: ReaderIOEither<R, E, A>,
) => ReaderIOEither<
  R,
  E,
  { [K in keyof A | N]: K extends keyof A ? A[K] : B }
> = bindW

// -------------------------------------------------------------------------------------
// pipeable sequence S
// -------------------------------------------------------------------------------------

export const apSW = <A, N extends string, Q, D, B>(
  name: Exclude<N, keyof A>,
  fb: ReaderIOEither<Q, D, B>,
): (<R, E>(
  fa: ReaderIOEither<R, E, A>,
) => ReaderIOEither<
  Q & R,
  D | E,
  { [K in keyof A | N]: K extends keyof A ? A[K] : B }
>) =>
  flow(
    map(a => (b: B) => bind_(a, name, b)),
    apW(fb),
  )

export const apS: <A, N extends string, R, E, B>(
  name: Exclude<N, keyof A>,
  fb: ReaderIOEither<R, E, B>,
) => (
  fa: ReaderIOEither<R, E, A>,
) => ReaderIOEither<
  R,
  E,
  { [K in keyof A | N]: K extends keyof A ? A[K] : B }
> = apSW

// -------------------------------------------------------------------------------------
// array utils
// -------------------------------------------------------------------------------------

// missing from ReaderIO implementation in fp-ts-contrib
const readerIO_traverseArrayWithIndex: <R, A, B>(
  f: (index: number, a: A) => RI.ReaderIO<R, B>,
) => (arr: ReadonlyArray<A>) => RI.ReaderIO<R, ReadonlyArray<B>> = f =>
  flow(R.traverseArrayWithIndex(f), R.map(I.sequenceArray))

export const traverseArrayWithIndex: <R, E, A, B>(
  f: (index: number, a: A) => ReaderIOEither<R, E, B>,
) => (arr: ReadonlyArray<A>) => ReaderIOEither<R, E, ReadonlyArray<B>> = f =>
  flow(readerIO_traverseArrayWithIndex(f), RI.map(E.sequenceArray))

export const traverseArray: <R, E, A, B>(
  f: (a: A) => ReaderIOEither<R, E, B>,
) => (arr: ReadonlyArray<A>) => ReaderIOEither<R, E, ReadonlyArray<B>> = f =>
  traverseArrayWithIndex((_, a) => f(a))

export const sequenceArray: <R, E, A>(
  arr: ReadonlyArray<ReaderIOEither<R, E, A>>,
) => ReaderIOEither<R, E, ReadonlyArray<A>> = traverseArray(identity)

export const traverseSeqArrayWithIndex: <R, E, A, B>(
  f: (index: number, a: A) => ReaderIOEither<R, E, B>,
) => (
  arr: ReadonlyArray<A>,
) => ReaderIOEither<R, E, ReadonlyArray<B>> = f => arr => r => () => {
  const result = []

  for (let i = 0; i < arr.length; i++) {
    const b = f(i, arr[i])(r)()
    if (E.isLeft(b)) {
      return b
    }
    result.push(b.right)
  }

  return E.right(result)
}

export const traverseSeqArray: <R, E, A, B>(
  f: (a: A) => ReaderIOEither<R, E, B>,
) => (arr: ReadonlyArray<A>) => ReaderIOEither<R, E, ReadonlyArray<B>> = f =>
  traverseSeqArrayWithIndex((_, a) => f(a))

export const sequenceSeqArray: <R, E, A>(
  arr: ReadonlyArray<ReaderIOEither<R, E, A>>,
) => ReaderIOEither<R, E, ReadonlyArray<A>> = traverseSeqArray(identity)

// -------------------------------------------------------------------------------------
// Effect extension functions (similar to the ReaderTaskEither file in this directory)
// -------------------------------------------------------------------------------------

export const orElseW = <R extends object, Q extends object, E, D, A>(
  f: (e: E) => ReaderIOEither<Q, D, A>,
) => (rie: ReaderIOEither<R, E, A>): ReaderIOEither<Q & R, E | D, A> =>
  pipe(rie, orElse(unsafeCoerce(f)))

export const chainWFirst = <R extends object, E, A, B>(
  f: (a: A) => ReaderIOEither<R, E, B>,
) => <Q extends object, D>(
  ma: ReaderIOEither<Q, D, A>,
): ReaderIOEither<Q & R, D | E, A> => env => () => {
  const ea = run(ma, env)
  return pipe(
    ea,
    E.fold<D, A, E.Either<D | E, A> | E.Either<D | E, A>>(
      err => E.left(err),
      a => {
        run(f(a), env)
        return ea
      },
    ),
  )
}

export const withEnv = <Q extends object>() => <R extends object, E, A>(
  r: ReaderIOEither<R, E, A>,
): ReaderIOEither<Q & R, E, A> =>
  pipe(
    ask<Q & R, E>(),
    chainW(() => r),
  )

export const toLeft = <R extends object, E, A, Z = never>(
  riea: ReaderIOEither<R, E, A>,
): ReaderIOEither<R, E | A, Z> => env => () =>
  pipe(
    run(riea, env),
    E.fold(
      e => E.left<E | A, Z>(e),
      a => E.left<E | A, Z>(a),
    ),
  )

export const onLeft = <R extends object, Q extends object, E, A>(
  f: (e: E) => ReaderIOEither<Q, unknown, unknown>,
) => (rie: ReaderIOEither<R, E, A>): ReaderIOEither<R & Q, E, A> =>
  pipe(
    rie,
    orElseW<R, Q, E, E, A>(e => {
      return pipe(
        toLeft<Q, unknown, unknown, A>(f(e)),
        mapLeft(() => e),
      )
    }),
  )

export const runP = <R extends object>(r: R) => <E, A>(
  rie: ReaderIOEither<R, E, A>,
): E.Either<E, A> => run(rie, r)

/**
 * A ReaderIOEither that performs a noOp computation
 *
 * It uses an empty environment and cannot fail.
 */
export const noOpRIE = fromIO<EmptyEnv, never, void>(noOpIO)

/**
 * Provides the required environment to a ReaderIOEither,
 * converting it into a TaskEither.
 *
 * Similar to `runP` but delays execution.
 */
export const provide = <R extends object>(r: R) => <E, A>(
  rie: ReaderIOEither<R, E, A>,
): IE.IOEither<E, A> => () => run(rie, r)

/**
 * Provides a subset of a ReaderIOEither's required environment,
 * returning a new ReaderIOEither with a narrowed environment requirement.
 *
 * Similar to `provide` but does not completely fulfill the RIE's requirements.
 * Think of this as partial application for RIE dependencies.
 */
export const providePartial = <R extends object, Q extends R>(q: Q) => <E, A>(
  rie: ReaderIOEither<R, E, A>,
): ReaderIOEither<Subtract<R, Q>, E, A> => (r: Subtract<R, Q>) => () =>
  run(rie, { ...q, ...r } as Q & R)
