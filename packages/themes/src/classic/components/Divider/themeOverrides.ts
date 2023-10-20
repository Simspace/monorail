import { type Components, dividerClasses, type Theme } from '@mui/material'

export const MonorailDividerOverrides: Components<Theme>['MuiDivider'] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ theme }) => ({
      [`&:not(.${dividerClasses.vertical})`]: {
        // Explicity set top and bottom margins to avoid
        // overriding the left and right margins set by variant="middle"
        '&.MonorailDivider-spacingXs': {
          marginTop: theme.spacing(1),
          marginBottom: theme.spacing(1),
        },
        '&.MonorailDivider-spacingSm': {
          marginTop: theme.spacing(2),
          marginBottom: theme.spacing(2),
        },
        '&.MonorailDivider-spacingMd': {
          marginTop: theme.spacing(3),
          marginBottom: theme.spacing(3),
        },
        '&.MonorailDivider-spacingLg': {
          marginTop: theme.spacing(4),
          marginBottom: theme.spacing(4),
        },
        '&.MonorailDivider-spacingXl': {
          marginTop: theme.spacing(6),
          marginBottom: theme.spacing(6),
        },
      },
      [`&.${dividerClasses.vertical}, &.${dividerClasses.withChildrenVertical}`]:
        // Explicity set left and right margins to avoid
        // overriding the top and bottom margins set by variant="middle"
        {
          '&.MonorailDivider-spacingXs': {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
          },
          '&.MonorailDivider-spacingSm': {
            marginLeft: theme.spacing(2),
            marginRight: theme.spacing(2),
          },
          '&.MonorailDivider-spacingMd': {
            marginLeft: theme.spacing(3),
            marginRight: theme.spacing(3),
          },
          '&.MonorailDivider-spacingLg': {
            marginLeft: theme.spacing(4),
            marginRight: theme.spacing(4),
          },
          '&.MonorailDivider-spacingXl': {
            marginLeft: theme.spacing(6),
            marginRight: theme.spacing(6),
          },
        },
    }),
  },
}
