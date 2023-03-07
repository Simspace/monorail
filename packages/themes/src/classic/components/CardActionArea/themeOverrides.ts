import type { Components, Theme } from '@mui/material'
import { buttonBaseClasses, cardActionAreaClasses } from '@mui/material'

export const MonorailCardActionAreaOverrides: Components<Theme>['MuiCardActionArea'] =
  {
    defaultProps: {},
    styleOverrides: {
      root: ({ theme }) => ({
        [`&:active .${cardActionAreaClasses.focusHighlight}`]: {
          opacity: theme.palette.action.activatedOpacity,
        },
        [`&.${buttonBaseClasses.disabled}`]: {
          opacity: theme.palette.action.disabledOpacity,
        },
      }),
    },
  }
