import React from 'react'
import AutoSizer from 'react-virtualized-auto-sizer'
import { FixedSizeList as List } from 'react-window'
import InfiniteLoader from 'react-window-infinite-loader'
import { css } from 'styled-components'
import * as A from 'fp-ts/lib/Array'
import * as O from 'fp-ts/lib/Option'
import { pipe } from 'fp-ts/lib/pipeable'

import { isNonEmptyString } from '@monorail/sharedHelpers/typeGuards'
import { NoData } from '@monorail/visualComponents/dataStates/DataStates'

export const TBodyInfiniteVirtualFixedSizeList = (tbodyComponentProps: {
  children: Array<Array<JSX.Element>>
  className: string
  style: React.CSSProperties
  rowHeight: number
  loadMoreItems: () => null
  continuationToken: string | undefined
  NoData: JSX.Element | null
  Loading: JSX.Element
}) => {
  const { rowHeight, children } = tbodyComponentProps

  return pipe(
    children,
    O.fromPredicate(Array.isArray),
    O.chain(A.head),
    O.chain(O.fromPredicate(Array.isArray)),
    O.chain(O.fromPredicate(A.isNonEmpty)),
    O.fold(
      () => {
        return tbodyComponentProps.NoData
      },
      (items: Array<JSX.Element>) => {
        const Row = (rowProps: { index: number; style: React.CSSProperties }) =>
          rowProps.index < items.length ? (
            <div style={rowProps.style}>{items[rowProps.index]}</div>
          ) : (
            <div style={rowProps.style}>{tbodyComponentProps.Loading}</div>
          )
        const itemCount = isNonEmptyString(
          tbodyComponentProps.continuationToken,
        )
          ? items.length + 1
          : items.length

        return (
          <InfiniteLoader
            loadMoreItems={tbodyComponentProps.loadMoreItems}
            isItemLoaded={(index: number) => index < items.length}
            itemCount={itemCount}
          >
            {({ ref, onItemsRendered }) => {
              return (
                <div style={{ flex: '1 1 auto' }}>
                  <AutoSizer
                    css={css`
                      margin: 0;
                      padding: 0;
                    `}
                  >
                    {({ width, height }) => (
                      /* prefer FixedSizeList for performance Daniel Laubacher  Thu 30 Jul 2020 **/
                      <List
                        ref={ref}
                        onItemsRendered={onItemsRendered}
                        style={{ outline: 'none', willChange: 'unset' }}
                        width={width}
                        height={height}
                        itemSize={rowHeight}
                        itemCount={itemCount}
                      >
                        {Row}
                      </List>
                    )}
                  </AutoSizer>
                </div>
              )
            }}
          </InfiniteLoader>
        )
      },
    ),
  )
}
