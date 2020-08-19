import { Foldable, Foldable1, Foldable2, Foldable3 } from 'fp-ts/lib/Foldable';
import { HKT, Kind, Kind2, Kind3, URIS, URIS2, URIS3 } from 'fp-ts/lib/HKT';
import { Magma } from 'fp-ts/lib/Magma';
import * as O from 'fp-ts/lib/Option';
import { Ord } from 'fp-ts/lib/Ord';
/**
 * Retrieves the keys of an object while retaining keyof type information
 */
export declare const keys: <A extends Record<string, unknown>, K extends keyof A>(x: A) => K[];
export declare const values: <A extends Record<string, unknown>, V extends A[keyof A]>(x: A) => V[];
export declare const entries: <A extends Record<string, unknown>, K extends keyof A, V extends A[K]>(x: A) => [K, V][];
/**
 * Retrieves the value of a given property key from an object (curried)
 */
export declare const prop: <A extends Record<string, unknown>, K extends keyof A>(k: K) => (obj: A) => A[K];
/**
 * Omits the key-value pairs from an object associated with the provided keys
 */
export declare const omit: <A extends Record<string, unknown>, K extends keyof A>(rec: A, ks: K[]) => { [P in Exclude<keyof A, K>]: A[P]; };
/**
 * Picks the key-value pairs from an object associated with the provided keys
 */
export declare const pick: <A extends Record<string, unknown>, K extends keyof A>(rec: A, ks: K[]) => { [P in K]: A[P]; };
export declare const sortRecords: <S extends Record<K, A>, K extends keyof S & string, A extends S[K]>(ord: Ord<S>) => <T extends S>(data: T[]) => T[];
/**
 * Type guard for `Record<PropertyKey, T>` from `object`
 */
export declare const isRecord: <T = unknown>(x: unknown) => x is Record<string | number | symbol, T>;
/**
 * Check if a record is *not* empty
 */
export declare const isNotEmpty: <K extends string | number | symbol, T>(r: Record<K, T>) => boolean;
export declare function fromFoldableFilterMap<F extends URIS3, B>(M: Magma<B>, F: Foldable3<F>): <U, L, A, K extends string>(ta: Kind3<F, U, L, A>, f: (a: A) => O.Option<[K, B]>) => Record<K, B>;
export declare function fromFoldableFilterMap<F extends URIS2, B>(M: Magma<B>, F: Foldable2<F>): <L, A, K extends string>(ta: Kind2<F, L, A>, f: (a: A) => O.Option<[K, B]>) => Record<K, B>;
export declare function fromFoldableFilterMap<F extends URIS, B>(M: Magma<B>, F: Foldable1<F>): <A, K extends string>(ta: Kind<F, A>, f: (a: A) => O.Option<[K, B]>) => Record<K, B>;
export declare function fromFoldableFilterMap<F, B>(M: Magma<B>, F: Foldable<F>): <A, K extends string>(ta: HKT<F, A>, f: (a: A) => O.Option<[K, B]>) => Record<K, B>;
//# sourceMappingURL=Record.d.ts.map