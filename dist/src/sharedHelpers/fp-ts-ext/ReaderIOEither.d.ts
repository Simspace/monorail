import { Alt3, Alt3C } from 'fp-ts/lib/Alt';
import { Applicative3, Applicative3C } from 'fp-ts/lib/Applicative';
import { Apply1 } from 'fp-ts/lib/Apply';
import { Bifunctor3 } from 'fp-ts/lib/Bifunctor';
import * as E from 'fp-ts/lib/Either';
import { Lazy, Predicate, Refinement } from 'fp-ts/lib/function';
import { Functor3 } from 'fp-ts/lib/Functor';
import * as I from 'fp-ts/lib/IO';
import * as IE from 'fp-ts/lib/IOEither';
import { Monad3, Monad3C } from 'fp-ts/lib/Monad';
import { MonadIO3, MonadIO3C } from 'fp-ts/lib/MonadIO';
import { MonadThrow3, MonadThrow3C } from 'fp-ts/lib/MonadThrow';
import { Monoid } from 'fp-ts/lib/Monoid';
import { Option } from 'fp-ts/lib/Option';
import * as R from 'fp-ts/lib/Reader';
import * as RE from 'fp-ts/lib/ReaderEither';
import * as S from 'fp-ts/lib/Semigroup';
import * as RI from 'fp-ts-contrib/lib/ReaderIO';
import { EmptyEnv, Subtract } from '@monorail/sharedHelpers/fp-ts-ext/effectsUtils';
export interface ReaderIOEither<R, E, A> {
    (r: R): IE.IOEither<E, A>;
}
export declare const bind_: <A, N extends string, B>(a: A, name: Exclude<N, keyof A>, b: B) => { [K in N | keyof A]: K extends keyof A ? A[K] : B; };
/**
 * @internal
 */
export declare const bindTo_: <N extends string>(name: N) => <B>(b: B) => { [K in N]: B; };
/**
 * @category constructors
 */
export declare const fromIOEither: <R, E, A>(ma: IE.IOEither<E, A>) => ReaderIOEither<R, E, A>;
/**
 * @category constructors
 */
export declare const left: <R, E = never, A = never>(e: E) => ReaderIOEither<R, E, A>;
/**
 * @category constructors
 */
export declare const right: <R, E = never, A = never>(a: A) => ReaderIOEither<R, E, A>;
/**
 * @category constructors
 */
export declare const rightIO: <R, E = never, A = never>(ma: I.IO<A>) => ReaderIOEither<R, E, A>;
/**
 * @category constructors
 */
export declare const leftIO: <R, E = never, A = never>(me: I.IO<E>) => ReaderIOEither<R, E, A>;
/**
 * @category constructors
 */
export declare const rightReader: <R, E = never, A = never>(ma: R.Reader<R, A>) => ReaderIOEither<R, E, A>;
/**
 * @category constructors
 */
export declare const leftReader: <R, E = never, A = never>(me: R.Reader<R, E>) => ReaderIOEither<R, E, A>;
/**
 * @category constructors
 */
export declare const rightReaderIO: <R, E = never, A = never>(ma: RI.ReaderIO<R, A>) => ReaderIOEither<R, E, A>;
/**
 * @category constructors
 */
export declare const leftReaderIO: <R, E = never, A = never>(me: RI.ReaderIO<R, E>) => ReaderIOEither<R, E, A>;
/**
 * @category constructors
 */
export declare const fromReaderEither: <R, E, A>(ma: RE.ReaderEither<R, E, A>) => ReaderIOEither<R, E, A>;
/**
 * @category constructors
 */
export declare const ask: <R, E = never>() => ReaderIOEither<R, E, R>;
/**
 * @category constructors
 */
export declare const asks: <R, E = never, A = never>(f: (r: R) => A) => ReaderIOEither<R, E, A>;
/**
 * Derivable from `MonadThrow`.
 *
 * @category constructors
 */
export declare const fromEither: <R, E, A>(ma: E.Either<E, A>) => ReaderIOEither<R, E, A>;
/**
 * Derivable from `MonadThrow`.
 *
 * @category constructors
 */
export declare const fromOption: <E>(onNone: Lazy<E>) => <R, A>(ma: Option<A>) => ReaderIOEither<R, E, A>;
/**
 * Derivable from `MonadThrow`.
 *
 * @category constructors
 */
