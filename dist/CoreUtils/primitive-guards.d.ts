/**
 * Tests whether or not an argument is null (type guard)
 */
export declare const isNull: (x: any) => x is null;
/**
 * Tests whether or not an argument is undefined (type guard)
 */
export declare const isUndefined: (x: any) => x is undefined;
/**
 * Tests whether or not an argument is null or undefined (type guard)
 */
export declare const isNil: (x: any) => x is null | undefined;
/**
 * Type guard for the `false` literal of the `boolean` primitive
 */
export declare const isFalse: (x: any) => x is false;
/**
 * Type guard for the `true` literal of the `boolean` primitive
 */
export declare const isTrue: (x: any) => x is true;
/**
 * Type guard for the `` literal of the `string` primitive
 */
export declare const isEmptyString: (x: any) => x is "";
/**
 * Type guard for the `0` literal of the `number` primitive
 */
export declare const isZero: (x: any) => x is 0;
/**
 * Type guard for the `number` primitive
 */
export declare const isNumber: (x: any) => x is number;
