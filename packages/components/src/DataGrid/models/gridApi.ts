import type {
  DataGridViewStyle,
  GridRowId,
} from '@monorail/components/DataGrid'

declare module '@mui/x-data-grid-premium/models/gridApiPremium' {
  interface GridApiPremium {
    setViewStyle: (viewStyle: DataGridViewStyle, external?: boolean) => void
    setGlobalSearchValue: (value: string) => void
    /**
     * Returns the scroll height of the virtual scroller. If the grid is not initialized,
     * null will be returned
     */
    getScrollHeight: () => number | null
  }
}

declare module '@mui/x-data-grid/models/api/gridRowApi' {
  interface GridRowProApi {
    setRowIndexWithNewParent: (
      rowId: GridRowId,
      targetIndex: number,
      newParent?: GridRowId,
    ) => void
  }
}
