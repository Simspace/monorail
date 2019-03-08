import { Option } from 'fp-ts/lib/Option';
import { Ord } from 'fp-ts/lib/Ord';
import { Ordering } from 'fp-ts/lib/Ordering';
import { Setoid } from 'fp-ts/lib/Setoid';
import { ExtractFromOption, SafePrimitive } from './type-level';
/**
 * Retrieves the keys of an object while retaining keyof type information
 */
export declare const keys: <A extends {
    [key: string]: unknown;
}, K extends keyof A & string>(x: A) => K[];
/**
 * Retrieves the values of an object while retaining type information
 */
export declare const values: <A extends {
    [key: string]: unknown;
}, K extends keyof A & string>(x: A) => A[K][];
/**
 * Retrieves the value of a given property key from an object (curried)
 */
export declare const prop: <A extends object, Key extends keyof A>(k: Key) => (obj: A) => A[Key];
/**
 * Retrieves the value of a given property key from an object (uncurried)
 */
export declare const prop_: <A extends object, Key extends keyof A>(k: Key, obj: A) => A[Key];
/**
 * General lookup function that retrieves the value associated with a given
 * property key in an object, returning an option. Returns a None if the key
 * is missing from the object OR if the key exists but the value is null or
 * undefined
 */
export declare const lookup: <A extends Record<string | number | symbol, unknown>, B extends keyof A>(key: B, fa: A) => Option<A[B]>;
/**
 * Omits the key-value pairs from an object associated with the provided keys
 */
export declare const omit: <A extends {
    [key: string]: unknown;
}, K extends keyof A>(rec: A, ks: K[]) => { [P in Exclude<keyof A, K>]: A[P]; };
/**
 * Picks the key-value pairs from an object associated with the provided keys
 */
export declare const pick: <A extends {
    [key: string]: unknown;
}, K extends keyof A & string>(rec: A, ks: K[]) => { [P in K]: A[P]; };
export declare const sequenceMixedRecordOptions: <A extends {
    [key: string]: Option<SafePrimitive>;
}, B extends { [P in keyof A & string]: ExtractFromOption<A[P]>; }>(rec: A) => Option<B>;
export declare const traverseMixedRecordOptions: <A extends {
    [key: string]: SafePrimitive;
}, B extends { [P in keyof A]: A[P]; }, F extends (x: B[keyof B]) => Option<unknown>>(rec: A, f: F) => Option<{ [P in keyof B & string]: ExtractFromOption<ReturnType<F>>; }>;
/**
 * Interface for records extending a { name: string } key-val pair
 */
export interface RecordWithName {
    name: string;
}
/**
 * Equality checker for RecordWithName, comparing lowercase names
 */
export declare const recordWithNameLowerEquality: <A extends RecordWithName>(a: A, b: A) => boolean;
/**
 * Comparator for RecordWithName, comparing lowercase names alphabetically
 */
export declare const recordWithNameLowerComparator: <A extends RecordWithName>(a: A, b: A) => Ordering;
export declare const setoidRecordWithNameLower: Setoid<RecordWithName>;
/**
 * Ord instance for types extending the RecordWithName interface
 * that does comparisons & equality checking against the name prop
 * converted to lowercase
 */
export declare const ordRecordWithNameLower: Ord<RecordWithName>;
export declare const sortRecords: <S extends Record<K, A>, K extends keyof S & string, A extends S[K]>(ord: Ord<S>) => (data: S[]) => S[];
