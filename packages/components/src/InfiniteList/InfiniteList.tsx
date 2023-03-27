/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable eqeqeq */
import React from 'react'
import type {
  FixedSizeListProps,
  ListOnItemsRenderedProps,
  VariableSizeList,
  VariableSizeListProps,
} from 'react-window'

import { CircularProgress } from '../CircularProgress.js'
import type { ListProps } from '../List.js'
import { List } from '../List.js'
import { ListItem } from '../ListItem.js'
import type {
  InfiniteListItemProps,
  InfiniteListProps,
} from './InfiniteListProps.js'

interface InfiniteListState {
  lastLoadedIndex: number
  isLoadingNextPage: boolean
}

interface ListRef {
  resetAfterIndex?: VariableSizeList['resetAfterIndex']
  _getItemStyleCache?: (_: number) => void
  forceUpdate: () => void
  reset: (autoReload?: boolean) => void
}

const Loader = (props: InfiniteListItemProps<unknown>) => {
  const { style } = props
  return (
    <ListItem
      style={style}
      sx={{ alignItems: 'center', justifyContent: 'center' }}
    >
      <CircularProgress />
    </ListItem>
  )
}

export const InfiniteList = React.forwardRef(function InfiniteList(
  props: InfiniteListProps<unknown, React.ComponentType<FixedSizeListProps>>,
  ref,
) {
  const {
    component,
    isItemLoaded,
    loadNextPage,
    renderItem,
    itemSize,
    width,
    height,
    data,
    pageSize = 10,
    threshold = 5,
    slots = {},
    slotProps = {},
    ...others
  } = props

  const VirtualizedListComponent = component
  const LoaderComponent = slots.loader ?? Loader
  const ListComponent = React.useMemo(() => {
    if (slots.list) {
      return (props: Record<string, any>) =>
        React.createElement(slots.list as React.ComponentType<ListProps>, {
          ...slotProps.list,
          ...props,
        })
    }
    return (props: Record<string, any>) => (
      <List {...slotProps.list} {...props} />
    )
  }, [slotProps.list, slots.list])

  const state = React.useRef<InfiniteListState>({
    lastLoadedIndex: -1,
    isLoadingNextPage: false,
  })

  React.useImperativeHandle(ref, () => listRef.current)

  const listRef: React.MutableRefObject<ListRef | null> = React.useRef(null)

  const loadPage = React.useCallback(() => {
    if (!state.current.isLoadingNextPage) {
      state.current.isLoadingNextPage = true
      const promise = loadNextPage()
      if (promise != null) {
        promise.then(() => {
          if (listRef.current != null) {
            if (typeof listRef.current.resetAfterIndex === 'function') {
              listRef.current.resetAfterIndex(
                state.current.lastLoadedIndex,
                true,
              )
            } else {
              if (typeof listRef.current._getItemStyleCache === 'function') {
                listRef.current._getItemStyleCache(-1)
              }
              listRef.current.forceUpdate()
            }
          }
          state.current.lastLoadedIndex += pageSize
          state.current.isLoadingNextPage = false
        })
      }
    }
  }, [loadNextPage, pageSize])

  const itemCount = React.useMemo(() => {
    if (!isItemLoaded(data.length)) {
      return data.length + 1
    }
    return data.length - 1
  }, [data, isItemLoaded])

  const ensureRowsLoaded = React.useCallback(
    ({
      visibleStopIndex,
    }: Pick<ListOnItemsRenderedProps, 'visibleStopIndex'>) => {
      let endIndex = visibleStopIndex

      if (endIndex + threshold > state.current.lastLoadedIndex) {
        endIndex = state.current.lastLoadedIndex
      }

      if (!isItemLoaded(endIndex + 1)) {
        loadPage()
      }
    },
    [isItemLoaded, threshold, loadPage],
  )

  const reset = React.useCallback(
    (autoReload: boolean = false) => {
      state.current.lastLoadedIndex = -1
      state.current.isLoadingNextPage = false
      if (autoReload) {
        ensureRowsLoaded({ visibleStopIndex: 0 })
      }
    },
    [ensureRowsLoaded],
  )

  React.useEffect(() => {
    if (listRef.current) {
      listRef.current.reset = reset
    }
  }, [reset])

  const Item = (props: InfiniteListItemProps) => {
    if (!isItemLoaded(props.index)) {
      return <LoaderComponent {...props} />
    }
    return renderItem({ ...props, data: data[props.index] })
  }

  const setListRef = React.useCallback(
    (list: ListRef | null) => {
      listRef.current = list
      if (list !== null) {
        listRef.current!.reset = reset
      }
    },
    [reset],
  )

  return (
    <VirtualizedListComponent
      ref={setListRef}
      itemSize={itemSize}
      width={width}
      height={height}
      onItemsRendered={ensureRowsLoaded}
      itemCount={itemCount}
      innerElementType={ListComponent}
      {...others}
    >
      {Item}
    </VirtualizedListComponent>
  )
}) as unknown as <
  T,
  C extends
    | React.ComponentType<FixedSizeListProps<T>>
    | React.ComponentType<VariableSizeListProps<T>>,
>(
  props: InfiniteListProps<T, C>,
) => JSX.Element
