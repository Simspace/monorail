import * as Eq from 'fp-ts/lib/Eq';
export declare const getUndefinableEq: <T>(eq: Eq.Eq<T>) => Eq.Eq<T | null | undefined>;
/**
 * Case insensitive Eq instance for strings
 */
export declare const eqStringCaseI: Eq.Eq<string>;
/**
 * Generic eq that uses strict equality checking
 */
export declare const eqStrict: {
    equals: typeof Eq.strictEqual;
};
/**
 * Function that returns a generic eq that uses strict equality checking
 *
 * NOTE: This only exists in case you need to explicitly provide a generic
 */
export declare const getEqStrict: <A>() => Eq.Eq<A>;
/**
 * Generic eq that uses shallow equality checking
 */
export declare const eqShallow: {
    equals: <A extends object, B extends object, KA extends keyof A, KB extends keyof B>(objA: A, objB: B) => boolean;
};
/**
 * Function that returns a generic eq that uses shallow equality checking
 *
 * NOTE: This only exists in case you need to explicitly provide a generic
 */
export declare const getEqShallow: <A extends object>() => Eq.Eq<A>;
/**
 * Equality checker for RecordWithName, comparing lowercase names
 */
export declare const recordWithNameLowerEquality: <A extends {
    name: string;
}>(a: A, b: A) => boolean;
/**
 * Eq for RecordWithName using recordWithNameLowerEquality
 */
export declare const eqRecordWithNameLower: Eq.Eq<{
    name: string;
}>;
