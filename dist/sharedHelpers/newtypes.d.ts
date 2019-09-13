import { Newtype } from 'newtype-ts';
/**
 * NaN is a refinement of number
 */
export interface NaN extends Newtype<{
    readonly NaN: unique symbol;
}, number> {
}
export declare const prismNaN: import("monocle-ts").Prism<number, NaN>;
/**
 * Infinity is a refinement of number
 */
export interface Infinity extends Newtype<{
    readonly Infinity: unique symbol;
}, number> {
}
export declare const prismInfinity: import("monocle-ts").Prism<number, Infinity>;
/**
 * Finite is a refinement of number
 */
export interface Finite extends Newtype<{
    readonly Finite: unique symbol;
}, number> {
}
export declare const prismFinite: import("monocle-ts").Prism<number, Finite>;
