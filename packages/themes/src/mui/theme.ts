// eslint-disable-next-line no-restricted-imports
import type { PaletteOptions, Theme } from '@mui/material'
import { createTheme } from '@mui/material'
import {
  blue,
  deepPurple,
  green,
  grey,
  lime,
  orange,
  pink,
  purple,
  red,
  teal,
  yellow,
} from '@mui/material/colors'

import { baseTheme } from '../classic/theme/baseTheme.js'

// #region Raw Colors (Option Tokens)
/**
 * Context-free named colors. Only meant to be used by aliases
 */
export const RawColor = {
  Transparent: 'transparent',
  White: '#FFFFFF',
  Black: '#000000',

  Grey050: grey[50],
  Grey100: grey[100],
  Grey200: grey[200],
  Grey300: grey[300],
  Grey400: grey[400],
  Grey500: grey[500],
  Grey600: grey[600],
  Grey700: grey[700],
  Grey800: grey[800],
  Grey900: grey[900],
  GreyA100: grey.A100,
  GreyA300: grey.A200,
  GreyA700: grey.A400,
  GreyA900: grey.A700,

  Blue050: blue[50],
  Blue100: blue[100],
  Blue200: blue[200],
  Blue300: blue[300],
  Blue400: blue[400],
  Blue500: blue[500],
  Blue600: blue[600],
  Blue700: blue[700],
  Blue800: blue[800],
  Blue900: blue[900],
  BlueA100: blue.A100,
  BlueA300: blue.A200,
  BlueA700: blue.A400,
  BlueA900: blue.A700,

  Orange050: orange[50],
  Orange100: orange[100],
  Orange200: orange[200],
  Orange300: orange[300],
  Orange400: orange[400],
  Orange500: orange[500],
  Orange600: orange[600],
  Orange700: orange[700],
  Orange800: orange[800],
  Orange900: orange[900],
  OrangeA100: orange.A100,
  OrangeA300: orange.A200,
  OrangeA700: orange.A400,
  OrangeA900: orange.A700,

  Yellow: yellow[700],

  Green050: green[50],
  Green100: green[100],
  Green200: green[200],
  Green300: green[300],
  Green400: green[400],
  Green500: green[500],
  Green600: green[600],
  Green700: green[700],
  Green800: green[800],
  Green900: green[900],
  GreenA100: green.A100,
  GreenA300: green.A200,
  GreenA700: green.A400,
  GreenA900: green.A700,

  Red050: red[50],
  Red100: red[100],
  Red200: red[200],
  Red300: red[300],
  Red400: red[400],
  Red500: red[500],
  Red600: red[600],
  Red700: red[700],
  Red800: red[800],
  Red900: red[900],
  RedA100: red.A100,
  RedA300: red.A200,
  RedA700: red.A400,
  RedA900: red.A700,
}
// #endregion Raw Colors (Option Tokens)

export const DefaultLightScoreColors = {
  high: {
    light: green[300],
    main: green[600],
    dark: green[900],
    contrastText: baseTheme.palette.getContrastText(green[900]),
  },
  highModerate: {
    light: lime[300],
    main: lime[600],
    dark: lime[900],
    contrastText: baseTheme.palette.getContrastText(lime[900]),
  },
  moderate: {
    light: yellow[300],
    main: yellow[600],
    dark: yellow[900],
    contrastText: baseTheme.palette.getContrastText(yellow[900]),
  },
  lowModerate: {
    light: orange[300],
    main: orange[600],
    dark: orange[900],
    contrastText: baseTheme.palette.getContrastText(orange[900]),
  },
  low: {
    light: red[300],
    main: red[600],
    dark: red[900],
    contrastText: baseTheme.palette.getContrastText(red[900]),
  },
}

export const DefaultLightTierColors = {
  one: deepPurple[400],
  two: red[400],
  three: orange[400],
  four: green[400],
}

export const DefaultLightChartColors = {
  blue: {
    50: blue[50],
    100: blue[100],
    200: blue[200],
    300: blue[300],
    400: blue[400],
    500: blue[500],
    600: blue[600],
    700: blue[700],
    800: blue[800],
    900: blue[900],
    A700: blue.A700,
    A400: blue.A400,
    A200: blue.A200,
    A100: blue.A100,
  },
  orange: {
    50: orange[50],
    100: orange[100],
    200: orange[200],
    300: orange[300],
    400: orange[400],
    500: orange[500],
    600: orange[600],
    700: orange[700],
    800: orange[800],
    900: orange[900],
    A700: orange.A700,
    A400: orange.A400,
    A200: orange.A200,
    A100: orange.A100,
  },
  teal: {
    50: teal[50],
    100: teal[100],
    200: teal[200],
    300: teal[300],
    400: teal[400],
    500: teal[500],
    600: teal[600],
    700: teal[700],
    800: teal[800],
    900: teal[900],
    A700: teal.A700,
    A400: teal.A400,
    A200: teal.A200,
    A100: teal.A100,
  },
  fuchsia: {
    50: pink[50],
    100: pink[100],
    200: pink[200],
    300: pink[300],
    400: pink[400],
    500: pink[500],
    600: pink[600],
    700: pink[700],
    800: pink[800],
    900: pink[900],
    A700: pink.A700,
    A400: pink.A400,
    A200: pink.A200,
    A100: pink.A100,
  },
  purple: {
    50: purple[50],
    100: purple[100],
    200: purple[200],
    300: purple[300],
    400: purple[400],
    500: purple[500],
    600: purple[600],
    700: purple[700],
    800: purple[800],
    900: purple[900],
    A700: purple.A700,
    A400: purple.A400,
    A200: purple.A200,
    A100: purple.A100,
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
    A100: RawColor.GreyA100,
    A200: RawColor.GreyA300,
    A400: RawColor.GreyA700,
    A700: RawColor.GreyA900,
  },
  rating: RawColor.Yellow,
  // Accept defaults for the following: text, divider, background (paper), action.
  // Dark mode for these tokens are handled internally by MUI.

  chart: DefaultLightChartColors,
  score: DefaultLightScoreColors,
  tiers: DefaultLightTierColors,
}

// Construct a Theme with the base settings plus our customizations, but without the components overrides provided yet.
// We're doing this so we have all the base theme settings populated for doing the component-level overrides. We want
// a Theme here, rather than ThemeOptions because we want all the values to be non-optional and filled-in for the
// component overrides.

/** Light theme without component overrides.
 * - Default MUI component behavior
 * - Uses `@mui/material/colors` as global color tokens
 */
export const muiLight: Theme = createTheme({
  ...{ name: 'muiLight' },
  palette: palette,
})

/** Dark theme without component overrides.
 * - Default MUI component behavior
 * - Uses `@mui/material/colors` as global color tokens
 */
export const muiDark: Theme = createTheme({
  ...{ name: 'muiDark' },
  palette: {
    mode: 'dark',
    ...palette,
  },
})
