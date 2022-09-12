import { Badge as MuiBadge } from '@mui/material'

declare module '@mui/material/Badge' {
  interface BadgePropsColorOverrides {
    secondary: false
  }
}

/**
 *
 * Demos:
 *
 * - [Badge](https://simspace.gitlab.io/engineering/ux-engineering/monorail/main/storybook/?path=/docs/data-display-badge--default)
 * - [Avatars (MUI)](https://mui.com/material-ui/react-avatar/)
 * - [Badges (MUI)](https://mui.com/material-ui/react-badge/)
 *
 * API:
 *
 * - [Badge API](https://mui.com/material-ui/api/badge/)
 * - inherits [BadgeUnstyled API](https://mui.com/base/api/badge-unstyled/)
 */
export const Badge: typeof MuiBadge = MuiBadge

export * from '@mui/material/Badge'
