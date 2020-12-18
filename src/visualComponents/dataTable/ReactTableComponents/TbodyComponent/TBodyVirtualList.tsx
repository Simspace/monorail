import React from 'react'
import AutoSizer from 'react-virtualized-auto-sizer'
import { FixedSizeList as List } from 'react-window'
import { css } from 'styled-components'
import * as A from 'fp-ts/lib/Array'
import * as O from 'fp-ts/lib/Option'
import { pipe } from 'fp-ts/lib/pipeable'

import { NoData } from '@monorail/visualComponents/dataStates/DataStates'

export const TBodyVirtualFixedSizeList = (tbodyComponentProps: {
  children: Array<Array<JSX.Element>>
  className: string
  style: React.CSSProperties
  rowHeight: number
  NoData: JSX.Element | null
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
        const Row = (rowProps: {
          index: number
          style: React.CSSProperties
        }) => <div style={rowProps.style}>{items[rowProps.index]}</div>

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
                  style={{ outline: 'none', willChange: 'unset' }}
                  width={width}
                  height={height}
                  itemSize={rowHeight}
                  itemCount={items.length}
                >
                  {Row}
                </List>
              )}
            </AutoSizer>
          </div>
        )
      },
    ),
  )
}
