import type {
  PaletteOptions,
  Theme,
  ThemeOptions,
  TypeAction,
} from '@mui/material'
import { alpha, createTheme } from '@mui/material'

import { baseTheme } from '@monorail/themes/legacy/theme/baseTheme'
import { getThemeComponents } from '@monorail/themes/legacy/theme/themeComponents'

// #region Raw Colors (Option Tokens)
/**
 * Context-free named colors. Only meant to be used by aliases
 */
export enum RawColor {
  Transparent = 'transparent',
  White = '#FFFFFF',
  Black = '#000000',

  Grey050 = '#F0F0F0',
  Grey100 = '#EBEBEB',
  Grey200 = '#E0E0E0',
  Grey300 = '#C2C2C2',
  Grey400 = '#A6A6A6',
  Grey500 = '#8F8F8F',
  Grey600 = '#757575',
  Grey700 = '#616161',
  Grey800 = '#424242',
  Grey900 = '#1C1C1C',
  GreyA100 = '#EBEBEB',
  GreyA300 = '#8F8F8F',
  GreyA700 = '#616161',
  GreyA900 = '#1C1C1C',

  Blue050 = '#F5F9FF',
  Blue100 = '#D9E4FD',
  Blue200 = '#BDD3FE',
  Blue300 = '#A1C1FF',
  Blue400 = '#7AA8FF',
  Blue500 = '#4787FF',
  Blue600 = '#1465FF',
  Blue700 = '#1050CB',
  Blue800 = '#0C3D9C',

  Purple050 = '#F5E2FF',
  Purple100 = '#D6B7E7',
  Purple200 = '#cba2f8', // unused
  Purple300 = '#A872C5',
  Purple400 = '#85539F',
  Purple500 = '#9550da', // unused
  Purple600 = '#4A235E',
  Purple700 = '#613395', // unused
  Purple800 = '#4A235E',
  Purple900 = '#280078', // unused

  Orange050 = '#FFF8F0',
  Orange100 = '#FFE6C7',
  Orange200 = '#FCCF87',
  Orange300 = '#FFAD39',
  Orange400 = '#FF8000',
  Orange500 = '#E16705',
  Orange600 = '#CF530A',
  Orange700 = '#A94408',
  Orange800 = '#833405',

  Yellow = '#F3BE1F',

  Green050 = '#E8FCEE',
  Green100 = '#BBF7CD',
  Green200 = '#86E1A1',
  Green300 = '#31C367',
  Green400 = '#1AB053',
  Green500 = '#029C3F',
  Green600 = '#058538',
  Green700 = '#086D30',
  Green800 = '#065324',

