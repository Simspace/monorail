import React from 'react'
import ChevronRight from '@mui/icons-material/ChevronRight'
import { Components, Theme } from '@mui/material'

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
        color: theme.palette.grey[600],
      }),
    },
  }
