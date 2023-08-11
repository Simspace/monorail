import type { Components } from '@mui/material'

import type { Theme } from '@monorail/components'

export const MonorailSelectionFooterOverrides: Components<Theme>['MonorailSelectionFooter'] =
  {
    styleOverrides: {
      root: ({ theme }) => ({
        backgroundColor: theme.palette.background.default,
      }),
    },
  }
