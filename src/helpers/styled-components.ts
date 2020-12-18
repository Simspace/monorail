import * as styledComponents from 'styled-components'

import { GlobalAppThemeInterface } from '@monorail/helpers/theme'

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider: ThemeProvider_,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<
  GlobalAppThemeInterface
>

/** @deprecated Use ThemeProvider from v2 instead */
export const ThemeProvider = ThemeProvider_

export type CSSProp = styledComponents.CSSProp<GlobalAppThemeInterface>

// Used for typing props of a styled element
export type StyledProps<
  T extends HTMLElement = HTMLElement
> = React.HTMLAttributes<T> & {
  css?: CSSProp
}

export { css, createGlobalStyle, keyframes, styled }
// tslint:disable-next-line:no-default-export
export default styled
