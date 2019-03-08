/**
 * Tests whether or not an argument is null (type guard)
 */
export declare const isNull: (x: unknown) => x is null;
/**
 * Tests whether or not an argument is undefined (type guard)
 */
export declare const isUndefined: (x: unknown) => x is undefined;
/**
 * Tests whether or not an argument is null or undefined (type guard)
 */
export declare const isNil: (x: unknown) => x is null | undefined;
/**
 * Type guard for the `false` literal of the `boolean` primitive
 */
export declare const isFalse: (x: unknown) => x is false;
/**
 * Type guard for the `true` literal of the `boolean` primitive
 */
export declare const isTrue: (x: unknown) => x is true;
/**
 * Type guard for the `` literal of the `string` primitive
 */
export declare const isEmptyString: (x: unknown) => x is "";
/**
 * Type guard for the `0` literal of the `number` primitive
 */
export declare const isZero: (x: unknown) => x is 0;
/**
 * Type guard for the `number` primitive
 */
export declare const isNumber: (x: unknown) => x is number;
