import React from 'react'
import { defaultLightTheme } from '../src/theme/defaultLightTheme'
import * as MUI from '@material-ui/core'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

// TODO: look into incorporating a storybook theme switcher plugin, so we can preview themes on-the-fly
const theme = defaultLightTheme

/**
 * Decorators to wrap around each rendered story.
 *
 * This is used to wrap the stories in the ThemeProvider, and do other global or context-based things
 */
export const decorators = [
  Story => {
    return (
      <MUI.ThemeProvider theme={theme}>
        {/* TODO: not sure if we assume the use of the CssBaseline here, as I'm not sure we can use this in the portal client app without causing havoc */}
        <MUI.CssBaseline />
        <Story />
      </MUI.ThemeProvider>
    )
  },
]
