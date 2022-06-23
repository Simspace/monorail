// eslint-disable-next-line no-restricted-imports
import type {} from '@mui/lab/themeAugmentation'
import { Theme, ThemeOptions } from '@mui/material'

import {
  MonorailAlertOverrides,
  MonorailAlertTitleOverrides,
} from '../components/Alert/themeOverrides'
import { MonorailAutocompleteOverrides } from '../components/Autocomplete/themeOverrides'
import { MonorailAvatarOverrides } from '../components/Avatar/themeOverrides'
import { MonorailBadgeOverrides } from '../components/Badge/themeOverrides'
import { MonorailBreadcrumbsOverrides } from '../components/Breadcrumbs/themeOverrides'
import {
  MonorailButtonOverrides,
  MonorailLoadingButtonOverrides,
} from '../components/Button/themeOverrides'
import { MonorailButtonGroupOverrides } from '../components/ButtonGroup/themeOverrides'
import { MonorailCardOverrides } from '../components/Card/themeOverrides'
import { MonorailCardActionAreaOverrides } from '../components/CardActionArea/themeOverrides'
import { MonorailCardActionsOverrides } from '../components/CardActions/themeOverrides'
import { MonorailCardContentOverrides } from '../components/CardContent/themeOverrides'
import { MonorailCardHeaderOverrides } from '../components/CardHeader/themeOverrides'
import { MonorailCardMediaOverrides } from '../components/CardMedia/themeOverrides'
import { MonorailCheckboxOverrides } from '../components/Checkbox/themeOverrides'
import { MonorailChipOverrides } from '../components/Chip/themeOverrides'
import { MonorailFormControlOverrides } from '../components/FormControl/themeOverrides'
import { MonorailFormControlLabelOverrides } from '../components/FormControlLabel/themeOverrides'
import { MonorailFormHelperTextOverrides } from '../components/FormHelperText/themeOverrides'
import { MonorailIconButtonOverrides } from '../components/IconButton/themeOverrides'
import { MonorailInputBaseOverrides } from '../components/InputBase/themeOverrides'
import { MonorailInputLabelOverrides } from '../components/InputLabel/themeOverrides'
import { MonorailListOverrides } from '../components/List/themeOverrides'
import { MonorailListItemOverrides } from '../components/ListItem/themeOverrides'
import { MonorailListItemAvatarOverrides } from '../components/ListItemAvatar/themeOverrides'
import { MonorailListItemButtonOverrides } from '../components/ListItemButton/themeOverrides'
import { MonorailListItemIconOverrides } from '../components/ListItemIcon/themeOverrides'
import { MonorailListItemSecondaryActionOverrides } from '../components/ListItemSecondaryAction/themeOverrides'
import { MonorailListItemTextOverrides } from '../components/ListItemText/themeOverrides'
import { MonorailListSubheaderOverrides } from '../components/ListSubheader/themeOverrides'
import { MonorailMenuOverrides } from '../components/Menu/themeOverrides'
import { MonorailMenuItemOverrides } from '../components/MenuItem/themeOverrides'
import { MonorailOutlinedInputOverrides } from '../components/OutlinedInput/themeOverrides'
import { MonorailRadioOverrides } from '../components/Radio/themeOverrides'
import { MonorailRatingOverrides } from '../components/Rating/themeOverrides'
import { MonorailSelectOverrides } from '../components/Select/themeOverrides'
import { MonorailSkeletonOverrides } from '../components/Skeleton/themeOverrides'
import { MonorailSnackbarOverrides } from '../components/Snackbar/themeOverrides'
import { MonorailSvgIconOverrides } from '../components/SvgIcon/themeOverrides'
import { MonorailSwitchOverrides } from '../components/Switch/themeOverrides'
import { MonorailTabOverrides } from '../components/Tab/themeOverrides'
import { MonorailTabsOverrides } from '../components/Tabs/themeOverrides'
import { MonorailTextFieldOverrides } from '../components/TextField/themeOverrides'
import { MonorailTimelineOverrides } from '../components/Timeline/themeOverrides'
import { MonorailTimelineConnectorOverrides } from '../components/TimelineConnector/themeOverrides'
import { MonorailTimelineContentOverrides } from '../components/TimelineContent/themeOverrides'
import { MonorailTimelineDotOverrides } from '../components/TimelineDot/themeOverrides'
import { MonorailTimelineItemOverrides } from '../components/TimelineItem/themeOverrides'
import { MonorailTimelineOppositeContentOverrides } from '../components/TimelineOppositeContent/themeOverrides'
import { MonorailTimelineSeparatorOverrides } from '../components/TimelineSeparator/themeOverrides'
import {
  MonorailToggleButtonGroupOverrides,
  MonorailToggleButtonOverrides,
} from '../components/ToggleButton/themeOverrides'
import { MonorailTooltipOverrides } from '../components/Tooltip/themeOverrides'
import { baseTheme } from './baseTheme'

/**
 * Constructs the `components` overrides using a subset of the overall theme that includes everything except `components`
 */
export const getThemeComponents = (
  _theme: Theme,
): ThemeOptions['components'] => ({
  // Make sure we apply the defaults here
  ...baseTheme.components,

  MuiAccordion: {
    defaultProps: {
      variant: 'outlined',
      square: true,
    },
  },
  MuiAlert: MonorailAlertOverrides,
  MuiAlertTitle: MonorailAlertTitleOverrides,
  MuiAutocomplete: MonorailAutocompleteOverrides,
  MuiAvatar: MonorailAvatarOverrides,
  MuiBadge: MonorailBadgeOverrides,
  MuiButton: MonorailButtonOverrides,
  MuiButtonBase: {
    defaultProps: {
      disableRipple: true,
    },
  },
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
  MuiFormControl: MonorailFormControlOverrides,
  MuiFormControlLabel: MonorailFormControlLabelOverrides,
  MuiFormHelperText: MonorailFormHelperTextOverrides,
  MuiIconButton: MonorailIconButtonOverrides,
  MuiInputBase: MonorailInputBaseOverrides,
  MuiInputLabel: MonorailInputLabelOverrides,
  MuiLoadingButton: MonorailLoadingButtonOverrides,
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
  MuiOutlinedInput: MonorailOutlinedInputOverrides,
  MuiRadio: MonorailRadioOverrides,
  MuiRating: MonorailRatingOverrides,
  MuiSelect: MonorailSelectOverrides,
  MuiSkeleton: MonorailSkeletonOverrides,
  MuiSnackbar: MonorailSnackbarOverrides,
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
})
