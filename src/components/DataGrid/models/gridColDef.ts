import { MenuItemProps } from '../../MenuItem'
import { GridValidRowModel } from '../internal'
import { GridColFilterDef } from './gridColFilterType'
import { HeaderActionParams } from './headerActionParams'

declare module '@mui/x-data-grid/models/colDef/gridColDef' {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
  interface GridColDef<R extends GridValidRowModel = any, V = any, F = V> {
    /** @internal */
    originalColDef?: GridEnrichedColDef<R, V, F>
    headerActions?: (
      params: HeaderActionParams,
    ) => ReadonlyArray<React.ReactElement<MenuItemProps>>
    filter?: GridColFilterDef<R, V, F>
  }
}

export {}
