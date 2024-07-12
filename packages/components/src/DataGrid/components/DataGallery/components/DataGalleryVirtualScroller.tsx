/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React from 'react'
import { FixedSizeGrid } from 'react-window'
import { getTotalHeaderHeight } from '@mui/x-data-grid/hooks/features/columns/gridColumnsUtils'
import {
  useGridPrivateApiContext,
  useGridVisibleRows,
} from '@mui/x-data-grid/internals'
import { useGridRootProps } from '@mui/x-data-grid-premium'
import useResizeObserver from 'use-resize-observer'

import { useEnhancedEffect } from '@monorail/utils'

export const DataGalleryVirtualScroller = React.forwardRef<HTMLDivElement>(
  function DataGalleryVirtualScroller(props, ref) {
    const preventResizeRecursion = React.useRef(false)
    const [itemWidth, setItemWidth] = React.useState(1)
    const [itemHeight, setItemHeight] = React.useState(1)

    const rootProps = useGridRootProps()
    const apiRef = useGridPrivateApiContext()
    const currentPage = useGridVisibleRows(apiRef, rootProps)
    const totalHeaderHeight = getTotalHeaderHeight(apiRef, {
      columnHeaderHeight: rootProps.columnHeaderHeight,
    })

    const [size, setSize] = React.useState({ width: 0, height: 0 })

    const handleResize = React.useCallback(() => {
      const { width, height } = getItemDimensions(
        rootProps.galleryProps!.itemWidth,
        rootProps.galleryProps!.itemHeight,
        apiRef.current.virtualScrollerRef!.current,
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
      ref: apiRef.current.rootElementRef,
      onResize: handleResize,
    })

    useEnhancedEffect(() => {
      const rootDimensions = apiRef.current.getRootDimensions()
      if (!rootDimensions) {
        return
      }

      setSize(rootDimensions.viewportOuterSize)

      const handle = window.requestAnimationFrame(() => {
        handleResize()
      })

      return () => {
        window.cancelAnimationFrame(handle)
      }
    }, [])

    useEnhancedEffect(() => {
      return apiRef.current.subscribeEvent('resize', size => {
        setSize(size)
      })
    }, [])

    const columnCount = Math.max(1, Math.floor((size.width - 20) / itemWidth))
    const rowCount = Math.ceil(currentPage.rows.length / columnCount)

    if (!apiRef.current.getSortedRows) {
      return null
    }

    const galleryContainerStyles = rootProps.galleryProps?.slotProps
      ?.galleryContainer?.style ?? { margin: '0 auto' }

    // https://github.com/bvaughn/react-window/issues/158
    const innerElementType = ({
      style: reactWindowStyles,
      ...rest
    }: {
      style: React.CSSProperties
    }) => (
      <div
        style={{
          ...reactWindowStyles,
          position: 'relative',
          ...galleryContainerStyles,
        }}
        {...rest}
      />
    )

    return (
      <FixedSizeGrid
        outerRef={ref}
        columnCount={columnCount}
        rowCount={rowCount}
        columnWidth={itemWidth}
        rowHeight={itemHeight}
        width={size.width}
        height={size.height}
        innerElementType={innerElementType}
        {...rootProps.galleryProps?.virtualScrollerProps}
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
  },
)

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
