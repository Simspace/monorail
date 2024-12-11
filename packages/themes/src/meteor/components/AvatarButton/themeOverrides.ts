import type { Components, Theme } from '@mui/material'
import { buttonClasses } from '@mui/material'

export const MonorailAvatarButtonOverrides: Components<Theme>['MonorailAvatarButton'] =
  {
    defaultProps: {
      color: 'primary',
    },
    styleOverrides: {
      root: ({ color = 'primary', variant = 'circular', theme }) => ({
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 1,
          borderRadius: '50%',
          width: '100%',
          height: '100%',
          backgroundColor: 'transparent',
          transition: theme.transitions.create(['background-color'], {
            duration: theme.transitions.duration.shortest,
          }),
        },
        color: theme.palette[color].contrastText,
        backgroundColor: theme.palette[color].main,
        transition: theme.transitions.create(
          ['box-shadow', 'background-color'],
          {
            duration: theme.transitions.duration.shortest,
          },
        ),
        '&:hover': {
          boxShadow: `inset 0 0 0 1px ${theme.palette[color].border.dark}`,
          backgroundColor: theme.palette[color].main,
          '&::before': {
            backgroundColor: theme.palette.action.hover,
          },
        },
        '&:active': {
          backgroundColor: theme.palette[color].dark,
          boxShadow: `inset 0 0 0 1px ${theme.palette[color].border.dark}`,
          '&::before': {
            backgroundColor: theme.palette.action.active,
          },
        },
        [`&.${buttonClasses.disabled}`]: {
          backgroundColor: theme.palette[color].main,
          color: theme.palette[color].contrastText,
          opacity: 0.6,
        },
        ...(variant === 'rounded' && {
          '&::before': {
            borderRadius: theme.spacing(1),
          },
        }),
      }),
    },
  }
