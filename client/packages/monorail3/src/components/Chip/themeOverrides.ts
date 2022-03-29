import { Components, darken, Theme } from '@mui/material'

export const MonorailChipOverrides: Components<Theme>['MuiChip'] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ ownerState, theme }) => {
      const color = ownerState.color ?? 'default'
      const variant = ownerState.variant ?? 'filled'
      return {
        fontWeight: theme.typography.fontWeightBold,
        ...(color === 'default' &&
          variant === 'filled' && {
            background: theme.palette.default.selected,
          }),
      }
    },
    label: {
      padding: 6,
    },
    clickable: ({ ownerState, theme }) => {
      const color = ownerState.color ?? 'default'
      // const clickable = ownerState.clickable
      return {
        '&.MuiChip-clickable:active': {
          boxShadow: 'none',
          backgroundColor: darken(
            theme.palette[color].dark,
            theme.palette.action.activatedOpacity,
          ),
        },
        ...(color === 'default' && {
          backgroundColor: theme.palette.default.selected,
          '&:hover': {
            backgroundColor: theme.palette.default.active,
          },
          '&.MuiChip-clickable:active': {
            boxShadow: 'none',
            backgroundColor: theme.palette.default.light,
          },
        }),
        ...(color === 'secondary' && {
          backgroundColor: theme.palette.secondary.light,
        }),
        ...(color === 'warning' && {
          backgroundColor: theme.palette.warning.light,
        }),
      }
    },
    outlined: ({ ownerState, theme }) => {
      const color = ownerState.color ?? 'default'
      return {
        backgroundColor: theme.palette.background.paper,
        ...(ownerState.clickable && {
          '&.MuiChip-clickable:hover': {
            backgroundColor: theme.palette[color].hover,
          },
          '&.MuiChip-clickable:active': {
            backgroundColor: theme.palette[color].active,
            boxShadow: 'none',
          },
        }),
      }
    },
    avatar: ({ ownerState, theme }) => ({
      marginLeft: '4px',
      marginRight: '-3px',
      // ...((ownerState.color === 'secondary') |
      //   (ownerState.color === 'warning') && {
      //   backgroundColor: theme.palette[ownerState.color].light,
      // }),
    }),
  },
}
