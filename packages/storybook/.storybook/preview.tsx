import React from 'react'
import {
  classicLight,
  classicDark,
  pcteDark,
  pcteLight,
  rebrandDarkTheme,
  rebrandLightTheme,
  muiDark,
  muiLight,
} from '@monorail/themes'
import { CssBaseline, GlobalStyles, ThemeProvider } from '@monorail/components'
import * as MUI from '@mui/material'
import { DecoratorFn, Parameters } from '@storybook/react'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { StyledEngineProvider } from '@monorail/components/StyledEngineProviderEmotion'
import { menlo } from '../assets/menlo'
import { inter } from '../assets/inter'
import { ibmPlex } from '../assets/ibmPlex'
import { gotham } from '../assets/gotham'

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
  options: {
    storySort: {
      order: [
        'Theme',
        [
          'Palette',
          [
            'Semantic Colors',
            'Foundation',
            'Action',
            'Utility',
            'Charts',
            'Score',
            'Tiers',
          ],
          'Typography',
          ['Fonts', 'Components'],
          'Shadows',
        ],
        'Surfaces',
        'Feedback',
        'Inputs',
        'Data Display',
        'Navigation',
        'Layout',
        'Data Grid',
        'Utils',
      ],
    },
  },
}

const enum ThemeOption {
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
          return classicDark
        case ThemeOption.PCTE:
          return pcteDark
        case ThemeOption.Rebrand:
          return rebrandDarkTheme
        case ThemeOption.MUI:
          return muiDark
      }
    }
    switch (sbTheme) {
      case ThemeOption.Classic:
        return classicLight
      case ThemeOption.PCTE:
        return pcteLight
      case ThemeOption.Rebrand:
        return rebrandLightTheme
      case ThemeOption.MUI:
        return muiLight
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
        <ThemeProvider theme={theme}>
          <GlobalStyles styles={inter + ibmPlex + gotham + menlo} />
          <CssBaseline />
          <Story />
        </ThemeProvider>
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
