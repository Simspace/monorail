import React from 'react'
import ChevronRight from '@mui/icons-material/ChevronRight'
import type { Components, Theme } from '@mui/material'

export const MonorailBreadcrumbsOverrides: Components<Theme>['MuiBreadcrumbs'] =
  {
    defaultProps: {
      separator: <ChevronRight fontSize="small" />,
      maxItems: 8,
    },
    styleOverrides: {
      root: ({ theme }) => ({
        color: theme.palette.primary.main,
      }),
      separator: ({ theme }) => ({
        color: theme.palette.default.main,
        marginRight: theme.spacing(1),
        marginLeft: theme.spacing(1),
      }),
    },
  }
