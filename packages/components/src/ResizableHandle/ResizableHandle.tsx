import React from 'react'
import { PanelResizeHandle } from 'react-resizable-panels'
import { useThemeProps } from '@mui/material'

import { useResizableContainerContext } from '../ResizableContainer/ResizableContainerContext.js'
import { ResizeHandle } from '../ResizeHandle/ResizeHandle.js'
import type { ResizableHandleProps } from './resizableHandleProps.js'

export const ResizableHandle = React.forwardRef(function ResizableHandle(
  inProps,
  ref,
) {
  const active = React.useRef(false)
  const [isDragging, setIsDragging] = React.useState(false)
  const innerRef = React.useRef<HTMLDivElement | null>(null)
  React.useImperativeHandle(ref, () => innerRef.current!)

  const props = useThemeProps({
    name: 'MonorailResizeHandle',
    props: inProps,
  })

  const {
    grip = true,
    gripPosition = 'center',
    onDragStart,
    onDragEnd,
    onDrag,
    sx,
    ...other
  } = props

  const context = useResizableContainerContext()

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    active.current = true
    setIsDragging(true)
    onDragStart?.(event)
    document.addEventListener('mouseup', handleMouseUp)
    document.addEventListener('mousemove', handleMouseMove)
  }

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    active.current = true
    setIsDragging(true)
    onDragStart?.(event)
    document.addEventListener('touchend', handleTouchEnd)
    document.addEventListener('touchmove', handleTouchMove)
  }

  const handleMouseUp = (event: MouseEvent) => {
    if (active.current) {
      active.current = false
      setIsDragging(false)
      onDragEnd?.(event)
      document.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }

  const handleTouchEnd = (event: TouchEvent) => {
    if (active.current) {
      active.current = false
      setIsDragging(false)
      onDragEnd?.(event)
      document.removeEventListener('touchend', handleTouchEnd)
      document.removeEventListener('touchmove', handleTouchMove)
    }
  }

  const handleDragStart = (
    event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>,
    source: 'mouse' | 'touch',
  ) => {
    if (source === 'mouse') {
      handleMouseDown(event as React.MouseEvent<HTMLDivElement>)
    }
    if (source === 'touch') {
      handleTouchStart(event as React.TouchEvent<HTMLDivElement>)
    }
  }

  const handleMouseMove = (event: MouseEvent) => {
    if (active.current) {
      onDrag?.(event)

      event.stopPropagation()
      event.preventDefault()
    }
  }

  const handleTouchMove = (event: TouchEvent) => {
    if (active.current) {
      onDrag?.(event)

      event.stopPropagation()
      event.preventDefault()
    }
  }

  return (
    <PanelResizeHandle {...other}>
      <ResizeHandle
        ref={innerRef}
        grip={grip}
        gripPosition={gripPosition}
        orientation={context.direction === 'row' ? 'vertical' : 'horizontal'}
        isDragging={isDragging}
        onDragStart={handleDragStart}
        sx={sx}
      />
    </PanelResizeHandle>
  )
}) as (props: ResizableHandleProps) => JSX.Element
