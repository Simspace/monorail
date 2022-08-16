import React from 'react'
import { defaultDarkTheme } from '../src/theme/defaultDarkTheme'
import { defaultLightTheme } from '../src/theme/defaultLightTheme'
import { muiLightTheme, muiDarkTheme } from '../src/theme/muiTheme'
import { pcteLightTheme } from '../src/theme/pcteLightTheme'
import { pcteDarkTheme } from '../src/theme/pcteDarkTheme'
import { rebrandDarkTheme } from '../src/theme/rebrandDarkTheme'
import { rebrandLightTheme } from '../src/theme/rebrandLightTheme'
import * as MUI from '@mui/material'
import { StyledEngineProvider } from '@mui/material/styles'
import { DecoratorFn, Parameters } from '@storybook/react'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'

/**
 * Global storybook parameters
 */
export const parameters: Parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'padded',
  controls: {
    matchers: {
      //color: /(background|color)$/i, // MUI uses MUI-specific color identifiers for most color props
      date: /Date$/,
    },
  },
}

enum ThemeOption {
  Classic = 'Classic',
  PCTE = 'PCTE',
  Rebrand = 'Rebrand',
  MUI = 'MUI',
}

/**
 * Theme and color mode switcher in the toolbar
 */
export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Theme switcher',
    defaultValue: ThemeOption.Classic,
    toolbar: {
      items: [
        ThemeOption.Classic,
        ThemeOption.PCTE,
        ThemeOption.Rebrand,
        ThemeOption.MUI,
      ],
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

export const withTheme: DecoratorFn = (Story, context) => {
  const sbTheme: ThemeOption = context.parameters.theme || context.globals.theme
  const sbMode: MUI.PaletteMode =
    context.parameters.colorMode || context.globals.colorMode

  /**
   * ⚠️ All theme options except `MonorailTheme.Classic` are NOT official color palettes.
   * They are used as placeholders and are meant to demonstrate theme switching.
   *
   * The MUI theme option is a combination of `baseTheme` and MUI's default component behavior.
   * It is compatible with our extended design tokens.
   */
  const theme = React.useMemo(() => {
    if (sbMode === 'dark') {
      switch (sbTheme) {
        case ThemeOption.Classic:
          return defaultDarkTheme
        case ThemeOption.PCTE:
          return pcteDarkTheme
        case ThemeOption.Rebrand:
          return rebrandDarkTheme
        case ThemeOption.MUI:
          return muiDarkTheme
      }
    }
    switch (sbTheme) {
      case ThemeOption.Classic:
        return defaultLightTheme
      case ThemeOption.PCTE:
        return pcteLightTheme
      case ThemeOption.Rebrand:
        return rebrandLightTheme
      case ThemeOption.MUI:
        return muiLightTheme
    }
  }, [sbMode, sbTheme])

  React.useEffect(() => {
    const sbDocsPreview = document.querySelectorAll<HTMLElement>('.docs-story')

    document.documentElement.style.backgroundColor =
      theme.palette.background.paper
    document.body.style.backgroundColor = theme.palette.background.paper

    if (sbDocsPreview) {
      sbDocsPreview!.forEach(
        el => (el.style.backgroundColor = theme.palette.background.paper),
      )
    }
  }, [context.viewMode, theme])

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <StyledEngineProvider injectFirst>
        <MUI.ThemeProvider theme={theme}>
          <MUI.CssBaseline />
          <Story />
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
