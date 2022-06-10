import { Components, svgIconClasses, Theme } from '@mui/material'

import { isNotNil } from '../../test-helpers/typeGuards'

export const MonorailTabOverrides: Components<Theme>['MuiTab'] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ ownerState }) => ({
      padding: `14px 24px`,
      ...(isNotNil(ownerState.icon) && {
        [`& .${svgIconClasses.root}`]: {
          marginTop: -2,
          marginBottom: -2,
        },
      }),
    }),
    labelIcon: {
      padding: `11px 24px`,
      [`& .${svgIconClasses.root}`]: {
        marginTop: 'auto',
        marginBottom: 'auto',
      },
    },
    textColorPrimary: ({ theme }) => ({
      '&.Mui-focusVisible': {
        boxShadow: `inset 0 0 0 1px ${theme.palette.primary.focusRing.inner}, 0 0 0 3px ${theme.palette.primary.focusRing.outer}`,
      },
    }),
    textColorSecondary: ({ theme }) => ({
      '&.Mui-focusVisible': {
        boxShadow: `inset 0 0 0 1px ${theme.palette.secondary.focusRing.inner}, 0 0 0 3px ${theme.palette.secondary.focusRing.outer}`,
      },
    }),
  },
}