export declare const fromPredicate: {
    <E, A, B extends A>(refinement: Refinement<A, B>, onFalse: (a: A) => E): <U>(a: A) => ReaderIOEither<U, E, B>;
    <E, A>(predicate: Predicate<A>, onFalse: (a: A) => E): <R>(a: A) => ReaderIOEither<R, E, A>;
};
/**
 * @category destructors
 */
export declare function fold<R, E, A, B>(onLeft: (e: E) => RI.ReaderIO<R, B>, onRight: (a: A) => RI.ReaderIO<R, B>): (ma: ReaderIOEither<R, E, A>) => RI.ReaderIO<R, B>;
/**
 * Less strict version of [`getOrElse`](#getOrElse).
 *
 * @category destructors
 */
export declare const getOrElseW: <R, E, B>(onLeft: (e: E) => any) => <Q, A>(ma: ReaderIOEither<Q, E, A>) => any;
/**
 * @category destructors
 */
export declare const getOrElse: <R, E, A>(onLeft: (e: E) => RI.ReaderIO<R, A>) => (ma: ReaderIOEither<R, E, A>) => RI.ReaderIO<R, A>;
/**
 * @category combinators
 */
export declare function orElse<R, E, A, M>(onLeft: (e: E) => ReaderIOEither<R, M, A>): (ma: ReaderIOEither<R, E, A>) => ReaderIOEither<R, M, A>;
/**
 * @category combinators
 */
export declare const swap: <R, E, A>(ma: ReaderIOEither<R, E, A>) => ReaderIOEither<R, A, E>;
/**
 * @category combinators
 *
 * NOTE: The equivalent of this for ReaderTaskEither is being removed in fp-ts version 3.0.
 */
export declare const local: <Q, R>(f: (f: Q) => R) => <E, A>(ma: ReaderIOEither<R, E, A>) => ReaderIOEither<Q, E, A>;
/**
 * Less strict version of [`filterOrElse`](#filterOrElse).
 *
 * @category combinators
 */
export declare const filterOrElseW: {
    <A, B extends A, E2>(refinement: Refinement<A, B>, onFalse: (a: A) => E2): <R, E1>(ma: ReaderIOEither<R, E1, A>) => ReaderIOEither<R, E1 | E2, B>;
    <A, E2>(predicate: Predicate<A>, onFalse: (a: A) => E2): <R, E1>(ma: ReaderIOEither<R, E1, A>) => ReaderIOEither<R, E1 | E2, A>;
};
/**
 * Derivable from `MonadThrow`.
 *
 * @category combinators
 */
export declare const filterOrElse: {
    <E, A, B extends A>(refinement: Refinement<A, B>, onFalse: (a: A) => E): <R>(ma: ReaderIOEither<R, E, A>) => ReaderIOEither<R, E, B>;
    <E, A>(predicate: Predicate<A>, onFalse: (a: A) => E): <R>(ma: ReaderIOEither<R, E, A>) => ReaderIOEither<R, E, A>;
};
/**
 * @category combinators
 */
export declare function fromEitherK<E, A extends ReadonlyArray<unknown>, B>(f: (...a: A) => E.Either<E, B>): <R>(...a: A) => ReaderIOEither<R, E, B>;
/**
 * Less strict version of [`chainEitherK`](#chainEitherK).
 *
 * @category combinators
 */
export declare const chainEitherKW: <E, A, B>(f: (a: A) => E.Either<E, B>) => <R, D>(ma: ReaderIOEither<R, D, A>) => ReaderIOEither<R, D | E, B>;
/**
 * @category combinators
 */
export declare const chainEitherK: <E, A, B>(f: (a: A) => E.Either<E, B>) => <R>(ma: ReaderIOEither<R, E, A>) => ReaderIOEither<R, E, B>;
/**
 * @category combinators
 */
export declare function fromIOEitherK<E, A extends ReadonlyArray<unknown>, B>(f: (...a: A) => IE.IOEither<E, B>): <R>(...a: A) => ReaderIOEither<R, E, B>;
/**
 * Less strict version of [`chainIOEitherK`](#chainIOEitherK).
 *
 * @category combinators
 */
export declare const chainIOEitherKW: <E, A, B>(f: (a: A) => IE.IOEither<E, B>) => <R, D>(ma: ReaderIOEither<R, D, A>) => ReaderIOEither<R, D | E, B>;
/**
 * @category combinators
 */
export declare const chainIOEitherK: <E, A, B>(f: (a: A) => IE.IOEither<E, B>) => <R>(ma: ReaderIOEither<R, E, A>) => ReaderIOEither<R, E, B>;
export declare const map: <A, B>(f: (a: A) => B) => <R, E>(fa: ReaderIOEither<R, E, A>) => ReaderIOEither<R, E, B>;
/**
 * Map a pair of functions over the two last type arguments of the bifunctor.
 *
 * @category Bifunctor
 */
