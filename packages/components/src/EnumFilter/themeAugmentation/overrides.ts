import type { EnumFilterClasses } from '../constants.js'

declare module '@mui/material/styles/overrides' {
  interface ComponentNameToClassKey {
    MonorailEnumFilter: EnumFilterClasses
  }
}

export {}
