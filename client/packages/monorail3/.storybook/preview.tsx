import React from 'react'
import { defaultDarkTheme } from '../src/theme/defaultDarkTheme'
import { defaultLightTheme } from '../src/theme/defaultLightTheme'
import { pcteLightTheme } from '../src/theme/pcteLightTheme'
import * as MUI from '@material-ui/core'
import { Story, StoryContext } from '@storybook/react'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

// TODO: try to integrate/write a storybook theme switcher plugin
//
// This looks promising, but the MuiThemeProvider didn't seem to have an effect, not sure why:
// https://storybook.js.org/addons/@harelpls/storybook-addon-materialui
// https://github.com/mayteio/storybook-addon-materialui
//
// This one also seems relevant, but is specific to emotion, not MUI:
// https://github.com/TheCodingGorilla/storybook-theme-changer/tree/main/src
const themes = {
  'Default Light Theme': defaultLightTheme,
  'Default Dark Theme': defaultDarkTheme,
  'PCTE Light Theme': pcteLightTheme,
}

const activeTheme = themes['Default Light Theme']

const MUIDecorator = (Story: Story, _Context: StoryContext) => {
  return (
    <MUI.ThemeProvider theme={activeTheme}>
      <MUI.CssBaseline />
      <Story />
    </MUI.ThemeProvider>
  )
}

/**
 * Decorators to wrap around each rendered story.
 *
 * This is used to wrap the stories in the ThemeProvider, and do other global or context-based things
 */
export const decorators = [MUIDecorator]
