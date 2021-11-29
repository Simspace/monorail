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

    colors: {
      blue: Color
      orange: Color
      teal: Color
      fuschia: Color
      purple: Color
    }

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
  }

  /**
   * Extend the color `PaletteOptions` interface to add additional shades, colors, etc.
   *
   * Because these are custom and have no MUI-provided defaults, they are required to be set, so they can be safely used.
   */
  interface PaletteOptions {
    score?: Partial<{
      high: PaletteColorOptions
      highModerate: PaletteColorOptions
      moderate: PaletteColorOptions
      lowModerate: PaletteColorOptions
      low: PaletteColorOptions
    }>

    colors?: Partial<{
      blue: PaletteColorOptions
      orange: PaletteColorOptions
      teal: PaletteColorOptions
      fuschia: PaletteColorOptions
      purple: PaletteColorOptions
    }>

    tiers?: Partial<{
      one: string
      two: string
      three: string
      four: string
    }>
  }
}

declare module '@mui/material/Button' {
  /**
   * Extend the Button size to allow a new size `extraSmall` (aka dense)
   */
  interface ButtonPropsSizeOverrides {
    extraSmall: true
  }

  /**
   * Extend the Button color prop to allow for the other semantic styles.
   *
   * These seem to work out-of-the-box with no custom variant theming
   */
  interface ButtonPropsColorOverrides {
    info: true
    success: true
    warning: true
    error: true
  }
}
