import styled, {
  css,
  FlattenInterpolation,
  SimpleInterpolation,
  ThemeProps,
} from 'styled-components'

import { GlobalAppThemeInterface } from '@monorail/helpers/theme'

export type CssOverrides =
  | SimpleInterpolation
  | FlattenInterpolation<ThemeProps<GlobalAppThemeInterface>>

type Props = {
  cssOverrides?: CssOverrides
}

/**
 * @deprecated please don't use this..
 * 
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
export const Div = styled.div<Props>(
  ({ cssOverrides }) =>
    css`
      ${cssOverrides};
    `,
)

export const Span = styled.span<Props>(
  ({ cssOverrides }) =>
    css`
      ${cssOverrides};
    `,
)

export const Form = styled.form<Props>(
  ({ cssOverrides }) =>
    css`
      ${cssOverrides};
    `,
)
