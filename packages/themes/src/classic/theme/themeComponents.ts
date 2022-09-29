// eslint-disable-next-line no-restricted-imports
import type {} from '@mui/lab/themeAugmentation'
import type { Theme, ThemeOptions } from '@mui/material'
import type {} from '@mui/x-data-grid-pro/themeAugmentation'
import type {} from '@mui/x-date-pickers/themeAugmentation'
import type {} from '@mui/x-date-pickers-pro/themeAugmentation'

import { MonorailAccordionOverrides } from '../components/Accordion/themeOverrides.js'
import { MonorailAccordionActionsOverrides } from '../components/AccordionActions/themeOverrides.js'
import { MonorailAccordionDetailsOverrides } from '../components/AccordionDetails/themeOverrides.js'
import { MonorailAccordionSummaryOverrides } from '../components/AccordionSummary/themeOverrides.js'
import {
  MonorailAlertOverrides,
  MonorailAlertTitleOverrides,
} from '../components/Alert/themeOverrides.js'
import { MonorailAutocompleteOverrides } from '../components/Autocomplete/themeOverrides.js'
import { MonorailAvatarOverrides } from '../components/Avatar/themeOverrides.js'
import { MonorailBackdropOverrides } from '../components/Backdrop/themeOverrides.js'
import { MonorailBadgeOverrides } from '../components/Badge/themeOverrides.js'
import { MonorailBottomNavigationActionOverrides } from '../components/BottomNavigationAction/themeOverrides.js'
import { MonorailBreadcrumbsOverrides } from '../components/Breadcrumbs/themeOverrides.js'
import {
  MonorailButtonOverrides,
  MonorailLoadingButtonOverrides,
} from '../components/Button/themeOverrides.js'
import { MonorailButtonBaseOverrides } from '../components/ButtonBase/themeOverrides.js'
import { MonorailButtonGroupOverrides } from '../components/ButtonGroup/themeOverrides.js'
import { MonorailCardOverrides } from '../components/Card/themeOverrides.js'
import { MonorailCardActionAreaOverrides } from '../components/CardActionArea/themeOverrides.js'
import { MonorailCardActionsOverrides } from '../components/CardActions/themeOverrides.js'
import { MonorailCardContentOverrides } from '../components/CardContent/themeOverrides.js'
import { MonorailCardHeaderOverrides } from '../components/CardHeader/themeOverrides.js'
import { MonorailCardMediaOverrides } from '../components/CardMedia/themeOverrides.js'
import { MonorailCheckboxOverrides } from '../components/Checkbox/themeOverrides.js'
import { MonorailChipOverrides } from '../components/Chip/themeOverrides.js'
import { MonorailCircularProgressOverrides } from '../components/CircularProgress/themeOverrides.js'
import { MonorailDataGridOverrides } from '../components/DataGrid/themeOverrides.js'
import { MonorailDateRangePickerDayOverrides } from '../components/DateRangePickerDay/themeOverrides.js'
import { MonorailDialogOverrides } from '../components/Dialog/themeOverrides.js'
import { MonorailDialogActionsOverrides } from '../components/DialogActions/themeOverrides.js'
import { MonorailDialogContentOverrides } from '../components/DialogContent/themeOverrides.js'
import { MonorailDialogContentTextOverrides } from '../components/DialogContentText/themeOverrides.js'
import { MonorailDialogTitleOverrides } from '../components/DialogTitle/themeOverrides.js'
import { MonorailFormControlOverrides } from '../components/FormControl/themeOverrides.js'
import { MonorailFormControlLabelOverrides } from '../components/FormControlLabel/themeOverrides.js'
import { MonorailFormHelperTextOverrides } from '../components/FormHelperText/themeOverrides.js'
import { MonorailIconButtonOverrides } from '../components/IconButton/themeOverrides.js'
import { MonorailInputAdornmentOverrides } from '../components/InputAdornment/themeOverrides.js'
import { MonorailInputBaseOverrides } from '../components/InputBase/themeOverrides.js'
import { MonorailInputLabelOverrides } from '../components/InputLabel/themeOverrides.js'
import { MonorailLinearProgressOverrides } from '../components/LinearProgress/themeOverrides.js'
import { MonorailListOverrides } from '../components/List/themeOverrides.js'
import { MonorailListItemOverrides } from '../components/ListItem/themeOverrides.js'
import { MonorailListItemAvatarOverrides } from '../components/ListItemAvatar/themeOverrides.js'
import { MonorailListItemButtonOverrides } from '../components/ListItemButton/themeOverrides.js'
import { MonorailListItemIconOverrides } from '../components/ListItemIcon/themeOverrides.js'
import { MonorailListItemSecondaryActionOverrides } from '../components/ListItemSecondaryAction/themeOverrides.js'
import { MonorailListItemTextOverrides } from '../components/ListItemText/themeOverrides.js'
import { MonorailListSubheaderOverrides } from '../components/ListSubheader/themeOverrides.js'
import { MonorailMenuOverrides } from '../components/Menu/themeOverrides.js'
import { MonorailMenuItemOverrides } from '../components/MenuItem/themeOverrides.js'
import { MonorailMobileStepperOverrides } from '../components/MobileStepper/themeOverrides.js'
import { MonorailOutlinedInputOverrides } from '../components/OutlinedInput/themeOverrides.js'
import { MonorailPaginationOverrides } from '../components/Pagination/themeOverrides.js'
import { MonorailPaginationItemOverrides } from '../components/PaginationItem/themeOverrides.js'
import { MonorailPopoverOverrides } from '../components/Popover/themeOverrides.js'
import { MonorailRadioOverrides } from '../components/Radio/themeOverrides.js'
import { MonorailRatingOverrides } from '../components/Rating/themeOverrides.js'
import { MonorailSelectOverrides } from '../components/Select/themeOverrides.js'
import { MonorailSkeletonOverrides } from '../components/Skeleton/themeOverrides.js'
import { MonorailSliderOverrides } from '../components/Slider/themeOverrides.js'
import { MonorailSnackbarOverrides } from '../components/Snackbar/themeOverrides.js'
import { MonorailStepOverrides } from '../components/Step/themeOverrides.js'
import { MonorailStepButtonOverrides } from '../components/StepButton/themeOverrides.js'
import { MonorailStepConnectorOverrides } from '../components/StepConnector/themeOverrides.js'
import { MonorailStepContentOverrides } from '../components/StepContent/themeOverrides.js'
import { MonorailStepIconOverrides } from '../components/StepIcon/themeOverrides.js'
import { MonorailStepLabelOverrides } from '../components/StepLabel/themeOverrides.js'
import { MonorailStepperOverrides } from '../components/Stepper/themeOverrides.js'
import { MonorailSvgIconOverrides } from '../components/SvgIcon/themeOverrides.js'
import { MonorailSwitchOverrides } from '../components/Switch/themeOverrides.js'
import { MonorailTabOverrides } from '../components/Tab/themeOverrides.js'
import { MonorailTabsOverrides } from '../components/Tabs/themeOverrides.js'
import { MonorailTextFieldOverrides } from '../components/TextField/themeOverrides.js'
import { MonorailTimelineOverrides } from '../components/Timeline/themeOverrides.js'
import { MonorailTimelineConnectorOverrides } from '../components/TimelineConnector/themeOverrides.js'
import { MonorailTimelineContentOverrides } from '../components/TimelineContent/themeOverrides.js'
import { MonorailTimelineDotOverrides } from '../components/TimelineDot/themeOverrides.js'
import { MonorailTimelineItemOverrides } from '../components/TimelineItem/themeOverrides.js'
import { MonorailTimelineOppositeContentOverrides } from '../components/TimelineOppositeContent/themeOverrides.js'
import { MonorailTimelineSeparatorOverrides } from '../components/TimelineSeparator/themeOverrides.js'
import {
  MonorailToggleButtonGroupOverrides,
  MonorailToggleButtonOverrides,
} from '../components/ToggleButton/themeOverrides.js'
import { MonorailTooltipOverrides } from '../components/Tooltip/themeOverrides.js'
import { MonorailTreeItemOverrides } from '../components/TreeItem/themeOverrides.js'
import { MonorailTreeViewOverrides } from '../components/TreeView/themeOverrides.js'
import { MonorailTypographyOverrides } from '../components/Typography/themeOverrides.js'
import { baseTheme } from './baseTheme.js'

