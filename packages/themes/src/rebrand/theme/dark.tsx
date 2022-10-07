// eslint-disable-next-line no-restricted-imports
import type {
  PaletteOptions,
  Theme,
  ThemeOptions,
  TypeAction,
} from '@mui/material'
import { alpha, createTheme } from '@mui/material'

import { getThemeComponents } from '@monorail/themes/classic/theme/themeComponents'
import { baseTheme } from '@monorail/themes/rebrand/theme/baseTheme'

// #region Raw Colors (Option Tokens)
/**
 * Context-free named colors. Only meant to be used by aliases
 */
export enum RawColor {
  Transparent = 'transparent',
  White = '#FFFFFF',
  Black = '#000000',
  Paper = '#141414',

  Grey050 = '#2E2E35',
  Grey100 = '#525260',
  Grey200 = '#616173',
  Grey300 = '#77778C',
  Grey400 = '#9797A4',
  Grey500 = '#ADADB7',
  Grey600 = '#C1C1C9',
  Grey700 = '#D3D3D8',
  Grey800 = '#E2E2E4',
  Grey900 = '#F3F3F3',

  Blue050 = '#0F3050',
  Blue100 = '#205480',
  Blue200 = '#2A659E',
  Blue300 = '#377CBE',
  Blue400 = '#499CEC',
  Blue500 = '#7FB0F1',
  Blue600 = '#A4C4F4',
  Blue700 = '#C1D4F6',
  Blue800 = '#D6E3F9',
  Blue900 = '#EEF3FC',

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

  Yellow050 = '#4A2404',
  Yellow100 = '#7B440F',
  Yellow200 = '#8F5315',
  Yellow300 = '#AB691F',
  Yellow400 = '#D3872C',
  Yellow500 = '#EC9D37',
  Yellow600 = '#F9B464',
  Yellow700 = '#FBCA99',
  Yellow800 = '#FCDDBE',
  Yellow900 = '#FDF1E5',

  Green050 = '#043712',
  Green100 = '#0E5D28',
  Green200 = '#157135',
  Green300 = '#1F8A47',
  Green400 = '#2DAD60',
  Green500 = '#38C573',
  Green600 = '#43DC86',
  Green700 = '#4EEE99',
  Green800 = '#73FCAF',
  Green900 = '#D0FDE1',

  Red050 = '#5C1404',
  Red100 = '#9F1B0E',
  Red200 = '#BE2416',
  Red300 = '#E43220',
  Red400 = '#F86A65',
  Red500 = '#F89091',
  Red600 = '#F9AFB0',
  Red700 = '#FAC7C8',
  Red800 = '#FBDADC',
  Red900 = '#FDF0F0',

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
  active: alpha(RawColor.White, Opacities.Active),
  activatedOpacity: Opacities.Active,
  disabled: RawColor.Grey300,
  disabledBackground: alpha(RawColor.Black, 0.32),
  disabledOpacity: Opacities.Disabled,
  focus: alpha(RawColor.White, Opacities.Focus),
  focusOpacity: Opacities.Focus,
  hover: alpha(RawColor.White, Opacities.Hover),
  hoverOpacity: Opacities.Hover,
  selected: alpha(RawColor.White, Opacities.Selected),
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
    light: RawColor.Orange300,
    main: RawColor.Orange500,
    dark: RawColor.Orange700,
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
      inner: RawColor.Purple800,
      outer: RawColor.Purple400,
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
      hover: alpha(RawColor.Red600, action.hoverOpacity),
      active: alpha(RawColor.Red600, action.activatedOpacity),
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
    light: RawColor.Yellow400,
    main: RawColor.Yellow600,
    dark: RawColor.Yellow800,
    hover: RawColor.Yellow300,
    active: RawColor.Yellow400,

    lowEmphasis: {
      light: RawColor.Yellow050,
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
      50: RawColor.Yellow050,
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
    secondary: RawColor.Grey600,
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
  divider: RawColor.Grey100,
  rating: RawColor.Yellow600,
  tooltip: RawColor.Grey300,
  backdropOverlay: `rgba(${RawColor.Grey800}, 0.7)`,
  background: {
    default: RawColor.Grey050,
    paper: RawColor.Paper,
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

/** The UNOFFICIAL rebranded Portal dark theme which combines:
 * - `baseTheme`
 * - Extended color tokens with `palette.mode` set to `'dark'`
 * - `themeComponents` component overrides
 */
export const rebrandDarkTheme: Theme = createTheme(
  {
    ...themeWithoutComponents,
    name: 'rebrandDark',
    components: components,
  },
  {},
)
