// eslint-disable-next-line no-restricted-imports
import type { Color } from '@mui/material'
import * as _MUI from '@mui/material'

// This file is intended to house all our interface extensions/module augmentations for the MUI theme types.
//
// This includes:
// - Color palette extensions (adding more shades, custom color codes, etc.)
// - Component-level extensions (custom variants, sizes, props, etc.)
// - Other things?
//
// Note: there is some weird redundancy in some of these types, mostly because of how MUI has them setup as input options
// provided by the theme creator and then the actual output theme types used by the theme consumer.

export type ColorShades = {
  50?: string
  100: string
  200: string
  300: string
  400: string
  500: string
  600: string
  700: string
  800?: string
  900?: string
  950?: string
  A100?: string
  A200?: string
  A400?: string
  A700?: string
}

export enum ThemeName {
  ClassicLight = 'classicLight',
  ClassicDark = 'classicDark',
  MUILight = 'muiLight',
  MUIDark = 'muiDark',
  PCTELight = 'pcteLight',
  PCTEDark = 'pcteDark',
  MeteorLight = 'meteorLight',
  MeteorDark = 'meteorDark',
}

declare module '@mui/material/styles/createTheme' {
  interface ThemeOptions {
    name?: string
  }

  interface Theme {
    name: ThemeName
  }
}

declare module '@mui/material/styles/createPalette' {
  /**
   * Extend the color `Palette` interface to add additional shades, colors, etc.
   *
   * Because these are custom and have no MUI-provided defaults, they are required to be set, so they can be safely used.
   */
  interface Palette {
    /**
     * Tertiary colors. Named `default` to mirror MUI's color variant.
     * @see IconButton,Badge,Checkbox,Radio,Chip,Progress
     * */
    default: PaletteColor

    score: {
      high: PaletteColor
      highModerate: PaletteColor
      moderate: PaletteColor
      lowModerate: PaletteColor
      low: PaletteColor
    }

    tiers: {
      one: string
      two: string
      three: string
      four: string
    }

    chart: {
      blue: Color
      orange: Color
      teal: Color
      fuchsia: Color
      purple: Color
    }

    appIcon: {
      orange: {
        main: string
      }
      blue: {
        main: string
        dark: string
      }
    }
    illustration: {
      orange: {
        light: string
        dark: string
      }
      blue: {
        light: string
        main: string
      }
    }

    /** Color token for `Rating` when filled */
    rating: string
    /** Commonly used for outlined input fields */
    outlinedBorder: string
    filledInputBackground: string
    standardInputLine: string
    /** Background color for the `Tooltip` component */
    tooltip: string
    /** Background color for the `Snackbar` component if no children are provided */
    snackbar: string
    /** Background color for the Backdrop component (AKA "scrim"). */
    backdropOverlay: string
  }

  /**
   * Extend the color `PaletteOptions` interface to add additional shades, colors, etc.
   *
   * Because these are custom and have no MUI-provided defaults, they are required to be set, so they can be safely used.
   */
  interface PaletteOptions {
    /**
     * Tertiary colors. Named `default` to mirror MUI's color variant.
     * @see IconButton,Badge,Checkbox,Radio,Chip,Progress
     * */
    default?: PaletteColorOptions

    score?: Partial<{
      high: SimplePaletteColorOptions
      highModerate: SimplePaletteColorOptions
      moderate: SimplePaletteColorOptions
      lowModerate: SimplePaletteColorOptions
      low: SimplePaletteColorOptions
    }>

    tiers?: Partial<{
      one: string
      two: string
      three: string
      four: string
    }>

    chart?: Partial<{
      blue: PaletteColorOptions | Record<string, string>
      orange: PaletteColorOptions | Record<string, string>
      teal: PaletteColorOptions | Record<string, string>
      fuchsia: PaletteColorOptions | Record<string, string>
      purple: PaletteColorOptions | Record<string, string>
    }>

    appIcon?: {
      orange: {
        main: string
      }
      blue: {
        main: string
        dark: string
      }
    }
    illustration?: {
      orange: {
        light: string
        dark: string
      }
      blue: {
        light: string
        main: string
      }
    }

    /** Color token for `Rating` when filled */
    rating?: string
    /** Commonly used for outlined input fields */
    outlinedBorder?: string
    filledInputBackground?: string
    standardInputLine?: string
    /** Background color for the `Tooltip` component */
    tooltip?: string
    /** Background color for the `Snackbar` component if no children are provided */
    snackbar?: string
    /** Background color for the Backdrop component (AKA "scrim"). */
    backdropOverlay?: string
  }