/**
 * Constructs the `components` overrides using a subset of the overall theme that includes everything except `components`
 */
export const getThemeComponents = (
  _theme: Theme,
): ThemeOptions['components'] => ({
  // Make sure we apply the defaults here
  ...baseTheme.components,

  MuiAccordion: MonorailAccordionOverrides,
  MuiAccordionActions: MonorailAccordionActionsOverrides,
  MuiAccordionDetails: MonorailAccordionDetailsOverrides,
  MuiAccordionSummary: MonorailAccordionSummaryOverrides,
  MuiAlert: MonorailAlertOverrides,
  MuiAlertTitle: MonorailAlertTitleOverrides,
  MuiAutocomplete: MonorailAutocompleteOverrides,
  MuiAvatar: MonorailAvatarOverrides,
  MuiBackdrop: MonorailBackdropOverrides,
  MuiBadge: MonorailBadgeOverrides,
  MuiBottomNavigationAction: MonorailBottomNavigationActionOverrides,
  MuiButton: MonorailButtonOverrides,
  MuiButtonBase: MonorailButtonBaseOverrides,
  MuiButtonGroup: MonorailButtonGroupOverrides,
  MuiBreadcrumbs: MonorailBreadcrumbsOverrides,
  MuiCard: MonorailCardOverrides,
  MuiCardActionArea: MonorailCardActionAreaOverrides,
  MuiCardActions: MonorailCardActionsOverrides,
  MuiCardContent: MonorailCardContentOverrides,
  MuiCardHeader: MonorailCardHeaderOverrides,
  MuiCardMedia: MonorailCardMediaOverrides,
  MuiCheckbox: MonorailCheckboxOverrides,
  MuiChip: MonorailChipOverrides,
  MuiCircularProgress: MonorailCircularProgressOverrides,
  MuiDataGrid: MonorailDataGridOverrides,
  MuiDateRangePickerDay: MonorailDateRangePickerDayOverrides,
  MuiDialog: MonorailDialogOverrides,
  MuiDialogActions: MonorailDialogActionsOverrides,
  MuiDialogContent: MonorailDialogContentOverrides,
  MuiDialogContentText: MonorailDialogContentTextOverrides,
  MuiDialogTitle: MonorailDialogTitleOverrides,
  MuiFormControl: MonorailFormControlOverrides,
  MuiFormControlLabel: MonorailFormControlLabelOverrides,
  MuiFormHelperText: MonorailFormHelperTextOverrides,
  MuiIconButton: MonorailIconButtonOverrides,
  MuiInputAdornment: MonorailInputAdornmentOverrides,
  MuiInputBase: MonorailInputBaseOverrides,
  MuiInputLabel: MonorailInputLabelOverrides,
  MuiLoadingButton: MonorailLoadingButtonOverrides,
  MuiLinearProgress: MonorailLinearProgressOverrides,
  MuiList: MonorailListOverrides,
  MuiListItem: MonorailListItemOverrides,
  MuiListItemAvatar: MonorailListItemAvatarOverrides,
  MuiListItemButton: MonorailListItemButtonOverrides,
  MuiListItemIcon: MonorailListItemIconOverrides,
  MuiListItemSecondaryAction: MonorailListItemSecondaryActionOverrides,
  MuiListItemText: MonorailListItemTextOverrides,
  MuiListSubheader: MonorailListSubheaderOverrides,
  MuiMenu: MonorailMenuOverrides,
  MuiMenuItem: MonorailMenuItemOverrides,
  MuiMobileStepper: MonorailMobileStepperOverrides,
  MuiOutlinedInput: MonorailOutlinedInputOverrides,
  MuiPagination: MonorailPaginationOverrides,
  MuiPaginationItem: MonorailPaginationItemOverrides,
  MuiPopover: MonorailPopoverOverrides,
  MuiRadio: MonorailRadioOverrides,
  MuiRating: MonorailRatingOverrides,
  MuiSelect: MonorailSelectOverrides,
  MuiSlider: MonorailSliderOverrides,
  MuiSkeleton: MonorailSkeletonOverrides,
  MuiSnackbar: MonorailSnackbarOverrides,
  MuiStep: MonorailStepOverrides,
  MuiStepButton: MonorailStepButtonOverrides,
  MuiStepConnector: MonorailStepConnectorOverrides,
  MuiStepContent: MonorailStepContentOverrides,
  MuiStepIcon: MonorailStepIconOverrides,
  MuiStepLabel: MonorailStepLabelOverrides,
  MuiStepper: MonorailStepperOverrides,
  MuiSvgIcon: MonorailSvgIconOverrides,
  MuiSwitch: MonorailSwitchOverrides,
  MuiTab: MonorailTabOverrides,
  MuiTabs: MonorailTabsOverrides,
  MuiTextField: MonorailTextFieldOverrides,
  MuiTimeline: MonorailTimelineOverrides,
  MuiTimelineConnector: MonorailTimelineConnectorOverrides,
  MuiTimelineContent: MonorailTimelineContentOverrides,
  MuiTimelineDot: MonorailTimelineDotOverrides,
  MuiTimelineItem: MonorailTimelineItemOverrides,
  MuiTimelineOppositeContent: MonorailTimelineOppositeContentOverrides,
  MuiTimelineSeparator: MonorailTimelineSeparatorOverrides,
  MuiToggleButton: MonorailToggleButtonOverrides,
  MuiToggleButtonGroup: MonorailToggleButtonGroupOverrides,
  MuiTooltip: MonorailTooltipOverrides,
  MuiTreeItem: MonorailTreeItemOverrides,
  MuiTreeView: MonorailTreeViewOverrides,
  MuiTypography: MonorailTypographyOverrides,
})
