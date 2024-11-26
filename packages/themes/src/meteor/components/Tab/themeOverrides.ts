import type { Components, Theme } from '@mui/material'
import { svgIconClasses, tabClasses } from '@mui/material'

export const MonorailTabOverrides: Components<Theme>['MuiTab'] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ ownerState, theme }) => ({
      padding: `14px 24px`,
      ...theme.typography.tabInactive,
      color: theme.palette.text.primary,
      [`&.${tabClasses.selected}`]: {
        ...theme.typography.tabActive,
      },
      ...(ownerState.icon !== undefined && {
        [`& .${svgIconClasses.root}`]: {
          marginTop: theme.spacing(-0.5),
          marginBottom: theme.spacing(-0.5),
        },
      }),
      [`&.${tabClasses.disabled}`]: {
        color: theme.palette.text.disabled, // ButtonBase applies action.disabledOpacity
      },
    }),
    labelIcon: ({ theme }) => ({
      padding: theme.spacing(2.85, 6),
      [`& .${svgIconClasses.root}`]: {
        marginTop: 'auto',
        marginBottom: 'auto',
      },
    }),
    textColorPrimary: ({ theme }) => ({
      '&.Mui-focusVisible': {
        boxShadow: `inset 0 0 0 2px ${theme.palette.primary.focusRing.inner}`,
      },
    }),
    textColorSecondary: ({ theme }) => ({
      '&.Mui-focusVisible': {
        boxShadow: `inset 0 0 0 2px ${theme.palette.primary.focusRing.inner}`,
      },
    }),
  },
}
