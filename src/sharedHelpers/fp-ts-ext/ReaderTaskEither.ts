import { array } from 'fp-ts/lib/Array'
import * as E from 'fp-ts/lib/Either'
import { pipe } from 'fp-ts/lib/pipeable'
import * as RTE from 'fp-ts/lib/ReaderTaskEither'
import * as TE from 'fp-ts/lib/TaskEither'

import { noOpIO } from '@monorail/sharedHelpers/fp-ts-ext/IO'
import { unsafeCoerceToArray } from '@monorail/sharedHelpers/fp-ts-ext/ReadonlyArray'

/**
 * Pipeable port of rte.orElse, which widens types
 * @param f
 */
export const orElseW = <R, RR, E, EE, A>(
  f: (e: E) => RTE.ReaderTaskEither<RR, EE, A>,
) => (
  rte: RTE.ReaderTaskEither<R, E, A>,
): RTE.ReaderTaskEither<RR & R, E | EE, A> =>
  pipe(
    rte,
    RTE.orElse((f as unknown) as (e: E) => RTE.ReaderTaskEither<R, E, A>),
  )

export const chainWFirst = <R, E, A, B>(
  f: (a: A) => RTE.ReaderTaskEither<R, E, B>,
) => <Q, D>(
  ma: RTE.ReaderTaskEither<Q, D, A>,
): RTE.ReaderTaskEither<Q & R, D | E, A> => env => () =>
  RTE.run(ma, env).then(ea =>
    pipe(
      ea,
      E.fold<D, A, E.Either<D | E, A> | Promise<E.Either<D | E, A>>>(
        err => E.left(err),
        a => RTE.run(f(a), env).then(() => ea),
      ),
    ),
  )

/**
 * Widens Dependency type to the manually supplied type parameter,
 *
 * i.e.
 * @example
 * ```ts
 * const rte = withDeps<number>(RTE.of("foo"))
 * rte.run(6) // requires a `number`
 * ```
 */
export const withDeps = <D>() => <R, E, A>(
  r: RTE.ReaderTaskEither<R, E, A>,
): RTE.ReaderTaskEither<D & R, E, A> =>
  pipe(
    RTE.ask<D & R, E>(),
    RTE.chainW(() => r),
  )

/**
 * Takes a successful Right RTE, and turns it into a failing 'Left' RTE
 * @param rtea
 */
export const toLeft = <R, E, A, Z = never>(
  rtea: RTE.ReaderTaskEither<R, E, A>,
): RTE.ReaderTaskEither<R, E | A, Z> => env => () => {
  return RTE.run(rtea, env).then(
    E.fold(
      e => E.left<E | A, Z>(e),
      a => E.left<E | A, Z>(a),
    ),
  )
}

/**
 * Executes an RTE if a left is encountered, enabling access to the original error.
 * The value returnded from `f` will be discarded, and the resulting RTE will contain
 * the original value.
 *
 * @example
 * ```ts
 * pipe(
 *   RTE.left2v('foo'),
 *   onLeft(e => log(`Encountered error: ${e}`))
 * )
 * ```
 */
export const onLeft = <R, RR, E, A>(
  f: (e: E) => RTE.ReaderTaskEither<RR, unknown, unknown>,
) => (rte: RTE.ReaderTaskEither<R, E, A>): RTE.ReaderTaskEither<R & RR, E, A> =>
  pipe(
    rte,
    orElseW<R, RR, E, E, A>(e => {
      return pipe(
        toLeft<RR, unknown, unknown, A>(f(e)),
        RTE.mapLeft(() => e),
      )
    }),
  )

/**
 * Runs a ReaderTaskEither with the specified parameters
 *
 * @example
 * ```ts
 * pipe(
 *   RTE.ask<string, number>(),
 *   run('supplied parameter')
 * )
 * ```
 *
 * Note: if the inferred type of R is a subtype of the R in your RTE,
 * You'll need to explicitly type R to the supertype which matches the RTE
 *
 * This is because in fp-ts v1, the `R` type parameter in RTE is invariant
 * in fp-ts v2, it is contravariant, so this inference issue will go away.
 *
 * i.e.:
 * ```ts
 * declare const foo: 'foo'
 * pipe(RTE.ask<string, number>(), run(foo)) // fails
 * pipe(RTE.ask<string, number>(), run<string>(foo)) // succeeds
 * ```
 *
 *
 * Some more information about this error:
 * ```ts
 *
 * declare const fooRTE: RTE.ReaderTaskEither<'foo', unknown, unknown>
 * declare const stringRTE: RTE.ReaderTaskEither<string, unknown, unknown>
 *
 * const a: RTE.ReaderTaskEither<string, unknown, unknown> = fooRTE
 * const b: RTE.ReaderTaskEither<'foo', unknown, unknown> = fooRTE
 * const c: RTE.ReaderTaskEither<'foo', unknown, unknown> = stringRTE
 * const d: RTE.ReaderTaskEither<string, unknown, unknown> = stringRTE
 * ```
 * Here, the assignment to `a` and `b` fails, but in fp-ts v2, only the assignment to `a` fails
 */
