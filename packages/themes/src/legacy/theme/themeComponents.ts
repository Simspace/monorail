// eslint-disable-next-line no-restricted-imports
import type {} from '@mui/lab/themeAugmentation'
import type { Theme, ThemeOptions } from '@mui/material'
import type {} from '@mui/x-data-grid-pro/themeAugmentation'
import type {} from '@mui/x-date-pickers/themeAugmentation'
import type {} from '@mui/x-date-pickers-pro/themeAugmentation'

import { getThemeComponents as getClassicThemeComponents } from '../../classic/theme/themeComponents.js'
import { MonorailAccordionActionsOverrides } from '../components/AccordionActions/themeOverrides.js'
import { MonorailAccordionDetailsOverrides } from '../components/AccordionDetails/themeOverrides.js'
import { MonorailAccordionSummaryOverrides } from '../components/AccordionSummary/themeOverrides.js'
import {
  MonorailAlertOverrides,
  MonorailAlertTitleOverrides,
} from '../components/Alert/themeOverrides.js'
import { MonorailAutocompleteOverrides } from '../components/Autocomplete/themeOverrides.js'
import { MonorailAvatarOverrides } from '../components/Avatar/themeOverrides.js'
import { MonorailBreadcrumbsOverrides } from '../components/Breadcrumbs/themeOverrides.js'
import {
  MonorailButtonOverrides,
  MonorailLoadingButtonOverrides,
} from '../components/Button/themeOverrides.js'
import { MonorailCheckboxOverrides } from '../components/Checkbox/themeOverrides.js'
import { MonorailChipOverrides } from '../components/Chip/themeOverrides.js'
import { MonorailCircularProgressOverrides } from '../components/CircularProgress/themeOverrides.js'
import { MonorailCssBaselineOverrides } from '../components/CssBaseline/themeOverrides.js'
import { MonorailDataGridOverrides } from '../components/DataGrid/themeOverrides.js'
import { MonorailDialogOverrides } from '../components/Dialog/themeOverrides.js'
import { MonorailDialogActionsOverrides } from '../components/DialogActions/themeOverrides.js'
import { MonorailDialogContentOverrides } from '../components/DialogContent/themeOverrides.js'
import { MonorailDialogHeaderOverrides } from '../components/DialogHeader/themeOverrides.js'
import { MonorailDialogTitleOverrides } from '../components/DialogTitle/themeOverrides.js'
import { MonorailDividerOverrides } from '../components/Divider/themeOverrides.js'
import { MonorailIconButtonOverrides } from '../components/IconButton/themeOverrides.js'
import { MonorailInputBaseOverrides } from '../components/InputBase/themeOverrides.js'
import { MonorailListOverrides } from '../components/List/themeOverrides.js'
import { MonorailListItemOverrides } from '../components/ListItem/themeOverrides.js'
import { MonorailListItemAvatarOverrides } from '../components/ListItemAvatar/themeOverrides.js'
import { MonorailListItemButtonOverrides } from '../components/ListItemButton/themeOverrides.js'
import { MonorailListItemIconOverrides } from '../components/ListItemIcon/themeOverrides.js'
import { MonorailListItemTextOverrides } from '../components/ListItemText/themeOverrides.js'
import { MonorailListSubheaderOverrides } from '../components/ListSubheader/themeOverrides.js'
import { MonorailMenuOverrides } from '../components/Menu/themeOverrides.js'
import { MonorailMenuItemOverrides } from '../components/MenuItem/themeOverrides.js'
import { MonorailOutlinedInputOverrides } from '../components/OutlinedInput/themeOverrides.js'
import { MonorailRadioOverrides } from '../components/Radio/themeOverrides.js'
import { MonorailRatingOverrides } from '../components/Rating/themeOverrides.js'
import { MonorailSplitButtonOverrides } from '../components/SplitButton/themeOverrides.js'
import { MonorailStepOverrides } from '../components/Step/themeOverrides.js'
import { MonorailStepConnectorOverrides } from '../components/StepConnector/themeOverrides.js'
import { MonorailStepIconOverrides } from '../components/StepIcon/themeOverrides.js'
import { MonorailStepLabelOverrides } from '../components/StepLabel/themeOverrides.js'
import { MonorailSvgIconOverrides } from '../components/SvgIcon/themeOverrides.js'
import { MonorailSwitchOverrides } from '../components/Switch/themeOverrides.js'
import {
  MonorailToggleButtonGroupOverrides,
  MonorailToggleButtonOverrides,
} from '../components/ToggleButton/themeOverrides.js'
import { MonorailTooltipOverrides } from '../components/Tooltip/themeOverrides.js'
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
  MuiAccordionActions: MonorailAccordionActionsOverrides,
  MuiAccordionDetails: MonorailAccordionDetailsOverrides,
  MuiAccordionSummary: MonorailAccordionSummaryOverrides,
  MuiAlert: MonorailAlertOverrides,
  MuiAlertTitle: MonorailAlertTitleOverrides,
  MuiAutocomplete: MonorailAutocompleteOverrides,
  MuiAvatar: MonorailAvatarOverrides,
  MuiBreadcrumbs: MonorailBreadcrumbsOverrides,
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
  MuiIconButton: MonorailIconButtonOverrides,
  MuiInputBase: MonorailInputBaseOverrides,
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
  MuiRadio: MonorailRadioOverrides,
  MuiRating: MonorailRatingOverrides,
  MuiStep: MonorailStepOverrides,
  MuiStepConnector: MonorailStepConnectorOverrides,
  MuiStepIcon: MonorailStepIconOverrides,
  MuiStepLabel: MonorailStepLabelOverrides,
  MuiSvgIcon: MonorailSvgIconOverrides,
  MuiSwitch: MonorailSwitchOverrides,
  MuiToggleButton: MonorailToggleButtonOverrides,
  MuiToggleButtonGroup: MonorailToggleButtonGroupOverrides,
  MuiTooltip: MonorailTooltipOverrides,
})
