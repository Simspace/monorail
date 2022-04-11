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

    accent: PaletteColorOptions

    default: PaletteColorOptions

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
      high: PaletteColor
      highModerate: PaletteColor
      moderate: PaletteColor
      lowModerate: PaletteColor
      low: PaletteColor
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

  // interface PaletteColor {
  //   background: {
  //     default: {
  //       idle: string
  //       hover: string
  //       active: string
  //       disabled: string
  //     }
  //   }
  // }

  // interface ColorTokenInteraction {
  //   idle: string
  //   hover: string
  //   active: string
  //   disabled: string
  // }

  // interface ColorTokenProminence {
  //   default: ColorTokenInteraction
  //   weak: ColorTokenInteraction
  //   medium: ColorTokenInteraction
  //   strong: ColorTokenInteraction
  // }

  // interface ColorTokenUsage {
  //   background: ColorTokenProminence
  //   text: ColorTokenProminence
  //   border: ColorTokenProminence
  //   icon: ColorTokenProminence
  //   focusRing: {
  //     inner: string
  //     outer: string
  //   }
  // }

  // interface PaletteColor {
  //   light: string
  //   main: string
  //   dark: string
  //   contrastText: string
  // }

  // interface SimplePaletteColorOptions {
  //   hover: string
  //   selected: string
  //   active: string
  // }

  // interface SimplePaletteColorOptions {
  //   hover: string
  //   selected: string
  //   active: string
  // }

  // interface SimplePaletteColor {
  //   light?: string
  //   main: string
  //   dark?: string
  //   contrastText?: string
  // }

  // type PaletteColor =
  //   | SimplePaletteColor
  //   | ColorPartial
}

declare module '@mui/material/Button' {
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
    inherit: false
  }
}

declare module '@mui/material/ButtonGroup' {
  /**
   * Extend the ButtonGroup color prop to allow for the other semantic styles.
   */
  interface ButtonGroupPropsColorOverrides {
    info: true
    success: true
    warning: true
    error: true
    inherit: false
  }
}

declare module '@mui/material/IconButton' {
  /**
   * Extend the IconButton color prop to allow for the other semantic styles.
   */
  interface IconButtonPropsColorOverrides {
    info: true
    success: true
    warning: true
    error: true
    default: true
    /**
     * Warning: Disabling 'inherit' will break Alert, because Alert's close button uses 'inherit' under the hood.
     */
    inherit: true
  }
}

declare module '@mui/material/SvgIcon' {
  /**
   * Extend the SvgIcon color prop to apply a default grey color.
   */
  interface SvgIconPropsColorOverrides {
    default: true
  }
}
