import type { Components, Theme } from '@mui/material'

import { fileUploadClasses } from '@monorail/components'

export const MonorailFileUploadOverrides: Components<Theme>['MonorailFileUpload'] =
  {
    defaultProps: {
      slotProps: {
        action: {
          variant: 'outlined',
        },
      },
    },
    styleOverrides: {
      icon: ({ ownerState: { status = 'default' }, theme }) => ({
        ...(status !== 'error' && { color: theme.palette.default.light }),
      }),
      dropTarget: ({ theme }) => ({
        border: `1px solid ${theme.palette.outlinedBorder}`,
        [`.${fileUploadClasses.statusInitial} &`]: {
          border: `1px solid ${theme.palette.outlinedBorder}`,
          backgroundColor: theme.palette.background.paper,
        },
        [`.${fileUploadClasses.statusError} &`]: {
          borderColor: theme.palette.error.main,
          backgroundColor: theme.palette.background.paper,
        },
      }),
    },
  }
