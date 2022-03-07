import { Components, Theme } from '@mui/material'

export const MonorailButtonGroupOverrides: Components<Theme>['MuiButtonGroup'] =
  {
    defaultProps: {
      disableRipple: true,
      disableElevation: true,
    },
    styleOverrides: {
      grouped: ({ ownerState, theme }) => {
        const color = ownerState.color ?? 'primary'
        return {
          '&.Mui-focusVisible': {
            boxShadow: `0 0 0 3px ${theme.palette[color].light}`,
            outline: `1px solid ${theme.palette[color].dark}`,
          },
        }
      },
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
