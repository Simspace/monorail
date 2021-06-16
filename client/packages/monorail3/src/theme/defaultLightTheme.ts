// eslint-disable-next-line no-restricted-imports
import * as MUI from '@material-ui/core'

import { baseTheme } from './baseTheme'
import { getThemeComponents } from './themeComponents'

const palette: MUI.PaletteOptions = {
  // TODO: This is just an example of using the extended interfaces/types from Theme - colors are not correct
  primary: {
    lightest: 'rgb(245, 249, 255)',
    lighter: 'rgb(217, 228, 253)',
    light: 'rgb(161, 193, 255)',
    main: 'rgb(122, 168, 255)',
    dark: 'rgb(85, 141, 246)',
    darker: 'rgb(16, 80, 203)',
    darkest: 'rgb(12, 61, 153)',
  },
  // Custom semantic color
  accent: {
    lightest: 'rgb(0, 249, 255)',
    lighter: 'rgb(0, 228, 253)',
    light: 'rgb(0, 193, 255)',
    main: 'rgb(0, 168, 255)',
    dark: 'rgb(0, 141, 246)',
    darker: 'rgb(0, 80, 203)',
    darkest: 'rgb(0, 61, 153)',
    contrastText: '#fff',
  },
  // Custom non-semantic colors
  special: {
    cktTiers: {
      tier1: '#f00',
      tier2: '#ff0',
      tier3: '#0ff',
      tier4: '#00f',
    },
    charts: {
      chart1: '#000',
      chart2: '#000',
    },
  },
}

const themeWithoutComponents: Omit<MUI.ThemeOptions, 'components'> = {
  ...baseTheme,
  palette: palette,
}

const components: MUI.ThemeOptions['components'] = getThemeComponents(
  themeWithoutComponents,
)

export const defaultLightTheme: MUI.Theme = MUI.createTheme(
  {
    ...themeWithoutComponents,
    components: components,
  },
  {},
)
