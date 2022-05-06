import {
  avatarClasses,
  checkboxClasses,
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
      paddingTop: 4,
      paddingBottom: 4,
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
          marginTop: -4,
          marginBottom: -4,
        },
      },
    }),
  },
}
