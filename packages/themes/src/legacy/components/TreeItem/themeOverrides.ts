import { treeItemClasses } from '@mui/lab'
import type { Components, Theme } from '@mui/material'
import { alpha } from '@mui/material'

export const MonorailTreeItemOverrides: Components<Theme>['MuiTreeItem'] = {
  defaultProps: {},
  styleOverrides: {
    content: ({ theme }) => ({
      padding: theme.spacing(2, 0),
      '&:hover': {
        backgroundColor: theme.palette.action.hover,
      },
      [`&.${treeItemClasses.focused}`]: {
        outline: 'none',
        boxShadow: `inset 0 0 0 1px ${theme.palette.primary.focusRing.inner}, inset 0 0 0 4px ${theme.palette.primary.focusRing.outer}`,
        backgroundColor: 'transparent',
        '&:hover': {
          backgroundColor: theme.palette.action.hover,
        },
      },
      [`&.${treeItemClasses.selected}`]: {
        backgroundColor: theme.palette.action.selected,
        [`&.${treeItemClasses.focused}`]: {
          backgroundColor: theme.palette.action.selected,
          '&:hover': {
            backgroundColor: alpha(
              theme.palette.primary.main,
              theme.palette.action.selectedOpacity +
                theme.palette.action.hoverOpacity,
            ),
          },
        },
      },
    }),
  },
}
