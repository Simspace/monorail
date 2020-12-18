import { Type } from 'io-ts';
export declare class TrueType extends Type<true> {
    readonly _tag: 'TrueType';
    constructor();
}
export declare const booleanTrue: TrueType;
export declare class FalseType extends Type<false> {
    readonly _tag: 'FalseType';
    constructor();
}
export declare const booleanFalse: FalseType;
