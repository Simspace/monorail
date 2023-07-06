import type { EnumFilterLocaleText } from '@monorail/components/EnumFilter'
import type { NumericFilterLocaleText } from '@monorail/components/NumericFilter'

import type { DateFilterLocaleText } from '../filters/DateFilter.js'
import type { TextFilterLocaleText } from '../filters/TextFilter.js'

declare module '@mui/x-data-grid/models/api/gridLocaleTextApi' {
  interface GridLocaleText {
    TextFilter: TextFilterLocaleText
    EnumFilter: EnumFilterLocaleText
    NumericFilter: NumericFilterLocaleText
    DateFilter: DateFilterLocaleText
  }
}
