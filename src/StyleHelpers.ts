import { GlobalAppThemeInterface } from '@monorail/globalAppTheme'
import styled, {
  FlattenInterpolation,
  SimpleInterpolation,
  ThemeProps,
  css,
} from 'styled-components'

export type CssOverrides =
  | SimpleInterpolation
  | FlattenInterpolation<ThemeProps<GlobalAppThemeInterface>>

export type StyledComponentCssOverrides = {
  cssOverrides?: CssOverrides
}

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

export const Div = styled.div<Props>(
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