export declare const bimap: <E, G, A, B>(f: (e: E) => G, g: (a: A) => B) => <R>(fa: ReaderIOEither<R, E, A>) => ReaderIOEither<R, G, B>;
/**
 * Map a function over the second type argument of a bifunctor.
 *
 * @category Bifunctor
 */
export declare const mapLeft: <E, G>(f: (e: E) => G) => <R, A>(fa: ReaderIOEither<R, E, A>) => ReaderIOEither<R, G, A>;
/**
 * Less strict version of [`ap`](#ap).
 *
 * @category Apply
 */
export declare const apW: <Q, D, A>(fa: ReaderIOEither<Q, D, A>) => <R, E, B>(fab: ReaderIOEither<R, E, (a: A) => B>) => ReaderIOEither<Q & R, D | E, B>;
/**
 * Apply a function to an argument under a type constructor.
 *
 * @category Apply
 */
export declare const ap: <R, E, A>(fa: ReaderIOEither<R, E, A>) => <B>(fab: ReaderIOEither<R, E, (a: A) => B>) => ReaderIOEither<R, E, B>;
/**
 * Combine two effectful actions, keeping only the result of the first.
 *
 * Derivable from `Apply`.
 *
 * @category combinators
 */
export declare const apFirst: <R, E, B>(fb: ReaderIOEither<R, E, B>) => <A>(fa: ReaderIOEither<R, E, A>) => ReaderIOEither<R, E, A>;
/**
 * Combine two effectful actions, keeping only the result of the second.
 *
 * Derivable from `Apply`.
 *
 * @category combinators
 */
export declare const apSecond: <R, E, B>(fb: ReaderIOEither<R, E, B>) => <A>(fa: ReaderIOEither<R, E, A>) => ReaderIOEither<R, E, B>;
/**
 * Wrap a value into the type constructor.
 *
 * Equivalent to [`right`](#right).
 *
 * @category Applicative
 */
export declare const of: Applicative3<URI>['of'];
/**
 * Less strict version of [`chain`](#chain).
 *
 * @category Monad
 */
export declare const chainW: <R, E, A, B>(f: (a: A) => ReaderIOEither<R, E, B>) => <Q, D>(ma: ReaderIOEither<Q, D, A>) => ReaderIOEither<Q & R, D | E, B>;
/**
 * Composes computations in sequence, using the return value of one computation to determine the next computation.
 *
 * @category Monad
 */
export declare const chain: <R, E, A, B>(f: (a: A) => ReaderIOEither<R, E, B>) => (ma: ReaderIOEither<R, E, A>) => ReaderIOEither<R, E, B>;
/**
 * Less strict version of [`chainFirst`](#chainFirst).
 *
 * Derivable from `Monad`.
 *
 * @category combinators
 */
export declare const chainFirstW: <R, E, A, B>(f: (a: A) => ReaderIOEither<R, E, B>) => <Q, D>(ma: ReaderIOEither<Q, D, A>) => ReaderIOEither<Q & R, D | E, A>;
/**
 * Composes computations in sequence, using the return value of one computation to determine the next computation and
 * keeping only the result of the first.
 *
 * Derivable from `Monad`.
 *
 * @category combinators
 */
export declare const chainFirst: <R, E, A, B>(f: (a: A) => ReaderIOEither<R, E, B>) => (ma: ReaderIOEither<R, E, A>) => ReaderIOEither<R, E, A>;
/**
 * Derivable from `Monad`.
 *
 * @category combinators
 */
export declare const flatten: <R, E, A>(mma: ReaderIOEither<R, E, ReaderIOEither<R, E, A>>) => ReaderIOEither<R, E, A>;
/**
 * Less strict version of [`alt`](#alt).
 *
 * @category Alt
 */
export declare const altW: <R2, E2, B>(that: () => ReaderIOEither<R2, E2, B>) => <R1, E1, A>(fa: ReaderIOEither<R1, E1, A>) => ReaderIOEither<R1 & R2, E2 | E1, B | A>;
/**
 * Identifies an associative operation on a type constructor. It is similar to `Semigroup`, except that it applies to
 * types of kind `* -> *`.
 *
 * @category Alt
 */
export declare const alt: <R, E, A>(that: () => ReaderIOEither<R, E, A>) => (fa: ReaderIOEither<R, E, A>) => ReaderIOEither<R, E, A>;
/**
 * @category MonadIO
 */
