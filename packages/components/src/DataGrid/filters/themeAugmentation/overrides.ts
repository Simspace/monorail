import type { DateFilterClasses } from '../DateFilter'
import type { EnumFilterClasses } from '../EnumFilter'
import type { NumericFilterClasses } from '../NumericFilter'
import type { TextFilterClasses } from '../TextFilter'

declare module '@mui/material/styles/overrides' {
  interface ComponentNameToClassKey {
    MonorailEnumFilter: EnumFilterClasses
    MonorailNumericFilter: NumericFilterClasses
    MonorailTextFilter: TextFilterClasses
    MonorailDateFilter: DateFilterClasses
  }
}

export {}
