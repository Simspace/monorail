import type { EnumFilterProps } from '../models.js'

declare module '@mui/material/styles/props' {
  interface ComponentsPropsList {
    MonorailEnumFilter: EnumFilterProps
  }
}

export {}
