import {
  type Components,
  outlinedInputClasses,
  type Theme,
} from '@mui/material'

export const MonorailOutlinedInputOverrides: Components<Theme>['MuiOutlinedInput'] =
  {
    defaultProps: {
      notched: false,
    },
    styleOverrides: {
      root: ({ ownerState, theme }) => ({
        ...(ownerState.disabled === false && {
          [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: theme.palette.default.border.main,
          },
        }),
      }),
      multiline: {
        padding: 0,
      },
      input: ({ ownerState, theme }) => ({
        padding: theme.spacing(2, 3),
        ...(ownerState.size === 'small' && {
          padding: theme.spacing(1.25, 3),
        }),
        ...(ownerState.size === 'large' && {
          padding: theme.spacing(3),
        }),
      }),
      inputAdornedStart: {
        paddingLeft: 0,
      },
      inputAdornedEnd: {
        paddingRight: 0,
      },
    },
  }
