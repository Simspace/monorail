import { Setoid } from 'fp-ts/lib/Setoid';
/**
 * Generic setoid that uses strict equality checking
 */
export declare const setoidStrict: {
    equals: <A>(a: A, b: A) => boolean;
};
/**
 * Function that returns a generic setoid that uses strict equality checking
 */
export declare const getSetoidStrict: <A>() => Setoid<A>;
/**
 * Generic setoid that uses shallow equality checking
 */
export declare const setoidShallowEq: {
    equals: <A extends object, B extends object, KA extends keyof A, KB extends keyof B>(objA: A, objB: B) => boolean;
};
/**
 * Function that returns a generic setoid that uses shallow equality checking
 */
export declare const getSetoidShallowEq: <A extends object>() => Setoid<A>;
