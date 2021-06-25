// eslint-disable-next-line no-restricted-imports
import * as MUI from '@material-ui/core'

// This "default" theme should house the global defaults that apply to all themes. This would likely include
// common settings that are not likely to differ between specific themes, like spacing, shadows, breakpoints, etc.
// Specific themes can override these settings, but hopefully won't want/need to.
// All other themes should use this as a baseline.

export const baseTheme = MUI.createTheme(
  {
    // TODO: add "global" settings that aren't likely to vary per theme (spacing, shadows, breakpoints, typography, etc.)
  },
  {},
)
