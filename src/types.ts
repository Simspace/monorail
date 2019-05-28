import { Location, LocationDescriptor } from 'history'
import { CSSProperties, ReactType } from 'react'
import { IndexLinkProps } from 'react-router'
import {
  FlattenInterpolation,
  SimpleInterpolation,
  ThemeProps,
} from 'styled-components'

import { GlobalAppThemeInterface } from '@monorail/helpers/theme'

export type CssOverridesType =
  | SimpleInterpolation
  | FlattenInterpolation<ThemeProps<GlobalAppThemeInterface>>

export type CommonComponentType = {
  as?: ReactType
  className?: string
  cssOverrides?: CssOverridesType
  id?: string
  tabIndex?: number
}

export type TypographyComponent = {
  margin?: string
}

// Match types for "to" from LinkProps of react-router
type ToLocationFunction = (location: Location) => LocationDescriptor

export type LinkProps = {
  activeClassName?: string
  activeStyle?: CSSProperties
  onlyActiveOnIndex?: boolean
  to?: IndexLinkProps['to']
}
