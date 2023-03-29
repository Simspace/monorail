/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React from 'react'
import type { ElementSize } from '@mui/x-data-grid-premium'
import {
  GridAutoSizer,
  GridOverlays,
  useGridApiContext,
  useGridRootProps,
} from '@mui/x-data-grid-premium'

import { DataGalleryMainContainer } from './DataGalleryMainContainer.js'

interface DataGalleryBodyProps {
  children?: React.ReactNode
  VirtualScrollerComponent: React.JSXElementConstructor<
    React.HTMLAttributes<HTMLDivElement> & {
      ref: React.Ref<HTMLDivElement>
      mainRef: React.RefObject<HTMLDivElement>
      disableVirtualization: boolean
      width: number
      height: number
    }
  >

  ColumnHeadersComponent: React.JSXElementConstructor<
    React.HTMLAttributes<HTMLDivElement> & {
      ref: React.Ref<HTMLDivElement>
      innerRef: React.Ref<HTMLDivElement>
    }
  >
}

export function DataGalleryBody(props: DataGalleryBodyProps) {
  const { ColumnHeadersComponent, VirtualScrollerComponent, children } = props

  const apiRef = useGridApiContext()
  const rootProps = useGridRootProps()

  const [isVirtualizationDisabled, setIsVirtualizationDisabled] =
    React.useState(rootProps.disableVirtualization)

  const disableVirtualization = React.useCallback(() => {
    setIsVirtualizationDisabled(true)
  }, [])

  const enableVirtualization = React.useCallback(() => {
    setIsVirtualizationDisabled(false)
  }, [])

  React.useEffect(() => {
    setIsVirtualizationDisabled(rootProps.disableVirtualization)
  }, [rootProps.disableVirtualization])

  // The `useGridApiMethod` hook can't be used here, because it only installs the
  // method if it doesn't exist yet. Once installed, it's never updated again.
  // This break the methods above, since their closure comes from the first time
  // they were installed. Which means that calling `setIsVirtualizationDisabled`
  // will trigger a re-render, but it won't update the state. That can be solved
  // by migrating the virtualization status to the global state.
  apiRef.current.unstable_disableVirtualization = disableVirtualization
  apiRef.current.unstable_enableVirtualization = enableVirtualization

  const mainRef = React.useRef<HTMLDivElement>(null)
  const columnHeadersRef = React.useRef<HTMLDivElement>(null)
  const columnsContainerRef = React.useRef<HTMLDivElement>(null)
  const windowRef = React.useRef<HTMLDivElement>(null)

  apiRef.current.windowRef = windowRef

  const [size, setSize] = React.useState<ElementSize>({ width: 0, height: 0 })

  const handleResize = React.useCallback(
    (size: ElementSize) => {
      apiRef.current.publishEvent('resize', size)
      setSize(size)
    },
    [apiRef],
  )

  return (
    <DataGalleryMainContainer ref={mainRef} classes={rootProps.classes}>
      <GridOverlays />
      <ColumnHeadersComponent
        ref={columnsContainerRef}
        innerRef={columnHeadersRef}
      />
      <GridAutoSizer
        nonce={rootProps.nonce}
        disableHeight={rootProps.autoHeight}
        onResize={handleResize}
      >
        <VirtualScrollerComponent
          ref={windowRef}
          mainRef={mainRef}
          disableVirtualization={isVirtualizationDisabled}
          width={size.width}
          height={size.height}
        />
      </GridAutoSizer>
      {children}
    </DataGalleryMainContainer>
  )
}
