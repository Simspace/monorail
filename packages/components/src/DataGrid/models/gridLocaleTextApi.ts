import { DateFilterLocaleText } from '../filters/DateFilter'
import { EnumFilterLocaleText } from '../filters/EnumFilter'
import { NumericFilterLocaleText } from '../filters/NumericFilter'
import { TextFilterLocaleText } from '../filters/TextFilter'

declare module '@mui/x-data-grid/models/api/gridLocaleTextApi' {
  interface GridLocaleText {
    TextFilter: TextFilterLocaleText
    EnumFilter: EnumFilterLocaleText
    NumericFilter: NumericFilterLocaleText
    DateFilter: DateFilterLocaleText
  }
}
