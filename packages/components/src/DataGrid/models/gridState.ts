/* eslint-disable @typescript-eslint/no-explicit-any */
import type { DateFilterState } from '../filters/DateFilter.js'
import type { EnumFilterState } from '../filters/GridEnumFilter.js'
import type { NumericFilterState } from '../filters/GridNumericFilter.js'
import type { TextFilterState } from '../filters/TextFilter.js'

declare module '@mui/x-data-grid-premium/models/gridStatePremium' {
  interface GridStatePremium {
    enumFilter: Map<string, EnumFilterState>
    dateFilter: Map<string, DateFilterState<Date>>
    numericFilter: Map<string, NumericFilterState>
    textFilter: Map<string, TextFilterState>
    customFilter: Map<string, unknown>
    filterSubscriptions: Map<string, Set<(state: any) => void>>
    viewStyle: 'table' | 'gallery'
    globalSearch: {
      value: string
      forceUpdate: () => void
    }
  }
}
