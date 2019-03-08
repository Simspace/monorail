import { Newtype } from 'newtype-ts';
/**
 * NaN is a refinement of number
 */
export interface NaN extends Newtype<{
    readonly NaN: unique symbol;
}, number> {
}
/**
 * Alias for Number.isNaN
 */
export declare const isNewtypeNaN: (number: number) => boolean;
export declare const prismNaN: import("monocle-ts").Prism<number, NaN>;
