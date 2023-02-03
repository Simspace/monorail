// eslint-disable-next-line no-restricted-imports
import type {} from '@mui/lab/themeAugmentation'
import type { Theme, ThemeOptions } from '@mui/material'
import type {} from '@mui/x-data-grid-pro/themeAugmentation'
import type {} from '@mui/x-date-pickers/themeAugmentation'
import type {} from '@mui/x-date-pickers-pro/themeAugmentation'

import { getThemeComponents as getClassicThemeComponents } from '../../classic/theme/themeComponents.js'
import {
  MonorailAlertOverrides,
  MonorailAlertTitleOverrides,
} from '../components/Alert/themeOverrides.js'
import { MonorailAvatarOverrides } from '../components/Avatar/themeOverrides.js'
import {
  MonorailButtonOverrides,
  MonorailLoadingButtonOverrides,
} from '../components/Button/themeOverrides.js'
import { MonorailCheckboxOverrides } from '../components/Checkbox/themeOverrides.js'
import { MonorailCircularProgressOverrides } from '../components/CircularProgress/themeOverrides.js'
import { MonorailCssBaselineOverrides } from '../components/CssBaseline/themeOverrides.js'
import { MonorailDataGridOverrides } from '../components/DataGrid/themeOverrides.js'
import { MonorailIconButtonOverrides } from '../components/IconButton/themeOverrides.js'
import { MonorailInputBaseOverrides } from '../components/InputBase/themeOverrides.js'
import { MonorailOutlinedInputOverrides } from '../components/OutlinedInput/themeOverrides.js'
import { MonorailRadioOverrides } from '../components/Radio/themeOverrides.js'
import { MonorailSplitButtonOverrides } from '../components/SplitButton/themeOverrides.js'
import { MonorailSvgIconOverrides } from '../components/SvgIcon/themeOverrides.js'
import { MonorailSwitchOverrides } from '../components/Switch/themeOverrides.js'
import {
  MonorailToggleButtonGroupOverrides,
  MonorailToggleButtonOverrides,
} from '../components/ToggleButton/themeOverrides.js'
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
  MonorailSplitButton: MonorailSplitButtonOverrides,
  MuiAlert: MonorailAlertOverrides,
  MuiAlertTitle: MonorailAlertTitleOverrides,
  MuiAvatar: MonorailAvatarOverrides,
  MuiButton: MonorailButtonOverrides,
  MuiCheckbox: MonorailCheckboxOverrides,
  MuiCircularProgress: MonorailCircularProgressOverrides,
  MuiCssBaseline: MonorailCssBaselineOverrides,
  MuiDataGrid: MonorailDataGridOverrides,
  MuiIconButton: MonorailIconButtonOverrides,
  MuiInputBase: MonorailInputBaseOverrides,
  MuiLoadingButton: MonorailLoadingButtonOverrides,
  MuiOutlinedInput: MonorailOutlinedInputOverrides,
  MuiRadio: MonorailRadioOverrides,
  MuiSvgIcon: MonorailSvgIconOverrides,
  MuiSwitch: MonorailSwitchOverrides,
  MuiToggleButton: MonorailToggleButtonOverrides,
  MuiToggleButtonGroup: MonorailToggleButtonGroupOverrides,
})
