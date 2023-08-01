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
      slotProps: {
        popupIndicator: {
          size: 'small',
        },
        clearIndicator: {
          size: 'small',
          sx: { mr: 0 },
        },
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
      root: ({ theme, ownerState: { multiple = false } }) => ({
        [` .${outlinedInputClasses.root}`]: {
          padding: multiple === true ? '2px 3px' : theme.spacing(0, 1.5),
          [`& .${autocompleteClasses.input}`]: {
            padding: 0,
            paddingLeft: theme.spacing(1),
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
      endAdornment: {
        top: 'calc(50% - 8px)',
      },
      hasPopupIcon: ({ theme }) => ({
        [`&.${autocompleteClasses.root} .${outlinedInputClasses.root}`]: {
          paddingRight: theme.spacing(5.5),
        },
        [`&.${autocompleteClasses.root}.${autocompleteClasses.hasClearIcon} .${outlinedInputClasses.root}`]:
          {
            paddingRight: theme.spacing(10),
          },
      }),
      hasClearIcon: ({ theme }) => ({
        [`&.${autocompleteClasses.root} .${outlinedInputClasses.root}`]: {
          paddingRight: theme.spacing(5.5),
        },
      }),
      input: {
        padding: 0,
      },
      tag: ({ theme }) => ({
        margin: theme.spacing(0.5),
      }),
    },
  }
