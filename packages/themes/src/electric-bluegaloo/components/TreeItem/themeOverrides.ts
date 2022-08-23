import { treeItemClasses } from '@mui/lab'
import { Components, Theme } from '@mui/material'

export const MonorailTreeItemOverrides: Components<Theme>['MuiTreeItem'] = {
  defaultProps: {},
  styleOverrides: {
    content: ({ theme }) => ({
      padding: theme.spacing(2, 0),
      '&:hover': {
        backgroundColor: theme.palette.action.hover,
      },
      [`&.${treeItemClasses.focused}`]: {
        boxShadow: `0 0 0 4px ${theme.palette.primary.focusRing.outer}`,
        outline: `1px solid ${theme.palette.primary.focusRing.inner}`,
        backgroundColor: 'transparent',
      },
      [`& .${treeItemClasses.selected}`]: {
        backgroundColor: theme.palette.action.selected,
      },
    }),
  },
}
