// eslint-disable-next-line no-restricted-imports
import type {} from '@mui/lab/themeAugmentation'
import type { Theme, ThemeOptions } from '@mui/material'
import type {} from '@mui/x-data-grid-pro/themeAugmentation'
import type {} from '@mui/x-date-pickers/themeAugmentation'
import type {} from '@mui/x-date-pickers-pro/themeAugmentation'
import type {} from '@mui/x-tree-view/themeAugmentation'

import { getThemeComponents as getClassicThemeComponents } from '../../classic/theme/themeComponents.js'
import { MonorailAccordionActionsOverrides } from '../../legacy/components/AccordionActions/themeOverrides.js'
import { MonorailAccordionDetailsOverrides } from '../../legacy/components/AccordionDetails/themeOverrides.js'
import { MonorailAccordionSummaryOverrides } from '../../legacy/components/AccordionSummary/themeOverrides.js'
import {
  MonorailAlertOverrides,
  MonorailAlertTitleOverrides,
} from '../../legacy/components/Alert/themeOverrides.js'
import { MonorailAutocompleteOverrides } from '../../legacy/components/Autocomplete/themeOverrides.js'
import { MonorailAvatarOverrides } from '../../legacy/components/Avatar/themeOverrides.js'
import { MonorailBadgeOverrides } from '../../legacy/components/Badge/themeOverrides.js'
import { MonorailBreadcrumbsOverrides } from '../../legacy/components/Breadcrumbs/themeOverrides.js'
import {
  MonorailButtonOverrides,
  MonorailLoadingButtonOverrides,
} from '../../legacy/components/Button/themeOverrides.js'
import { MonorailCheckboxOverrides } from '../../legacy/components/Checkbox/themeOverrides.js'
import { MonorailChipOverrides } from '../../legacy/components/Chip/themeOverrides.js'
import { MonorailCircularProgressOverrides } from '../../legacy/components/CircularProgress/themeOverrides.js'
import { MonorailCssBaselineOverrides } from '../../legacy/components/CssBaseline/themeOverrides.js'
import { MonorailDataGridOverrides } from '../../legacy/components/DataGrid/themeOverrides.js'
import { MonorailDialogOverrides } from '../../legacy/components/Dialog/themeOverrides.js'
import { MonorailDialogActionsOverrides } from '../../legacy/components/DialogActions/themeOverrides.js'
import { MonorailDialogContentOverrides } from '../../legacy/components/DialogContent/themeOverrides.js'
import { MonorailDialogHeaderOverrides } from '../../legacy/components/DialogHeader/themeOverrides.js'
import { MonorailDialogTitleOverrides } from '../../legacy/components/DialogTitle/themeOverrides.js'
import { MonorailDividerOverrides } from '../../legacy/components/Divider/themeOverrides.js'
import { MonorailFormHelperTextOverrides } from '../../legacy/components/FormHelperText/themeOverrides.js'
import { MonorailIconButtonOverrides } from '../../legacy/components/IconButton/themeOverrides.js'
import { MonorailInputBaseOverrides } from '../../legacy/components/InputBase/themeOverrides.js'
import { MonorailInputLabelOverrides } from '../../legacy/components/InputLabel/themeOverrides.js'
import { MonorailListOverrides } from '../../legacy/components/List/themeOverrides.js'
import { MonorailListItemOverrides } from '../../legacy/components/ListItem/themeOverrides.js'
import { MonorailListItemAvatarOverrides } from '../../legacy/components/ListItemAvatar/themeOverrides.js'
import { MonorailListItemButtonOverrides } from '../../legacy/components/ListItemButton/themeOverrides.js'
import { MonorailListItemIconOverrides } from '../../legacy/components/ListItemIcon/themeOverrides.js'
import { MonorailListItemTextOverrides } from '../../legacy/components/ListItemText/themeOverrides.js'
import { MonorailListSubheaderOverrides } from '../../legacy/components/ListSubheader/themeOverrides.js'
import { MonorailMenuOverrides } from '../../legacy/components/Menu/themeOverrides.js'
import { MonorailMenuItemOverrides } from '../../legacy/components/MenuItem/themeOverrides.js'
import { MonorailOutlinedInputOverrides } from '../../legacy/components/OutlinedInput/themeOverrides.js'
import { MonorailPaginationOverrides } from '../../legacy/components/Pagination/themeOverrides.js'
import { MonorailPaginationItemOverrides } from '../../legacy/components/PaginationItem/themeOverrides.js'
import { MonorailRadioOverrides } from '../../legacy/components/Radio/themeOverrides.js'
import { MonorailRatingOverrides } from '../../legacy/components/Rating/themeOverrides.js'
import { MonorailSearchOverrides } from '../../legacy/components/Search/themeOverrides.js'
import { MonorailSelectOverrides } from '../../legacy/components/Select/themeOverrides.js'
import { MonorailSliderOverrides } from '../../legacy/components/Slider/themeOverrides.js'
import { MonorailSplitButtonOverrides } from '../../legacy/components/SplitButton/themeOverrides.js'
import { MonorailStepOverrides } from '../../legacy/components/Step/themeOverrides.js'
import { MonorailStepConnectorOverrides } from '../../legacy/components/StepConnector/themeOverrides.js'
import { MonorailStepIconOverrides } from '../../legacy/components/StepIcon/themeOverrides.js'
import { MonorailStepLabelOverrides } from '../../legacy/components/StepLabel/themeOverrides.js'
import { MonorailSvgIconOverrides } from '../../legacy/components/SvgIcon/themeOverrides.js'
import { MonorailSwitchOverrides } from '../../legacy/components/Switch/themeOverrides.js'
import { MonorailTabOverrides } from '../../legacy/components/Tab/themeOverrides.js'
import { MonorailTabsOverrides } from '../../legacy/components/Tabs/themeOverrides.js'
import {
  MonorailToggleButtonGroupOverrides,
  MonorailToggleButtonOverrides,
} from '../../legacy/components/ToggleButton/themeOverrides.js'
import { MonorailTooltipOverrides } from '../../legacy/components/Tooltip/themeOverrides.js'
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
  MonorailDialogHeader: MonorailDialogHeaderOverrides,
  MonorailSplitButton: MonorailSplitButtonOverrides,
  MonorailSearch: MonorailSearchOverrides,
  MuiAccordionActions: MonorailAccordionActionsOverrides,
  MuiAccordionDetails: MonorailAccordionDetailsOverrides,
  MuiAccordionSummary: MonorailAccordionSummaryOverrides,
  MuiAlert: MonorailAlertOverrides,
  MuiAlertTitle: MonorailAlertTitleOverrides,
  MuiAutocomplete: MonorailAutocompleteOverrides,
  MuiAvatar: MonorailAvatarOverrides,
  MuiBreadcrumbs: MonorailBreadcrumbsOverrides,
  MuiBadge: MonorailBadgeOverrides,
  MuiButton: MonorailButtonOverrides,
  MuiCheckbox: MonorailCheckboxOverrides,
  MuiChip: MonorailChipOverrides,
  MuiCircularProgress: MonorailCircularProgressOverrides,
  MuiCssBaseline: MonorailCssBaselineOverrides,
  MuiDataGrid: MonorailDataGridOverrides,
  MuiDialog: MonorailDialogOverrides,
  MuiDialogActions: MonorailDialogActionsOverrides,
  MuiDialogContent: MonorailDialogContentOverrides,
  MuiDialogTitle: MonorailDialogTitleOverrides,
  MuiDivider: MonorailDividerOverrides,
  MuiFormHelperText: MonorailFormHelperTextOverrides,
  MuiIconButton: MonorailIconButtonOverrides,
  MuiInputBase: MonorailInputBaseOverrides,
  MuiInputLabel: MonorailInputLabelOverrides,
  MuiList: MonorailListOverrides,
  MuiListItem: MonorailListItemOverrides,
  MuiListItemAvatar: MonorailListItemAvatarOverrides,
  MuiListItemButton: MonorailListItemButtonOverrides,
  MuiListItemIcon: MonorailListItemIconOverrides,
  MuiListItemText: MonorailListItemTextOverrides,
  MuiListSubheader: MonorailListSubheaderOverrides,
  MuiLoadingButton: MonorailLoadingButtonOverrides,
  MuiMenu: MonorailMenuOverrides,
  MuiMenuItem: MonorailMenuItemOverrides,
  MuiOutlinedInput: MonorailOutlinedInputOverrides,
  MuiPagination: MonorailPaginationOverrides,
  MuiPaginationItem: MonorailPaginationItemOverrides,
  MuiRadio: MonorailRadioOverrides,
  MuiRating: MonorailRatingOverrides,
  MuiSelect: MonorailSelectOverrides,
  MuiSlider: MonorailSliderOverrides,
  MuiStep: MonorailStepOverrides,
  MuiStepConnector: MonorailStepConnectorOverrides,
  MuiStepIcon: MonorailStepIconOverrides,
  MuiStepLabel: MonorailStepLabelOverrides,
  MuiSvgIcon: MonorailSvgIconOverrides,
  MuiSwitch: MonorailSwitchOverrides,
  MuiTab: MonorailTabOverrides,
  MuiTabs: MonorailTabsOverrides,
  MuiToggleButton: MonorailToggleButtonOverrides,
  MuiToggleButtonGroup: MonorailToggleButtonGroupOverrides,
  MuiTooltip: MonorailTooltipOverrides,
})
