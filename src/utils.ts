import {
  ClassAttributes,
  Component,
  ComponentState,
  HTMLAttributes,
} from 'react'
import { ThemedOuterStyledProps } from 'styled-components'

/**
 * Type utility for use with styled wrapper refs
 *
 * NOTE: This is somewhat of a hack... it's a workaround
 * for dealing with the difficulty of passing refs through
 * to components made by the `styled` function of
 * styled-components when extending an HTMLElement
 */
export type StyledHtmlElement<
  BaseType,
  BaseTypeProps,
  ThemeType = any
> = BaseType &
  Component<
    ThemedOuterStyledProps<
      BaseTypeProps & ClassAttributes<BaseType> & HTMLAttributes<BaseType>,
      ThemeType
    >,
    ComponentState
  >

/**
 * A type representing either null or undefined
 */
export type Nil = null | undefined

/**
 * Tests whether or not an argument is null (type guard)
 */
export const isNull = (x: any): x is null => x === null

/**
 * Tests whether or not an argument is undefined (type guard)
 */
export const isUndefined = (x: any): x is undefined => x === undefined

/**
 * Tests whether or not an argument is null or undefined (type guard)
 */
export const isNil = (x: any): x is Nil => isNull(x) || isUndefined(x)
