import type { GridRowId, GridRowParams } from '@mui/x-data-grid'

export interface GridRowParentChangeParams {
  rowParams: GridRowParams
  oldParent: GridRowId
  newParent: GridRowId
}

declare module '@mui/x-data-grid/models/events/gridEventLookup' {
  export interface GridRowEventLookup {
    rowParentChange: {
      params: GridRowParentChangeParams
    }
  }
}
