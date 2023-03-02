/* eslint-disable @typescript-eslint/no-explicit-any */
import type React from 'react'
import type { GridChildComponentProps } from 'react-window'
import type {
  DataGridPremiumProps as MuiDataGridPremiumProps,
  GridSlotsComponentsProps as MuiGridSlotsComponentsProps,
} from '@mui/x-data-grid-premium'

import type { DataGridHeaderProps } from '../components/DataGridHeader.js'
import type { GridValidRowModel } from '../internal.js'
import type { DataGridViewStyle } from './dataGridViewStyle.js'

export interface RenderCardParams<R> extends GridChildComponentProps<R> {
  row: R
  columnIndex: number
  rowIndex: number
  style: React.CSSProperties
  isScrolling?: boolean | undefined
}

interface GalleryProps<R extends GridValidRowModel = any> {
  itemWidth: `${number}%` | number
  itemHeight: `${number}%` | number
  renderCard: (params: RenderCardParams<R>) => React.ReactElement | null
}

export interface GridSlotsComponentsProps
  extends Omit<MuiGridSlotsComponentsProps, 'header'> {
  header?: Partial<DataGridHeaderProps>
}

export interface DataGridPremiumProps<R extends GridValidRowModel = any>
  extends Omit<MuiDataGridPremiumProps<R>, 'componentsProps'> {
  componentsProps?: GridSlotsComponentsProps
}

export type { DataGridPremiumProps as DataGridProps }

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
  }
}

export {}
