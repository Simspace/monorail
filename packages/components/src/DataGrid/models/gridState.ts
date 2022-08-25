/* eslint-disable @typescript-eslint/no-explicit-any */
import { DateFilterState } from '../filters/DateFilter.js'
import { EnumFilterState } from '../filters/EnumFilter.js'
import { NumericFilterState } from '../filters/NumericFilter.js'
import { TextFilterState } from '../filters/TextFilter.js'

declare module '@mui/x-data-grid-premium/models/gridStatePremium' {
  interface GridStatePremium {
    enumFilter: Map<string, EnumFilterState>
    dateFilter: Map<string, DateFilterState<Date>>
    numericFilter: Map<string, NumericFilterState>
    textFilter: Map<string, TextFilterState>
    filterSubscriptions: Map<string, Set<(state: any) => void>>
  }
}
