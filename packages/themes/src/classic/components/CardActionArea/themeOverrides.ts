import type { Components, Theme } from '@mui/material'
import { buttonBaseClasses } from '@mui/material'

export const MonorailCardActionAreaOverrides: Components<Theme>['MuiCardActionArea'] =
  {
    defaultProps: {},
    styleOverrides: {
      root: ({ theme }) => ({
        [`&.${buttonBaseClasses.disabled}`]: {
          opacity: theme.palette.action.disabledOpacity,
        },
      }),
    },
  }
