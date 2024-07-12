import type { Components, Theme } from '@mui/material'
import { alpha, svgIconClasses } from '@mui/material'
import { treeItemClasses } from '@mui/x-tree-view'
import type {} from '@mui/x-tree-view/themeAugmentation'

export const MonorailTreeItemOverrides: Components<Theme>['MuiTreeItem'] = {
  defaultProps: {},
  styleOverrides: {
    root: { borderRadius: 2 },
    label: ({ theme }) => ({
      ...theme.typography.body2,
      display: 'flex',
    }),
    iconContainer: ({ theme }) => ({
      width: theme.spacing(4),
      padding: theme.spacing(0.75, 0),
      [`& .${svgIconClasses.root}`]: {
        fontSize: theme.typography.pxToRem(16),
      },
    }),
    groupTransition: ({ theme }) => ({ marginLeft: theme.spacing(5) }),
    content: ({ theme }) => ({
      alignItems: 'flex-start',
      padding: theme.spacing(1.25, 1),
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
