import type { Components, Theme } from '@mui/material'
import { buttonClasses } from '@mui/material'

export const MonorailButtonGroupOverrides: Components<Theme>['MuiButtonGroup'] =
  {
    defaultProps: {
      disableRipple: true,
      disableElevation: true,
    },
    styleOverrides: {
      grouped: ({ ownerState: { color = 'primary' }, theme }) => {
        return {
          [`&.${buttonClasses.focusVisible}`]: {
            boxShadow: `inset 0 0 0 1px ${theme.palette[color].focusRing.inner}, 0 0 0 4px ${theme.palette[color].focusRing.outer}`,
          },
        }
      },
      groupedOutlined: {
        '&:hover': {
          zIndex: 1,
        },
        [`&.${buttonClasses.focusVisible}`]: {
          zIndex: 1,
        },
      },
    },
  }
