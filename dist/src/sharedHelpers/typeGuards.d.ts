import { Refinement } from 'fp-ts/lib/function';
import { Falsy, Nil, Undefinedable } from './typeLevel';
/**
 *  FP-TS tag
 */
export declare type TaggedObject<A> = A & {
    _tag: string;
};
/**
 * FP-TS data structures are tagged objects
 * but the tag isn't part of the type signature
 * this helps identify those objects.
 */
export declare const isTaggedObject: <A>(x: unknown) => x is TaggedObject<A>;
export declare type GuardedType<G, I = unknown> = G extends Refinement<I, infer T> ? T : never;
/**
 * Will throw a type error if switch cases aren't exhaustive.
 */
export declare const assertNever: (x: never) => never;
/** Ensures all actions in reducer are handled in switch statement */
export declare const endReducer: <T>(state: T, _action: never) => T;
/**
 * Tests whether or not an argument is null (type guard)
 */
export declare const isNull: (x: unknown) => x is null;
/**
 * Tests whether or not an argument is undefined (type guard)
 */
export declare const isUndefined: (x: unknown) => x is undefined;
/**
 * Tests whether or not an argument is not undefined (type guard)
 */
export declare const isNotUndefined: <T>(x: Undefinedable<T>) => x is Exclude<T, undefined>;
/**
 * Tests whether or not an argument is null or undefined (type guard)
 */
export declare const isNil: (x: unknown) => x is null | undefined;
/**
 * Tests whether or not an argument is null or undefined (type guard)
 */
export declare const isNotNil: <T>(x: T | null | undefined) => x is T;
export declare const isBoolean: (x: unknown) => x is boolean;
/**
 * Type guard for the `false` literal of the `boolean` primitive
 */
export declare const isFalse: (x: unknown) => x is false;
/**
 * Type guard for the `true` literal of the `boolean` primitive
 */
export declare const isTrue: (x: unknown) => x is true;
/**
 * Type guard for the `0` literal of the `number` primitive
 */
export declare const isZero: (x: unknown) => x is 0;
/**
 * Type guard for the Falsy type
 */
export declare const isFalsy: (x: unknown) => x is Falsy;
/**
 * Type guard for the `string` primitive
 */
export declare const isString: (x: unknown) => x is string;
/**
 *
 * @param x Type guard for not the `string` primitive
 */
export declare const isNotString: <T>(x: T) => x is Exclude<T, string>;
/**
 * Type guard for the `''` literal of the `string` primitive
 */
export declare const isEmptyString: (x: unknown) => x is "";
/**
 * Type guard for `string` primitives that are not `''`
 */
export declare const isNonEmptyString: (x: unknown) => x is string;
/**
 * Type guard for the `number` primitive
 */
export declare const isNumber: (x: unknown) => x is number;
/**
 * The opposite of isNaN (built-in)
 */
export declare const isNotNaN: (x: unknown) => x is number;
/**
 * Type guard for finite `number` primitive
 * false for NaN, -Infinity, Infinity
 */
export declare const isFinite: (x: unknown) => x is number;
/**
 * Type guard for the `object` type
 */
export declare const isObject: (x: unknown) => x is object;
/**
 * Type guard for the `Function` type
 */
export declare const isFunction: (x: unknown) => x is Function;
/**
 * Type guard for the `Array` type
 */
export declare const isArray: <T>(as: unknown) => as is T[];
/**
 * Type guard for the `Array` type with `.length > 0`
 * NOTE: this is *not* an fp-ts NonEmptyArray
 */
export declare const isNonEmptyArray: <T>(as: unknown) => as is T[];
/**
 * Type guard for the `Array<boolean>` type
 */
export declare const isBooleanArray: (as: unknown) => as is boolean[];
/**
 * Type guard for the `Array<number>` type
 */
export declare const isNumberArray: (as: unknown) => as is number[];
/**
 * Type guard for the `Array<string>` type
 */
export declare const isStringArray: (as: unknown) => as is string[];
/**
 * Typeguard for making sure a key is in an object when the object has no index signature
 */
export declare function hasKey<O, K extends string | number | symbol>(obj: O, key: K): obj is O & {
    [k in K]: unknown;
};
//# sourceMappingURL=typeGuards.d.ts.map