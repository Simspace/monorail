import type { Components, Theme } from '@mui/material'

export const MonorailOutlinedInputOverrides: Components<Theme>['MuiOutlinedInput'] =
  {
    defaultProps: {
      notched: false,
    },
    styleOverrides: {
      notchedOutline: ({ theme }) => ({
        borderColor: theme.palette.default.border.light,
      }),
      multiline: {
        padding: 0,
      },
      input: ({ theme }) => ({
        padding: theme.spacing(2, 1.5),
      }),
      inputSizeSmall: ({ theme }) => ({
        padding: theme.spacing(1, 1.5),
      }),
      inputAdornedStart: {
        paddingLeft: 0,
      },
      inputAdornedEnd: {
        paddingRight: 0,
      },
      adornedStart: {
        paddingLeft: 8,
      },
      adornedEnd: {
        paddingRight: 8,
      },
    },
  }