  Red050 = '#FFF6F5',
  Red100 = '#FFE3E0',
  Red200 = '#FCCDC8',
  Red300 = '#F8B6AF',
  Red400 = '#FF8480',
  Red500 = '#FD3D3D',
  Red600 = '#D5251F',
  Red700 = '#AD0C00',
  Red800 = '#850900',
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

enum Opacities {
  Hover = 0.04,
  Focus = 0.12,
  Selected = 0.08,
  Active = 0.12,
  Disabled = 0.6,
}

const action: TypeAction = {
  active: alpha(RawColor.Purple600, Opacities.Active),
  activatedOpacity: Opacities.Active,
  disabled: RawColor.Grey300,
  disabledBackground: alpha(RawColor.Black, 0.32),
  disabledOpacity: Opacities.Disabled,
  focus: alpha(RawColor.Purple600, Opacities.Focus),
  focusOpacity: Opacities.Focus,
  hover: alpha(RawColor.Purple600, Opacities.Hover),
  hoverOpacity: Opacities.Hover,
  selected: alpha(RawColor.Purple600, Opacities.Selected),
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
  common: {
    white: RawColor.White,
    black: RawColor.Black,
  },
  primary: {
    light: RawColor.Purple400,
    main: RawColor.Purple600,
    dark: RawColor.Purple800,
    hover: RawColor.Purple800,
    active: RawColor.Purple800, // Need a step for this

    lowEmphasis: {
      light: RawColor.Purple050,
      main: RawColor.Purple100,
      dark: RawColor.Purple300,
      contrastText: RawColor.Purple600,
      hover: alpha(RawColor.Purple400, action.hoverOpacity),
      active: alpha(RawColor.Purple400, action.activatedOpacity),
    },

    border: {
      light: RawColor.Purple400,
      main: RawColor.Purple600,
      dark: RawColor.Purple800,
    },

    focusRing: {
      inner: RawColor.Purple800,
      outer: RawColor.Purple400,
    },

    shades: {
      50: RawColor.Purple050,
      100: RawColor.Purple100,
      200: RawColor.Purple200,
      300: RawColor.Purple300,
      400: RawColor.Purple400,
      500: RawColor.Purple500,
      600: RawColor.Purple600,
      700: RawColor.Purple700,
      800: RawColor.Purple800,
    },
  },
  secondary: {
    light: '#BF61EE',
    main: '#70169D',
    dark: '#29013D',
  },
  default: {
    light: RawColor.Grey400,
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
      hover: alpha(RawColor.Grey400, action.hoverOpacity),
      active: alpha(RawColor.Grey400, action.activatedOpacity),
    },

    border: {
      light: RawColor.Grey400,
      main: RawColor.Grey600,
      dark: RawColor.Grey800,
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
  success: {
    light: RawColor.Green400,
    main: RawColor.Green600,
    dark: RawColor.Green800,
    hover: RawColor.Green700,
    active: RawColor.Green800,

    lowEmphasis: {
      light: RawColor.Green050,
      main: RawColor.Green100,
      dark: RawColor.Green300,
      contrastText: RawColor.Green600,
      hover: alpha(RawColor.Green400, action.hoverOpacity),
      active: alpha(RawColor.Green400, action.activatedOpacity),
    },

    border: {
      light: RawColor.Green400,
      main: RawColor.Green600,
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
    main: RawColor.Red600,
    dark: RawColor.Red800,
    hover: RawColor.Red700,
    active: RawColor.Red800,

    lowEmphasis: {
      light: RawColor.Red050,
      main: RawColor.Red100,
      dark: RawColor.Red300,
      contrastText: RawColor.Red600,
      hover: alpha(RawColor.Red400, action.hoverOpacity),
      active: alpha(RawColor.Red400, action.activatedOpacity),
    },

    border: {
      light: RawColor.Red400,
      main: RawColor.Red600,
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
      hover: alpha(RawColor.Orange400, action.hoverOpacity),
      active: alpha(RawColor.Orange400, action.activatedOpacity),
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
  info: {
    light: RawColor.Blue400,
    main: RawColor.Blue600,
    dark: RawColor.Blue800,
    hover: RawColor.Blue700,
    active: RawColor.Blue800,

    lowEmphasis: {
      light: RawColor.Blue050,
      main: RawColor.Blue100,
      dark: RawColor.Blue300,
      contrastText: RawColor.Blue600,
      hover: alpha(RawColor.Blue400, action.hoverOpacity),
      active: alpha(RawColor.Blue400, action.activatedOpacity),
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
    A100: RawColor.GreyA100,
    A200: RawColor.GreyA300,
    A400: RawColor.GreyA700,
    A700: RawColor.GreyA900,
  },
  divider: RawColor.Grey200,
  rating: RawColor.Yellow,
  tooltip: RawColor.Grey800,
  backdropOverlay: `rgba(${RawColor.Black}, 0.5)`,
  background: {
    default: '#FAFAFA',
    paper: RawColor.White,
  },
  action: action,
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

/** The UNOFFICIAL PCTE light theme which combines:
 * - `baseTheme`
 * - Extended color tokens
 * - `themeComponents` component overrides
 */
export const pcteLight: Theme = createTheme(
  {
    ...themeWithoutComponents,
    name: 'pcteLight',
    components: components,
  },
  {},
)
