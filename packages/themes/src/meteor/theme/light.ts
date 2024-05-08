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
  Black = '#181621',

  Grey100 = '#F3F4F6',
  Grey200 = '#DDDFE4',
  Grey300 = '#CCCFD7',
  Grey400 = '#BABFC9',
  Grey500 = '#8D95A5',
  Grey600 = '#707A8F',
  Grey700 = '#5A6272',
  Grey800 = '#434956',
  Grey900 = '#24272E',

  Orange100 = '#FDECE6',
  Orange200 = '#FDDFD3',
  Orange300 = '#FCC9B6',
  Orange400 = '#F18E66',
  Orange500 = '#ED6833',
  Orange600 = '#E84200',
  Orange700 = '#BA3500',
  Orange800 = '#8B2800',
  Orange900 = '#5D1A00',

  Red100 = '#FDFAFA',
  Red200 = '#F8E9E9',
  Red300 = '#EFCECE',
  Red400 = '#E3AAAA',
  Red500 = '#D57C7C',
  Red600 = '#C44747',
  Red700 = '#A61D1D',
  Red800 = '#711414',
  Red900 = '#390A0A',

  Blue100 = '#FAFCFE',
  Blue200 = '#EBF3FA',
  Blue300 = '#D2E4F3',
  Blue400 = '#B1D0EA',
  Blue500 = '#87B7DE',
  Blue600 = '#569AD1',
  Blue700 = '#2D78B5',
  Blue800 = '#1F527B',
  Blue900 = '#10293E',

  Green100 = '#FBFCFB',
  Green200 = '#EDF5ED',
  Green300 = '#D7E8D8',
  Green400 = '#B9D7BA',
  Green500 = '#93C195',
  Green600 = '#67A86A',
  Green700 = '#408743',
  Green800 = '#2C5C2E',
  Green900 = '#162E17',

  Yellow100 = '#FFF4DB',
  Yellow200 = '#FFECBF',
  Yellow300 = '#FFE29C',
  Yellow400 = '#FFD570',
  Yellow500 = '#FFC53C',
  Yellow600 = '#FFB300',
  Yellow700 = '#AA7A09',
  Yellow800 = '#614A15',
  Yellow900 = '#342400',

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
  Focus = 0.16,
  Selected = 0.12,
  Active = 0.16,
  Disabled = 0.6,
}

