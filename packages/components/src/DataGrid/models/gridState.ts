/* eslint-disable @typescript-eslint/no-explicit-any */
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
    filterSubscriptions: Map<string, Set<(state: any) => void>>
  }
}
