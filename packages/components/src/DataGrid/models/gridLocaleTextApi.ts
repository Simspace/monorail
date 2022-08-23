import { DateFilterLocaleText } from '../filters/DateFilter.js'
import { EnumFilterLocaleText } from '../filters/EnumFilter.js'
import { NumericFilterLocaleText } from '../filters/NumericFilter.js'
import { TextFilterLocaleText } from '../filters/TextFilter.js'

declare module '@mui/x-data-grid/models/api/gridLocaleTextApi' {
  interface GridLocaleText {
    TextFilter: TextFilterLocaleText
    EnumFilter: EnumFilterLocaleText
    NumericFilter: NumericFilterLocaleText
    DateFilter: DateFilterLocaleText
  }
}
