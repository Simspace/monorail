import { Components, darken, Theme } from '@mui/material'

declare module '@mui/material/Chip' {
  /**
   * Extend the Chip variant prop to add `rectangular` variant.
   */
  interface ChipPropsVariantOverrides {
    rectangular: true
  }
}

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
        '&.Mui-focusVisible': {
          boxShadow: `0 0 0 3px ${theme.palette[color].light}`,
          border: `1px solid ${theme.palette[color].dark}`,
        },
        ...(variant === 'rectangular' && {
          border: '1px solid transparent',
          borderRadius: 4,
          backgroundColor: theme.palette.grey[100],
          '&.Mui-focusVisible': {
            boxShadow: `0 0 0 3px ${theme.palette[color].light}`,
            border: `1px solid ${theme.palette[color].dark}`,
            backgroundColor: theme.palette.default.light,
          },
        }),
      }
    },
    label: {
      padding: 6,
    },
    filled: ({ ownerState, theme }) => {
      const color = ownerState.color ?? 'default'
      return {
        border: '1px solid transparent',
        '&.Mui-focusVisible': {
          backgroundColor:
            color === 'default'
              ? theme.palette.default.light
              : theme.palette[color].dark,
        },
      }
    },
    outlined: ({ ownerState, theme }) => {
      const color = ownerState.color ?? 'default'
      return {
        backgroundColor: theme.palette.background.paper,
        borderColor: theme.palette[color].main,
        '&.Mui-focusVisible': {
          backgroundColor: theme.palette[color].hover,
        },
        ...(color === 'default' && {
          borderColor: theme.palette.default.light,
        }),
        ...(color === 'error' && {
          borderColor: theme.palette.error.light,
        }),
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
    clickable: ({ ownerState, theme }) => {
      const color = ownerState.color ?? 'default'
      const variant = ownerState.variant ?? 'filled'
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
        ...(variant === 'rectangular' && {
          backgroundColor: theme.palette.primary.selected,
          color: theme.palette.primary.dark,
          '&:hover': {
            backgroundColor: '#BDD3FE',
          },
          '&.MuiChip-clickable:active': {
            backgroundColor: darken(
              theme.palette.primary.light,
              theme.palette.action.activatedOpacity,
            ),
          },
          '&.Mui-focusVisible': {
            backgroundColor: theme.palette.primary.active,
            boxShadow: `0 0 0 3px ${theme.palette.primary.light}`,
            border: `1px solid ${theme.palette.primary.dark}`,
          },
          '& > .MuiChip-avatar': {
            backgroundColor: theme.palette.primary.light,
            color: theme.palette.primary.dark,
          },
          '& > .MuiChip-deleteIcon': {
            color: theme.palette.primary.light,
            '&:hover': {
              color: '#4787FF',
            },
          },
          '& > .MuiChip-icon': {
            color: theme.palette.primary.dark,
          },
        }),
      }
    },
    sizeSmall: {
      padding: '2px 5px',
    },
    icon: {
      marginRight: -5,
      marginLeft: 4,
    },
    deleteIcon: ({ ownerState, theme }) => {
      const color = ownerState.color ?? 'default'
      const variant = ownerState.variant ?? 'filled'
      return {
        marginRight: 3,
        marginLeft: -4,
        color:
          variant === 'filled'
            ? theme.palette[color].selected
            : theme.palette[color].main,
        '&:hover': {
          color:
            variant === 'filled'
              ? theme.palette[color].hover
              : theme.palette[color].dark,
        },
        ...(color === 'default' && {
          color:
            variant === 'filled'
              ? theme.palette.default.main
              : theme.palette.default.light,
          '&:hover': {
            color:
              variant === 'filled'
                ? theme.palette.default.dark
                : theme.palette.default.main,
          },
        }),
      }
    },
    avatar: ({ ownerState, theme }) => {
      const color = ownerState.color ?? 'default'
      return {
        marginLeft: 4,
        marginRight: -3,
        ...(color === 'default' && {
          color: theme.palette.default.main,
          backgroundColor: theme.palette.default.light,
        }),
        ...(color === 'warning' && {
          color: theme.palette.common.white,
          backgroundColor: theme.palette.warning.dark,
        }),
        ...(color === 'info' && {
          color: theme.palette.info.contrastText,
          backgroundColor: theme.palette.info.dark,
        }),
        ...(color === 'success' && {
          color: theme.palette.success.contrastText,
          backgroundColor: theme.palette.success.dark,
        }),
        ...(color === 'error' && {
          color: theme.palette.error.contrastText,
          backgroundColor: theme.palette.error.dark,
        }),
      }
    },
    avatarColorSecondary: ({ theme }) => ({
      color: theme.palette.common.white,
    }),
  },
}
