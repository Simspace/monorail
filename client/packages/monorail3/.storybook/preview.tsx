import React from 'react'
import { defaultDarkTheme } from '../src/theme/defaultDarkTheme'
import { defaultLightTheme } from '../src/theme/defaultLightTheme'
import { pcteLightTheme } from '../src/theme/pcteLightTheme'
import * as MUI from '@material-ui/core'
import { withThemes } from '@react-theming/storybook-addon' // TODO: there are no types for this, but we don't really need it

/**
 * Global storybook parameters
 */
export const parameters = {
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
export const namedThemes = [
  { name: 'Default Light Theme', ...defaultLightTheme },
  { name: 'Default Dark Theme', ...defaultDarkTheme },
  { name: 'PCTE Light Theme', ...pcteLightTheme },
]

/**
 * Decorators to wrap around each rendered story.
 *
 * This is used to wrap the stories in the ThemeProvider, and do other global or context-based things
 */
export const decorators = [
  /**
   * This is a decorator provided by @react-theming/storybook-addon which allows for dynamically switching between any of the given themes
   */
  withThemes(null, namedThemes, {
    /**
     * Decorator function that wraps stories. Here we wrap the story with a ThemeProvider providing the selected theme,
     * and add the MUI CssBaseline
     */
    providerFn: ({ theme, children }) => {
      return (
        <MUI.ThemeProvider theme={theme}>
          <MUI.CssBaseline />
          {children}
        </MUI.ThemeProvider>
      )
    },
    /**
     * Callback for when the theme is changed. Changes the background color in the canvas for dark/light modes.
     */
    onThemeSwitch: (context: any) => {
      const { theme } = context
      const background = theme.name.toLowerCase().includes('dark')
        ? '#2c2f33' // TODO dark background color (could get this from the theme itself once we know what "foundation" color to use)
        : 'white'
      const parameters = {
        backgrounds: {
          default: background,
        },
      }
      return {
        parameters,
      }
    },
  }),
]
