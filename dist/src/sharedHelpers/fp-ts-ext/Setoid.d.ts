import { Setoid } from 'fp-ts/lib/Setoid';
/**
 * Generic setoid that uses strict equality checking
 */
export declare const setoidStrict: {
    equals: any;
};
/**
 * Function that returns a generic setoid that uses strict equality checking
 *
 * NOTE: This only exists in case you need to explicitly provide a generic
 */
export declare const getSetoidStrict: <A>() => any;
/**
 * Generic setoid that uses shallow equality checking
 */
export declare const setoidShallowEq: {
    equals: <A extends object, B extends object, KA extends keyof A, KB extends keyof B>(objA: A, objB: B) => boolean;
};
/**
 * Function that returns a generic setoid that uses shallow equality checking
 *
 * NOTE: This only exists in case you need to explicitly provide a generic
 */
export declare const getSetoidShallowEq: <A extends object>() => any;
/**
 * Equality checker for RecordWithName, comparing lowercase names
 */
export declare const recordWithNameLowerEquality: <A extends {
    name: string;
}>(a: A, b: A) => boolean;
/**
 * Setoid for RecordWithName using recordWithNameLowerEquality
 */
export declare const setoidRecordWithNameLower: Setoid<{
    name: string;
}>;
//# sourceMappingURL=Setoid.d.ts.map