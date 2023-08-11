import type { DateFilterClasses } from '../DateFilter'
import type { TextFilterClasses } from '../TextFilter'

declare module '@mui/material/styles/overrides' {
  interface ComponentNameToClassKey {
    MonorailTextFilter: TextFilterClasses
    MonorailDateFilter: DateFilterClasses
  }
}

export {}
