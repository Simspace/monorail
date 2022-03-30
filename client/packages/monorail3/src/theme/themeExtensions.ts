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

    accent: PaletteColorNoButtonState

    default: PaletteColor

    score: {
      high: PaletteColorNoButtonState
      highModerate: PaletteColorNoButtonState
      moderate: PaletteColorNoButtonState
      lowModerate: PaletteColorNoButtonState
      low: PaletteColorNoButtonState
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

    admin: PaletteColor
    content: PaletteColor
    events: PaletteColor
    network: PaletteColor
    personnel: PaletteColor
    reports: PaletteColor
    techOps: PaletteColor
  }

  /**
   * Extend the color `PaletteOptions` interface to add additional shades, colors, etc.
   *
   * Because these are custom and have no MUI-provided defaults, they are required to be set, so they can be safely used.
   */
  interface PaletteOptions {
    accent?: PaletteColorOptionsNoButtonState

    default?: PaletteColor

    score?: Partial<{
      high: PaletteColorOptionsNoButtonState
      highModerate: PaletteColorOptionsNoButtonState
      moderate: PaletteColorOptionsNoButtonState
      lowModerate: PaletteColorOptionsNoButtonState
      low: PaletteColorOptionsNoButtonState
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
    hover: string
    selected: string
    active: string
  }

  interface PaletteColorNoButtonState {
    light: string
    main: string
    dark: string
    contrastText: string
  }

  interface SimplePaletteColorOptions {
    hover: string
    selected: string
    active: string
  }

  interface SimplePaletteColorOptionsNoButtonState {
    light?: string
    main: string
    dark?: string
    contrastText?: string
  }

  type PaletteColorOptionsNoButtonState =
    | SimplePaletteColorOptionsNoButtonState
    | ColorPartial
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
