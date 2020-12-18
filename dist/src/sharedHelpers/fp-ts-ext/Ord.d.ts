import { Ord } from 'fp-ts/lib/Ord';
import { Ordering } from 'fp-ts/lib/Ordering';
/**
 * Determines ordering of two numbers (numeric comparison)
 */
export declare const numericCompare: (x: number, y: number) => Ordering;
/**
 * Ord instance for number
 */
export declare const ordNumeric: Ord<number>;
/**
 * Determines ordering of two strings (alphabetic comparison)
 */
export declare const alphaCompare: (x: string, y: string) => Ordering;
/**
 * Ord instance for string
 */
export declare const ordAlpha: Ord<string>;
export declare const ordCaseInsensitiveString: Ord<string>;
/**
 * Comparator for RecordWithName, comparing lowercase names alphabetically
 */
export declare const recordWithNameLowerComparator: <A extends {
    name: string;
}>(a: A, b: A) => Ordering;
/**
 * Ord instance for types extending the RecordWithName interface
 * that does comparisons & equality checking against the name prop
 * converted to lowercase
 */
export declare const ordRecordWithNameLower: Ord<{
    name: string;
}>;
/**
 * Inverts an Ord instance
 * @param o
 */
export declare const invert: <T>(o: Ord<T>) => Ord<T>;
/**
 * Returns an Ord for a tuple that only compares the first element
 * @param ord
 */
export declare const getTupleOrdFst: <A, B>(ord: Ord<A>) => Ord<[A, B]>;
/**
 * Returns an Ord for a readonly tuple that only compares the first element
 * @param ord
 */
export declare const getReadonlyTupleOrdFst: <A, B>(ord: Ord<A>) => Ord<readonly [A, B]>;
/**
 * Returns an Ord for a tuple that only compares the second element
 * @param ord
 */
export declare const getTupleOrdSnd: <A, B>(ord: Ord<B>) => Ord<[A, B]>;
/**
 * Returns an Ord for a readonly tuple that only compares the second element
 * @param ord
 */
export declare const getReadonlyTupleOrdSnd: <A, B>(ord: Ord<B>) => Ord<readonly [A, B]>;
export declare const ordDateFromString: Ord<string>;