export const run = <R>(r: R) => <E, A>(
  rte: RTE.ReaderTaskEither<R, E, A>,
): Promise<E.Either<E, A>> => RTE.run(rte, r)

/**
 * Given a tuple/list of RTEs, it will aggregate their combined environments into an intersection,
 * their combined errors into a union, and map the values into a corresponding tuple/list.
 *
 * TLDR; Promise.all for ReaderTaskEither
 */
export function sequenceW<Rtes extends DEFAULT_RTES>(
  rtes: Rtes,
): CombinedRtes<Rtes> {
  return (array.sequence(RTE.readerTaskEither)(
    unsafeCoerceToArray(rtes),
  ) as unknown) as CombinedRtes<Rtes>
}

/**
 * Performs the type-level computation that combineRTE uses
 */
export type CombinedRtes<RTES extends DEFAULT_RTES> = RTE.ReaderTaskEither<
  CombinedRteEnv<RTES>,
  CombinedRteErr<RTES>,
  CombinedRteOutput<RTES>
>

/**
 * Aggregate many RTE environments into an intersection.
 */
export type CombinedRteEnv<
  RTES extends DEFAULT_RTES
> = unknown extends ToRteConsList<RTES>
  ? ExtractRteEnv<RTES[0]>
  : UnNest<Flatten<ToRteConsList<RTES>, unknown>>
// RTES = [RTE<A, B, C>, RTE<D, E, F>, RTE<F, G, H>]
// ToRteConsList = [A, [D, [F]]]
// Flatten = [[[A & D & F]]]
// UnNest = A & D & F

export type CombinedRteErr<RTES extends DEFAULT_RTES> = {
  [K in keyof RTES]: ExtractRteError<RTES[K]>
}[number]

export type CombinedRteOutput<RTES extends DEFAULT_RTES> = {
  [K in keyof RTES]: ExtractRteOutput<RTES[K]>
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SafeAny = any

// Retrieve the environment from an RTE
export type ExtractRteEnv<A> = A extends RTE.ReaderTaskEither<
  infer R,
  SafeAny,
  SafeAny
>
  ? R
  : never

// Retrieve the error type from an RTE
export type ExtractRteError<A> = A extends RTE.ReaderTaskEither<
  SafeAny,
  infer R,
  SafeAny
>
  ? R
  : never

// Retrieve the output value from an RTE
export type ExtractRteOutput<A> = A extends RTE.ReaderTaskEither<
  SafeAny,
  SafeAny,
  infer R
>
  ? R
  : never

// Internal

type DEFAULT_RTE = RTE.ReaderTaskEither<SafeAny, SafeAny, SafeAny>
type DEFAULT_RTES = ReadonlyArray<DEFAULT_RTE>

// Creates a ConsList of RTE environment types
type ToRteConsList<A extends DEFAULT_RTES> = [] extends A
  ? unknown
  : ((...a: A) => SafeAny) extends (t: infer T, ...ts: infer TS) => SafeAny
  ? TS extends DEFAULT_RTES
    ? [ExtractRteEnv<T>, ToRteConsList<TS>]
    : never
  : never

// Recursively traverses a ConsList, creating an intersection as it does.
type Flatten<A, S> = A extends [infer H]
  ? S & H
  : A extends [infer I, infer T]
  ? [Flatten<T, S & I>] // This tuple nesting is required to ensure that the type is lazily defined.
  : S

// Since Flatten produces an n-depth Tuple containing the union we want, we need to traverse
// that n-depth tuple and try to pull out our intersection
type UnNest<T, Fallback = unknown> = T extends ReadonlyArray<unknown>
  ? {
      [K in keyof T]: T[K] extends [infer TT]
        ? TT extends ReadonlyArray<unknown>
          ? UnNest<TT>
          : TT
        : T[K]
    }[number]
  : Fallback

export const noOpRTE = RTE.fromIO<unknown, never, void>(noOpIO)

export const provide = <D>(env: D) => <E, A>(
  rt: RTE.ReaderTaskEither<D, E, A>,
): TE.TaskEither<E, A> => () => RTE.run(rt, env)
