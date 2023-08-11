import React from 'react'
import ChevronRight from '@mui/icons-material/ChevronRight'
import type { Components, Theme } from '@mui/material'
import { svgIconClasses } from '@mui/material'

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
      li: ({ theme }) => ({
        [`& .${svgIconClasses.root}`]: {
          marginRight: theme.spacing(2),
        },
      }),
      separator: ({ theme }) => ({
        color: theme.palette.default.main,
      }),
    },
  }
