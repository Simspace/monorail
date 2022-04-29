import {
  avatarClasses,
  Components,
  listItemAvatarClasses,
  listItemIconClasses,
  svgIconClasses,
  Theme,
} from '@mui/material'

export const MonorailListItemOverrides: Components<Theme>['MuiListItem'] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ theme }) => ({
      [`& .${avatarClasses.root} .${svgIconClasses.root}`]: {
        fontSize: theme.typography.pxToRem(32),
      },
    }),
    dense: ({ theme }) => ({
      [`& > .${listItemAvatarClasses.root}`]: {
        paddingTop: 4,
        paddingBottom: 4,
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
      },
    }),
  },
}
