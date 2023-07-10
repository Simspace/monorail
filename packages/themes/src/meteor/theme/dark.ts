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

  Blue100 = '#FFFFFF',
  Blue200 = '#D0E4FB',
  Blue300 = '#9FCBFE',
  Blue400 = '#5696D7',
  Blue500 = '#2B6BAB',
  Blue600 = '#23578B',
  Blue700 = '#22426D',
  Blue800 = '#223E62',
  Blue900 = '#1C304A',

  Orange050 = '#591808',
  Orange100 = '#913015',
  Orange200 = '#AC3D1A',
  Orange300 = '#D65024',
  Orange400 = '#FA6B40',
  Orange500 = '#FC9172',
  Orange600 = '#FDAF9A',
  Orange700 = '#FEC7B7',
  Orange800 = '#FFDAD1',
  Orange900 = '#FFF0EB',

  Yellow100 = '#FFFFFF',
  Yellow200 = '#FDE6AF',
  Yellow300 = '#FFDB84',
  Yellow400 = '#F5BB29',
  Yellow500 = '#CC9814',
  Yellow600 = '#7E6007',
  Yellow700 = '#614A05',
  Yellow800 = '#3F3005',
  Yellow900 = '#13110D',

  Green100 = '#FFFFFF',
  Green200 = '#DEF1DA',
  Green300 = '#A8CCA3',
  Green400 = '#76B06D',
  Green500 = '#40773C',
  Green600 = '#385936',
  Green700 = '#284125',
  Green800 = '#263923',
  Green900 = '#233021',

  Red100 = '#FFFFFF',
  Red200 = '#FFD6DD',
  Red300 = '#FFADBB',
  Red400 = '#D2324C',
  Red500 = '#A7112F',
  Red600 = '#7E162B',
  Red700 = '#61242E',
  Red800 = '#521E27',
  Red900 = '#421A20',

  Purple050 = '#460976',
  Purple100 = '#7318C1',
  Purple200 = '#8723EA',
  Purple300 = '#9353F3',
  Purple400 = '#A784F5',
  Purple500 = '#B6A1F7',
  Purple600 = '#C7BAF8',
  Purple700 = '#D5CEFA',
  Purple800 = '#E3DFFB',
  Purple900 = '#F3F1FD',

  Fuchsia050 = '#56035A',
  Fuchsia100 = '#8D0D96',
  Fuchsia200 = '#A916B4',
  Fuchsia300 = '#CB21DA',
  Fuchsia400 = '#E65CF8',
  Fuchsia500 = '#E889F9',
  Fuchsia600 = '#EBABFA',
  Fuchsia700 = '#EFC5FB',
  Fuchsia800 = '#F3DAFC',
  Fuchsia900 = '#FAEFFD',

  Teal050 = '#113430',
  Teal100 = '#215952',
  Teal200 = '#296D64',
  Teal300 = '#32857B',
  Teal400 = '#3FA898',
  Teal500 = '#46C0AF',
  Teal600 = '#4CD7C4',
  Teal700 = '#50EAD2',
  Teal800 = '#52FBDE',
  Teal900 = '#C6FEF3',

  Chartreuse050 = '#20340C',
  Chartreuse100 = '#3A5919',
  Chartreuse200 = '#486C1F',
  Chartreuse300 = '#5B8426',
  Chartreuse400 = '#74A62F',
  Chartreuse500 = '#88BD33',
  Chartreuse600 = '#9AD337',
  Chartreuse700 = '#A7E638',
  Chartreuse800 = '#B6F638',
  Chartreuse900 = '#DBFEB4',

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

