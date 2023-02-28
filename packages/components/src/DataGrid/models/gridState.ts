/* eslint-disable @typescript-eslint/no-explicit-any */
import type { DateFilterState } from '../filters/DateFilter.js'
import type { EnumFilterState } from '../filters/EnumFilter.js'
import type { NumericFilterState } from '../filters/NumericFilter.js'
import type { TextFilterState } from '../filters/TextFilter.js'

declare module '@mui/x-data-grid-premium/models/gridStatePremium' {
  interface GridStatePremium {
    enumFilter: Map<string, EnumFilterState>
    dateFilter: Map<string, DateFilterState<Date>>
    numericFilter: Map<string, NumericFilterState>
    textFilter: Map<string, TextFilterState>
    filterSubscriptions: Map<string, Set<(state: any) => void>>
    viewStyle: 'table' | 'gallery'
    toolbarSearchValue: string
  }
}
