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
import { MonorailCardOverrides } from '../components/Card/themeOverrides.js'
import { MonorailCardHeaderOverrides } from '../components/CardHeader/themeOverrides.js'
import { MonorailCircularProgressOverrides } from '../components/CircularProgress/themeOverrides.js'
import { MonorailLinearProgressOverrides } from '../components/LinearProgress/themeOverrides.js'
import { MonorailSkeletonOverrides } from '../components/Skeleton/themeOverrides.js'
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
  MuiAlert: MonorailAlertOverrides,
  MuiAlertTitle: MonorailAlertTitleOverrides,
  MuiCard: MonorailCardOverrides,
  MuiCardHeader: MonorailCardHeaderOverrides,
  MuiCircularProgress: MonorailCircularProgressOverrides,
  MuiLinearProgress: MonorailLinearProgressOverrides,
  MuiSkeleton: MonorailSkeletonOverrides,
})
