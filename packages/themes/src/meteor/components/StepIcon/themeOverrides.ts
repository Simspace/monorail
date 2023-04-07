import type { Components, Theme } from '@mui/material'
import { stepIconClasses, stepLabelClasses } from '@mui/material'

export const MonorailStepIconOverrides: Components<Theme>['MuiStepIcon'] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ theme, ownerState }) => {
      const isActive = ownerState.active !== undefined && ownerState.active
      return {
        color: theme.palette.default.main,
        ...(!isActive && {
          '& > circle': {
            strokeWidth: 1,
            stroke: theme.palette.default.border.main,
            cx: 12,
            cy: 12,
            r: 11.5,
            color: 'transparent',
          },
          [`.${stepIconClasses.text}`]: {
            fill: theme.palette.text.secondary,
          },
        }),
        [`&.${stepIconClasses.active}.${stepIconClasses.completed}`]: {
          color:
            ownerState.error === true
              ? theme.palette.error.main
              : theme.palette.primary.main,
        },
        [`.${stepLabelClasses.disabled} > &`]: {
          color: theme.palette.text.disabled,
          [`.${stepIconClasses.text}`]: {
            fill: theme.palette.text.disabled,
          },
          '& > circle': {
            strokeWidth: 0,
            color: theme.palette.default.lowEmphasis.light,
          },
        },
      }
    },
    text: ({ theme }) => ({
      fontWeight: theme.typography.fontWeightMedium,
    }),
  },
}