export const DefaultLightChartColors = {
  blue: {
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
    900: RawColor.Orange900,
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
  fuchsia: {
    50: RawColor.Fuchsia050,
    100: RawColor.Fuchsia100,
    200: RawColor.Fuchsia200,
    300: RawColor.Fuchsia300,
    400: RawColor.Fuchsia400,
    500: RawColor.Fuchsia500,
    600: RawColor.Fuchsia600,
    700: RawColor.Fuchsia700,
    800: RawColor.Fuchsia800,
    900: RawColor.Fuchsia900,
  },
}

enum Opacities {
  Hover = 0.08,
  Focus = 0.24,
  Selected = 0.16,
  Active = 0.24,
  Disabled = 0.4,
}

const action: TypeAction = {
  active: alpha(RawColor.Chartreuse600, Opacities.Active),
  activatedOpacity: Opacities.Active,
  disabled: RawColor.Grey300,
  disabledBackground: alpha(RawColor.Black, 0.32),
  disabledOpacity: Opacities.Disabled,
  focus: alpha(RawColor.Chartreuse600, Opacities.Focus),
  focusOpacity: Opacities.Focus,
  hover: alpha(RawColor.Chartreuse600, Opacities.Hover),
  hoverOpacity: Opacities.Hover,
  selected: alpha(RawColor.Chartreuse600, Opacities.Selected),
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
    light: RawColor.Chartreuse400,
    main: RawColor.Chartreuse600,
    dark: RawColor.Chartreuse800,
    hover: RawColor.Chartreuse700,
    active: RawColor.Chartreuse800,

    lowEmphasis: {
      light: RawColor.Chartreuse050,
      main: RawColor.Chartreuse100,
      dark: RawColor.Chartreuse300,
      contrastText: RawColor.Chartreuse600,
      hover: alpha(RawColor.Chartreuse400, action.hoverOpacity),
      active: alpha(RawColor.Chartreuse400, action.activatedOpacity),
    },

    border: {
      light: RawColor.Chartreuse400,
      main: RawColor.Chartreuse600,
      dark: RawColor.Chartreuse800,
    },

    focusRing: {
      inner: RawColor.Chartreuse800,
      outer: RawColor.Chartreuse400,
    },

    shades: {
      50: RawColor.Chartreuse050,
      100: RawColor.Chartreuse100,
      200: RawColor.Chartreuse200,
      300: RawColor.Chartreuse300,
      400: RawColor.Chartreuse400,
      500: RawColor.Chartreuse500,
      600: RawColor.Chartreuse600,
      700: RawColor.Chartreuse700,
      800: RawColor.Chartreuse800,
    },
  },
  secondary: {
    light: RawColor.Orange400,
    main: RawColor.Orange600,
    dark: RawColor.Orange800,
  },
  default: {
    light: RawColor.Grey400,
    main: RawColor.Grey600,
    dark: RawColor.Grey800,
    contrastText: RawColor.White,
    hover: RawColor.Grey700,
    active: RawColor.Grey800,

    lowEmphasis: {
      light: RawColor.Grey100,
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
      inner: RawColor.Purple800,
      outer: RawColor.Purple400,
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
    light: RawColor.Green400,
    main: RawColor.Green600,
    dark: RawColor.Green800,
    hover: RawColor.Green700,
    active: RawColor.Green800,

    lowEmphasis: {
      light: RawColor.Green100,
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
    light: RawColor.Red400,
    main: RawColor.Red600,
    dark: RawColor.Red800,
    hover: RawColor.Red700,
    active: RawColor.Red800,

    lowEmphasis: {
      light: RawColor.Red100,
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
    light: RawColor.Yellow400,
    main: RawColor.Yellow600,
    dark: RawColor.Yellow800,
    hover: RawColor.Yellow700,
    active: RawColor.Yellow800,

    lowEmphasis: {
      light: RawColor.Yellow100,
      main: RawColor.Yellow100,
      dark: RawColor.Yellow300,
      contrastText: RawColor.Yellow600,
      hover: alpha(RawColor.Yellow400, action.hoverOpacity),
      active: alpha(RawColor.Yellow400, action.activatedOpacity),
    },

    border: {
      light: RawColor.Yellow400,
      main: RawColor.Yellow600,
      dark: RawColor.Yellow800,
    },

    focusRing: {
      inner: RawColor.Yellow800,
      outer: RawColor.Yellow400,
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
    light: RawColor.Blue400,
    main: RawColor.Blue600,
    dark: RawColor.Blue800,
    hover: RawColor.Blue700,
    active: RawColor.Blue800,

    lowEmphasis: {
      light: RawColor.Blue100,
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
    primary: RawColor.Grey900,
    secondary: RawColor.Grey600,
    disabled: RawColor.Grey400,
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
  rating: RawColor.Yellow600,
  tooltip: RawColor.Grey300,
  backdropOverlay: `rgba(${RawColor.Grey800}, 0.7)`,
  background: {
    default: RawColor.Grey100,
    paper: RawColor.Black,
  },
  action: action,
  chart: DefaultLightChartColors,
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
