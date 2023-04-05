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
import { MonorailAvatarGroupOverrides } from '../components/AvatarGroup/themeOverrides.js'
import { MonorailBadgeOverrides } from '../components/Badge/themeOverrides.js'
import { MonorailBreadcrumbsOverrides } from '../components/Breadcrumbs/themeOverrides.js'
import { MonorailCardOverrides } from '../components/Card/themeOverrides.js'
import { MonorailCardHeaderOverrides } from '../components/CardHeader/themeOverrides.js'
import { MonorailChipOverrides } from '../components/Chip/themeOverrides.js'
import { MonorailCircularProgressOverrides } from '../components/CircularProgress/themeOverrides.js'
import { MonorailLinearProgressOverrides } from '../components/LinearProgress/themeOverrides.js'
import { MonorailLinkOverrides } from '../components/Link/themeOverrides.js'
import { MonorailListItemOverrides } from '../components/ListItem/themeOverrides.js'
import { MonorailListItemButtonOverrides } from '../components/ListItemButton/themeOverrides.js'
import { MonorailMenuItemOverrides } from '../components/MenuItem/themeOverrides.js'
import { MonorailPaginationItemOverrides } from '../components/PaginationItem/themeOverrides.js'
import { MonorailSkeletonOverrides } from '../components/Skeleton/themeOverrides.js'
import { MonorailTabOverrides } from '../components/Tab/themeOverrides.js'
import { MonorailTablePaginationOverrides } from '../components/TablePagination/themeOverrides.js'
import { MonorailTabsOverrides } from '../components/Tabs/themeOverrides.js'
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
  MuiAvatar: MonorailAvatarOverrides,
  MuiAvatarGroup: MonorailAvatarGroupOverrides,
  MuiBadge: MonorailBadgeOverrides,
  MuiBreadcrumbs: MonorailBreadcrumbsOverrides,
  MuiCard: MonorailCardOverrides,
  MuiCardHeader: MonorailCardHeaderOverrides,
  MuiChip: MonorailChipOverrides,
  MuiCircularProgress: MonorailCircularProgressOverrides,
  MuiLinearProgress: MonorailLinearProgressOverrides,
  MuiLink: MonorailLinkOverrides,
  MuiListItem: MonorailListItemOverrides,
  MuiListItemButton: MonorailListItemButtonOverrides,
  MuiMenuItem: MonorailMenuItemOverrides,
  MuiPaginationItem: MonorailPaginationItemOverrides,
  MuiSkeleton: MonorailSkeletonOverrides,
  MuiTab: MonorailTabOverrides,
  MuiTabs: MonorailTabsOverrides,
  MuiTablePagination: MonorailTablePaginationOverrides,
})
