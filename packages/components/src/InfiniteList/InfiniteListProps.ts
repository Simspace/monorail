import type {
  FixedSizeListProps,
  ListChildComponentProps,
  VariableSizeListProps,
} from 'react-window'

import type { ListProps } from '../List.js'
import type { ListItemProps } from '../ListItem.js'

export interface InfiniteListItemProps<T = unknown>
  extends ListChildComponentProps<T>,
    Omit<ListItemProps, 'style'> {}

export type InfiniteListProps<
  T = unknown,
  C extends
    | React.ComponentType<FixedSizeListProps<T>>
    | React.ComponentType<VariableSizeListProps<T>> = React.ComponentType<
    FixedSizeListProps<T>
  >,
> = Omit<
  C extends React.ComponentType<infer P> ? P : {},
  'itemData' | 'children' | 'itemCount'
> & {
  ref?: React.RefObject<C & { reset: (autoReload?: boolean) => void }>
  /**
   * The virtualized list component to use
   * @default FixedSizeList
   */
  component: C
  /**
   * Row data
   */
  data: ReadonlyArray<T>
  /**
   * Determines whether the item at the given index is loaded
   */
  isItemLoaded: (index: number) => boolean
  /**
   * A function used to render a single row
   */
  renderItem: (props: InfiniteListItemProps<T>) => React.ReactElement
  /**
   * Callback to be invoked when the next page must be loaded.
   * It should return a Promise that is resolved once all data has finished loading.
   */
  loadNextPage: () => Promise<void> | void
  /**
   * The number of rows per page
   */
  pageSize: number
  /**
   * Threshold at which to pre-fetch data.
   * A threshold of 5 means that data will start loading when a user scrolls within 5 rows.
   * @default 5
   */
  threshold?: number
  slots?: {
    loader?: React.ComponentType<InfiniteListItemProps>
    list?: React.ComponentType<ListProps>
  }
  slotProps?: {
    loader?: Partial<InfiniteListItemProps>
    list?: Partial<ListProps>
  }
}
