// eslint-disable-next-line no-restricted-imports
import type { PaletteOptions, Theme, ThemeOptions } from '@mui/material'
import { createTheme } from '@mui/material'

import { baseTheme } from '@monorail/themes/classic/theme/baseTheme'
import { getThemeComponents } from '@monorail/themes/classic/theme/themeComponents'

// #region Raw Colors (Option Tokens)
/**
 * Context-free named colors. Only meant to be used by aliases
 */
export enum RawColor {
  Transparent = 'transparent',
  White = '#FFFFFF',
  Black = '#000000',

  Grey050 = '#f5f5f5',
  Grey100 = '#dbdbdb',
  Grey200 = '#c1c1c1',
  Grey300 = '#a7a7a7',
  Grey400 = '#8f8f8f',
  Grey500 = '#777777',
  Grey600 = '#606060',
  Grey700 = '#494949',
  Grey800 = '#343434',
  Grey900 = '#212121',

  Blue050 = '#f3f6fb',
  Blue100 = '#e2e9f5',
  Blue200 = '#cdd9f0',
  Blue300 = '#a7bde9',
  Blue400 = '#6c97e3',
  Blue500 = '#3d6fc5',
  Blue600 = '#2851a0',
  Blue700 = '#1b3e85',
  Blue800 = '#13306f',
  Blue900 = '#102a63',

  Orange050 = '#fff1e7',
  Orange100 = '#ffd4b5',
  Orange200 = '#ffb57d',
  Orange300 = '#ff9424',
  Orange400 = '#e97b00',
  Orange500 = '#d16400',
  Orange600 = '#b84e00',
  Orange700 = '#9f3900',
  Orange800 = '#852400',

  Yellow050 = '#fff1db',
  Yellow100 = '#ffd684',
  Yellow200 = '#f3bc00',
  Yellow300 = '#d9a600',
  Yellow400 = '#bf9000',
  Yellow500 = '#a77d00',
  Yellow600 = '#8d6800',
  Yellow700 = '#755500',
  Yellow800 = '#5d4200',

  Green050 = '#e7fbe7',
  Green100 = '#bff6c3',
  Green200 = '#89ee96',
  Green300 = '#6fd180',
  Green400 = '#4ea963',
  Green500 = '#318047',
  Green600 = '#1e6034',
  Green700 = '#134b28',
  Green800 = '#0c3c20',
  Green900 = '#0a341b',

  Red050 = '#fff0f0',
  Red100 = '#ffd1d0',
  Red200 = '#feb1b1',
  Red300 = '#fc9091',
  Red400 = '#f86a70',
  Red500 = '#f33b4b',
  Red600 = '#cf2e40',
  Red700 = '#a92738',
  Red800 = '#861f2e',

  Purple050 = '#ebdbfd',
  Purple100 = '#dbbffc',
  Purple200 = '#cba2f8',
  Purple300 = '#bb86f2',
  Purple400 = '#a86ae8',
  Purple500 = '#9550da',
  Purple600 = '#7b3fbb',
  Purple700 = '#613395',
  Purple800 = '#472672',
  Purple900 = '#331a54',

  Teal050 = '#b9f5ec',
  Teal100 = '#93e1d5',
  Teal200 = '#7fc9be',
  Teal300 = '#68b2a7',
  Teal400 = '#519c90',
  Teal500 = '#3c867b',
  Teal600 = '#2b7066',
  Teal700 = '#1e5b51',
  Teal800 = '#13463e',
  Teal900 = '#0b332d',

  Chartreuse050 = '#daf9c7',
  Chartreuse100 = '#b5e88e',
  Chartreuse200 = '#a2d17b',
  Chartreuse300 = '#8db863',
  Chartreuse400 = '#779f4c',
  Chartreuse500 = '#648736',
  Chartreuse600 = '#516f25',
  Chartreuse700 = '#405819',
  Chartreuse800 = '#30420f',
  Chartreuse900 = '#1e2b07',

