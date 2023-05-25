import type {
  DataGridViewStyle,
  GridRowId,
} from '@monorail/components/DataGrid'

declare module '@mui/x-data-grid-premium/models/gridApiPremium' {
  interface GridApiPremium {
    setViewStyle: (viewStyle: DataGridViewStyle, external?: boolean) => void
    setGlobalSearchValue: (value: string) => void
    windowRef: React.RefObject<HTMLDivElement>
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
