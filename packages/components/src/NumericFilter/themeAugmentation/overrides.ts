import type { EnumFilterClasses } from '@monorail/components/EnumFilter/constants'

declare module '@mui/material/styles/overrides' {
  interface ComponentNameToClassKey {
    MonorailEnumFilter: EnumFilterClasses
  }
}

export {}
