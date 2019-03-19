import React from 'react'
import {
  default as styledOrig,
  FlattenInterpolation,
  SimpleInterpolation,
  ThemeProps,
} from 'styled-components'
import { GlobalAppThemeInterface } from '@monorail/globalAppTheme'

export type CssOverrides =
  | SimpleInterpolation
  | FlattenInterpolation<ThemeProps<GlobalAppThemeInterface>>[]

export type StyledComponentCssOverrides = {
  cssOverrides?: CssOverrides
}

/**
 * TODO: Get rid of this. This was something Dan added that isn't correctly typed. Any references should be replaced
 * with styled<Props, 'div'>('div')
 */
export const styled = <P, E = HTMLDivElement>(
  tagName: string | React.ComponentType<P>,
) => styledOrig<P & React.HTMLProps<E>, any>(tagName) // tslint:disable-line:no-any

type Props = {
  cssOverrides?: CssOverrides
}

/**
 * The Div helper is a component that accepts `css` prop so we can easily inline CSS Objects with TypeScript support.
 * The `cssLoose` property offers a relaxed typing for arbitrary string keys (escape hatch, e.g. `& > #blah`)
 *
 * Usage:
 ```
  <Div
    cssOverrides={{ display: 'flex'}}
    cssLoose={{ '& > div': { display: 'flex' }}}
  />
 ```
 */
export const Div = styledOrig<Props, 'div'>('div')`
  ${({ cssOverrides }) => cssOverrides}
`

export const Form = styledOrig<Props, 'form'>('form')`
  ${({ cssOverrides }) => cssOverrides}
`
