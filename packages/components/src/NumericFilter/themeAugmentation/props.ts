import type { EnumFilterProps } from '@monorail/components/EnumFilter/models'

declare module '@mui/material/styles/props' {
  interface ComponentsPropsList {
    MonorailEnumFilter: EnumFilterProps
  }
}

export {}
