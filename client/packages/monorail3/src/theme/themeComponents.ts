// eslint-disable-next-line no-restricted-imports
import { Theme, DeprecatedThemeOptions } from '@mui/material'
import { baseTheme } from './baseTheme'

/**
 * Constructs the `components` overrides using a subset of the overall theme that includes everything except `components`
 */
export const getThemeComponents = (
  _theme: Theme,
): DeprecatedThemeOptions['components'] => ({
  // Make sure we apply the defaults here
  ...baseTheme.components,

  // TODO: we may want to split these into separate files - one theme override per component? Or maybe we just do it all here for consistency
  MuiAccordion: {
    defaultProps: {
      variant: 'outlined',
      square: true,
    },
  },
  MuiButton: {
    defaultProps: {
      //disableRipple: true,
    },
    styleOverrides: {},
    variants: [],
  },
  MuiIconButton: {
    defaultProps: {
      //disableRipple: true,
    },
  },
})
