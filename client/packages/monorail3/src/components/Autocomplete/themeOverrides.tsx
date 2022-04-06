import React from 'react'
import ClearIcon from '@mui/icons-material/Clear'
import { Components, Theme } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export const MonorailAutocompleteOverrides: Components<Theme>['MuiAutocomplete'] =
  {
    defaultProps: {
      popupIcon: <ExpandMoreIcon />,
      clearIcon: <ClearIcon fontSize="medium" />,
      ChipProps: {
        clickable: true,
        variant: 'rectangular',
      },
    },
    styleOverrides: {
      root: ({ ownerState }) => ({
        '.MuiOutlinedInput-root': {
          // Tags have a built-in 3px margin + 9px = 12px
          padding: ownerState.multiple ? '2px 9px' : '0 12px',
          '& .MuiAutocomplete-input': {
            padding: 0,
          },
        },
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
