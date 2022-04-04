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
    filled: ({ ownerState, theme }) => {
      const color = ownerState.color ?? 'default'

      return {
        border: '1px solid transparent',
        backgroundColor:
          color === 'default'
            ? theme.palette.default.selected
            : color === 'secondary'
            ? theme.palette.secondary.light
            : color === 'warning'
            ? theme.palette.warning.light
            : theme.palette[color].main,
        '&.Mui-focusVisible': {
          backgroundColor:
            color === 'default'
              ? theme.palette.default.active
              : color === 'primary' || color === 'info'
              ? theme.palette.primary.main
              : color === 'success'
              ? theme.palette.success.main
              : color === 'error'
              ? '#D5251F'
              : theme.palette[color].dark,
        },
      }
    },
    outlined: ({ ownerState, theme }) => {
      const color = ownerState.color ?? 'default'

      return {
        backgroundColor: theme.palette.common.white,
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
        ...(ownerState.clickable !== undefined && {
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
        ...(variant === 'filled' &&
          color === 'secondary' && {
            '&.Mui-focusVisible': {
              borderColor: '#833405',
              color: theme.palette.getContrastText(
                theme.palette.secondary.dark,
              ),
            },
          }),
        ...(variant === 'filled' &&
          color === 'warning' && {
            '&.Mui-focusVisible': {
              borderColor: '#833405',
              color: theme.palette.getContrastText(theme.palette.warning.dark),
            },
          }),
        '&:hover': {
          '& > .MuiAvatar-root': {
            backgroundColor:
              color === 'default'
                ? theme.palette.default.light
                : color === 'primary'
                ? '#0C3D9C'
                : color === 'secondary'
                ? '#A94408'
                : color === 'warning'
                ? '#A94408'
                : color === 'error'
                ? '#850900'
                : color === 'success'
                ? '#065324'
                : '#0C3D9C', // info
          },
        },
        ...(variant === 'filled' &&
          color === 'secondary' && {
            '&.MuiChip-clickable:hover': {
              color: theme.palette.getContrastText(
                theme.palette.secondary.dark,
              ),
            },
          }),
        ...(variant === 'filled' &&
          color === 'warning' && {
            '&.MuiChip-clickable:hover': {
              color: theme.palette.getContrastText(theme.palette.warning.dark),
            },
          }),
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
            boxShadow: 'none',
            backgroundColor: theme.palette.primary.active,
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
    icon: ({ ownerState }) => ({
      marginLeft: ownerState.variant === 'rectangular' ? 4 : 10,
      marginRight: -8,
    }),
    deleteIcon: ({ ownerState, theme }) => {
      const color = ownerState.color ?? 'default'
      const variant = ownerState.variant ?? 'filled'

      return {
        marginRight: 3,
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
          color: theme.palette.default.main,
          '&:hover': {
            color: theme.palette.default.dark,
          },
        }),
      }
    },
    avatar: ({ ownerState, theme }) => {
      const color = ownerState.color ?? 'default'
      const variant = ownerState.variant ?? 'filled'

      return {
        marginLeft: 4,
        ...(color === 'default' && {
          ...(variant === 'filled' || variant === 'rectangular'
            ? {
                color: theme.palette.default.main,
                backgroundColor: theme.palette.default.light,
              }
            : {
                color: theme.palette.common.white,
                backgroundColor: theme.palette.default.main,
              }),
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