export declare const fromIO: MonadIO3<URI>['fromIO'];
/**
 * @category MonadThrow
 */
export declare const throwError: MonadThrow3<URI>['throwError'];
export declare const URI = "ReaderIOEither";
export declare type URI = typeof URI;
declare module 'fp-ts/lib/HKT' {
    interface URItoKind3<R, E, A> {
        readonly [URI]: ReaderIOEither<R, E, A>;
    }
}
/**
 * Semigroup returning the left-most non-`Left` value. If both operands are `Right`s then the inner values are
 * concatenated using the provided `Semigroup`
 *
 * @category instances
 */
export declare function getSemigroup<R, E, A>(S: S.Semigroup<A>): S.Semigroup<ReaderIOEither<R, E, A>>;
/**
 * Semigroup returning the left-most `Left` value. If both operands are `Right`s then the inner values
 * are concatenated using the provided `Semigroup`
 *
 * @category instances
 */
export declare function getApplySemigroup<R, E, A>(S: S.Semigroup<A>): S.Semigroup<ReaderIOEither<R, E, A>>;
/**
 * @category instances
 */
export declare function getApplyMonoid<R, E, A>(M: Monoid<A>): Monoid<ReaderIOEither<R, E, A>>;
/**
 * @category instances
 */
export declare function getApplicativeReaderIOValidation<E>(A: Apply1<I.URI>, SE: S.Semigroup<E>): Applicative3C<URI, E>;
/**
 * @category instances
 */
export declare function getAltReaderIOValidation<E>(SE: S.Semigroup<E>): Alt3C<URI, E>;
/**
 * @category instances
 *
 * NOTE: This is just for convenience. This style of exporting the full set of type class instances is being removed in fp-ts version 3.
 */
export declare function getReaderIOValidation<E>(SE: S.Semigroup<E>): Monad3C<URI, E> & Bifunctor3<URI> & Alt3C<URI, E> & MonadIO3C<URI, E> & MonadThrow3C<URI, E>;
/**
 * @category instances
 */
export declare const Functor: Functor3<URI>;
/**
 * @category instances
 * @since 2.8.4
 */
export declare const ApplicativePar: Applicative3<URI>;
/**
 * @category instances
 * @since 2.8.4
 */
export declare const ApplicativeSeq: Applicative3<URI>;
/**
 * @category instances
 */
export declare const Bifunctor: Bifunctor3<URI>;
/**
 * @category instances
 */
export declare const Alt: Alt3<URI>;
/**
 * @category instances
 *
 * NOTE: This is just for convenience. This style of exporting the full set of
 * type class instances is being removed in fp-ts version 3.
 */
export declare const readerIOEither: Monad3<URI> & Bifunctor3<URI> & Alt3<URI> & MonadIO3<URI> & MonadThrow3<URI>;
/**
 * @category instances
 *
 * NOTE: This is just for convenience. This style of exporting the full set of
 * type class instances is being removed in fp-ts version 3.
 */
export declare const readerIOEitherSeq: typeof readerIOEither;
/**
 * NOTE: The equivalent of this for ReaderTaskEither is being removed in fp-ts version 3.0.
 */
export declare function run<R, E, A>(ma: ReaderIOEither<R, E, A>, r: R): E.Either<E, A>;
/**
 * Make sure that a resource is cleaned up in the event of an exception (\*). The release action is called regardless of
 * whether the body action throws (\*) or returns.
 *
 * (\*) i.e. returns a `Left`
 *
 * Derivable from `MonadThrow`.
 */
