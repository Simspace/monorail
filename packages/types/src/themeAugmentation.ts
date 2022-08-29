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

type ColorShades = {
  50: string
  100: string
  200: string
  300: string
  400: string
  500: string
  600: string
  700: string
  800: string
  900?: string
  A100?: string
  A200?: string
  A400?: string
  A700?: string
}

declare module '@mui/material/styles/createPalette' {
  /**
   * Extend the color `Palette` interface to add additional shades, colors, etc.
   *
   * Because these are custom and have no MUI-provided defaults, they are required to be set, so they can be safely used.
   */
  interface Palette {
    /**
     * Special non-semantic color settings for specific things in the application.
     *
     * It's debatable whether these should be specified like this in the theme, but these colors are used across the app
     * and it's convenient for them to be specified consistently in the theme.
     */

    accent: PaletteColor

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

    /** Color token for `Rating` when filled */
    rating: string
  }

  /**
   * Extend the color `PaletteOptions` interface to add additional shades, colors, etc.
   *
   * Because these are custom and have no MUI-provided defaults, they are required to be set, so they can be safely used.
   */
  interface PaletteOptions {
    accent?: PaletteColorOptions

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

    /** Color token for `Rating` when filled */
    rating?: string
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
      /** Shade: 200 */
      selected: string
      /** Shade: 300 */
      active: string
      /** Shade: 400 */
      selectedHovered: string
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
      /** Shade: 200 */
      selected: string
      /** Shade: 300 */
      active: string
      /** Shade: 400 */
      selectedHovered: string
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
}

declare module '@mui/material/styles/createTypography' {
  interface Typography {
    data1: React.CSSProperties
    data2: React.CSSProperties
    data3: React.CSSProperties
  }

  // allow configuration using `createTheme`
  interface TypographyOptions {
    data1?: React.CSSProperties
    data2?: React.CSSProperties
    data3?: React.CSSProperties
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    data1: true
    data2: true
    data3: true
    h4: false
    h5: false
    h6: false
  }
}