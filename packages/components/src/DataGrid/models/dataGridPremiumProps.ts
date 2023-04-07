/* eslint-disable @typescript-eslint/no-explicit-any */
import type { VirtuosoGridProps } from 'react-virtuoso'

import type { DataGridFooterProps } from '../components/DataGridFooter.js'
import type { DataGridHeaderProps } from '../components/DataGridHeader.js'
import type { GridValidRowModel } from '../internal.js'
import type { DataGridViewStyle } from './dataGridViewStyle.js'

interface GalleryProps<R extends GridValidRowModel = any>
  extends VirtuosoGridProps<R> {
  itemWidth: string
}

declare module '@mui/x-data-grid/models/gridSlotsComponentsProps' {
  interface FooterPropsOverrides
    extends Partial<DataGridFooterProps>,
      Record<string, unknown> {}
  interface ToolbarPropsOverrides
    extends Partial<DataGridHeaderProps>,
      Record<string, unknown> {}
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
