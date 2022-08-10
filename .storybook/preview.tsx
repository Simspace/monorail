import React from 'react'
import { defaultDarkTheme } from '../src/theme/defaultDarkTheme'
import { defaultLightTheme } from '../src/theme/defaultLightTheme'
import { pcteLightTheme } from '../src/theme/pcteLightTheme'
import { pcteDarkTheme } from '../src/theme/pcteDarkTheme'
import { rebrandDarkTheme } from '../src/theme/rebrandDarkTheme'
import { rebrandLightTheme } from '../src/theme/rebrandLightTheme'
import * as MUI from '@mui/material'
import { StyledEngineProvider } from '@mui/material/styles'
import { DecoratorFn, Parameters } from '@storybook/react'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { excludeProps } from '../src/utils/styled/excludeProps'

/**
 * Global storybook parameters
 */
export const parameters: Parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'fullscreen',
  controls: {
    matchers: {
      //color: /(background|color)$/i, // MUI uses MUI-specific color identifiers for most color props
      date: /Date$/,
    },
  },
}

enum MonorailTheme {
  Classic = 'Classic',
  PCTE = 'PCTE',
  Rebrand = 'Rebrand',
}

/**
 * Theme and color mode switcher in the toolbar
 */
export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Theme switcher',
    defaultValue: MonorailTheme.Classic,
    toolbar: {
      items: [MonorailTheme.Classic, MonorailTheme.PCTE, MonorailTheme.Rebrand],
      showName: true,
      dynamicTitle: true,
    },
  },
  colorMode: {
    name: 'Color Mode',
    description: 'Light/dark mode switcher',
    defaultValue: 'light',
    toolbar: {
      items: [
        { value: 'light', icon: 'circlehollow', title: 'Light' },
        { value: 'dark', icon: 'circle', title: 'Dark' },
      ],
      showName: true,
      dynamicTitle: true,
    },
  },
}

const ThemeBlock = MUI.styled('div', {
  shouldForwardProp: excludeProps('fill'),
})<{ fill: boolean }>(({ fill, theme }) => ({
  height: fill ? '100vh' : 'auto',
  overflow: 'auto',
  padding: theme.spacing(4, 4, 10, 4),
  background: theme.palette.background.paper,
}))

export const withTheme: DecoratorFn = (Story, context) => {
  const sbTheme: MonorailTheme =
    context.parameters.theme || context.globals.theme
  const sbMode: MUI.PaletteMode =
    context.parameters.colorMode || context.globals.colorMode

  const theme = React.useMemo(() => {
    if (sbMode === 'dark') {
      switch (sbTheme) {
        case MonorailTheme.Classic:
          return defaultDarkTheme
        case MonorailTheme.PCTE:
          return pcteDarkTheme
        case MonorailTheme.Rebrand:
          return rebrandDarkTheme
      }
    }
    switch (sbTheme) {
      case MonorailTheme.Classic:
        return defaultLightTheme
      case MonorailTheme.PCTE:
        return pcteLightTheme
      case MonorailTheme.Rebrand:
        return rebrandLightTheme
    }
  }, [sbMode, sbTheme])

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <StyledEngineProvider injectFirst>
        <MUI.ThemeProvider theme={theme}>
          <MUI.CssBaseline />
          <ThemeBlock fill={context.viewMode === 'story' ? true : false}>
            <Story />
          </ThemeBlock>
        </MUI.ThemeProvider>
      </StyledEngineProvider>
    </LocalizationProvider>
  )
}

/**
 * Decorators to wrap around each rendered story.
 *
 * This is used to wrap the stories in the ThemeProvider, and do other global or context-based things
 */
export const decorators = [withTheme]
