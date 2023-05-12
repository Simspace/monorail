import type { IconChipClassKey } from '../iconChipClasses.js'

declare module '@mui/material/styles/overrides' {
  interface ComponentNameToClassKey {
    MonorailIconChip: IconChipClassKey
  }
}
