// eslint-disable-next-line no-restricted-imports
import * as MUI from '@material-ui/core'

import { baseTheme } from './baseTheme'
import { getThemeComponents } from './themeComponents'

// Dollop - darkest

const palette: MUI.PaletteOptions = {
  primary: {
    lightest: '#F5F9FF',
    lighter: '#D9E4FD',
    light: '#A1C1FF',
    main: '#7AA8FF',
    dark: '#558DF6',
    darker: '#1465FF',
    darkest: '#0058FF',
  },
  secondary: {
    lightest: '#2066EC',
    lighter: '#1050CB',
    light: '#0C3D99', // dash
    main: '#1A2974', // Dollop
    dark: '#161C4F', // Graphic
    darker: '#0B1038', // Primary
    darkest: '#03072B', // 0058FF
  },
  grey: {
    '50': '#FFFFFF',
    '100': '#F5F5F5',
    '200': '#F0F0F0',
    '300': '#EBEBEB',
    '400': '#E0E0E0',
    '500': '#C2C2C2',
    '600': '#8F8F8F',
    '700': '#757575',
    '800': '#616161',
    '900': '#424242',
  },
  error: {
    lightest: '#FFF6F5',
    lighter: '#FFE3E0',
    light: '#F8B6AF',
    main: '#FF6B66',
    dark: '#F54545',
    darker: '#D41C0B',
    darkest: '#AD0C00',
  },
  info: {
    lightest: '#F5F9FF',
    lighter: '#D9E4FD',
    light: '#A1C1FF',
    main: '#7AA8FF',
    dark: '#558DF6',
    darker: '#1465FF',
    darkest: '#0051EB',
  },
  success: {
    lightest: '#E8FCEE',
    lighter: '#BBF7CD',
    light: '#5BD780',
    main: '#0FBD6F',
    dark: '#08A45E',
    darker: '#007544',
    darkest: '#006038',
  },
  warning: {
    lightest: '#FFF8F0',
    lighter: '#FFE6C7',
    light: '#FFAB57',
    main: '#FF8000',
    dark: '#E56000',
    darker: '#B84514',
    darkest: '#A83200',
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
