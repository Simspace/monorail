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
    /**
     * Fired when the user starts dragging a row. It's mapped to the `dragstart` DOM event.
     * @ignore - do not document.
     */
    monorailRowDragStart: {
      params: GridRowParams
      event: React.DragEvent<HTMLElement>
    }
    /**
     * Fired while an element or text selection is dragged over the row.
     * It's mapped to the `dragover` DOM event.
     * @ignore - do not document.
     */
    monorailRowDragOver: {
      params: GridRowParams
      event: React.DragEvent<HTMLElement>
    }
    /**
     * Fired when the dragging of a row ends.
     * @ignore - do not document.
     */
    monorailRowDragEnd: {
      params: GridRowParams
      event: React.DragEvent<HTMLElement>
    }
  }
}