  Secondary050 = '#fff3ef',
  Secondary100 = '#ffd1c1',
  Secondary200 = '#feae91',
  Secondary300 = '#fb875a',
  Secondary400 = '#ec652b',
  Secondary500 = '#c9502b',
  Secondary600 = '#a83b26',
  Secondary700 = '#88271e',
  Secondary800 = '#671516',
}
// #endregion Raw Colors (Option Tokens)

export const DefaultLightScoreColors = {
  high: {
    light: '#0FBD6F',
    main: '#007544',
    dark: '#004E2D',
    contrastText: baseTheme.palette.getContrastText('#007544'),
  },
  highModerate: {
    light: '#A8CD14',
    main: '#70840F',
    dark: '#566706',
    contrastText: baseTheme.palette.getContrastText('#70840F'),
  },
  moderate: {
    light: '#F7CF08',
    main: '#D18105',
    dark: '#A36403',
    contrastText: baseTheme.palette.getContrastText('#D18105'),
  },
  lowModerate: {
    light: '#FF8000',
    main: '#B84514',
    dark: '#93340B',
    contrastText: baseTheme.palette.getContrastText('#B84514'),
  },
  low: {
    light: '#FF6B66',
    main: '#D41C0B',
    dark: '#B51405',
    contrastText: baseTheme.palette.getContrastText('#D41C0B'),
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
    50: RawColor.Blue050,
    100: RawColor.Blue100,
    200: RawColor.Blue200,
    300: RawColor.Blue300,
    400: RawColor.Blue400,
    500: RawColor.Blue500,
    600: RawColor.Blue600,
    700: RawColor.Blue700,
    800: RawColor.Blue800,
    900: RawColor.Blue900,
  },
  orange: {
    50: RawColor.Orange050,
    100: RawColor.Orange100,
    200: RawColor.Orange200,
    300: RawColor.Orange300,
    400: RawColor.Orange400,
    500: RawColor.Orange500,
    600: RawColor.Orange600,
    700: RawColor.Orange700,
    800: RawColor.Orange800,
  },
  teal: {
    50: RawColor.Teal050,
    100: RawColor.Teal100,
    200: RawColor.Teal200,
    300: RawColor.Teal300,
    400: RawColor.Teal400,
    500: RawColor.Teal500,
    600: RawColor.Teal600,
    700: RawColor.Teal700,
    800: RawColor.Teal800,
    900: RawColor.Teal900,
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
  },
  purple: {
    50: RawColor.Purple050,
    100: RawColor.Purple100,
    200: RawColor.Purple200,
    300: RawColor.Purple300,
    400: RawColor.Purple400,
    500: RawColor.Purple500,
    600: RawColor.Purple600,
    700: RawColor.Purple700,
    800: RawColor.Purple800,
    900: RawColor.Purple900,
  },
}

// https://www.figma.com/file/dKL9YeHgWyxmRHuIjs38f3O9/Monorail-Components?node-id=23496%3A27
/**
 * MUI Palette with additional Monorail colors.
 * Raw colors available globally (use sparingly).
 * Mainly used to assign to component tokens in themeOverrides files.
 */
