import React from 'react'
import { defaultDarkTheme } from '../src/theme/defaultDarkTheme'
import { defaultLightTheme } from '../src/theme/defaultLightTheme'
import { pcteLightTheme } from '../src/theme/pcteLightTheme'
import * as MUI from '@mui/material'
import { StyledEngineProvider } from '@mui/material/styles'
import { Parameters } from '@storybook/react'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'

/**
 * Global storybook parameters
 */
export const parameters: Parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      //color: /(background|color)$/i, // MUI uses MUI-specific color identifiers for most color props
      date: /Date$/,
    },
  },
}

/**
 * List of MUI themes to expose via storybook
 *
 * Name is tacked on for the storybook theme switcher addon
 */
const namedThemes = [
  { name: 'Default Light Theme', theme: defaultLightTheme },
  { name: 'Default Dark Theme', theme: defaultDarkTheme },
  { name: 'PCTE Light Theme', theme: pcteLightTheme },
]

// TODO: incorporate a theme switcher plugin
// Beware that many of them seem to have a problem with trying to serialize data between iframes
// using storybook-postchannel and this telejson library.
// I tried @react-theming/storybook-addon and storybook-facelift and they seemed to have the same issue.
// We might consider writing a super basic theme switcher that doesn't have this bad data serialization
const selectedTheme = namedThemes[0].theme

/**
 * Decorators to wrap around each rendered story.
 *
 * This is used to wrap the stories in the ThemeProvider, and do other global or context-based things
 */
export const decorators = [
  Story => (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <StyledEngineProvider injectFirst>
        <MUI.ThemeProvider theme={selectedTheme}>
          <MUI.CssBaseline />
          <Story />
        </MUI.ThemeProvider>
      </StyledEngineProvider>
    </LocalizationProvider>
  ),
]
