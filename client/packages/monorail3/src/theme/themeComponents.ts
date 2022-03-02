// eslint-disable-next-line no-restricted-imports
import type {} from '@mui/lab/themeAugmentation'
import { Theme, ThemeOptions } from '@mui/material'

import { MonorailBreadcrumbsOverrides } from '../components/Breadcrumbs/themeOverrides'
import {
  MonorailButtonOverrides,
  MonorailLoadingButtonOverrides,
} from '../components/Button/themeOverrides'
import { MonorailSvgIconOverrides } from '../components/SvgIcon/themeOverrides'
import { baseTheme } from './baseTheme'

/**
 * Constructs the `components` overrides using a subset of the overall theme that includes everything except `components`
 */
export const getThemeComponents = (
  _theme: Theme,
): ThemeOptions['components'] => ({
  // Make sure we apply the defaults here
  ...baseTheme.components,

  MuiAccordion: {
    defaultProps: {
      variant: 'outlined',
      square: true,
    },
  },
  MuiButton: MonorailButtonOverrides,
  MuiButtonBase: {
    defaultProps: {
      disableRipple: true,
    },
  },
  MuiButtonGroup: {
    defaultProps: {
      disableRipple: true,
    },
  },
  MuiBreadcrumbs: MonorailBreadcrumbsOverrides,
  MuiLoadingButton: MonorailLoadingButtonOverrides,
  MuiSvgIcon: MonorailSvgIconOverrides,
})
