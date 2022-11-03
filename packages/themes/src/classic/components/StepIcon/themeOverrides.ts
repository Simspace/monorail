import type { Components, Theme } from '@mui/material'
import { stepIconClasses } from '@mui/material'

export const MonorailStepIconOverrides: Components<Theme>['MuiStepIcon'] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ theme, ownerState }) => {
      const isActive = ownerState.active !== undefined && ownerState.active
      return {
        color: theme.palette.default.main,
        ...(!isActive && {
          [`& > circle`]: {
            strokeWidth: 1,
            stroke: theme.palette.default.light,
            cx: 12,
            cy: 12,
            r: 11.5,
            color: 'transparent',
          },
          [`.${stepIconClasses.text}`]: {
            fill: theme.palette.text.disabled,
          },
        }),
        [`&.${stepIconClasses.active}.${stepIconClasses.completed}`]: {
          color:
            ownerState.error === true
              ? theme.palette.error.main
              : theme.palette.primary.main,
        },
        [`&.${stepIconClasses.completed}`]: {
          color:
            theme.palette.mode === 'dark'
              ? theme.palette.default.dark
              : theme.palette.text.disabled,
        },
      }
    },
    text: ({ theme }) => ({
      fontWeight: theme.typography.fontWeightMedium,
    }),
  },
}
