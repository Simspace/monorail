import {
  Components,
  stepIconClasses,
  stepLabelClasses,
  Theme,
} from '@mui/material'

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
          color: theme.palette.default.disabled.background,
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
