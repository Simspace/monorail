// eslint-disable-next-line no-restricted-imports
import type {} from '@mui/lab/themeAugmentation'
import type { Theme, ThemeOptions } from '@mui/material'
import type {} from '@mui/x-data-grid-pro/themeAugmentation'
import type {} from '@mui/x-date-pickers/themeAugmentation'
import type {} from '@mui/x-date-pickers-pro/themeAugmentation'

import { baseTheme } from '../../legacy/theme/baseTheme.js'
import { getThemeComponents as getLegacyThemeComponents } from '../../legacy/theme/themeComponents.js'
import { MonorailAvatarOverrides } from '../components/Avatar/themeOverrides.js'

/**
 * Constructs the `components` overrides using a subset of the overall theme that includes everything except `components`
 */
export const getThemeComponents = (
  theme: Theme,
): ThemeOptions['components'] => ({
  // Make sure we apply the defaults here
  ...baseTheme.components,
  ...getLegacyThemeComponents(theme),
  MuiAvatar: MonorailAvatarOverrides,
})
