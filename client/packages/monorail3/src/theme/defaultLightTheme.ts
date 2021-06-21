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

// Constuct a Theme with the base settings plus our customizations, but without the components overrides provided yet.
// We're doing this so we have all the base theme settings populated for doing the component-level overrides. We want
// a Theme here, rather than ThemeOptions because we want all the values to be non-optional and filled-in for the
// component overrides.
const themeWithoutComponents: MUI.Theme = MUI.createTheme({
  ...baseTheme,
  palette: palette,
})

// Now create the `components` overrides using the theme we just created
const components: MUI.ThemeOptions['components'] = getThemeComponents(
  themeWithoutComponents,
)

/**
 * The default light theme which combines the `baseTheme`, the light theme overrides, and the component-level overrides.
 */
export const defaultLightTheme: MUI.Theme = MUI.createTheme(
  {
    ...themeWithoutComponents,
    components: components,
  },
  {},
)
