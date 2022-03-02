import { Components, Theme } from '@mui/material'

export const MonorailButtonGroupOverrides: Components<Theme>['MuiButtonGroup'] =
  {
    defaultProps: {
      disableRipple: true,
      disableElevation: true,
    },
    styleOverrides: {
      groupedOutlinedHorizontal: {
        '&:hover': {
          zIndex: 1,
        },
        '&.Mui-focusVisible': {
          zIndex: 1,
        },
        '&:not(:last-of-type)': {
          marginRight: 1,
        },
      },
    },
  }
