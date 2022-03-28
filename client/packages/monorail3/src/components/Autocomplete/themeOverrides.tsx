import React from 'react'
import { Components, Theme } from '@mui/material'
import ClearIcon from '@mui/icons-material/Clear'

export const MonorailAutocompleteOverrides: Components<Theme>['MuiAutocomplete'] =
  {
    defaultProps: {
      clearIcon: <ClearIcon fontSize="medium" />,
      ChipProps: {
        // color: 'info',
        sx: {
          borderRadius: 4,
        },
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
      tag: ({ theme }) => ({
        backgroundColor: theme.palette.primary.selected,
        borderRadius: 4,
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