  interface PaletteColor {
    /**
     * Use sparingly.
     *
     * Access to raw color palette for one-off applications or
     * as a stand-in for un-tokenized color patterns.
     *
     * This is a replacement for `@mui/material/colors` since we aren't able to directly modify its color scale.
     *
     */
    shades: ColorShades
    /** Shade: 700 (300 for Orange) */
    hover: string
    /** Shade: 800 (400 for Orange) */
    active: string
    /**
     * Subdued color scheme for less prominent elements.
     * Commonly used for `outlined` and `text` (chromeless) variants.
     */
    lowEmphasis: {
      /** Shade: 50 */
      light: string
      /** Shade: 100 */
      main: string
      /** Shade: 300 */
      dark: string
      /** Shade: 600 */
      contrastText: string
      /** Shade: 100 */
      hover: string
      /** Shade: 300 */
      active: string
    }
    border: {
      /** Shade: 400 */
      light: string
      /** Shade: 600 (500 for Orange) */
      main: string
      /** Shade: 800 */
      dark: string
    }
    /**
     * Pre-defined inner and outer focus ring color pairing
     */
    focusRing: {
      /** Shade: 800 */
      inner: string
      /** Shade: 400 */
      outer: string
    }
  }

  interface SimplePaletteColorOptions {
    /**
     * Use sparingly.
     *
     * Access to raw color palette for one-off applications or
     * as a stand-in for un-tokenized color patterns.
     *
     * This is a replacement for `@mui/material/colors` since we aren't able to directly modify its color scale.
     *
     */
    shades?: ColorShades
    /** Shade: 700 (300 for Orange) */
    hover?: string
    /** Shade: 800 (400 for Orange) */
    active?: string
    /**
     * Subdued color scheme for less prominent elements.
     * Commonly used for `outlined` and `text` (chromeless) variants.
     */
    lowEmphasis?: Partial<{
      /** Shade: 50 */
      light: string
      /** Shade: 100 */
      main: string
      /** Shade: 300 */
      dark: string
      /** Shade: 600 */
      contrastText: string
      /** Shade: 100 */
      hover: string
      /** Shade: 300 */
      active: string
    }>
    border?: Partial<{
      /** Shade: 400 */
      light: string
      /** Shade: 600 (500 for Orange) */
      main: string
      /** Shade: 800 */
      dark: string
    }>
    /**
     * Pre-defined inner and outer focus ring color pairing
     */
    focusRing?: Partial<{
      /** Shade: 800 */
      inner: string
      /** Shade: 400 */
      outer: string
    }>
  }

  interface TypeText {
    link: string
    placeholder: string
  }
}

declare module '@mui/material/styles/createTypography' {
  interface Typography {
    data1: React.CSSProperties
    data2: React.CSSProperties
    data3: React.CSSProperties
    monoBody1: React.CSSProperties
    monoBody2: React.CSSProperties
    monoBody3: React.CSSProperties
    alertTitle: React.CSSProperties
    avatarInitials: React.CSSProperties
    badgeLabel: React.CSSProperties
    bottomNavActiveLabel: React.CSSProperties
    buttonLarge: React.CSSProperties
    buttonMedium: React.CSSProperties
    buttonSmall: React.CSSProperties
    chip: React.CSSProperties
    inputLabel: React.CSSProperties
    helperText: React.CSSProperties
    inputText: React.CSSProperties
    tableHeader: React.CSSProperties
    listSubheader: React.CSSProperties
    menuItem: React.CSSProperties
    menuItemDense: React.CSSProperties
    tabActive: React.CSSProperties
    tabInactive: React.CSSProperties
    tooltip: React.CSSProperties
  }

  export interface FontStyle {
    fontWeightExtraLight: React.CSSProperties['fontWeight']
    fontWeightSemiBold: React.CSSProperties['fontWeight']
    fontWeightBlack: React.CSSProperties['fontWeight']
  }

  // allow configuration using `createTheme`
  interface TypographyOptions {
    data1?: React.CSSProperties
    data2?: React.CSSProperties
    data3?: React.CSSProperties
    monoBody1?: React.CSSProperties
    monoBody2?: React.CSSProperties
    monoBody3?: React.CSSProperties
    alertTitle?: React.CSSProperties
    avatarInitials?: React.CSSProperties
    badgeLabel?: React.CSSProperties
    bottomNavActiveLabel?: React.CSSProperties
    buttonLarge?: React.CSSProperties
    buttonMedium?: React.CSSProperties
    buttonSmall?: React.CSSProperties
    chip?: React.CSSProperties
    inputLabel?: React.CSSProperties
    helperText?: React.CSSProperties
    inputText?: React.CSSProperties
    tableHeader?: React.CSSProperties
    listSubheader?: React.CSSProperties
    menuItem?: React.CSSProperties
    menuItemDense?: React.CSSProperties
    tabActive?: React.CSSProperties
    tabInactive?: React.CSSProperties
    tooltip?: React.CSSProperties
    fontWeightExtraLight?: React.CSSProperties['fontWeight']
    fontWeightSemiBold?: React.CSSProperties['fontWeight']
    fontWeightBlack?: React.CSSProperties['fontWeight']
  }
}
