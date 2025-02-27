// eslint-disable-next-line no-restricted-imports
import type {} from '@mui/lab/themeAugmentation'
import type { Theme, ThemeOptions } from '@mui/material'
import type {} from '@mui/x-data-grid-pro/themeAugmentation'
import type {} from '@mui/x-date-pickers/themeAugmentation'
import type {} from '@mui/x-date-pickers-pro/themeAugmentation'
import type {} from '@mui/x-tree-view/themeAugmentation'

import { getThemeComponents as getClassicThemeComponents } from '../../classic/theme/themeComponents.js'
import { MonorailAccordionSummaryOverrides } from '../components/AccordionSummary/themeOverrides.js'
import {
  MonorailAlertOverrides,
  MonorailAlertTitleOverrides,
} from '../components/Alert/themeOverrides.js'
import { MonorailAutocompleteOverrides } from '../components/Autocomplete/themeOverrides.js'
import { MonorailAvatarOverrides } from '../components/Avatar/themeOverrides.js'
import { MonorailAvatarButtonOverrides } from '../components/AvatarButton/themeOverrides.js'
import { MonorailAvatarGroupOverrides } from '../components/AvatarGroup/themeOverrides.js'
import { MonorailBadgeOverrides } from '../components/Badge/themeOverrides.js'
import { MonorailBreadcrumbsOverrides } from '../components/Breadcrumbs/themeOverrides.js'
import { MonorailButtonOverrides } from '../components/Button/themeOverrides.js'
import { MonorailCardOverrides } from '../components/Card/themeOverrides.js'
import { MonorailCardHeaderOverrides } from '../components/CardHeader/themeOverrides.js'
import { MonorailCheckboxOverrides } from '../components/Checkbox/themeOverrides.js'
import { MonorailChipOverrides } from '../components/Chip/themeOverrides.js'
import { MonorailCircularProgressOverrides } from '../components/CircularProgress/themeOverrides.js'
import { MonorailDataGridOverrides } from '../components/DataGrid/themeOverrides.js'
import { MonorailDateRangePickerDayOverrides } from '../components/DateRangePickerDay/themeOverrides.js'
import { MonorailDialogOverrides } from '../components/Dialog/themeOverrides.js'
import { MonorailDialogContentOverrides } from '../components/DialogContent/themeOverrides.js'
import { MonorailDrawerOverrides } from '../components/Drawer/themeOverrides.js'
import { MonorailFileUploadOverrides } from '../components/FileUpload/themeOverrides.js'
import { MonorailFormHelperTextOverrides } from '../components/FormHelperText/themeOverrides.js'
import { MonorailFormLabelOverrides } from '../components/FormLabel/themeOverrides.js'
import { MonorailIconButtonOverrides } from '../components/IconButton/themeOverrides.js'
import { MonorailInputBaseOverrides } from '../components/InputBase/themeOverrides.js'
import { MonorailInputLabelOverrides } from '../components/InputLabel/themeOverrides.js'
import { MonorailLinearProgressOverrides } from '../components/LinearProgress/themeOverrides.js'
import { MonorailListItemOverrides } from '../components/ListItem/themeOverrides.js'
import { MonorailListItemAvatarOverrides } from '../components/ListItemAvatar/themeOverrides.js'
import { MonorailListItemButtonOverrides } from '../components/ListItemButton/themeOverrides.js'
import { MonorailListItemIconOverrides } from '../components/ListItemIcon/themeOverrides.js'
import { MonorailListItemTextOverrides } from '../components/ListItemText/themeOverrides.js'
import { MonorailMenuItemOverrides } from '../components/MenuItem/themeOverrides.js'
import { MonorailOutlinedInputOverrides } from '../components/OutlinedInput/themeOverrides.js'
import { MonorailPaginationItemOverrides } from '../components/PaginationItem/themeOverrides.js'
import { MonorailPaperOverrides } from '../components/Paper/themeOverrides.js'
import { MonorailPopoverOverrides } from '../components/Popover/themeOverrides.js'
import { MonorailPopupOverrides } from '../components/Popup/themeOverrides.js'
import { MonorailRadioOverrides } from '../components/Radio/themeOverrides.js'
import { MonorailSelectionFooterOverrides } from '../components/SelectionFooter/themeOverrides.js'
import { MonorailSkeletonOverrides } from '../components/Skeleton/themeOverrides.js'
import { MonorailSnackbarOverrides } from '../components/Snackbar/themeOverrides.js'
import { MonorailSplitButtonOverrides } from '../components/SplitButton/themeOverrides.js'
import { MonorailStepIconOverrides } from '../components/StepIcon/themeOverrides.js'
import { MonorailStepLabelOverrides } from '../components/StepLabel/themeOverrides.js'
import { MonorailSvgIconOverrides } from '../components/SvgIcon/themeOverrides.js'
import { MonorailSwitchOverrides } from '../components/Switch/themeOverrides.js'
import { MonorailTabOverrides } from '../components/Tab/themeOverrides.js'
import { MonorailTablePaginationOverrides } from '../components/TablePagination/themeOverrides.js'
import { MonorailTabsOverrides } from '../components/Tabs/themeOverrides.js'
import {
  MonorailToggleButtonGroupOverrides,
  MonorailToggleButtonOverrides,
} from '../components/ToggleButton/themeOverrides.js'
import { MonorailTreeItemOverrides } from '../components/TreeItem/themeOverrides.js'
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
  MonorailAvatarButton: MonorailAvatarButtonOverrides,
  MonorailFileUpload: MonorailFileUploadOverrides,
  MonorailPopup: MonorailPopupOverrides,
  MonorailSelectionFooter: MonorailSelectionFooterOverrides,
  MuiAccordionSummary: MonorailAccordionSummaryOverrides,
  MuiAlert: MonorailAlertOverrides,
  MuiAlertTitle: MonorailAlertTitleOverrides,
  MuiAutocomplete: MonorailAutocompleteOverrides,
  MuiAvatar: MonorailAvatarOverrides,
  MuiAvatarGroup: MonorailAvatarGroupOverrides,
  MuiBadge: MonorailBadgeOverrides,
  MuiBreadcrumbs: MonorailBreadcrumbsOverrides,
  MuiButton: MonorailButtonOverrides,
  MuiCheckbox: MonorailCheckboxOverrides,
  MuiCard: MonorailCardOverrides,
  MuiCardHeader: MonorailCardHeaderOverrides,
  MuiChip: MonorailChipOverrides,
  MuiCircularProgress: MonorailCircularProgressOverrides,
  MuiDataGrid: MonorailDataGridOverrides,
  MuiDialog: MonorailDialogOverrides,
  MuiDrawer: MonorailDrawerOverrides,
  MuiDialogContent: MonorailDialogContentOverrides,
  MuiDateRangePickerDay: MonorailDateRangePickerDayOverrides,
  MuiFormHelperText: MonorailFormHelperTextOverrides,
  MuiFormLabel: MonorailFormLabelOverrides,
  MuiInputBase: MonorailInputBaseOverrides,
  MuiIconButton: MonorailIconButtonOverrides,
  MuiInputLabel: MonorailInputLabelOverrides,
  MuiLinearProgress: MonorailLinearProgressOverrides,
  MuiListItem: MonorailListItemOverrides,
  MuiListItemAvatar: MonorailListItemAvatarOverrides,
  MuiListItemButton: MonorailListItemButtonOverrides,
  MuiListItemIcon: MonorailListItemIconOverrides,
  MuiListItemText: MonorailListItemTextOverrides,
  MuiMenuItem: MonorailMenuItemOverrides,
  MuiOutlinedInput: MonorailOutlinedInputOverrides,
  MuiPaginationItem: MonorailPaginationItemOverrides,
  MuiPaper: MonorailPaperOverrides,
  MuiPopover: MonorailPopoverOverrides,
  MuiRadio: MonorailRadioOverrides,
  MuiSkeleton: MonorailSkeletonOverrides,
  MuiSnackbar: MonorailSnackbarOverrides,
  MonorailSplitButton: MonorailSplitButtonOverrides,
  MuiStepIcon: MonorailStepIconOverrides,
  MuiStepLabel: MonorailStepLabelOverrides,
  MuiSwitch: MonorailSwitchOverrides,
  MuiTab: MonorailTabOverrides,
  MuiTabs: MonorailTabsOverrides,
  MuiTablePagination: MonorailTablePaginationOverrides,
  MuiToggleButton: MonorailToggleButtonOverrides,
  MuiToggleButtonGroup: MonorailToggleButtonGroupOverrides,
  MuiTreeItem: MonorailTreeItemOverrides,
  MuiSvgIcon: MonorailSvgIconOverrides,
})
