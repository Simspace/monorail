import { Components, Theme } from '@mui/material'

import { isNotNil } from '../../test-helpers/typeGuards'

export const MonorailTabsOverrides: Components<Theme>['MuiTabs'] = {
  defaultProps: {},
  styleOverrides: {
    indicator: ({ ownerState: { vertical = false } }) => ({
      height: 3,
      borderRadius: `3px 3px 0 0`,
      ...(isNotNil(vertical) && {
        borderRadius: `3px 0 0 3px`,
      }),
    }),
  },
}
