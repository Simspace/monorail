import type { Components, Theme } from '@mui/material'
import { tablePaginationClasses } from '@mui/material'

export const MonorailTablePaginationOverrides: Components<Theme>['MuiTablePagination'] =
  {
    defaultProps: {},
    styleOverrides: {
      input: ({ theme }) => ({
        marginRight: theme.spacing(4),
        minHeight: theme.spacing(10),
        [`&&& .${tablePaginationClasses.select}`]: {
          paddingRight: theme.spacing(15),
        },
      }),
      select: ({ theme }) => ({
        borderRadius: theme.shape.borderRadius,
        border: `1px solid ${theme.palette.divider}`,
        padding: theme.spacing(2, 3),
      }),
      selectIcon: ({ theme }) => ({
        color: theme.palette.text.primary,
        right: theme.spacing(3),
      }),
      selectLabel: ({ theme }) => ({
        ...theme.typography.inputLabel,
      }),
      displayedRows: ({ theme }) => ({
        ...theme.typography.subtitle2,
      }),
    },
  }
