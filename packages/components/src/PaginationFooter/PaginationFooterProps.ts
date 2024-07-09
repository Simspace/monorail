import type { SxProps } from '@mui/system'

import type {
  PaginationProps,
  SelectChangeEvent,
  Theme,
} from '@monorail/components'
import type { StandardElementProps } from '@monorail/types'

import type { PaginationFooterClassKey } from './PaginationFooterClasses'
import type { PaginationFooterLocaleText } from './PaginationFooterLocaleText'

export interface PaginationFooterProps extends StandardElementProps<'div'> {
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Record<PaginationFooterClassKey, string>

  /**
   * If `true`, the component is disabled.
   */
  disabled?: boolean

  localeText?: PaginationFooterLocaleText

  /**
   * The total number of items on all pages
   */
  totalItems: number

  /**
   * The number of items on the current page
   */
  pageItems: number

  /**
   * The page number
   */
  page?: number

  /**
   * The number of selected items
   */
  selectedCount?: number

  /**
   * Callback fired when the page is changed
   */
  onPageChange: (event: React.ChangeEvent<unknown>, page: number) => void

  /**
   * The current maximum size of a page
   */
  pageSize?: number

  /**
   * The default maximum size of a page
   */
  defaultPageSize?: number

  /**
   * An array of maximum page size options
   */
  pageSizeOptions?: Readonly<Array<number | { label: string; value: number }>>

  /**
   * Callback fired when the maximum page size option is changed
   */
  onPageSizeChange?: (event: SelectChangeEvent<number>) => void

  slotProps?: {
    pagination?: Omit<Partial<PaginationProps>, 'onChange'>
  }

  slots?: {
    pagination?: React.ComponentType<PaginationProps>
  }

  sx?: SxProps<Theme>
}