const palette: PaletteOptions = {
  // sentiment > emphasis > state/usage
  common: {
    white: RawColor.White,
    black: RawColor.Black,
  },
  primary: {
    light: RawColor.Blue400,
    main: RawColor.Blue600,
    dark: RawColor.Blue700,
    hover: RawColor.Blue700,
    active: RawColor.Blue800,

    lowEmphasis: {
      light: RawColor.Blue050,
      main: RawColor.Blue100,
      dark: RawColor.Blue300,
      contrastText: RawColor.Blue600,
      hover: RawColor.Blue100,
      active: RawColor.Blue300,
    },

    border: {
      light: RawColor.Blue400,
      main: RawColor.Blue600,
      dark: RawColor.Blue800,
    },

    focusRing: {
      inner: RawColor.Blue800,
      outer: RawColor.Blue400,
    },

    shades: {
      50: RawColor.Blue050,
      100: RawColor.Blue100,
      200: RawColor.Blue200,
      300: RawColor.Blue300,
      400: RawColor.Blue400,
      500: RawColor.Blue500,
      600: RawColor.Blue600,
      700: RawColor.Blue700,
      800: RawColor.Blue800,
    },
  },
  secondary: {
    light: RawColor.Orange100,
    main: RawColor.Orange200,
    dark: RawColor.Orange300,
    hover: RawColor.Orange300,
    active: RawColor.Orange400,

    lowEmphasis: {
      light: RawColor.Orange050,
      main: RawColor.Orange100,
      dark: RawColor.Orange300,
      contrastText: RawColor.Orange600,
      hover: RawColor.Orange100,
      active: RawColor.Orange300,
    },

    border: {
      light: RawColor.Orange400,
      main: RawColor.Orange600,
      dark: RawColor.Orange800,
    },

    focusRing: {
      inner: RawColor.Orange800,
      outer: RawColor.Orange400,
    },

    shades: {
      50: RawColor.Orange050,
      100: RawColor.Orange100,
      200: RawColor.Orange200,
      300: RawColor.Orange300,
      400: RawColor.Orange400,
      500: RawColor.Orange500,
      600: RawColor.Orange600,
      700: RawColor.Orange700,
      800: RawColor.Orange800,
    },
  },
  default: {
    light: RawColor.Grey300,
    main: RawColor.Grey600,
    dark: RawColor.Grey800,
    contrastText: RawColor.White,
    hover: RawColor.Grey700,
    active: RawColor.Grey800,

    lowEmphasis: {
      light: RawColor.Grey050,
      main: RawColor.Grey100,
      dark: RawColor.Grey300,
      contrastText: RawColor.Grey600,
      hover: RawColor.Grey100,
      active: RawColor.Grey300,
      selected: RawColor.Grey200,
      selectedHovered: RawColor.Grey400,
    },

    border: {
      light: RawColor.Grey400,
      main: RawColor.Grey600,
      dark: RawColor.Grey500,
    },

    focusRing: {
      inner: RawColor.Blue800,
      outer: RawColor.Blue400,
    },

    shades: {
      50: RawColor.Grey050,
      100: RawColor.Grey100,
      200: RawColor.Grey200,
      300: RawColor.Grey300,
      400: RawColor.Grey400,
      500: RawColor.Grey500,
      600: RawColor.Grey600,
      700: RawColor.Grey700,
      800: RawColor.Grey800,
    },
  },
  accent: {
    light: '#0C3D99',
    main: '#0C3D99',
    dark: '#161C4F',
    contrastText: baseTheme.palette.getContrastText('#0C3D99'),

    border: {
      main: '#0C3D99',
    },

    focusRing: {
      inner: RawColor.Blue800,
      outer: RawColor.Blue400,
    },
  },
  success: {
    light: RawColor.Green300,
    main: RawColor.Green500,
    dark: RawColor.Green700,
    hover: RawColor.Green700,
    active: RawColor.Green800,

    lowEmphasis: {
      light: RawColor.Green050,
      main: RawColor.Green100,
      dark: RawColor.Green300,
      contrastText: RawColor.Green600,
      hover: RawColor.Green100,
      active: RawColor.Green300,
    },

    border: {
      light: RawColor.Green400,
      main: RawColor.Green500,
      dark: RawColor.Green800,
    },

    focusRing: {
      inner: RawColor.Green800,
      outer: RawColor.Green400,
    },

    shades: {
      50: RawColor.Green050,
      100: RawColor.Green100,
      200: RawColor.Green200,
      300: RawColor.Green300,
      400: RawColor.Green400,
      500: RawColor.Green500,
      600: RawColor.Green600,
      700: RawColor.Green700,
      800: RawColor.Green800,
    },
  },
  error: {
    light: RawColor.Red400,
    main: RawColor.Red500,
    dark: RawColor.Red700,
    hover: RawColor.Red700,
    active: RawColor.Red800,

    lowEmphasis: {
      light: RawColor.Red050,
      main: RawColor.Red100,
      dark: RawColor.Red300,
      contrastText: RawColor.Red600,
      hover: RawColor.Red100,
      active: RawColor.Red300,
    },

    border: {
      light: RawColor.Red400,
      main: RawColor.Red500,
      dark: RawColor.Red800,
    },

    focusRing: {
      inner: RawColor.Red800,
      outer: RawColor.Red400,
    },

    shades: {
      50: RawColor.Red050,
      100: RawColor.Red100,
      200: RawColor.Red200,
      300: RawColor.Red300,
      400: RawColor.Red400,
      500: RawColor.Red500,
      600: RawColor.Red600,
      700: RawColor.Red700,
      800: RawColor.Red800,
    },
  },
  warning: {
    light: RawColor.Orange100,
    main: RawColor.Orange200,
    dark: RawColor.Orange300,
    hover: RawColor.Orange300,
    active: RawColor.Orange400,

    lowEmphasis: {
      light: RawColor.Orange050,
      main: RawColor.Orange100,
      dark: RawColor.Orange300,
      contrastText: RawColor.Orange600,
      hover: RawColor.Orange100,
      active: RawColor.Orange300,
    },

    border: {
      light: RawColor.Orange400,
      main: RawColor.Orange500,
      dark: RawColor.Orange800,
    },

    focusRing: {
      inner: RawColor.Orange800,
      outer: RawColor.Orange400,
    },

    shades: {
      50: RawColor.Orange050,
      100: RawColor.Orange100,
      200: RawColor.Orange200,
      300: RawColor.Orange300,
      400: RawColor.Orange400,
      500: RawColor.Orange500,
      600: RawColor.Orange600,
      700: RawColor.Orange700,
      800: RawColor.Orange800,
    },
  },
  info: {
    light: RawColor.Blue400,
    main: RawColor.Blue600,
    dark: RawColor.Blue700,
    hover: RawColor.Blue700,
    active: RawColor.Blue800,

    lowEmphasis: {
      light: RawColor.Blue050,
      main: RawColor.Blue100,
      dark: RawColor.Blue300,
      contrastText: RawColor.Blue600,
      hover: RawColor.Blue100,
      active: RawColor.Blue300,
    },

    border: {
      light: RawColor.Blue400,
      main: RawColor.Blue500,
      dark: RawColor.Blue800,
    },

    focusRing: {
      inner: RawColor.Blue800,
      outer: RawColor.Blue400,
    },

    shades: {
      50: RawColor.Blue050,
      100: RawColor.Blue100,
      200: RawColor.Blue200,
      300: RawColor.Blue300,
      400: RawColor.Blue400,
      500: RawColor.Blue500,
      600: RawColor.Blue600,
      700: RawColor.Blue700,
      800: RawColor.Blue800,
    },
  },
  text: {
    primary: RawColor.Grey900,
    secondary: RawColor.Grey700,
    disabled: RawColor.Grey400,
  },
  grey: {
    50: RawColor.Grey050,
    100: RawColor.Grey100,
    200: RawColor.Grey200,
    300: RawColor.Grey300,
    400: RawColor.Grey400,
    500: RawColor.Grey500,
    600: RawColor.Grey600,
    700: RawColor.Grey700,
    800: RawColor.Grey800,
    900: RawColor.Grey900,
  },
  divider: RawColor.Grey200,
  rating: RawColor.Yellow400,
  background: {
    default: '#FAFAFA',
    paper: RawColor.White,
  },
  action: {
    activatedOpacity: 0.23,
    disabled: RawColor.Grey300,
    // Exposing available action color tokens and their default values - GS 3/25/22
    // active: RawColor.Blue200,
    // active: 'rgba(0, 0, 0, 0.54)',
    // disabledBackground: 'rgba(0, 0, 0, 0.12)',
    disabledOpacity: 0.4, // default = 0.38
    // focus: 'rgba(0,0,0, 0.12)',
    // focusOpacity: 0.12,
    hover: RawColor.Blue050,
    // hover: 'rgba(0,0,0,0.4)',
    // hoverOpacity: 0.04,
    selected: RawColor.Blue100,
    // selected: 'rgba(0,0,0,0.8)',
    // selectedOpacity: 0.08,
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

/** The UNOFFICIAL rebranded Portal light theme which combines:
 * - `baseTheme`
 * - Extended color tokens
 * - `themeComponents` component overrides
 */
export const rebrandLightTheme: Theme = createTheme(
  {
    ...themeWithoutComponents,
    name: 'rebrandLight',
    components: components,
  },
  {},
)
