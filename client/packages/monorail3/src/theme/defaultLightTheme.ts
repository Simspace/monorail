// eslint-disable-next-line no-restricted-imports
import { createTheme, PaletteOptions, Theme, ThemeOptions } from '@mui/material'

import { baseTheme } from './baseTheme'
import { getThemeComponents } from './themeComponents'

export const DefaultLightScoreColors = {
  high: {
    light: '#0FBD6F',
    main: '#007544',
    dark: '#004E2D',
  },
  highModerate: {
    light: '#A8CD14',
    main: '#70840F',
    dark: '#566706',
  },
  moderate: {
    light: '#F7CF08',
    main: '#D18105',
    dark: '#A36403',
  },
  lowModerate: {
    light: '#FF8000',
    main: '#B84514',
    dark: '#93340B',
  },
  low: {
    light: '#FF6B66',
    main: '#D41C0B',
    dark: '#B51405',
  },
}

export const DefaultLightTierColors = {
  one: '#8D74F1',
  two: '#F54545',
  three: '#E56000',
  four: '#08A45E',
}

export const DefaultLightChartColors = {
  blue: {
    50: '#CFEDFF',
    100: '#A4DAFC',
    200: '#84BEFA',
    300: '#5E9DF2',
    400: '#4489DD',
    500: '#2F74C6',
    600: '#2461AE',
    700: '#1A4C97',
    800: '#113980',
    900: '#082769',
    A700: '#0064DC',
    A400: '#3A94FF',
    A200: '#66ABFF',
    A100: '#93C4FF',
  },
  orange: {
    50: '#FFECD2',
    100: '#FFDEB3',
    200: '#FCC482',
    300: '#F3A562',
    400: '#F18849',
    500: '#E27235',
    600: '#CD6029',
    700: '#B84E1F',
    800: '#A33D19',
    900: '#902B13',
    A700: '#FF752B',
    A400: '#FF8F52',
    A200: '#FFA371',
    A100: '#FFBE9A',
  },
  teal: {
    50: '#D0EFE8',
    100: '#9EE7D6',
    200: '#87CFBF',
    300: '#71B9A9',
    400: '#5BA293',
    500: '#468C7E',
    600: '#32776A',
    700: '#276155',
    800: '#1D4D41',
    900: '#13382E',
    A700: '#00D8A7',
    A400: '#46DAB9',
    A200: '#71E1C8',
    A100: '#98ECD9',
  },
  fuchsia: {
    50: '#FFE3F7',
    100: '#FFC3ED',
    200: '#F3A9D4',
    300: '#EA89B3',
    400: '#D36F99',
    500: '#BA5882',
    600: '#A1406B',
    700: '#892856',
    800: '#6D153D',
    900: '#4D0A24',
    A700: '#EE247A',
    A400: '#EE5697',
    A200: '#F084B2',
    A100: '#F0B1CC',
  },
  purple: {
    50: '#EDD6FF',
    100: '#E1BEFB',
    200: '#D1A3F9',
    300: '#C289F8',
    400: '#B36FF7',
    500: '#9D57EC',
    600: '#7F41D6',
    700: '#602BBD',
    800: '#5015A2',
    900: '#280078',
    A700: '#7D1CEC',
    A400: '#9342EE',
    A200: '#AA72EA',
    A100: '#C3A1EA',
  },
}

// https://www.figma.com/file/dKL9YeHgWyxmRHuIjs38f3O9/Monorail-Components?node-id=23496%3A27
const palette: PaletteOptions = {
  primary: {
    hover: '#F5F9FF',
    selected: '#D9E4FD',
    active: '#A1C1FF',
    light: '#7AA8FF',
    main: '#1465FF',
    dark: '#1050CB',
  },
  secondary: {
    hover: '#FFF8F0',
    selected: '#FFE6C7',
    active: '#FCCF87',
    light: '#FFAD39',
    main: '#FF8000',
    dark: '#CF530A',
  },
  default: {
    hover: '#F0F0F0',
    selected: '#EBEBEB',
    active: '#E0E0E0',
    light: '#C2C2C2',
    main: '#757575',
    dark: '#424242',
    contrastText: '#1C1C1C',
  },
  accent: {
    light: '#0C3D99',
    main: '#0C3D99',
    dark: '#161C4F',
  },
  success: {
    hover: '#E8FCEE',
    selected: '#BBF7CD',
    active: '#86E1A1',
    light: '#31C367',
    main: '#029C3F',
    dark: '#086D30',
  },
  error: {
    hover: '#FFF6F5',
    selected: '#FFE3E0',
    active: '#F8B6AF',
    light: '#FF8480',
    main: '#FD3D3D',
    dark: '#AD0C00',
  },
  warning: {
    hover: '#FFF8F0',
    selected: '#FFE6C7',
    active: '#FCCF87',
    light: '#FFAD39',
    main: '#FF8000',
    dark: '#CF530A',
  },
  info: {
    hover: '#F5F9FF',
    selected: '#D9E4FD',
    active: '#A1C1FF',
    light: '#7AA8FF',
    main: '#1465FF',
    dark: '#1050CB',
  },
  text: {
    primary: '#1c1c1c',
    secondary: '#616161',
    disabled: '#C2C2C2',
  },
  grey: {
    50: '#F5F5F5',
    100: '#F0F0F0',
    200: '#EBEBEB',
    300: '#E0E0E0',
    400: '#C2C2C2',
    500: '#8F8F8F',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#1C1C1C',
    A100: '#EBEBEB',
    A200: '#8F8F8F',
    A400: '#616161',
    A700: '#1C1C1C',
  },
  divider: '#E0E0E0',
  rating: '#F3BE1F',
  background: {
    default: '#FAFAFA',
    paper: '#FFFFFF',
  },
  action: {
    activatedOpacity: 0.23,
  },

  chart: DefaultLightChartColors,
  score: DefaultLightScoreColors,
  tiers: DefaultLightTierColors,
}

// Constuct a Theme with the base settings plus our customizations, but without the components overrides provided yet.
// We're doing this so we have all the base theme settings populated for doing the component-level overrides. We want
// a Theme here, rather than ThemeOptions because we want all the values to be non-optional and filled-in for the
// component overrides.
const themeWithoutComponents: Theme = createTheme({
  ...baseTheme,
  palette: palette,
})

// Now create the `components` overrides using the theme we just created
const components: ThemeOptions['components'] = getThemeComponents(
  themeWithoutComponents,
)

/**
 * The default light theme which combines the `baseTheme`, the light theme overrides, and the component-level overrides.
 */
export const defaultLightTheme: Theme = createTheme(
  {
    ...themeWithoutComponents,
    components: components,
  },
  {},
)
