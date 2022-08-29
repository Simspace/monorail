import type { MenuItemProps } from '../../MenuItem.js'
import type { GridValidRowModel } from '../internal.js'
import type { GridColFilterDef } from './gridColFilterType.js'
import type { HeaderActionParams } from './headerActionParams.js'

declare module '@mui/x-data-grid/models/colDef/gridColDef' {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
  interface GridColDef<R extends GridValidRowModel = any, V = any, F = V> {
    /** @internal */
    originalColDef?: GridEnrichedColDef<R, V, F>
    /**
     * A function that produces an array of `MenuItem`s, which will populate the actions menu
     * of this column
     *
     * @default undefined
     */
    headerActions?: (
      params: HeaderActionParams,
    ) => ReadonlyArray<React.ReactElement<MenuItemProps>>
    /**
     * The column filter definition
     *
     * @default undefined
     */
    filter?: GridColFilterDef<R, V, F>
  }
}

export {}
