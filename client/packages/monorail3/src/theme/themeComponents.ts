// eslint-disable-next-line no-restricted-imports
import { Theme, ThemeOptions } from '@mui/material'
import { MonorailBreadcrumbsOverrides } from '../components/Breadcrumbs/themeOverrides'

import { baseTheme } from './baseTheme'

/**
 * Constructs the `components` overrides using a subset of the overall theme that includes everything except `components`
 */
export const getThemeComponents = (
  _theme: Theme,
): ThemeOptions['components'] => ({
  // Make sure we apply the defaults here
  ...baseTheme.components,

  MuiBreadcrumbs: MonorailBreadcrumbsOverrides,

  // TODO: we may want to split these into separate files - one theme override per component? Or maybe we just do it all here for consistency
  // MuiAccordion: {
  //   defaultProps: {
  //     variant: 'outlined',
  //     square: true,
  //   },
  // },
  // MuiButton: {
  //   defaultProps: {},
  //   styleOverrides: {},
  //   variants: [],
  // },
  // MuiButtonBase: {
  //   defaultProps: {
  //     disableRipple: true,
  //   },
  // },
  // MuiButtonGroup: {
  //   defaultProps: {
  //     disableRipple: true,
  //   },
  // },
  // MuiIconButton: {
  //   defaultProps: {},
  // },
})
