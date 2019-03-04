import { Option } from 'fp-ts/lib/Option';
import { ClassAttributes, Component, ComponentState, HTMLAttributes } from 'react';
import { ThemedOuterStyledProps } from 'styled-components';
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
 * Type representing all possible falsey values, uses a newtype
 * to represent NaN
 */
export declare type Falsey = null | undefined | false | '' | 0 | NaN;
/**
 * Type representing all truthy values
 */
export declare type Truthy<T> = T extends Falsey ? never : T;
/**
 * Type-level util to extract the type A in Option<A>
 */
export declare type ExtractFromOption<A> = A extends Option<infer B> ? B : never;
/**
 * Type-level util to extract the type A in Array<A>
 */
export declare type ExtractFromArray<A> = A extends Array<infer B> ? B : never;
/**
 * Type utility for use with styled wrapper refs
 *
 * NOTE: This is somewhat of a hack... it's a workaround
 * for dealing with the difficulty of passing refs through
 * to components made by the `styled` function of
 * styled-components when extending an HTMLElement
 */
export declare type StyledHtmlElement<BaseType, BaseTypeProps, ThemeType = unknown> = BaseType & Component<ThemedOuterStyledProps<BaseTypeProps & ClassAttributes<BaseType> & HTMLAttributes<BaseType>, ThemeType>, ComponentState>;
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
