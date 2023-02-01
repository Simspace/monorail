// eslint-disable-next-line no-restricted-imports
import type {} from '@mui/lab/themeAugmentation'
import type { Theme, ThemeOptions } from '@mui/material'
import type {} from '@mui/x-data-grid-pro/themeAugmentation'
import type {} from '@mui/x-date-pickers/themeAugmentation'
import type {} from '@mui/x-date-pickers-pro/themeAugmentation'

import { getThemeComponents as getClassicThemeComponents } from '../../classic/theme/themeComponents.js'
import {
  MonorailButtonOverrides,
  MonorailLoadingButtonOverrides,
} from '../components/Button/themeOverrides.js'
import { MonorailIconButtonOverrides } from '../components/IconButton/themeOverrides.js'
import { MonorailInputBaseOverrides } from '../components/InputBase/themeOverrides.js'
import { MonorailOutlinedInputOverrides } from '../components/OutlinedInput/themeOverrides.js'
import { MonorailSwitchOverrides } from '../components/Switch/themeOverrides.js'
import { baseTheme } from './baseTheme.js'

/**
 * Constructs the `components` overrides using a subset of the overall theme that includes everything except `components`
 */
export const getThemeComponents = (
  theme: Theme,
): ThemeOptions['components'] => ({
  // Make sure we apply the defaults here
  ...baseTheme.components,
  ...getClassicThemeComponents(theme),
  MuiButton: MonorailButtonOverrides,
  MuiIconButton: MonorailIconButtonOverrides,
  MuiInputBase: MonorailInputBaseOverrides,
  MuiLoadingButton: MonorailLoadingButtonOverrides,
  MuiOutlinedInput: MonorailOutlinedInputOverrides,
  MuiSwitch: MonorailSwitchOverrides,
})
