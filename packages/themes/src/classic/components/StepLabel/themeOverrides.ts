import type { Components, Theme } from '@mui/material'
import { stepIconClasses, stepLabelClasses } from '@mui/material'

export const MonorailStepLabelOverrides: Components<Theme>['MuiStepLabel'] = {
  styleOverrides: {
    root: ({ theme }) => {
      return {
        [`&.${stepLabelClasses.completed}`]: {
          color: theme.palette.text.secondary,
        },
        [`&.${stepLabelClasses.alternativeLabel}`]: {
          textAlign: 'center',
        },
        [`&.${stepLabelClasses.vertical}`]: {
          padding: theme.spacing(4, 0),
        },
        [`&.${stepLabelClasses.disabled} > * > .${stepIconClasses.root}`]: {
          opacity: theme.palette.action.disabledOpacity,
        },
      }
    },
    active: ({ theme }) => {
      return {
        color: theme.palette.text.primary,
      }
    },
    label: ({ theme }) => {
      return {
        [`&.${stepLabelClasses.completed}`]: {
          color: theme.palette.text.secondary,
        },
        [`&.${stepLabelClasses.disabled}`]: {
          color: theme.palette.text.disabled,
        },
      }
    },
    labelContainer: ({ theme }) => {
      return {
        [`&.${stepLabelClasses.active}`]: {
          color: theme.palette.text.primary,
        },
        fontSize: theme.typography.caption.fontSize,
        fontWeight: theme.typography.fontWeightRegular,
      }
    },
  },
}
