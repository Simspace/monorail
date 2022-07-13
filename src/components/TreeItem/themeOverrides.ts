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
      [`& .${treeItemClasses.selected}`]: {
        backgroundColor: theme.palette.action.selected,
      },
    }),
  },
}
