// eslint-disable-next-line no-restricted-imports
import * as _MUI from '@material-ui/core'

// This file is intended to house all our interface extensions/module augmentations for the MUI theme types.
//
// This includes:
// - Color palette extensions (adding more shades, custom color codes, etc.)
// - Component-level extensions (custom variants, sizes, props, etc.)
// - Other things?
//
// Note: there is some weird redundancy in some of these types, mostly because of how MUI has them setup as input options
// provided by the theme creator and then the actual output theme types used by the theme consumer.

declare module '@material-ui/core/styles/createPalette' {
  /**
   * Add additional shades to PaletteColor
   */
  interface PaletteColor {
    lightest: string
    lighter: string
    darker: string
    darkest: string
  }

  /**
   * Add additional shades to SimplePaletteColorOptions
   */
  interface SimplePaletteColorOptions {
    lightest?: string
    lighter?: string
    darker?: string
    darkest?: string
  }

  /**
   * Extend the color `Palette` interface to add additional shades, colors, etc.
   *
   * Because these are custom and have no MUI-provided defaults, they are required to be set, so they can be safely used.
   */
  interface Palette {
    /**
     * Add an additional semantic color "accent", to be use alongside, "primary", "secondary", etc.
     */
    accent: PaletteColor
    /**
     * Special non-semantic color settings for specific things in the application.
     *
     * It's debatable whether these should be specified like this in the theme, but these colors are used across the app
     * and it's convenient for them to be specified consistently in the theme.
     */
    special: {
      cktTiers: {
        // TODO: not sure if we want all the shades for each of these, or just a single color
        tier1: PaletteColor
        tier2: PaletteColor
        tier3: PaletteColor
        tier4: PaletteColor
      }
      charts: {
        chart1: PaletteColor
        chart2: PaletteColor
      }
    }
  }

  /**
   * Extend the color `PaletteOptions` interface to add additional shades, colors, etc.
   *
   * Because these are custom and have no MUI-provided defaults, they are required to be set, so they can be safely used.
   */
  interface PaletteOptions {
    /**
     * Add an additional semantic color "accent", to be use alongside, "primary", "secondary", etc.
     */
    accent: PaletteColor
    /**
     * Special non-semantic color settings for specific things in the application.
     *
     * It's debatable whether these should be specified like this in the theme, but these colors are used across the app
     * and it's convenient for them to be specified consistently in the theme.
     */
    special: {
      cktTiers: {
        // TODO: not sure if we want all the shades for each of these (i.e. PaletteColor), or just a single color
        tier1: string
        tier2: string
        tier3: string
        tier4: string
      }
      charts: {
        chart1: string
        chart2: string
      }
    }
  }
}

declare module '@material-ui/core/Button' {
  /**
   * Extend the Button size to allow a new size `extraSmall` (aka dense)
   *
   * TODO: This is mostly for demonstration purposes here
   */
  interface ButtonPropsSizeOverrides {
    extraSmall: true
  }
}
