import React, { ReactNode, useContext, useMemo } from 'react'
// eslint-disable-next-line no-restricted-imports
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import {
  ThemeContext,
  ThemeProvider as ScThemeProvider,
} from 'styled-components'

import { GlobalAppThemeInterface, Mode } from '@monorail/helpers/theme'
import {
  monorailDarkTheme,
  monorailLightTheme,
} from '@monorail/v2/core/theme/colors'
import { createMuiThemeFromSc } from '@monorail/v2/core/theme/muiTheme'

/**
 * Composes styled-components and Material UI theme providers together. Allows for override of styled-component theme.
 */
export const ThemeProvider = (props: {
  children: ReactNode
  theme:
    | GlobalAppThemeInterface
    | ((theme: GlobalAppThemeInterface) => GlobalAppThemeInterface)
}) => {
  // Allow theme modification via callback similar to styled-components' API
  const outerTheme = useContext<GlobalAppThemeInterface>(ThemeContext)
  const modifiedThemeSC =
    typeof props.theme === 'function' ? props.theme(outerTheme) : props.theme

  const themeMUI = useMemo(() => createMuiThemeFromSc(modifiedThemeSC), [
    modifiedThemeSC,
  ])

  return (
    <ScThemeProvider theme={modifiedThemeSC}>
      <MuiThemeProvider theme={themeMUI}>{props.children}</MuiThemeProvider>
    </ScThemeProvider>
  )
}
