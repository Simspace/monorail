import type { Components, Theme } from '@mui/material'
import {
  avatarClasses,
  checkboxClasses,
  listItemAvatarClasses,
  listItemIconClasses,
  svgIconClasses,
} from '@mui/material'

export const MonorailListItemOverrides: Components<Theme>['MuiListItem'] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ theme }) => ({
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
      [`& .${avatarClasses.root} .${svgIconClasses.root}`]: {
        fontSize: theme.typography.pxToRem(32),
      },
    }),
    dense: ({ theme }) => ({
      [`& > .${listItemAvatarClasses.root}`]: {
        [`& > .${avatarClasses.root}`]: {
          width: 32,
          height: 32,
          [`& > .${svgIconClasses.root}`]: {
            fontSize: theme.typography.pxToRem(24),
          },
        },
      },
      [`& .${listItemIconClasses.root}`]: {
        minWidth: 40,
        [`& > .${svgIconClasses.root}`]: {
          fontSize: theme.typography.pxToRem(16),
        },
        [`& > .${checkboxClasses.root}`]: {
          // <Checkbox size="small"/> adds unwanted height.
          // Do the same for Radio if needed - GS 04/26/2022
          marginTop: theme.spacing(-1),
          marginBottom: theme.spacing(-1),
        },
      },
    }),
  },
}
