/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React from 'react'
import { FixedSizeGrid } from 'react-window'
import { useGridVisibleRows } from '@mui/x-data-grid/internals'
import {
  gridDensityTotalHeaderHeightSelector,
  useGridApiContext,
  useGridRootProps,
  useGridSelector,
} from '@mui/x-data-grid-premium'
import useResizeObserver from 'use-resize-observer'

export const DataGalleryVirtualScroller = React.forwardRef<
  HTMLDivElement,
  { mainRef: React.RefObject<HTMLDivElement>; width: number; height: number }
>(function DataGalleryVirtualScroller(props, ref) {
  const { mainRef, width, height } = props

  const preventResizeRecursion = React.useRef(false)
  const [itemWidth, setItemWidth] = React.useState(1)
  const [itemHeight, setItemHeight] = React.useState(1)

  const rootProps = useGridRootProps()
  const apiRef = useGridApiContext()
  const currentPage = useGridVisibleRows(apiRef, rootProps)
  const totalHeaderHeight = useGridSelector(
    apiRef,
    gridDensityTotalHeaderHeightSelector,
  )

  const handleResize = React.useCallback(() => {
    const { width, height } = getItemDimensions(
      rootProps.galleryProps!.itemWidth,
      rootProps.galleryProps!.itemHeight,
      apiRef.current.windowRef!.current,
      totalHeaderHeight,
    )
    setItemWidth(width)
    setItemHeight(height)
    preventResizeRecursion.current = true
  }, [apiRef, rootProps.galleryProps, totalHeaderHeight])

  React.useEffect(() => {
    handleResize()
  }, [handleResize])

  useResizeObserver({
    ref: mainRef,
    onResize: handleResize,
  })

  const columnCount = Math.max(1, Math.floor((width - 20) / itemWidth))
  const rowCount = Math.ceil(currentPage.rows.length / columnCount)

  if (!apiRef.current.getSortedRows) {
    return null
  }

  return (
    <FixedSizeGrid
      outerRef={ref}
      columnCount={columnCount}
      rowCount={rowCount}
      columnWidth={itemWidth}
      rowHeight={itemHeight}
      width={width}
      height={height - totalHeaderHeight}
    >
      {params => {
        const index = params.rowIndex * columnCount + params.columnIndex
        if (index >= currentPage.rows.length) {
          return null
        }
        return rootProps.galleryProps!.renderCard({
          row: currentPage.rows[index].model,
          ...params,
        })
      }}
    </FixedSizeGrid>
  )
})

function getItemDimensions(
  itemWidth: string | number,
  itemHeight: string | number,
  container: HTMLDivElement | null,
  totalHeaderHeight: number,
) {
  let width = 0
  let height = 0
  if (typeof itemWidth === 'string') {
    if (container !== null) {
      const decimalItemWidth =
        parseFloat(itemWidth.substring(0, itemWidth.length - 1)) / 100
      width = container.clientWidth * decimalItemWidth
    }
  } else {
    width = itemWidth
  }

  if (typeof itemHeight === 'string') {
    if (container !== null) {
      const decimalItemHeight =
        parseFloat(itemHeight.substring(0, itemHeight.length - 1)) / 100
      height = (container.clientHeight - totalHeaderHeight) * decimalItemHeight
    }
  } else {
    height = itemHeight
  }

  return { width, height }
}
