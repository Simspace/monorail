import { Components, Theme } from '@mui/material'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import ChevronRight from '@mui/icons-material/ChevronRight'

// const DefaultIcon = <ChevronRight />

export const MonorailBreadcrumbsOverrides: Components<Theme>['MuiBreadcrumbs'] =
  {
    defaultProps: {
      // separator: <ChevronRight />,
    },
    styleOverrides: {
      root: ({ theme }) => ({
        color: theme.palette.primary.main,
      }),
      separator: ({ theme }) => ({
        color: theme.palette.text.secondary,
      }),
    },
  }
