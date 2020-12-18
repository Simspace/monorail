import React from 'react'
// eslint-disable-next-line no-restricted-imports
import { StylesProvider } from '@material-ui/styles'
import useTheme from '@theme/hooks/useTheme'
import ThemeContext from '@theme/ThemeContext'

import { ThemeProvider as MonorailThemeProvider } from '@monorail/helpers/styled-components'
import { monorailTheme } from '@monorail/helpers/theme'

import { GlobalStyles } from 'src/GlobalStyles'

function ThemeProvider(props) {
  const { isDarkTheme, setLightTheme, setDarkTheme } = useTheme()
  return (
    <ThemeContext.Provider
      value={{
        isDarkTheme,
        setLightTheme,
        setDarkTheme,
      }}
    >
      <StylesProvider injectFirst>
        <GlobalStyles />
        <MonorailThemeProvider theme={monorailTheme}>
          {/* Adding the gotham class is a hack here, but the way it's
          injected in the main app is also kind of crappy :/
          See client.tsx in main client
          */}
          <div className="gotham">{props.children}</div>
        </MonorailThemeProvider>
      </StylesProvider>
    </ThemeContext.Provider>
  )
}

// tslint:disable-next-line: no-default-export
export default ThemeProvider
