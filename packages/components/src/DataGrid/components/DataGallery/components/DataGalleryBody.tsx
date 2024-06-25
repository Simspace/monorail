/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React from 'react'
import { useGridPrivateApiContext } from '@mui/x-data-grid/internals'
import { GridOverlays, useGridRootProps } from '@mui/x-data-grid-premium'

import { useEnhancedEffect } from '@monorail/utils'

import { DataGalleryMainContainer } from './DataGalleryMainContainer.js'

interface DataGalleryBodyProps {
  children?: React.ReactNode
  VirtualScrollerComponent: React.JSXElementConstructor<
    React.HTMLAttributes<HTMLDivElement> & {
      ref: React.Ref<HTMLDivElement>
      disableVirtualization: boolean
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

  const apiRef = useGridPrivateApiContext()
  const rootProps = useGridRootProps()
  const rootRef = React.useRef<HTMLDivElement>(null)

  const [isVirtualizationEnabled, setIsVirtualizationEnabled] = React.useState(
    !rootProps.disableVirtualization,
  )

  const setVirtualization = React.useCallback(
    (enabled: boolean) => {
      setIsVirtualizationEnabled(enabled)
    },
    [setIsVirtualizationEnabled],
  )

  React.useEffect(() => {
    setIsVirtualizationEnabled(!rootProps.disableVirtualization)
  }, [rootProps.disableVirtualization])

  useEnhancedEffect(() => {
    apiRef.current.resize()
    const elementToObserve = rootRef.current
    if (typeof ResizeObserver === 'undefined') {
      return () => {}
    }

    let animationFrame: number
    const observer = new ResizeObserver(() => {
      // See https://github.com/mui/mui-x/issues/8733
      animationFrame = window.requestAnimationFrame(() => {
        apiRef.current.resize()
      })
    })

    if (elementToObserve) {
      observer.observe(elementToObserve)
    }

    return () => {
      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame)
      }

      if (elementToObserve) {
        observer.unobserve(elementToObserve)
      }
    }
  }, [apiRef])

  // The `useGridApiMethod` hook can't be used here, because it only installs the
  // method if it doesn't exist yet. Once installed, it's never updated again.
  // This break the methods above, since their closure comes from the first time
  // they were installed. Which means that calling `setIsVirtualizationDisabled`
  // will trigger a re-render, but it won't update the state. That can be solved
  // by migrating the virtualization status to the global state.
  apiRef.current.unstable_setVirtualization = setVirtualization

  const columnHeadersRef = React.useRef<HTMLDivElement>(null)
  const columnsContainerRef = React.useRef<HTMLDivElement>(null)
  const virtualScrollerRef = React.useRef<HTMLDivElement>(null)

  apiRef.current.register('private', {
    columnHeadersContainerElementRef: columnsContainerRef,
    columnHeadersElementRef: columnHeadersRef,
    virtualScrollerRef,
    mainElementRef: rootRef,
  })

  return (
    <DataGalleryMainContainer ref={rootRef} classes={rootProps.classes}>
      <GridOverlays />
      <ColumnHeadersComponent
        ref={columnsContainerRef}
        innerRef={columnHeadersRef}
      />
      <VirtualScrollerComponent
        ref={virtualScrollerRef}
        disableVirtualization={isVirtualizationEnabled}
      />
      {children}
    </DataGalleryMainContainer>
  )
}
