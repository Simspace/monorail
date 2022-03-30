import React from 'react'
import ClearIcon from '@mui/icons-material/Clear'
import { Components, Theme } from '@mui/material'

export const MonorailAutocompleteOverrides: Components<Theme>['MuiAutocomplete'] =
  {
    defaultProps: {
      clearIcon: <ClearIcon fontSize="medium" />,
      ChipProps: {
        clickable: true,
        variant: 'rectangular',
      },
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
      tag: {},
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
