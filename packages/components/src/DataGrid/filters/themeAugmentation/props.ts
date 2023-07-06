import type { DateFilterProps } from '../DateFilter'
import type { TextFilterProps } from '../TextFilter'

declare module '@mui/material/styles/props' {
  interface ComponentsPropsList {
    MonorailTextFilter: TextFilterProps
    MonorailDateFilter: DateFilterProps
  }
}

export {}