export declare function bracket<R, E, A, B>(aquire: ReaderIOEither<R, E, A>, use: (a: A) => ReaderIOEither<R, E, B>, release: (a: A, e: E.Either<E, B>) => ReaderIOEither<R, E, void>): ReaderIOEither<R, E, B>;
export declare const Do: ReaderIOEither<unknown, never, {}>;
export declare const bindTo: <N extends string>(name: N) => <R, E, A>(fa: ReaderIOEither<R, E, A>) => ReaderIOEither<R, E, { [K in N]: A; }>;
export declare const bindW: <N extends string, A, Q, D, B>(name: Exclude<N, keyof A>, f: (a: A) => ReaderIOEither<Q, D, B>) => <R, E>(fa: ReaderIOEither<R, E, A>) => ReaderIOEither<Q & R, D | E, { [K in N | keyof A]: K extends keyof A ? A[K] : B; }>;
export declare const bind: <N extends string, A, R, E, B>(name: Exclude<N, keyof A>, f: (a: A) => ReaderIOEither<R, E, B>) => (fa: ReaderIOEither<R, E, A>) => ReaderIOEither<R, E, {
    [K in keyof A | N]: K extends keyof A ? A[K] : B;
}>;
export declare const apSW: <A, N extends string, Q, D, B>(name: Exclude<N, keyof A>, fb: ReaderIOEither<Q, D, B>) => <R, E>(fa: ReaderIOEither<R, E, A>) => ReaderIOEither<Q & R, D | E, { [K in N | keyof A]: K extends keyof A ? A[K] : B; }>;
export declare const apS: <A, N extends string, R, E, B>(name: Exclude<N, keyof A>, fb: ReaderIOEither<R, E, B>) => (fa: ReaderIOEither<R, E, A>) => ReaderIOEither<R, E, {
    [K in keyof A | N]: K extends keyof A ? A[K] : B;
}>;
export declare const traverseArrayWithIndex: <R, E, A, B>(f: (index: number, a: A) => ReaderIOEither<R, E, B>) => (arr: ReadonlyArray<A>) => ReaderIOEither<R, E, ReadonlyArray<B>>;
export declare const traverseArray: <R, E, A, B>(f: (a: A) => ReaderIOEither<R, E, B>) => (arr: ReadonlyArray<A>) => ReaderIOEither<R, E, ReadonlyArray<B>>;
export declare const sequenceArray: <R, E, A>(arr: ReadonlyArray<ReaderIOEither<R, E, A>>) => ReaderIOEither<R, E, ReadonlyArray<A>>;
export declare const traverseSeqArrayWithIndex: <R, E, A, B>(f: (index: number, a: A) => ReaderIOEither<R, E, B>) => (arr: ReadonlyArray<A>) => ReaderIOEither<R, E, ReadonlyArray<B>>;
export declare const traverseSeqArray: <R, E, A, B>(f: (a: A) => ReaderIOEither<R, E, B>) => (arr: ReadonlyArray<A>) => ReaderIOEither<R, E, ReadonlyArray<B>>;
export declare const sequenceSeqArray: <R, E, A>(arr: ReadonlyArray<ReaderIOEither<R, E, A>>) => ReaderIOEither<R, E, ReadonlyArray<A>>;
export declare const orElseW: <R extends object, Q extends object, E, D, A>(f: (e: E) => ReaderIOEither<Q, D, A>) => (rie: ReaderIOEither<R, E, A>) => ReaderIOEither<Q & R, E | D, A>;
export declare const chainWFirst: <R extends object, E, A, B>(f: (a: A) => ReaderIOEither<R, E, B>) => <Q extends object, D>(ma: ReaderIOEither<Q, D, A>) => ReaderIOEither<Q & R, E | D, A>;
export declare const withEnv: <Q extends object>() => <R extends object, E, A>(r: ReaderIOEither<R, E, A>) => ReaderIOEither<Q & R, E, A>;
export declare const toLeft: <R extends object, E, A, Z = never>(riea: ReaderIOEither<R, E, A>) => ReaderIOEither<R, E | A, Z>;
export declare const onLeft: <R extends object, Q extends object, E, A>(f: (e: E) => ReaderIOEither<Q, unknown, unknown>) => (rie: ReaderIOEither<R, E, A>) => ReaderIOEither<R & Q, E, A>;
export declare const runP: <R extends object>(r: R) => <E, A>(rie: ReaderIOEither<R, E, A>) => E.Either<E, A>;
/**
 * A ReaderIOEither that performs a noOp computation
 *
 * It uses an empty environment and cannot fail.
 */
export declare const noOpRIE: ReaderIOEither<EmptyEnv, never, void>;
/**
 * Provides the required environment to a ReaderIOEither,
 * converting it into a TaskEither.
 *
 * Similar to `runP` but delays execution.
 */
export declare const provide: <R extends object>(r: R) => <E, A>(rie: ReaderIOEither<R, E, A>) => IE.IOEither<E, A>;
/**
 * Provides a subset of a ReaderIOEither's required environment,
 * returning a new ReaderIOEither with a narrowed environment requirement.
 *
 * Similar to `provide` but does not completely fulfill the RIE's requirements.
 * Think of this as partial application for RIE dependencies.
 */
export declare const providePartial: <R extends object, Q extends R>(q: Q) => <E, A>(rie: ReaderIOEither<R, E, A>) => ReaderIOEither<Pick<R, Exclude<keyof R, keyof Q>>, E, A>;
