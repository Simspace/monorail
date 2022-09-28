import type { ButtonBaseTypeMap } from '@mui/material'
import type { OverridableTypeMap } from '@mui/material/OverridableComponent.js'

import type {
  OverridableComponent,
  OverrideProps,
} from './OverridableComponent.js'

/**
 * utility to create component types that inherit props from ButtonBase.
 * This component has an additional overload if the `href` prop is set which
 * can make extension quite tricky
 */
export interface ExtendButtonBaseTypeMap<M extends OverridableTypeMap> {
  props: M['props'] & Omit<ButtonBaseTypeMap['props'], 'classes'>
  defaultComponent: M['defaultComponent']
}

// prettier-ignore
export type ExtendButtonBase<M extends OverridableTypeMap, K extends Array<string> = []> =
  & ((props: { href: string } & OverrideProps<ExtendButtonBaseTypeMap<M>, 'a', K>) => JSX.Element)
  & OverridableComponent<ExtendButtonBaseTypeMap<M>, K>
