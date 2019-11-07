import { Lens, Optional } from 'monocle-ts';
/**
 * Binary composition for lenses (`monocle-ts`)
 *
 * NOTE: This may feel like backwards (left-to-right) composition,
 * but it's not. Think of it as composing "focusers" instead of "accessors"
 */
export declare const oLens: <S, A, B>(f: Lens<S, A>, g: Lens<A, B>) => Lens<S, B>;
/**
 * Helper that extracts the S type from a Lens<S, A>
 */
export declare type ExtractSFromLens<L extends Lens<any, any>> = L extends Lens<infer S, any> ? S : never;
/**
 * Helper that extracts the A type from a Lens<S, A>
 */
export declare type ExtractAFromLens<L extends Lens<any, any>> = L extends Lens<any, infer A> ? A : never;
/**
 * A function that generates monocle-ts Lenses for all top-level key-val pairs
 * when passed an object
 */
export declare const lensesFromRecord: <A, K extends keyof A & string, LensRecord extends { [P in K]: Lens<A, A[P]>; }, IndexedLensRecord extends Record<string, Lens<A, A[K]>>>(x: A) => LensRecord;
/**
 * Creates an Optional optic for a given index in some Array<A>
 */
export declare const mkArrayIndexOptional: <S extends A[], A>(i: number) => Optional<S, A>;
/**
 * Creates an Optional optic for a given key K in some Record<K, A>
 *
 * TODO: Consider rewriting this in a different way
 */
export declare const mkRecordKeyOptional: <S extends Record<string, S[K]>, K extends keyof S & string>(k: K) => Optional<S, S[K]>;
