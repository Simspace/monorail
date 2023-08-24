// eslint-disable-next-line no-restricted-imports
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

  Grey100 = '#FFFFFF',
  Grey200 = '#E3E5E7',
  Grey300 = '#CCD0D6',
  Grey400 = '#ABB1BA',
  Grey500 = '#8A9099',
  Grey600 = '#5B626B',
  Grey700 = '#42474F',
  Grey800 = '#2B2E34',
  Grey900 = '#181A20',

  Orange100 = '#FDECE6',
  Orange200 = '#FAD9CC',
  Orange300 = '#F6B399',
  Orange400 = '#F18E66',
  Orange500 = '#ED6833',
  Orange600 = '#E84200',
  Orange700 = '#BA3500',
  Orange800 = '#8B2800',
  Orange900 = '#5D1A00',

  Red100 = '#FFFFFF',
  Red200 = '#FFD6DD',
  Red300 = '#FFADBB',
  Red400 = '#D2324C',
  Red500 = '#A7112F',
  Red600 = '#7E162B',
  Red700 = '#61242E',
  Red800 = '#521E27',
  Red900 = '#421A20',

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
  Hover = 0.08,
  Focus = 0.12,
  Selected = 0.08,
  Active = 0.16,
  Disabled = 0.4,
}

const action: TypeAction = {
  active: alpha(RawColor.Grey200, Opacities.Active),
  activatedOpacity: Opacities.Active,
  disabled: RawColor.Grey500,
  disabledBackground: alpha(RawColor.Grey500, 0.32),
  disabledOpacity: Opacities.Disabled,
  focus: alpha(RawColor.Grey200, Opacities.Focus),
  focusOpacity: Opacities.Focus,
  hover: alpha(RawColor.Grey200, Opacities.Hover),
  hoverOpacity: Opacities.Hover,
  selected: alpha(RawColor.Grey200, Opacities.Selected),
  selectedOpacity: Opacities.Selected,
}

// https://www.figma.com/file/dKL9YeHgWyxmRHuIjs38f3O9/Monorail-Components?node-id=23496%3A27
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
    light: RawColor.Grey400,
    main: RawColor.Grey200,
    dark: RawColor.Grey100,
    hover: RawColor.Grey400,
    active: RawColor.Grey500,
    contrastText: RawColor.Grey900,

    lowEmphasis: {
      light: RawColor.Grey800,
      main: RawColor.Grey700,
      dark: RawColor.Grey600,
      contrastText: RawColor.Grey200,
      hover: alpha(RawColor.Grey200, action.hoverOpacity),
      active: alpha(RawColor.Grey200, action.activatedOpacity),
    },

    border: {
      light: RawColor.Grey500,
      main: RawColor.Grey300,
      dark: RawColor.Grey100,
    },

    focusRing: {
      inner: RawColor.Blue800,
      outer: RawColor.Blue400,
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
  secondary: {
    light: RawColor.Orange800,
    main: RawColor.Orange600,
    dark: RawColor.Orange400,
    hover: RawColor.Orange700,
    active: RawColor.Orange800,
    contrastText: RawColor.White,

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
      inner: RawColor.Blue800,
      outer: RawColor.Blue400,
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
  default: {
    light: RawColor.Grey400,
    main: RawColor.Grey200,
    dark: RawColor.Grey100,
    contrastText: RawColor.Grey900,
    hover: RawColor.Grey400,
    active: RawColor.Grey500,

    lowEmphasis: {
      light: RawColor.Grey800,
      main: RawColor.Grey700,
      dark: RawColor.Grey600,
      contrastText: RawColor.Grey200,
      hover: alpha(RawColor.Grey200, action.hoverOpacity),
      active: alpha(RawColor.Grey200, action.activatedOpacity),
    },

    border: {
      light: RawColor.Grey500,
      main: RawColor.Grey300,
      dark: RawColor.Grey100,
    },

    focusRing: {
      inner: RawColor.Blue800,
      outer: RawColor.Blue400,
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
      contrastText: RawColor.Green300,
      hover: alpha(RawColor.Green300, action.hoverOpacity),
      active: alpha(RawColor.Green300, action.activatedOpacity),
    },

    border: {
      light: RawColor.Green400,
      main: RawColor.Green300,
      dark: RawColor.Green200,
    },

    focusRing: {
      inner: RawColor.Blue800,
      outer: RawColor.Blue400,
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
    contrastText: RawColor.White,

    lowEmphasis: {
      light: RawColor.Red900,
      main: RawColor.Red800,
      dark: RawColor.Red700,
      contrastText: RawColor.Red300,
      hover: alpha(RawColor.Red300, action.hoverOpacity),
      active: alpha(RawColor.Red300, action.activatedOpacity),
    },

    border: {
      light: RawColor.Red500,
      main: RawColor.Red400,
      dark: RawColor.Red300,
    },

    focusRing: {
      inner: RawColor.Blue800,
      outer: RawColor.Blue400,
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
      contrastText: RawColor.Yellow200,
      hover: alpha(RawColor.Yellow200, action.hoverOpacity),
      active: alpha(RawColor.Yellow200, action.activatedOpacity),
    },

    border: {
      light: RawColor.Yellow400,
      main: RawColor.Yellow300,
      dark: RawColor.Yellow200,
    },

    focusRing: {
      inner: RawColor.Blue800,
      outer: RawColor.Blue400,
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
      contrastText: RawColor.Blue300,
      hover: alpha(RawColor.Blue300, action.hoverOpacity),
      active: alpha(RawColor.Blue300, action.activatedOpacity),
    },

    border: {
      light: RawColor.Blue500,
      main: RawColor.Blue400,
      dark: RawColor.Blue300,
    },

    focusRing: {
      inner: RawColor.Blue800,
      outer: RawColor.Blue400,
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
    secondary: RawColor.Grey300,
    disabled: RawColor.Grey500,
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
  standardInputLine: RawColor.Grey300,
  snackbar: RawColor.Grey300,
  rating: RawColor.Yellow400,
  tooltip: RawColor.Grey700,
  backdropOverlay: alpha(RawColor.Grey300, 0.7),
  background: {
    default: RawColor.Black,
    paper: RawColor.Grey900,
  },
  action: action,
  chart: chartColors,
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
