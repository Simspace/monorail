import { Newtype } from 'newtype-ts';
/**
 * NaN is a refinement of number
 */
export interface NaN extends Newtype<{
    readonly NaN: unique symbol;
}, number> {
}
export declare const prismNaN: import("monocle-ts").Prism<number, NaN>;
