// eslint-disable-next-line no-restricted-imports
import * as _MUI from '@mui/material'
import { Color } from '@mui/material'

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

    rating: string
  }

  /**
   * Extend the color `PaletteOptions` interface to add additional shades, colors, etc.
   *
   * Because these are custom and have no MUI-provided defaults, they are required to be set, so they can be safely used.
   */
  interface PaletteOptions {
    accent?: PaletteColorOptions

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
      blue: PaletteColorOptions
      orange: PaletteColorOptions
      teal: PaletteColorOptions
      fuchsia: PaletteColorOptions
      purple: PaletteColorOptions
    }>

    rating?: string
  }

  interface PaletteColor {
    shades: ColorShades
    hover: string
    active: string
    disabled: {
      background: string
      text: string
    }
    mediumEmphasis: {
      light: string
      main: string
      dark: string
      contrastText: string
      hover: string
      active: string
      disabled: {
        background: string
        text: string
      }
    }
    weakEmphasis: {
      light: string
      main: string
      dark: string
      contrastText: string
      hover: string
      selected: string
      active: string
      selectedHovered: string
      disabled: {
        background: string
        text: string
      }
    }
    border: {
      light: string
      main: string
      dark: string
    }
    focusRing: {
      inner: string
      outer: string
    }
  }

  interface SimplePaletteColorOptions {
    shades?: ColorShades
    hover?: string
    active?: string
    disabled?: Partial<{
      background: string
      text: string
    }>
    /**
     * Commonly used for less prominent elements
     */
    mediumEmphasis?: Partial<{
      light: string
      main: string
      dark: string
      contrastText: string
      hover: string
      active: string
      disabled: Partial<{
        background: string
        text: string
      }>
    }>
    /**
     * Commonly used for `outlined` and `text` variants.
     */
    weakEmphasis?: Partial<{
      transparent: string
      main: string
      dark: string
      contrastText: string
      hover: string
      selected: string
      active: string
      selectedHovered: string
      disabled: Partial<{
        background: string
        text: string
      }>
    }>
    border?: Partial<{
      /**
       * Weak emphasis. Current usage:Outlined Buttons
       */
      light: string
      /**
       * Medium emphasis. Current usage: Alert border
       */
      main: string
      /**
       * Strong emphasis. Current usage: Contained Button Group
       */
      dark: string
    }>
    /**
     * Pre-defined inner and outer focus ring color pairing
     */
    focusRing?: Partial<{
      inner: string
      outer: string
    }>
  }
}