const action: TypeAction = {
  active: alpha(RawColor.Grey600, Opacities.Active),
  activatedOpacity: Opacities.Active,
  disabled: RawColor.Grey300,
  disabledBackground: alpha(RawColor.Black, 0.32),
  disabledOpacity: Opacities.Disabled,
  focus: alpha(RawColor.Grey600, Opacities.Focus),
  focusOpacity: Opacities.Focus,
  hover: alpha(RawColor.Grey600, Opacities.Hover),
  hoverOpacity: Opacities.Hover,
  selected: alpha(RawColor.Grey600, Opacities.Selected),
  selectedOpacity: Opacities.Selected,
}

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
    light: RawColor.Grey600,
    main: RawColor.Grey700,
    dark: RawColor.Grey900,
    contrastText: RawColor.White,
    hover: RawColor.Grey800,
    active: RawColor.Grey900,

    lowEmphasis: {
      light: RawColor.Grey200,
      main: RawColor.Grey300,
      dark: RawColor.Grey400,
      contrastText: RawColor.Grey800,
      hover: RawColor.Grey200,
      active: RawColor.Grey300,
    },

    border: {
      light: RawColor.Grey400,
      main: RawColor.Grey700,
      dark: RawColor.Grey900,
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
  secondary: {
    light: RawColor.Orange500,
    main: RawColor.Orange600,
    dark: RawColor.Orange800,
    contrastText: RawColor.Orange700,
    hover: RawColor.Orange700,
    active: RawColor.Orange800,

    lowEmphasis: {
      light: RawColor.Orange200,
      main: RawColor.Orange300,
      dark: RawColor.Orange400,
      contrastText: RawColor.Orange600,
      hover: RawColor.Orange200,
      active: RawColor.Orange300,
    },

    border: {
      light: RawColor.Orange400,
      main: RawColor.Orange500,
      dark: RawColor.Orange700,
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
  default: {
    light: RawColor.Grey600,
    main: RawColor.Grey700,
    dark: RawColor.Grey900,
    contrastText: RawColor.White,
    hover: RawColor.Grey800,
    active: RawColor.Grey900,

    lowEmphasis: {
      light: RawColor.Grey200,
      main: RawColor.Grey300,
      dark: RawColor.Grey400,
      contrastText: RawColor.Grey800,
      hover: RawColor.Grey200,
      active: RawColor.Grey300,
    },

    border: {
      light: RawColor.Grey400,
      main: RawColor.Grey700,
      dark: RawColor.Grey900,
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
    light: RawColor.Green500,
    main: RawColor.Green700,
    dark: RawColor.Green800,
    contrastText: RawColor.White,
    hover: RawColor.Green800,
    active: RawColor.Green900,

    lowEmphasis: {
      light: RawColor.Green200,
      main: RawColor.Green300,
      dark: RawColor.Green400,
      contrastText: RawColor.Green700,
      hover: RawColor.Green200,
      active: RawColor.Green300,
    },

    border: {
      light: RawColor.Green400,
      main: RawColor.Green600,
      dark: RawColor.Green700,
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
    },
  },
  error: {
    light: RawColor.Red500,
    main: RawColor.Red700,
    dark: RawColor.Red800,
    contrastText: RawColor.White,
    hover: RawColor.Red800,
    active: RawColor.Red900,

    lowEmphasis: {
      light: RawColor.Red200,
      main: RawColor.Red300,
      dark: RawColor.Red400,
      contrastText: RawColor.Red700,
      hover: RawColor.Red200,
      active: RawColor.Red300,
    },

    border: {
      light: RawColor.Red400,
      main: RawColor.Red500,
      dark: RawColor.Red700,
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
    },
  },
  warning: {
    light: RawColor.Yellow300,
    main: RawColor.Yellow500,
    dark: RawColor.Yellow600,
    contrastText: RawColor.Yellow900,
    hover: RawColor.Yellow600,
    active: RawColor.Yellow700,

    lowEmphasis: {
      light: RawColor.Yellow200,
      main: RawColor.Yellow300,
      dark: RawColor.Yellow400,
      contrastText: RawColor.Yellow700,
      hover: RawColor.Yellow200,
      active: RawColor.Yellow300,
    },

    border: {
      light: RawColor.Yellow500,
      main: RawColor.Yellow700,
      dark: RawColor.Yellow800,
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
    },
  },
  info: {
    light: RawColor.Blue500,
    main: RawColor.Blue700,
    dark: RawColor.Blue800,
    contrastText: RawColor.White,
    hover: RawColor.Blue800,
    active: RawColor.Blue900,

    lowEmphasis: {
      light: RawColor.Blue200,
      main: RawColor.Blue300,
      dark: RawColor.Blue400,
      contrastText: RawColor.Blue700,
      hover: RawColor.Blue200,
      active: RawColor.Blue300,
    },

    border: {
      light: RawColor.Blue400,
      main: RawColor.Blue600,
      dark: RawColor.Blue700,
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
    },
  },
  text: {
    primary: RawColor.Grey900,
    secondary: RawColor.Grey700,
    disabled: RawColor.Grey400,
    link: RawColor.Blue700,
    placeholder: RawColor.Grey500,
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
  divider: RawColor.Grey200,
  outlinedBorder: RawColor.Grey200,
  filledInputBackground: RawColor.Grey100,
  standardInputLine: RawColor.Grey500,
  snackbar: RawColor.Grey500,
  rating: RawColor.Yellow500,
  tooltip: RawColor.Grey800,
  backdropOverlay: alpha(RawColor.Grey800, 0.7),
  background: {
    default: RawColor.Grey100,
    paper: RawColor.White,
  },
  action: action,
  chart: chartColors,

  appIcon: {
    orange: {
      main: RawColor.Orange600,
    },
    blue: {
      main: '#637FAE',
      dark: '#324360',
    },
  },
  illustration: {
    orange: {
      light: RawColor.Orange400,
      dark: RawColor.Orange800,
    },
    blue: {
      light: RawColor.White,
      main: RawColor.Blue300,
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

/** The Meteor light theme which combines:
 * - `baseTheme`
 * - Extended color tokens
 * - `themeComponents` component overrides
 */
export const meteorLightTheme: Theme = createTheme(
  {
    ...themeWithoutComponents,
    name: 'meteorLight',
    components: components,
  },
  {},
)
