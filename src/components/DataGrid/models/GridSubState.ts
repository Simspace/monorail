import { DateFilterState } from '../filters/DateFilter'
import { EnumFilterState } from '../filters/EnumFilter'
import { NumericFilterState } from '../filters/NumericFilter'
import { TextFilterState } from '../filters/TextFilter'

declare module '@mui/x-data-grid-premium/models/gridStatePremium' {
  interface GridStatePremium {
    enumFilter: Map<string, EnumFilterState>
    dateFilter: Map<string, DateFilterState>
    numericFilter: Map<string, NumericFilterState>
    textFilter: Map<string, TextFilterState>
  }
}
