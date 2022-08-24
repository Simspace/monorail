import { Components, stepIconClasses, Theme } from '@mui/material'

export const MonorailStepIconOverrides: Components<Theme>['MuiStepIcon'] = {
  styleOverrides: {
    root: ({ theme, ownerState }) => {
      return {
        color: theme.palette.default.main,
        [`&.${stepIconClasses.active}.${stepIconClasses.completed}`]: {
          color:
            ownerState.error === true
              ? theme.palette.error.main
              : theme.palette.primary.main,
        },
        [`&.${stepIconClasses.completed}`]: {
          color: theme.palette.default.main,
        },
      }
    },
  },
}
