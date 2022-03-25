import React from 'react'
import { Components, Theme } from '@mui/material'
import ClearIcon from '@mui/icons-material/Clear'

export const MonorailAutocompleteOverrides: Components<Theme>['MuiAutocomplete'] =
  {
    defaultProps: {
      clearIcon: <ClearIcon fontSize="medium" />,
    },
    styleOverrides: {
      root: {
        '.MuiOutlinedInput-root': {
          padding: 0,
          '& .MuiAutocomplete-input': {
            padding: '12px',
          },
        },
      },
      tag: ({ theme }) => ({
        backgroundCOlor: theme.palette.primary.light,
      }),
      endAdornment: {
        top: 'calc(50% - 20px)',
      },
      popper: {
        marginTop: 2,
      },
      input: {
        padding: 0,
      },
    },
  }
