/* eslint-disable @typescript-eslint/no-explicit-any */
import type { GridChildComponentProps } from 'react-window'

import type { GridValidRowModel } from '../internal.js'

export interface RenderCardParams<R> extends GridChildComponentProps<R> {
  row: R
}

interface GalleryProps<R extends GridValidRowModel = any> {
  itemWidth: `${number}%` | number
  itemHeight: `${number}%` | number
  renderCard: (params: RenderCardParams<R>) => JSX.Element
}

declare module '@mui/x-data-grid-premium/models/dataGridPremiumProps' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
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

    toolbar?: boolean

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
    toolbar?: boolean
  }
}

export {}
