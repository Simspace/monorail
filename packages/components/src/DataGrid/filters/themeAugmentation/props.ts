import type { DateFilterProps } from '../DateFilter'
import type { NumericFilterProps } from '../NumericFilter'
import type { TextFilterProps } from '../TextFilter'

declare module '@mui/material/styles/props' {
  interface ComponentsPropsList {
    MonorailNumericFilter: NumericFilterProps
    MonorailTextFilter: TextFilterProps
    MonorailDateFilter: DateFilterProps
  }
}

export {}
