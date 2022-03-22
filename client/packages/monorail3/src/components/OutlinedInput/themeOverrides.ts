import { Components, Theme } from '@mui/material'

export const MonorailOutlinedInputOverrides: Components<Theme>['MuiOutlinedInput'] =
  {
    defaultProps: {
      notched: false,
    },
    styleOverrides: {
      root: {
        '&.Mui-disabled > .MuiOutlinedInput-notchedOutline': {
          borderStyle: 'dashed',
        },
      },
      multiline: {
        padding: '4px 0',
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
