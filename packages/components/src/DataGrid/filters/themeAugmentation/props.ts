import type { DateFilterProps } from '../DateFilter'
import type { EnumFilterProps } from '../EnumFilter'
import type { NumericFilterProps } from '../NumericFilter'
import type { TextFilterProps } from '../TextFilter'

declare module '@mui/material/styles/props' {
  interface ComponentsPropsList {
    MonorailEnumFilter: EnumFilterProps
    MonorailNumericFilter: NumericFilterProps
    MonorailTextFilter: TextFilterProps
    MonorailDateFilter: DateFilterProps
  }
}

export {}
