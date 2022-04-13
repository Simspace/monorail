import { Components, Theme } from '@mui/material'

declare module '@mui/material/ButtonGroup' {
  /**
   * Extend the ButtonGroup color prop to allow for the other semantic styles.
   */
  interface ButtonGroupPropsColorOverrides {
    info: true
    success: true
    warning: true
    error: true
    inherit: false
  }
}

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
            boxShadow: `0 0 0 4px ${theme.palette[color].focusRing?.outer}`,
            outline: `1px solid ${theme.palette[color].focusRing?.inner}`,
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
