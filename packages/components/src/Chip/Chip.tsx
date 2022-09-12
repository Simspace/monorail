import { Chip as MuiChip } from '@mui/material'

declare module '@mui/material/Chip' {
  /**
   * Extend the Chip variant prop to add `rectangular` variant.
   */
  interface ChipPropsVariantOverrides {
    rectangular: true
  }

  interface ChipPropsColorOverrides {
    secondary: false
  }
}

/**
 * Chips represent complex entities in small blocks, such as a contact.
 *
 * Demos:
 *
 * - [Chip](https://simspace.gitlab.io/engineering/ux-engineering/monorail/main/storybook/?path=/docs/data-display-chip--default)
 * - [Chips (MUI)](https://mui.com/material-ui/react-chip/)
 *
 * API:
 *
 * - [Chip API](https://mui.com/material-ui/api/chip/)
 */
export const Chip: typeof MuiChip = MuiChip

export * from '@mui/material/Chip'
