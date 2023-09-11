import type { Components, Theme } from '@mui/material'

export const MonorailLinkOverrides: Components<Theme>['MuiLink'] = {
  defaultProps: {
    color: 'text.link',
  },
}
