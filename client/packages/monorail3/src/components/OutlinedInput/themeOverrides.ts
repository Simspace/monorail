import { Components, Theme } from '@mui/material'

export const MonorailOutlinedInputOverrides: Components<Theme>['MuiOutlinedInput'] =
  {
    defaultProps: {
      notched: false,
      minRows: 3,
    },
    styleOverrides: {
      multiline: {
        padding: 0,
      },
      input: {
        padding: '12px',
      },
      inputSizeSmall: {
        padding: '8px 12px',
      },
      inputAdornedStart: {
        paddingLeft: 0,
      },
      inputAdornedEnd: {
        paddingRight: 0,
      },
    },
  }
