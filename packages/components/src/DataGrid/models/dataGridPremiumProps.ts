/* eslint-disable @typescript-eslint/no-explicit-any */
import type React from 'react'
import type { FixedSizeGridProps, GridChildComponentProps } from 'react-window'

import type { DataGridFooterProps } from '../components/DataGridFooter.js'
import type { DataGridHeaderProps } from '../components/DataGridHeader.js'
import type { GridRowId, GridValidRowModel } from '../internal.js'
import type { DataGridViewStyle } from './dataGridViewStyle.js'

export interface RenderCardParams<R> extends GridChildComponentProps<R> {
  row: R
  columnIndex: number
  rowIndex: number
  style: React.CSSProperties
  isScrolling?: boolean | undefined
}

interface GalleryProps<R extends GridValidRowModel = any> {
  /**
   * Props of `react-window`'s `FixedSizeGrid`
   */
  virtualScrollerProps?: Partial<FixedSizeGridProps<R>>
  itemWidth: `${number}%` | number
  itemHeight: `${number}%` | number
  renderCard: (params: RenderCardParams<R>) => React.ReactElement | null
}

declare module '@mui/x-data-grid/models/gridSlotsComponentsProps' {
  interface FooterPropsOverrides
    extends Partial<DataGridFooterProps>,
      Record<string, unknown> {}
  interface ToolbarPropsOverrides
    extends Partial<DataGridHeaderProps>,
      Record<string, unknown> {}
}

declare module '@mui/x-data-grid-pro/models/gridGroupingColDefOverride' {
  interface GridGroupingColDefOverride {
    fullWidth?: boolean
  }
}

declare module '@mui/x-data-grid-premium/models/dataGridPremiumProps' {
  interface DataGridPremiumProps<R extends GridValidRowModel = any> {
    /**
     * Display rows with alternating background colors?
     *
     * @default false
     */
    stripedRows?: boolean
    /**
     * The style in which data will be displayed, can be either 'table' or 'gallery'.
     * @note 'gallery' view requires 'galleryProps' to be defined
     *
     * @default "table"
     */
    viewStyle?: DataGridViewStyle
    /**
     * A callback that will be called when the view style is changed using the toolbar buttons
     *
     * @default undefined
     */
    onViewStyleChange?: (newViewStyle: 'table' | 'gallery') => void
    /**
     * Should the toolbar be hidden?
     *
     * @default false
     */
    hideToolbar?: boolean
    /**
     * Props used to define the visual presentation of the gallery view.
     *
     * @default undefined
     */
    galleryProps?: GalleryProps<R>
    /**
     * Should custom row reordering be enabled?
     *
     * @default false
     */
    customRowReordering?: boolean | 'sorted'
    /**
     * Should a row reorder be allowed to take place?
     *
     * @default undefined
     */
    isRowReorderable?: (source: GridRowId, target: GridRowId) => boolean
    /**
     * Should the row be updated when reparented through reordering?
     *
     * @default false
     */
    updateRowWhenReparented?: boolean
    /**
     * @default column
     */
    filter?: 'column' | 'operator'
  }

  interface DataGridPremiumPropsWithDefaultValue<
    R extends GridValidRowModel = any,
  > {
    /**
     * Display rows with alternating background colors?
     *
     * @default false
     */
    stripedRows?: boolean
    /**
     * The style in which data will be displayed, can be either 'table' or 'gallery'.
     * @note 'gallery' view requires 'galleryProps' to be defined
     *
     * @default "table"
     */
    viewStyle?: DataGridViewStyle
    /**
     * A callback that will be called when the view style is changed using the toolbar buttons
     *
     * @default undefined
     */
    onViewStyleChange?: (newViewStyle: 'table' | 'gallery') => void
    /**
     * Should the toolbar be hidden?
     *
     * @default false
     */
    hideToolbar?: boolean
    /**
     * Props used to define the visual presentation of the gallery view.
     *
     * @default undefined
     */
    galleryProps?: GalleryProps<R>
    /**
     * Should custom row reordering be enabled?
     *
     * @default false
     */
    customRowReordering?: boolean | 'sorted'
    /**
     * Should a row reorder be allowed to take place?
     *
     * @default undefined
     */
    isRowReorderable?: (source: GridRowId, target: GridRowId) => boolean
    /**
     * Should the row be updated when reparented through reordering?
     *
     * @default false
     */
    updateRowWhenReparented?: boolean
    /**
     * @default column
     */
    filter: 'column' | 'operator'
  }
}

export {}
