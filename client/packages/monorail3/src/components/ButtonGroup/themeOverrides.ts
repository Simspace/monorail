import { Components, Theme } from '@mui/material'

export const MonorailButtonGroupOverrides: Components<Theme>['MuiButtonGroup'] =
  {
    defaultProps: {
      disableRipple: true,
      disableElevation: true,
    },
    styleOverrides: {
      groupedOutlined: {
        '&:hover': {
          zIndex: 1,
        },
        '&.Mui-focusVisible': {
          zIndex: 1,
        },
      },
      groupedOutlinedHorizontal: {
        '&:not(:first-of-type)': {
          marginLeft: 1,
        },
      },
      groupedOutlinedVertical: {
        '&:not(:first-of-type)': {
          marginTop: 1,
        },
      },
    },
  }
