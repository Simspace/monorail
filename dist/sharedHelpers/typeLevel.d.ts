import { Either } from 'fp-ts/lib/Either';
import { HKT, HKT2, HKT3, HKT4, URIS, URIS2, URIS3, URIS4 } from 'fp-ts/lib/HKT';
import { Option } from 'fp-ts/lib/Option';
import { ReactElement } from 'react';
import { NaN } from './newtypes';
/**
 * Type representing possible TypeScript primitive types
 */
export declare type Primitive = string | number | boolean | undefined | null | void | {};
/**
 * Type representing possible TypeScript primitive types we consider safe
 */
export declare type SafePrimitive = string | number | boolean | object;
/**
 * Type representing all possible falsy values, uses a newtype
 * to represent NaN
 */
export declare type Falsy = null | undefined | false | '' | 0 | NaN;
/**
 * Type representing all truthy values
 */
export declare type Truthy<T> = T extends Falsy ? never : T;
/**
 * Type-level utils to extract types from HKTs
 */
export declare type HKT1S<A = unknown> = HKT<URIS, A>;
export declare type HKT2S<L = unknown, A = unknown> = HKT2<URIS2, L, A>;
export declare type HKT3S<U = unknown, L = unknown, A = unknown> = HKT3<URIS3, U, L, A>;
export declare type HKT4S<X = unknown, U = unknown, L = unknown, A = unknown> = HKT4<URIS4, X, U, L, A>;
export declare type HKTS = HKT1S | HKT2S | HKT3S | HKT4S;
export declare type ExtractFromHKT1<F> = F extends HKT1S<infer A> ? A : never;
export declare type ExtractFromHKT2<F> = F extends HKT2S<infer L, infer A> ? [L, A] : never;
export declare type ExtractFromHKT3<F> = F extends HKT3S<infer U, infer L, infer A> ? [U, L, A] : never;
export declare type ExtractFromHKT4<F> = F extends HKT4S<infer X, infer U, infer L, infer A> ? [X, U, L, A] : never;
export declare type ExtractFromHKTS<F extends HKTS> = F extends HKT1S ? ExtractFromHKT1<F> : F extends HKT2S ? ExtractFromHKT2<F> : F extends HKT3S ? ExtractFromHKT3<F> : F extends HKT4S ? ExtractFromHKT4<F> : never;
export declare type ExtractAFromHKT<F extends HKT1S> = ExtractFromHKT1<F>;
export declare type ExtractLFromHKT2<F extends HKT2S> = ExtractFromHKT2<F>['0'];
export declare type ExtractAFromHKT2<F extends HKT2S> = ExtractFromHKT2<F>['1'];
export declare type ExtractUFromHKT3<F extends HKT3S> = ExtractFromHKT3<F>['0'];
export declare type ExtractLFromHKT3<F extends HKT3S> = ExtractFromHKT3<F>['1'];
export declare type ExtractAFromHKT3<F extends HKT3S> = ExtractFromHKT3<F>['2'];
export declare type ExtractXFromHKT4<F extends HKT4S> = ExtractFromHKT4<F>['0'];
export declare type ExtractUFromHKT4<F extends HKT4S> = ExtractFromHKT4<F>['1'];
export declare type ExtractLFromHKT4<F extends HKT4S> = ExtractFromHKT4<F>['2'];
export declare type ExtractAFromHKT4<F extends HKT4S> = ExtractFromHKT4<F>['3'];
/**
 * Type-level util to extract the type A in Option<A>
 */
export declare type ExtractAFromOption<O extends Option<unknown>> = ExtractAFromHKT<O>;
/**
 * Type-level util to extract the type T in Array<T>
 */
export declare type ExtractTFromArray<A extends Array<unknown>> = ExtractAFromHKT<A>;
/**
 * Type-level utils to extract the types L and A in Either<L, A>
 */
export declare type ExtractLFromEither<E extends Either<unknown, unknown>> = ExtractLFromHKT2<E>;
export declare type ExtractAFromEither<E extends Either<unknown, unknown>> = ExtractAFromHKT2<E>;
/**
 * Generic nullable type for unions with `null`
 */
export declare type Nullable<A> = A | null;
/**
 * Generic undefinedable type for unions with `undefined`
 */
export declare type Undefinedable<A> = A | undefined;
/**
 * A type representing either null or undefined
 */
export declare type Nil = null | undefined;
/**
 * Generic nillable type for unions with Nil (`null` and `undefined`)
 */
export declare type Nilable<A> = A | Nil;
/**
 * Equivalent to TypeScript's built-in NonNullable, but with consistent naming
 */
export declare type NonNilable<T> = T extends Nil ? never : T;
/**
 * A reusable, flexible conditional type utlity which let's you express a
 * conditional return type based on whether or not generic `A` is a subtype of
 * generic `B` in a concise way
 */
export declare type IfIsThenElse<A, B, Then, Else> = [A] extends [B] ? Then : Else;
/**
 * A partially applied version of IfIsThenElse where generic `B` is `never`
 */
export declare type IfIsNeverThenElse<A, Then, Else> = IfIsThenElse<A, never, Then, Else>;
/**
 * Like TypeScript's native Required, but also disallows null
 * (All props must be defined & non-null)
 */
export declare type RequireNonNilable<A> = {
    [P in keyof A]-?: NonNilable<A[P]>;
};
/**
 * Map over `Record` property values and unbox those of type `Option<A>` to type `A`
 */
export declare type UnboxRecordPropertyOptionValues<R extends Record<PropertyKey, unknown>> = {
    [K in keyof R]: R[K] extends Option<infer A> ? A : R[K];
};
/**
 * Alias of ReactElement | null, similar to ReactNode, but compatible with FunctionComponent
 */
export declare type ReactRenderable = Nullable<ReactElement>;
