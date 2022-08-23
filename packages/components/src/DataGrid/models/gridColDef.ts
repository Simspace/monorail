import { MenuItemProps } from '../../MenuItem.js'
import { GridValidRowModel } from '../internal.js'
import { GridColFilterDef } from './gridColFilterType.js'
import { HeaderActionParams } from './headerActionParams.js'

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
