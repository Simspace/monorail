import { At, Index, Lens, Optional, Traversal } from 'monocle-ts';
import { Eq } from 'fp-ts/lib/Eq';
import * as O from 'fp-ts/lib/Option';
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
/**
 * `At` optic for `Map` keys
 *
 * Inspired by `atRecord` from `monocle-ts`:
 *
 * https://github.com/gcanti/monocle-ts/blob/master/src/At/Record.ts
 */
export declare function atMap<K, A = never>(E: Eq<K>): At<Map<K, A>, K, O.Option<A>>;
/**
 * `Index` optic for `Map` keys
 *
 * Inspired by `indexRecord` from `monocle-ts`:
 *
 * https://github.com/gcanti/monocle-ts/blob/master/src/Index/Record.ts
 */
export declare function indexMap<K, A = never>(E: Eq<K>): Index<Map<K, A>, K, A>;
/**
 * Combines update and insert. Takes a Traversal to some `B`, and a Lens to
 * an array of `B`s. Attempts to set the existing value to the given value, or
 * failing that appends it to the array.
 */
export declare const upsert: <A, B>(existing: Traversal<A, B>, list: Lens<A, B[]>) => (b: B) => (a: A) => A;
