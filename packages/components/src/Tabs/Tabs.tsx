import { Tabs as MuiTabs } from '@mui/material'

declare module '@mui/material/Tabs' {
  interface TabsPropsIndicatorColorOverrides {
    secondary: false
  }
}

/**
 *
 * Demos:
 *
 * - [Tabs](https://simspace.github.io/monorail/main/storybook/?path=/docs/navigation-tabs--default)
 * - [Tabs (MUI)](https://mui.com/material-ui/react-tabs/)
 *
 * API:
 *
 * - [Tabs API](https://mui.com/material-ui/api/tabs/)
 */
export const Tabs: typeof MuiTabs = MuiTabs

export * from '@mui/material/Tabs'
