import * as styledComponents from 'styled-components'

import { GlobalAppThemeInterface } from '@monorail/helpers/theme'

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<
  GlobalAppThemeInterface
>

export { css, createGlobalStyle, keyframes, ThemeProvider }
// tslint:disable-next-line:no-default-export
export default styled
