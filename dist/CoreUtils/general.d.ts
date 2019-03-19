import { Function2 } from 'fp-ts/lib/function';
import { Falsy } from './type-level';
export declare const constVoid: () => void;
/**
 * Flips the order of the arguments to an uncurried function taking two
 * arguments.
 */
export declare const flip_: <A, B, C>(f: Function2<A, B, C>) => Function2<B, A, C>;
/**
 * Simple binary composition. Also known as `compose2`
 */
export declare const o: <A, B, C>(f: (y: B) => C, g: (x: A) => B) => (x: A) => C;
/**
 * Api action helper
 *
 * Example:
 * const LoadPackagesApiActionTypes = makeApiActionTypes(
 *   'learning/content-authoring/LOAD_PACKAGES/optimistic',
 *   'learning/content-authoring/LOAD_PACKAGES/request',
 *   'learning/content-authoring/LOAD_PACKAGES/success',
 *   'learning/content-authoring/LOAD_PACKAGES/failure',
 * )
 */
export declare const makeApiActionTypes: <A extends [string, string, string, string]>(...args: A) => {
    optimistic: A[0];
    request: A[1];
    success: A[2];
    failure: A[3];
};
/**
 * Constant action helper
 *
 * Example:
 * const LoadPackages = makeConstantActionType(
 *   'learning/content-authoring/LOAD_PACKAGES',
 * )
 */
export declare const makeConstantActionType: <A extends [string]>(...args: A) => A[0];
/**
 * Type guard for the Falsy type
 */
export declare const isFalsy: (x: any) => x is Falsy;
