/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React from 'react'
import type { GridItemProps, GridListProps } from 'react-virtuoso'
import { VirtuosoGrid } from 'react-virtuoso'
import { useGridVisibleRows } from '@mui/x-data-grid/internals'
import { useGridApiContext, useGridRootProps } from '@mui/x-data-grid-premium'

import { styled } from '@monorail/utils'

const ItemComponent = styled('div')<{ context?: { itemWidth: string } }>(
  ({ context }) => ({
    width: context?.itemWidth,
    boxSizing: 'border-box',
  }),
)

const GridContainer = styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
})

export const DataGalleryVirtualScroller = () => {
  const rootProps = useGridRootProps()
  const apiRef = useGridApiContext()
  const currentPage = useGridVisibleRows(apiRef, rootProps)

  if (!apiRef.current.getSortedRows) {
    return null
  }

  return (
    <VirtuosoGrid
      totalCount={currentPage.rows.length}
      context={{
        itemWidth: rootProps.galleryProps!.itemWidth,
      }}
      components={{
        Item: ItemComponent as React.ComponentType<
          GridItemProps & {
            context?: unknown
          }
        >,
        List: GridContainer as React.ComponentType<
          GridListProps & {
            context?: unknown
          }
        >,
        ...rootProps.galleryProps?.components,
      }}
      {...rootProps.galleryProps!}
      itemContent={(index, _, context) => {
        if (index >= currentPage.rows.length) {
          return null
        }
        return rootProps.galleryProps!.itemContent?.(
          index,
          currentPage.rows[index].model,
          context,
        )
      }}
    />
  )
}
