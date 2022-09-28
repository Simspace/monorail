import type * as React from 'react'
import type {
  BaseProps,
  OverridableTypeMap,
} from '@mui/material/OverridableComponent'
import type { DistributiveOmit } from '@mui/types'

import type { RequireKeysUnion } from './RequireKeysUnion.js'

/**
 * A component whose root component can be controlled via a `component` prop.
 *
 * Adjusts valid props based on the type of `component`.
 */
export interface OverridableComponent<
  M extends OverridableTypeMap,
  K extends Array<string> = [],
> {
  <C extends React.ElementType>(
    props: {
      /**
       * The component used for the root node.
       * Either a string to use a HTML element or a component.
       */
      component: C
    } & OverrideProps<M, C, K>,
  ): JSX.Element
  (props: DefaultComponentProps<M, K>): JSX.Element
}

/**
 * Props of the component if `component={Component}` is used.
 */
// prettier-ignore
export type OverrideProps<
  M extends OverridableTypeMap,
  C extends React.ElementType,
	K extends Array<string> = []
> = RequireKeysUnion<(
  & BaseProps<M>
  & DistributiveOmit<React.ComponentPropsWithRef<C>, keyof BaseProps<M>>
), K>;

/**
 * Props if `component={Component}` is NOT used.
 */
// prettier-ignore
export type DefaultComponentProps<M extends OverridableTypeMap, K extends Array<string> = []> =
  RequireKeysUnion<
    & BaseProps<M>
    & DistributiveOmit<React.ComponentPropsWithRef<M['defaultComponent']>, keyof BaseProps<M>>,
    K
  >
