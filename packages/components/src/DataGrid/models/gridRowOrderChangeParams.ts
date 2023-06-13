import type { GridRowId } from '@mui/x-data-grid'

declare module '@mui/x-data-grid-pro/models/gridRowOrderChangeParams' {
  export interface GridRowOrderChangeParams {
    rowId: GridRowId
    targetRowId: GridRowId
    oldParent?: GridRowId | null
    newParent?: GridRowId | null
  }
}
