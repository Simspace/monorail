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
      [`& .${listItemAvatarClasses.root}`]: {
        minWidth: theme.spacing(10.5),
        [`& .${avatarClasses.root}`]: {
          width: theme.spacing(8),
          height: theme.spacing(8),
          [`& .${svgIconClasses.root}`]: {
            fontSize: theme.typography.pxToRem(20),
          },
        },
      },
    }),
    dense: ({ theme }) => ({
      [`& > .${listItemAvatarClasses.root}`]: {
        minWidth: theme.spacing(9),
        [`& > .${avatarClasses.root}`]: {
          width: theme.spacing(6),
          height: theme.spacing(6),
          [`& .${svgIconClasses.root}`]: {
            fontSize: theme.typography.pxToRem(16),
          },
        },
      },
      [`& .${listItemIconClasses.root}`]: {
        minWidth: theme.spacing(8),
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
