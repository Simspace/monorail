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
      input: {
        padding: '12px',
      },
      multiline: {
        padding: '4px 0',
      },
    },
  }
