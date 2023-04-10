import { Icon as MuiIcon } from '@mui/material'

declare module '@mui/material/Icon' {
  /**
   * Extend the Icon color prop to apply a default grey color.
   */
  interface IconPropsColorOverrides {
    default: true
  }
}

/**
 *
 * Demos:
 *
 * - [Icon](https://simspace.github.io/monorail/main/storybook/?path=/docs/data-display-icon--default)
 * - [Icons (MUI)](https://mui.com/material-ui/icons/)
 * - [Material icons (MUI)](https://mui.com/material-ui/material-icons/)
 *
 * API:
 *
 * - [Icon API](https://mui.com/material-ui/api/icon/)
 */
export const Icon: typeof MuiIcon = MuiIcon

export * from '@mui/material/Icon'
