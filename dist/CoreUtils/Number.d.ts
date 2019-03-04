import { Ord } from 'fp-ts/lib/Ord';
import { Ordering } from 'fp-ts/lib/Ordering';
/**
 * Determines ordering of two strings (numeric comparison)
 */
export declare const numericCompare: (x: number, y: number) => Ordering;
/**
 * Ord instance for number
 */
export declare const ordNumeric: Ord<number>;
