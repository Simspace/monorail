import type { VirtuosoHandle, VirtuosoProps } from 'react-virtuoso'

export interface InfiniteListProps<T = unknown, C = unknown>
  extends VirtuosoProps<T, C> {
  ref?: React.Ref<VirtuosoHandle>
  slots?: {
    loader?: React.ComponentType<Record<string, unknown>>
    list?: React.ComponentType<Record<string, unknown>>
    listItem?: React.ComponentType<Record<string, unknown>>
  }
  slotProps?: {
    loader?: Record<string, unknown>
    list?: Record<string, unknown>
    listItem?: Record<string, unknown>
  }
}
