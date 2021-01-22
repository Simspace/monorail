import * as E from 'fp-ts/lib/Either';
import * as RTE from 'fp-ts/lib/ReaderTaskEither';
import * as TE from 'fp-ts/lib/TaskEither';
import { EmptyEnv, Subtract } from '@monorail/sharedHelpers/fp-ts-ext/effectsUtils';
export * from 'fp-ts/lib/ReaderTaskEither';
/**
 * Pipeable port of rte.orElse, which widens types
 * @param f
 */
export declare const orElseW: <R extends object, Q extends object, E, D, A>(f: (e: E) => RTE.ReaderTaskEither<Q, D, A>) => (rte: RTE.ReaderTaskEither<R, E, A>) => RTE.ReaderTaskEither<Q & R, E | D, A>;
export declare const chainWFirst: <R extends object, E, A, B>(f: (a: A) => RTE.ReaderTaskEither<R, E, B>) => <Q extends object, D>(ma: RTE.ReaderTaskEither<Q, D, A>) => RTE.ReaderTaskEither<Q & R, E | D, A>;
/**
 * Widens Dependency type to the manually supplied type parameter,
 *
 * i.e.
 * @example
 * ```ts
 * const rte = withEnv<{ num: number }>(RTE.of("foo"))
 * rte.run({ num: 6 }) // requires a `{ num: number }`
 * ```
 */
export declare const withEnv: <Q extends object>() => <R extends object, E, A>(r: RTE.ReaderTaskEither<R, E, A>) => RTE.ReaderTaskEither<Q & R, E, A>;
/**
 * Takes a successful Right RTE, and turns it into a failing 'Left' RTE
 * @param rtea
 */
export declare const toLeft: <R extends object, E, A, Z = never>(rtea: RTE.ReaderTaskEither<R, E, A>) => RTE.ReaderTaskEither<R, E | A, Z>;
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
export declare const onLeft: <R extends object, Q extends object, E, A>(f: (e: E) => RTE.ReaderTaskEither<Q, unknown, unknown>) => (rte: RTE.ReaderTaskEither<R, E, A>) => RTE.ReaderTaskEither<R & Q, E, A>;
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
 *
 * Using the suffix `P` for `pipeable` to disambiguate the name from the base `run`
 *
 * NOTE: The above examples show primitive types being used in the RTE environment. However,
 * all utility functions in this file require the environment to be expressed as an object type
 * due to the reliance on using intersection types to aggregate dependencies.
 */
export declare const runP: <R extends object>(r: R) => <E, A>(rte: RTE.ReaderTaskEither<R, E, A>) => Promise<E.Either<E, A>>;
/**
 * A ReaderTaskEither that performs a noOp computation
 *
 * It uses an empty environment and cannot fail.
 */
export declare const noOpRTE: RTE.ReaderTaskEither<EmptyEnv, never, void>;
/**
 * Provides the required environment to a ReaderTaskEither,
 * converting it into a TaskEither.
 *
 * Similar to `runP` but delays execution.
 */
export declare const provide: <R extends object>(r: R) => <E, A>(rte: RTE.ReaderTaskEither<R, E, A>) => TE.TaskEither<E, A>;
/**
 * Provides a subset of a ReaderTaskEither's required environment,
 * returning a new ReaderTaskEither with a narrowed environment requirement.
 *
 * Similar to `provide` but does not completely fulfill the RTE's requirements.
 * Think of this as partial application for RTE dependencies.
 */
export declare const providePartial: <R extends object, Q extends R>(q: Q) => <E, A>(rte: RTE.ReaderTaskEither<R, E, A>) => RTE.ReaderTaskEither<Pick<R, Exclude<keyof R, keyof Q>>, E, A>;
/**
 * Given a tuple/list of RTEs, it will aggregate their combined environments into an intersection,
 * their combined errors into a union, and map the values into a corresponding tuple/list.
 *
 * TLDR; Promise.all for ReaderTaskEither
 */
export declare function sequenceW<Rtes extends DEFAULT_RTES>(rtes: Rtes): CombinedRtes<Rtes>;
/**
 * Performs the type-level computation that combineRTE uses
 */
export declare type CombinedRtes<RTES extends DEFAULT_RTES> = RTE.ReaderTaskEither<CombinedRteEnv<RTES>, CombinedRteErr<RTES>, CombinedRteOutput<RTES>>;
/**
 * Aggregate many RTE environments into an intersection.
 */
export declare type CombinedRteEnv<RTES extends DEFAULT_RTES> = unknown extends ToRteConsList<RTES> ? ExtractRteEnv<RTES[0]> : UnNest<Flatten<ToRteConsList<RTES>, unknown>>;
export declare type CombinedRteErr<RTES extends DEFAULT_RTES> = {
    [K in keyof RTES]: ExtractRteError<RTES[K]>;
}[number];
export declare type CombinedRteOutput<RTES extends DEFAULT_RTES> = {
    [K in keyof RTES]: ExtractRteOutput<RTES[K]>;
};
declare type SafeAny = any;
export declare type ExtractRteEnv<A> = A extends RTE.ReaderTaskEither<infer R, SafeAny, SafeAny> ? R : never;
export declare type ExtractRteError<A> = A extends RTE.ReaderTaskEither<SafeAny, infer R, SafeAny> ? R : never;
export declare type ExtractRteOutput<A> = A extends RTE.ReaderTaskEither<SafeAny, SafeAny, infer R> ? R : never;
declare type DEFAULT_RTE = RTE.ReaderTaskEither<SafeAny, SafeAny, SafeAny>;
declare type DEFAULT_RTES = ReadonlyArray<DEFAULT_RTE>;
declare type ToRteConsList<A extends DEFAULT_RTES> = [] extends A ? unknown : ((...a: A) => SafeAny) extends (t: infer T, ...ts: infer TS) => SafeAny ? TS extends DEFAULT_RTES ? [ExtractRteEnv<T>, ToRteConsList<TS>] : never : never;
declare type Flatten<A, S> = A extends [infer H] ? S & H : A extends [infer I, infer T] ? [Flatten<T, S & I>] : S;
declare type UnNest<T, Fallback = unknown> = T extends ReadonlyArray<unknown> ? {
    [K in keyof T]: T[K] extends [infer TT] ? TT extends ReadonlyArray<unknown> ? UnNest<TT> : TT : T[K];
}[number] : Fallback;
