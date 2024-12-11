import type { Components, Theme } from '@mui/material'
import { buttonClasses, menuClasses } from '@mui/material'

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
      }) => {
        return {
          '&::before': {
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            border: 'none',
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
          },
          boxShadow: `inset 0 0 0 1px ${theme.palette[color].border.light}`,
          ...(variant === 'contained' && {
            color: theme.palette[color].contrastText,
            borderRight: `1px solid ${theme.palette.common.white}`,
            [`&.${buttonClasses.disabled}`]: {
              borderRight: `1px solid ${theme.palette.common.white}`,
            },
          }),
          ...(variant === 'outlined' && {
            color: theme.palette[color].lowEmphasis.contrastText,
            borderRight: 0,
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
          '&::before': {
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            border: 'none',
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
          },
          boxShadow: `inset 0 0 0 1px ${theme.palette[color].border.light}`,
          ...(variant === 'contained' && {
            color: theme.palette[color].contrastText,
            ...(color === 'secondary' && {
              color: theme.palette.common.white,
            }),
          }),
          ...(variant === 'outlined' && {
            color: theme.palette[color].lowEmphasis.contrastText,
            marginLeft: 0,
          }),
        }
      },
      menu: {
        [`& .${menuClasses.paper}`]: {
          margin: 0,
        },
      },
    },
  }
