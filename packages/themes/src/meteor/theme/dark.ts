 
import type {
  PaletteOptions,
  Theme,
  ThemeOptions,
  TypeAction,
} from '@mui/material'
import { alpha, createTheme } from '@mui/material'

import { baseTheme } from './baseTheme.js'
import { getThemeComponents } from './themeComponents.js'

// #region Raw Colors (Option Tokens)
/**
 * Context-free named colors. Only meant to be used by aliases
 */
export enum RawColor {
  Transparent = 'transparent',
  White = '#FFFFFF',
  Black = '#0D0F13',

  Grey100 = '#F4F5F5',
  Grey200 = '#C8CBD0',
  Grey300 = '#B6BBC3',
  Grey400 = '#9CA0AA',
  Grey500 = '#656B7B',
  Grey600 = '#424957',
  Grey700 = '#303540',
  Grey800 = '#1E212A',
  Grey900 = '#101219',

  Orange100 = '#FEF8F5',
  Orange200 = '#F9C0A9',
  Orange300 = '#FB8D60',
  Orange400 = '#F95E1F',
  Orange500 = '#E84200',
  Orange600 = '#AD3200',
  Orange700 = '#882C07',
  Orange800 = '#631E03',
  Orange900 = '#521700',

  Red100 = '#FEFBFC',
  Red200 = '#FAD0D6',
  Red300 = '#F5A4B0',
  Red400 = '#DE5568',
  Red500 = '#C7051F',
  Red600 = '#9A0818',
  Red700 = '#710A18',
  Red800 = '#530A14',
  Red900 = '#340910',

  Blue100 = '#FFFFFF',
  Blue200 = '#D0E4FB',
  Blue300 = '#9FCBFE',
  Blue400 = '#5696D7',
  Blue500 = '#2B6BAB',
  Blue600 = '#23578B',
  Blue700 = '#22426D',
  Blue800 = '#223E62',
  Blue900 = '#1C304A',

  Green100 = '#FFFFFF',
  Green200 = '#DEF1DA',
  Green300 = '#A8CCA3',
  Green400 = '#76B06D',
  Green500 = '#40773C',
  Green600 = '#385936',
  Green700 = '#284125',
  Green800 = '#263923',
  Green900 = '#233021',

  Yellow100 = '#FFFFFF',
  Yellow200 = '#FDE6AF',
  Yellow300 = '#FFDB84',
  Yellow400 = '#F5BB29',
  Yellow500 = '#CC9814',
  Yellow600 = '#7E6007',
  Yellow700 = '#614A05',
  Yellow800 = '#3F3005',
  Yellow900 = '#13110D',

  Slate100 = '#F9FAFB',
  Slate200 = '#D0D7E5',
  Slate300 = '#A1AFCB',
  Slate400 = '#687FAA',
  Slate500 = '#576A8F',
  Slate600 = '#465574',
  Slate700 = '#354059',
  Slate800 = '#232B3D',
  Slate900 = '#181C2F',

  Magenta050 = '#FCE0F9',
  Magenta100 = '#F7C2F3',
  Magenta200 = '#F09EEB',
  Magenta300 = '#E978E4',
  Magenta400 = '#DA53D7',
  Magenta500 = '#BB3FBA',
  Magenta600 = '#A026A1',
  Magenta700 = '#811783',
  Magenta800 = '#620C65',
  Magenta900 = '#430546',

  Teal050 = '#C0F6EE',
  Teal100 = '#93E1D5',
  Teal200 = '#7EC7BC',
  Teal300 = '#66AFA5',
  Teal400 = '#4F988C',
  Teal500 = '#398176',
  Teal600 = '#286960',
  Teal700 = '#1B534A',
  Teal800 = '#103E36',
  Teal900 = '#072924',

  Chartreuse050 = '#CEF7B3',
  Chartreuse100 = '#AFE189',
  Chartreuse200 = '#9AC775',
  Chartreuse300 = '#86AF5E',
  Chartreuse400 = '#719748',
  Chartreuse500 = '#5E7F32',
  Chartreuse600 = '#4C6822',
  Chartreuse700 = '#3B5217',
  Chartreuse800 = '#2B3C0D',
  Chartreuse900 = '#1B2806',
}
// #endregion Raw Colors (Option Tokens)

