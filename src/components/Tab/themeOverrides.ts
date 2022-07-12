import { Components, svgIconClasses, Theme } from '@mui/material'

import { isNotNil } from '../../test-helpers/typeGuards'

export const MonorailTabOverrides: Components<Theme>['MuiTab'] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ ownerState, theme }) => ({
      padding: `14px 24px`,
      ...(isNotNil(ownerState.icon) && {
        [`& .${svgIconClasses.root}`]: {
          marginTop: theme.spacing(-0.5),
          marginBottom: theme.spacing(-0.5),
        },
      }),
    }),
    labelIcon: ({ theme }) => ({
      padding: theme.spacing(2.85, 6), // 11px 24px
      [`& .${svgIconClasses.root}`]: {
        marginTop: 'auto',
        marginBottom: 'auto',
      },
    }),
    textColorPrimary: ({ theme }) => ({
      '&.Mui-focusVisible': {
        boxShadow: `inset 0 0 0 3px ${theme.palette.primary.focusRing.outer}`,
      },
    }),
    textColorSecondary: ({ theme }) => ({
      '&.Mui-focusVisible': {
        boxShadow: `inset 0 0 0 3px ${theme.palette.secondary.focusRing.outer}`,
      },
    }),
  },
}
