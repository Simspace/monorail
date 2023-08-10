// eslint-disable-next-line no-restricted-imports
import type {} from '@mui/lab/themeAugmentation'
import type { Theme, ThemeOptions } from '@mui/material'
import type {} from '@mui/x-data-grid-pro/themeAugmentation'
import type {} from '@mui/x-date-pickers/themeAugmentation'
import type {} from '@mui/x-date-pickers-pro/themeAugmentation'

import { getThemeComponents as getClassicThemeComponents } from '../../classic/theme/themeComponents.js'
import { MonorailAccordionSummaryOverrides } from '../components/AccordionSummary/themeOverrides.js'
import {
  MonorailAlertOverrides,
  MonorailAlertTitleOverrides,
} from '../components/Alert/themeOverrides.js'
import { MonorailAutocompleteOverrides } from '../components/Autocomplete/themeOverrides.js'
import { MonorailAvatarOverrides } from '../components/Avatar/themeOverrides.js'
import { MonorailAvatarGroupOverrides } from '../components/AvatarGroup/themeOverrides.js'
import { MonorailBadgeOverrides } from '../components/Badge/themeOverrides.js'
import { MonorailBreadcrumbsOverrides } from '../components/Breadcrumbs/themeOverrides.js'
import { MonorailCardOverrides } from '../components/Card/themeOverrides.js'
import { MonorailCardHeaderOverrides } from '../components/CardHeader/themeOverrides.js'
import { MonorailChipOverrides } from '../components/Chip/themeOverrides.js'
import { MonorailCircularProgressOverrides } from '../components/CircularProgress/themeOverrides.js'
import { MonorailDataGridOverrides } from '../components/DataGrid/themeOverrides.js'
import { MonorailDateRangePickerDayOverrides } from '../components/DateRangePickerDay/themeOverrides.js'
import { MonorailDialogContentOverrides } from '../components/DialogContent/themeOverrides.js'
import { MonorailFileUploadOverrides } from '../components/FileUpload/themeOverrides.js'
import { MonorailFormHelperTextOverrides } from '../components/FormHelperText/themeOverrides.js'
import { MonorailFormLabelOverrides } from '../components/FormLabel/themeOverrides.js'
import { MonorailInputBaseOverrides } from '../components/InputBase/themeOverrides.js'
import { MonorailInputLabelOverrides } from '../components/InputLabel/themeOverrides.js'
import { MonorailLinearProgressOverrides } from '../components/LinearProgress/themeOverrides.js'
import { MonorailLinkOverrides } from '../components/Link/themeOverrides.js'
import { MonorailListItemOverrides } from '../components/ListItem/themeOverrides.js'
import { MonorailListItemAvatarOverrides } from '../components/ListItemAvatar/themeOverrides.js'
import { MonorailListItemButtonOverrides } from '../components/ListItemButton/themeOverrides.js'
import { MonorailListItemIconOverrides } from '../components/ListItemIcon/themeOverrides.js'
import { MonorailListItemTextOverrides } from '../components/ListItemText/themeOverrides.js'
import { MonorailMenuItemOverrides } from '../components/MenuItem/themeOverrides.js'
import { MonorailOutlinedInputOverrides } from '../components/OutlinedInput/themeOverrides.js'
import { MonorailPaginationItemOverrides } from '../components/PaginationItem/themeOverrides.js'
import { MonorailSelectionFooterOverrides } from '../components/SelectionFooter/themeOverrides.js'
import { MonorailSkeletonOverrides } from '../components/Skeleton/themeOverrides.js'
import { MonorailStepIconOverrides } from '../components/StepIcon/themeOverrides.js'
import { MonorailStepLabelOverrides } from '../components/StepLabel/themeOverrides.js'
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
  MonorailFileUpload: MonorailFileUploadOverrides,
  MonorailSelectionFooter: MonorailSelectionFooterOverrides,
  MuiAccordionSummary: MonorailAccordionSummaryOverrides,
  MuiAlert: MonorailAlertOverrides,
  MuiAlertTitle: MonorailAlertTitleOverrides,
  MuiAutocomplete: MonorailAutocompleteOverrides,
  MuiAvatar: MonorailAvatarOverrides,
  MuiAvatarGroup: MonorailAvatarGroupOverrides,
  MuiBadge: MonorailBadgeOverrides,
  MuiBreadcrumbs: MonorailBreadcrumbsOverrides,
  MuiCard: MonorailCardOverrides,
  MuiCardHeader: MonorailCardHeaderOverrides,
  MuiChip: MonorailChipOverrides,
  MuiCircularProgress: MonorailCircularProgressOverrides,
  MuiDataGrid: MonorailDataGridOverrides,
  MuiDialogContent: MonorailDialogContentOverrides,
  MuiDateRangePickerDay: MonorailDateRangePickerDayOverrides,
  MuiFormHelperText: MonorailFormHelperTextOverrides,
  MuiFormLabel: MonorailFormLabelOverrides,
  MuiInputBase: MonorailInputBaseOverrides,
  MuiInputLabel: MonorailInputLabelOverrides,
  MuiLinearProgress: MonorailLinearProgressOverrides,
  MuiLink: MonorailLinkOverrides,
  MuiListItem: MonorailListItemOverrides,
  MuiListItemAvatar: MonorailListItemAvatarOverrides,
  MuiListItemButton: MonorailListItemButtonOverrides,
  MuiListItemIcon: MonorailListItemIconOverrides,
  MuiListItemText: MonorailListItemTextOverrides,
  MuiMenuItem: MonorailMenuItemOverrides,
  MuiOutlinedInput: MonorailOutlinedInputOverrides,
  MuiPaginationItem: MonorailPaginationItemOverrides,
  MuiSkeleton: MonorailSkeletonOverrides,
  MuiStepIcon: MonorailStepIconOverrides,
  MuiStepLabel: MonorailStepLabelOverrides,
  MuiTab: MonorailTabOverrides,
  MuiTabs: MonorailTabsOverrides,
  MuiTablePagination: MonorailTablePaginationOverrides,
})
