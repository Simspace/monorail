import { Ord } from 'fp-ts/lib/Ord';
/**
 * Retrieves the keys of an object while retaining keyof type information
 */
export declare const keys: <A extends Record<string, unknown>, K extends keyof A>(x: A) => K[];
export declare const values: <A extends Record<string, unknown>, V extends A[keyof A]>(x: A) => V[];
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
