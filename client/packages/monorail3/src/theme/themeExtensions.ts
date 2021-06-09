// eslint-disable-next-line no-restricted-imports
import * as _MUI from '@material-ui/core'

// This file is intended to house all our interface extensions/module augmentations for the MUI theme types.
// This includes:
// - Color palette extensions (adding more shades, custom color codes, etc.)
// - Component-level extensions (custom variants, sizes, props, etc.)
// - Other things?

declare module '@material-ui/core/styles/createPalette' {
  /**
   * Add additional shades to PaletteColor
   */
  interface SimplePaletteColorOptions {
    lightest?: string
    lighter?: string
    darker?: string
    darkest?: string
  }
}
