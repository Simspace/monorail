/* eslint-disable @typescript-eslint/no-explicit-any */
import type { GridChildComponentProps } from 'react-window'
import type {
  DataGridPremiumProps as MuiDataGridPremiumProps,
  GridSlotsComponentsProps as MuiGridSlotsComponentsProps,
} from '@mui/x-data-grid-premium'

import type { DataGridHeaderProps } from '../components/DataGridHeader.js'
import type { GridValidRowModel } from '../internal.js'

export interface RenderCardParams<R> extends GridChildComponentProps<R> {
  row: R
}

interface GalleryProps<R extends GridValidRowModel = any> {
  itemWidth: `${number}%` | number
  itemHeight: `${number}%` | number
  renderCard: (params: RenderCardParams<R>) => JSX.Element
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

    onViewStyleChange?: (
      event: React.MouseEvent<HTMLElement>,
      newViewStyle: 'table' | 'gallery',
    ) => void

    hideToolbar?: boolean

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
    galleryProps?: GalleryProps<R>
    hideToolbar?: boolean
  }
}

export {}
