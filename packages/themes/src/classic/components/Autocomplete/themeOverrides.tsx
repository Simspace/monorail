import React from 'react'
import ClearIcon from '@mui/icons-material/Clear'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import type { Components, Theme } from '@mui/material'
import {
  autocompleteClasses,
  inputBaseClasses,
  outlinedInputClasses,
  Popper,
} from '@mui/material'

export const MonorailAutocompleteOverrides: Components<Theme>['MuiAutocomplete'] =
  {
    defaultProps: {
      popupIcon: <ExpandMoreIcon />,
      clearIcon: <ClearIcon />,
      ChipProps: {
        clickable: true,
        variant: 'rectangular',
      },
      PopperComponent: props => (
        <Popper
          {...props}
          modifiers={[
            {
              name: 'offset',
              options: {
                offset: [0, 8],
              },
            },
          ]}
        />
      ),
    },
    styleOverrides: {
      root: ({ ownerState: { multiple = false }, theme }) => ({
        [` .${outlinedInputClasses.root}`]: {
          // Tags have a built-in 3px margin + 9px = 12px
          padding: multiple === true ? '2px 9px' : '0 12px',
          [`& .${autocompleteClasses.input}`]: {
            padding: 0,
            ...(multiple === true && {
              paddingLeft: theme.spacing(1),
            }),
          },
          [`&.${inputBaseClasses.sizeSmall} .${autocompleteClasses.input}`]: {
            paddingLeft: theme.spacing(1),
          },
        },
        [`& .${outlinedInputClasses.root}`]: {
          [`& .${autocompleteClasses.endAdornment}`]: {
            right: 7,
          },
        },
      }),
      endAdornment: { top: 'calc(50% - 20px)' },
    },
  }
