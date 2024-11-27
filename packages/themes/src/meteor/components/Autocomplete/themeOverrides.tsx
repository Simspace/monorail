import React from 'react'
import ClearIcon from '@mui/icons-material/Clear'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import type { Components, Theme } from '@mui/material'
import {
  alpha,
  autocompleteClasses,
  outlinedInputClasses,
  Popper,
} from '@mui/material'

import type { IconButtonProps } from '@monorail/components'
import { inputBaseClasses } from '@monorail/components'

export const MonorailAutocompleteOverrides: Components<Theme>['MuiAutocomplete'] =
  {
    defaultProps: {
      popupIcon: <ExpandMoreIcon fontSize="inherit" />,
      clearIcon: <ClearIcon fontSize="inherit" />,
      slotProps: {
        popupIndicator: {
          variant: 'chromeless',
          size: 'small',
          shape: 'circular',
        } as Partial<IconButtonProps>,
        clearIndicator: {
          variant: 'chromeless',
          size: 'small',
          shape: 'circular',
          sx: {
            visibility: 'visible',
          },
        } as Partial<IconButtonProps>,
        paper: {
          elevation: 6,
        },
      },
      ChipProps: {
        clickable: true,
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
      root: ({ ownerState: { multiple = false, size = 'medium' }, theme }) => ({
        [`.${outlinedInputClasses.root}`]: {
          // Tags have a built-in 3px margin + 9px = 12px
          padding: multiple === true ? '2px 9px' : '0 12px',
          [`& .${autocompleteClasses.input}`]: {
            padding: 0,
            ...(multiple === true && { paddingLeft: 3 }),
          },
          [`&.${inputBaseClasses.sizeSmall}`]: {
            padding: theme.spacing(1.25, 3),
            [`& .${autocompleteClasses.input}`]: {
              padding: 0,
            },
          },
        },
        [`& .${outlinedInputClasses.root}`]: {
          [`& .${autocompleteClasses.endAdornment}`]: {
            right: 7,
          },
        },
        ...(size === 'large' && {
          [`&.${autocompleteClasses.hasPopupIcon}.${autocompleteClasses.hasClearIcon} .${outlinedInputClasses.root}`]:
            { paddingRight: theme.spacing(21.25) },
        }),
      }),
      inputRoot: ({ ownerState: { size = 'medium' } }) => ({
        padding: 0,
        minHeight: 40,
        ...(size === 'small' && {
          minHeight: 34,
        }),
        ...(size === 'large' && {
          minHeight: 48,
        }),
      }),
      listbox: ({ theme }) => {
        return {
          [`& .${autocompleteClasses.option}`]: {
            '&[aria-selected="true"]': {
              backgroundColor: theme.palette.action.selected,
              [`&.Mui-focused`]: {
                backgroundColor: theme.palette.action.selected,
              },
              '&:hover': {
                backgroundColor: alpha(
                  theme.palette.default.main,
                  theme.palette.action.selectedOpacity +
                    theme.palette.action.hoverOpacity,
                ),
              },
            },
          },
        }
      },
      input: {
        padding: 0,
      },
    },
  }
