import type { Components, Theme } from '@mui/material'
import { alpha, paginationItemClasses } from '@mui/material'

export const MonorailTablePaginationOverrides: Components<Theme>['MuiTablePagination'] =
  {
    defaultProps: {},
    styleOverrides: {
      // root: ({ ownerState, theme }) => ({
      // }),
      select: ({ theme }) => ({
        borderRadius: theme.shape.borderRadius,
        border: `1px solid ${theme.palette.divider}`,
        paddingRight: theme.spacing(11),
      }),
      selectIcon: ({ theme }) => ({
        color: theme.palette.text.primary,
        right: theme.spacing(3),
      }),
      displayedRows: ({ theme }) => ({
        ...theme.typography.subtitle2,
      }),
    },
  }
