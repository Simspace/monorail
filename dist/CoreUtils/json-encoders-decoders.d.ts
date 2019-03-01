import * as t from 'io-ts';
import { Option } from 'fp-ts/lib/Option';
import { Lens } from 'monocle-ts';
export declare type JSONNone = {
    _tag: 'None';
};
export declare type JSONSome<A> = {
    _tag: 'Some';
    value: A;
};
export declare type JSONOption<A> = JSONNone | JSONSome<A>;
/**
 * JSONNone constructor
 */
export declare const jsonNone: JSONOption<never>;
/**
 * JSONSome constructor
 */
export declare const jsonSome: <A>(value: A) => JSONOption<A>;
/**
 * Type guard for isJSONNone
 */
export declare const isJSONNone: <A>(x: JSONOption<A>) => x is JSONNone;
/**
 * Type guard for isJSONSome
 */
export declare const isJSONSome: <A>(x: JSONOption<A>) => x is JSONSome<A>;
/**
 * Fold function for JSONOption<A>
 */
export declare const fold: <A, R>(fa: JSONOption<A>, onNone: R, onSome: (value0: A) => R) => R;
/**
 * Helper utility for creating a codec for Option<A> <- -> JSONOption<A>
 */
export declare const createOptionFromJSON: <C extends t.Mixed>(codec: C, name?: string) => t.Type<Option<C["_A"]>, JSONOption<C["_O"]>, unknown>;
/**
 * Helper utility for creating selectors that automatically handle decoding
 * JSONOptions back into Options when given a codec and a lens
 */
export declare const mkJSONOptionDecoderSelector: <A>(codec: t.Type<Option<A>, JSONOption<A>, unknown>) => <S>(lens: Lens<S, JSONOption<A>>) => (urls: S) => Option<A>;
