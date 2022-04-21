import React from 'react'
import ClearIcon from '@mui/icons-material/Clear'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import {
  autocompleteClasses,
  Components,
  outlinedInputClasses,
  Popper,
  Theme,
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
      root: ({
        ownerState: { multiple = false },
      }: {
        ownerState: { multiple?: boolean }
      }) => ({
        [`.${outlinedInputClasses.root}`]: {
          // Tags have a built-in 3px margin + 9px = 12px
          padding: multiple ? '2px 9px' : '0 12px',
          [`& .${autocompleteClasses.input}`]: {
            padding: 0,
          },
        },
        [`& .${outlinedInputClasses.root}`]: {
          [`& .${autocompleteClasses.endAdornment}`]: {
            right: 7,
          },
        },
      }),
      endAdornment: {
        top: 'calc(50% - 20px)',
      },
      input: {
        padding: 0,
      },
    },
  }