export const chartColors = {
  magenta: {
    50: RawColor.Magenta050,
    100: RawColor.Magenta100,
    200: RawColor.Magenta200,
    300: RawColor.Magenta300,
    400: RawColor.Magenta400,
    500: RawColor.Magenta500,
    600: RawColor.Magenta600,
    700: RawColor.Magenta700,
    800: RawColor.Magenta800,
    900: RawColor.Magenta900,
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
  chartreuse: {
    50: RawColor.Chartreuse050,
    100: RawColor.Chartreuse100,
    200: RawColor.Chartreuse200,
    300: RawColor.Chartreuse300,
    400: RawColor.Chartreuse400,
    500: RawColor.Chartreuse500,
    600: RawColor.Chartreuse600,
    700: RawColor.Chartreuse700,
    800: RawColor.Chartreuse800,
    900: RawColor.Chartreuse900,
  },
}

enum Opacities {
  Hover = 0.1,
  Focus = 0.16,
  Selected = 0.12,
  Active = 0.16,
  Disabled = 0.6,
}

const action: TypeAction = {
  active: alpha(RawColor.Grey100, Opacities.Active),
  activatedOpacity: Opacities.Active,
  disabled: RawColor.Grey500,
  disabledBackground: alpha(RawColor.Grey500, 0.32),
  disabledOpacity: Opacities.Disabled,
  focus: alpha(RawColor.Grey100, Opacities.Focus),
  focusOpacity: Opacities.Focus,
  hover: alpha(RawColor.Grey100, Opacities.Hover),
  hoverOpacity: Opacities.Hover,
  selected: alpha(RawColor.Grey100, Opacities.Selected),
  selectedOpacity: Opacities.Selected,
}

/**
 * MUI Palette with additional Monorail colors.
 * Raw colors available globally (use sparingly).
 * Mainly used to assign to component tokens in themeOverrides files.
 */
const palette: PaletteOptions = {
  // sentiment > emphasis > state/usage
  mode: 'dark',
  common: {
    white: RawColor.White,
    black: RawColor.Black,
  },
  primary: {
    light: RawColor.Orange600,
    main: RawColor.Orange500,
    dark: RawColor.Orange400,
    hover: RawColor.Orange700,
    active: RawColor.Orange800,
    contrastText: RawColor.Orange100,

    lowEmphasis: {
      light: RawColor.Orange900,
      main: RawColor.Orange800,
      dark: RawColor.Orange700,
      contrastText: RawColor.Orange200,
      hover: alpha(RawColor.Orange200, action.hoverOpacity),
      active: alpha(RawColor.Orange200, action.activatedOpacity),
    },

    border: {
      light: RawColor.Orange500,
      main: RawColor.Orange400,
      dark: RawColor.Orange300,
    },

    focusRing: {
      inner: RawColor.Blue400,
      outer: RawColor.Blue600,
    },

    shades: {
      100: RawColor.Orange100,
      200: RawColor.Orange200,
      300: RawColor.Orange300,
      400: RawColor.Orange400,
      500: RawColor.Orange500,
      600: RawColor.Orange600,
      700: RawColor.Orange700,
      800: RawColor.Orange800,
      900: RawColor.Orange900,
    },
  },
  secondary: {
    light: RawColor.Slate600,
    main: RawColor.Slate500,
    dark: RawColor.Slate400,
    hover: RawColor.Slate600,
    active: RawColor.Slate700,
    contrastText: RawColor.Slate100,

    lowEmphasis: {
      light: RawColor.Slate900,
      main: RawColor.Slate800,
      dark: RawColor.Slate700,
      contrastText: RawColor.Slate200,
      hover: alpha(RawColor.Slate200, action.hoverOpacity),
      active: alpha(RawColor.Slate200, action.activatedOpacity),
    },

    border: {
      light: RawColor.Slate500,
      main: RawColor.Slate400,
      dark: RawColor.Slate300,
    },

    focusRing: {
      inner: RawColor.Blue400,
      outer: RawColor.Blue600,
    },

    shades: {
      100: RawColor.Slate100,
      200: RawColor.Slate200,
      300: RawColor.Slate300,
      400: RawColor.Slate400,
      500: RawColor.Slate500,
      600: RawColor.Slate600,
      700: RawColor.Slate700,
      800: RawColor.Slate800,
      900: RawColor.Slate900,
    },
  },
  default: {
    light: RawColor.Grey400,
    main: RawColor.Grey300,
    dark: RawColor.Grey100,
    hover: RawColor.Grey400,
    active: RawColor.Grey500,
    contrastText: RawColor.Grey900,

    lowEmphasis: {
      light: RawColor.Grey700,
      main: RawColor.Grey600,
      dark: RawColor.Grey500,
      contrastText: RawColor.Grey200,
      hover: alpha(RawColor.Grey200, action.hoverOpacity),
      active: alpha(RawColor.Grey200, action.activatedOpacity),
    },

    border: {
      light: RawColor.Grey500,
      main: RawColor.Grey400,
      dark: RawColor.Grey200,
    },

    focusRing: {
      inner: RawColor.Blue400,
      outer: RawColor.Blue600,
    },

    shades: {
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
  },
  success: {
    light: RawColor.Green600,
    main: RawColor.Green500,
    dark: RawColor.Green400,
    hover: RawColor.Green600,
    active: RawColor.Green700,
    contrastText: RawColor.White,

    lowEmphasis: {
      light: RawColor.Green900,
      main: RawColor.Green800,
      dark: RawColor.Green700,
      hover: alpha(RawColor.Green300, action.hoverOpacity),
      active: alpha(RawColor.Green300, action.activatedOpacity),
      contrastText: RawColor.Green300,
    },

    border: {
      light: RawColor.Green500,
      main: RawColor.Green400,
      dark: RawColor.Green300,
    },

    focusRing: {
      inner: RawColor.Blue400,
      outer: RawColor.Blue600,
    },

    shades: {
      100: RawColor.Green100,
      200: RawColor.Green200,
      300: RawColor.Green300,
      400: RawColor.Green400,
      500: RawColor.Green500,
      600: RawColor.Green600,
      700: RawColor.Green700,
      800: RawColor.Green800,
      900: RawColor.Green900,
    },
  },
  error: {
    light: RawColor.Red600,
    main: RawColor.Red500,
    dark: RawColor.Red400,
    hover: RawColor.Red600,
    active: RawColor.Red700,
    contrastText: RawColor.Red100,

    lowEmphasis: {
      light: RawColor.Red900,
      main: RawColor.Red800,
      dark: RawColor.Red700,
      hover: alpha(RawColor.Red300, action.hoverOpacity),
      active: alpha(RawColor.Red300, action.activatedOpacity),
      contrastText: RawColor.Red300,
    },

    border: {
      light: RawColor.Red500,
      main: RawColor.Red400,
      dark: RawColor.Red300,
    },

    focusRing: {
      inner: RawColor.Blue400,
      outer: RawColor.Blue600,
    },

    shades: {
      100: RawColor.Red100,
      200: RawColor.Red200,
      300: RawColor.Red300,
      400: RawColor.Red400,
      500: RawColor.Red500,
      600: RawColor.Red600,
      700: RawColor.Red700,
      800: RawColor.Red800,
      900: RawColor.Red900,
    },
  },
  warning: {
    light: RawColor.Yellow500,
    main: RawColor.Yellow400,
    dark: RawColor.Yellow300,
    hover: RawColor.Yellow500,
    active: RawColor.Yellow600,
    contrastText: RawColor.Yellow900,

    lowEmphasis: {
      light: RawColor.Yellow800,
      main: RawColor.Yellow700,
      dark: RawColor.Yellow600,
      hover: alpha(RawColor.Yellow200, action.hoverOpacity),
      active: alpha(RawColor.Yellow200, action.activatedOpacity),
      contrastText: RawColor.Yellow200,
    },

    border: {
      light: RawColor.Yellow400,
      main: RawColor.Yellow300,
      dark: RawColor.Yellow200,
    },

    focusRing: {
      inner: RawColor.Blue400,
      outer: RawColor.Blue600,
    },

    shades: {
      100: RawColor.Yellow100,
      200: RawColor.Yellow200,
      300: RawColor.Yellow300,
      400: RawColor.Yellow400,
      500: RawColor.Yellow500,
      600: RawColor.Yellow600,
      700: RawColor.Yellow700,
      800: RawColor.Yellow800,
      900: RawColor.Yellow900,
    },
  },
  info: {
    light: RawColor.Blue600,
    main: RawColor.Blue500,
    dark: RawColor.Blue400,
    hover: RawColor.Blue600,
    active: RawColor.Blue700,
    contrastText: RawColor.White,

    lowEmphasis: {
      light: RawColor.Blue900,
      main: RawColor.Blue800,
      dark: RawColor.Blue700,
      hover: alpha(RawColor.Blue300, action.hoverOpacity),
      active: alpha(RawColor.Blue300, action.activatedOpacity),
      contrastText: RawColor.Blue300,
    },

    border: {
      light: RawColor.Blue500,
      main: RawColor.Blue400,
      dark: RawColor.Blue300,
    },

    focusRing: {
      inner: RawColor.Blue400,
      outer: RawColor.Blue600,
    },

    shades: {
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
  },
  text: {
    primary: RawColor.Grey100,
    secondary: RawColor.Grey200,
    disabled: RawColor.Grey500,
    link: RawColor.Blue300,
    placeholder: RawColor.Grey400,
  },
  grey: {
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
  divider: RawColor.Grey600,
  outlinedBorder: RawColor.Grey600,
  filledInputBackground: RawColor.Grey900,
  standardInputLine: RawColor.Grey400,
  snackbar: RawColor.Grey400,
  rating: RawColor.Yellow400,
  tooltip: RawColor.Grey600,
  backdropOverlay: alpha(RawColor.Grey900, 0.7),
  background: {
    default: RawColor.Grey900,
    paper: RawColor.Grey800,
  },
  action: action,
  chart: chartColors,
  appIcon: {
    orange: {
      main: '#F95A1A',
    },
    blue: {
      main: '#7B9DD5',
      dark: '#C8D6ED',
    },
  },
  illustration: {
    orange: {
      light: RawColor.Orange400,
      dark: RawColor.Orange800,
    },
    blue: {
      light: '#D2E4F3',
      main: '#B1D0EA',
    },
  },
}

// Construct a Theme with the base settings plus our customizations, but without the components overrides provided yet.
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

/** The Meteor dark theme combines:
 * - `baseTheme`
 * - Extended color tokens with `palette.mode` set to `'dark'`
 * - `themeComponents` component overrides
 */
export const meteorDarkTheme: Theme = createTheme(
  {
    ...themeWithoutComponents,
    name: 'meteorDark',
    components: components,
  },
  {},
)
