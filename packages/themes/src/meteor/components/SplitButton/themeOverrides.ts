import type { Components, Theme } from '@mui/material'
import { buttonClasses } from '@mui/material'

import { type SplitButtonProps } from '@monorail/components'

export const MonorailSplitButtonOverrides: Components<Theme>['MonorailSplitButton'] =
  {
    defaultProps: {
      disableElevation: true,
      disableRipple: true,
      disableFocusRipple: true,
      fullWidth: false,
      variant: 'contained',
    },
    styleOverrides: {
      primaryButton: ({
        ownerState: { color = 'primary', variant = 'contained' },
        theme,
      }: {
        ownerState: {
          color?: SplitButtonProps['color']
          variant?: SplitButtonProps['variant']
        }
        theme: Theme
      }) => {
        return {
          zIndex: 1,
          ...(variant === 'contained' && {
            color: theme.palette[color].contrastText,
            borderRight: `1px solid ${theme.palette.divider}`,
            ...(color === 'primary' && {
              borderRight: `1px solid ${theme.palette[color].border.light}`,
            }),
            ...(color === 'secondary' && {
              borderRight: `1px solid ${theme.palette[color].border.dark}`,
              color: theme.palette.common.white,
            }),
          }),
          ...(variant === 'outlined' && {
            borderRight: `1px solid ${theme.palette[color].border.light}`,
            color: theme.palette[color].lowEmphasis.contrastText,
            '&:hover': {
              borderRight: `1px solid ${theme.palette[color].border.light}`,
            },
            '&:active': {
              borderRight: `1px solid ${theme.palette[color].border.light}`,
            },
            [`&.${buttonClasses.disabled}`]: {
              borderRight: `1px solid ${theme.palette[color].border.light}`,
            },
          }),
        }
      },
      secondaryButton: ({
        ownerState: { color = 'primary', variant = 'contained' },
        theme,
      }: {
        ownerState: {
          color?: SplitButtonProps['color']
          variant?: SplitButtonProps['variant']
        }
        theme: Theme
      }) => {
        return {
          ...(variant === 'contained' && {
            color: theme.palette[color].contrastText,
            ...(color === 'secondary' && {
              color: theme.palette.common.white,
            }),
          }),
          ...(variant === 'outlined' && {
            color: theme.palette[color].lowEmphasis.contrastText,
          }),
        }
      },
    },
  }
