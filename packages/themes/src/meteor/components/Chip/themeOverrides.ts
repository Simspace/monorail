import type { Components, CSSInterpolation, Theme } from '@mui/material'
import { chipClasses, darken } from '@mui/material'

export const MonorailChipOverrides: Components<Theme>['MuiChip'] = {
  defaultProps: {
    variant: 'filled',
  },
  styleOverrides: {
    root: ({ ownerState: { color = 'default' }, theme }) => {
      const baseDraggableStyles: CSSInterpolation = {
        '&.react-draggable': {
          cursor: 'grab',
          '&:hover': {
            color:
              color === 'warning'
                ? theme.palette.warning.contrastText
                : theme.palette[color].dark,
            backgroundColor: theme.palette[color].lowEmphasis.main,
          },
        },
        '&.react-draggable-dragging': {
          cursor: 'grabbing',
          boxShadow: theme.shadows[4],
        },
      }

      return {
        backgroundColor: theme.palette[color].lowEmphasis.light,
        color: theme.palette[color].lowEmphasis.contrastText,
        border: '1px solid transparent',
        [`&.${chipClasses.focusVisible}`]: {
          backgroundColor: theme.palette[color].lowEmphasis.light,
        },
        [`&.${chipClasses.focusVisible}:not(.Mui-disabled)`]: {
          boxShadow: `0 0 0 3px ${theme.palette[color].focusRing.outer}`,
          border: `1px solid ${theme.palette[color].focusRing.inner}`,
        },
        ...baseDraggableStyles,
      }
    },
    label: ({ theme }) => ({
      ...theme.typography.chip,
    }),
    filled: ({ ownerState: { color = 'default' }, theme }) => ({
      backgroundColor: theme.palette[color].lowEmphasis.main,
      color: theme.palette[color].lowEmphasis.contrastText,
      [`&.${chipClasses.focusVisible}`]: {
        backgroundColor: theme.palette[color].lowEmphasis.main,
      },
    }),
    outlined: ({ ownerState: { color = 'default' }, theme }) => {
      return {
        [`&.${chipClasses.clickable}`]: {
          '&:hover': {
            color: theme.palette[color].lowEmphasis.contrastText,
            backgroundColor: theme.palette[color].lowEmphasis.main,
          },
          '&:active': {
            boxShadow: 'none',
            backgroundColor: theme.palette[color].lowEmphasis.dark,
          },
        },
      }
    },
    clickable: ({ ownerState: { color = 'default' }, theme }) => {
      return {
        '&:hover': {
          color: theme.palette[color].lowEmphasis.contrastText,
          background: `linear-gradient(0deg, ${theme.palette.action.hover} 0%, ${theme.palette.action.hover} 100%), ${theme.palette[color].lowEmphasis.main}`,
        },
        '&:active': {
          boxShadow: 'none',
          background: `linear-gradient(0deg, ${theme.palette.action.active} 0%, ${theme.palette.action.active} 100%), ${theme.palette[color].lowEmphasis.main}`,
        },
      }
    },
    icon: ({ ownerState: { size = 'medium', color = 'default' }, theme }) => {
      return {
        color: theme.palette[color].lowEmphasis.contrastText,
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(-1.5),
        ...(size === 'small' && {
          marginRight: theme.spacing(-1),
          fontSize: theme.typography.pxToRem(16),
        }),
      }
    },
    deleteIcon: ({ theme, ownerState: { color = 'default' } }) => ({
      marginRight: theme.spacing(1),
      color: theme.palette[color].lowEmphasis.contrastText,
      '&:hover': {
        // We don't have hover token for lowEmphasis.contrastText
        // darken() is used to approximate the hover state
        color: darken(theme.palette[color].lowEmphasis.contrastText, 0.2),
      },
    }),
    avatar: ({ ownerState: { color = 'default', size = 'medium' }, theme }) => {
      const filledVariantStyles: CSSInterpolation = {
        color: theme.palette[color].contrastText,
        backgroundColor: theme.palette[color].main,
      }

      const sizeSmallStyles: CSSInterpolation = {
        width: theme.spacing(4),
        height: theme.spacing(4),
      }

      return {
        marginLeft: 4,
        ...theme.typography.avatarInitials,
        ...filledVariantStyles,
        ...(size === 'small' && sizeSmallStyles),
      }
    },
  },
}
