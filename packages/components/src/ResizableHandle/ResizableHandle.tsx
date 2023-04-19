import React from 'react'
import { useThemeProps } from '@mui/material'
import useEnhancedEffect from '@mui/utils/useEnhancedEffect.js'

import { useForceUpdate } from '@monorail/utils'

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

  const parentRef = React.useRef<HTMLElement | null>(null)
  React.useImperativeHandle(parentRef, () => innerRef.current?.parentElement!)

  const props = useThemeProps({
    name: 'MonorailResizeHandle',
    props: inProps,
  })

  const {
    index,
    grip = true,
    gripPosition = 'center',
    onDragStart,
    onDragEnd,
    onDrag,
    computeSize,
    ...other
  } = props

  const context = useResizableContainerContext()

  const forceUpdate = useForceUpdate()
  useEnhancedEffect(() => {
    context.events.addEventListener('forceUpdate', forceUpdate)
  }, [])

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    active.current = true
    setIsDragging(true)
    onDragStart?.(event)
    document.addEventListener('mouseup', handleMouseUp)
    document.addEventListener('mousemove', handleMouseMove)
    context.events.dispatchEvent('startResize', {
      source: 'mouse',
      index: index!,
      event,
    })
  }

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    active.current = true
    setIsDragging(true)
    onDragStart?.(event)
    document.addEventListener('touchend', handleTouchEnd)
    document.addEventListener('touchmove', handleTouchMove)
    context.events.dispatchEvent('startResize', {
      source: 'touch',
      index: index!,
      event,
    })
  }

  const handleMouseUp = (event: MouseEvent) => {
    if (active.current) {
      active.current = false
      setIsDragging(false)
      onDragEnd?.(event)
      document.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('mousemove', handleMouseMove)
      context.events.dispatchEvent('stopResize', {
        source: 'mouse',
        index: index!,
        event,
      })
    }
  }

  const handleTouchEnd = (event: TouchEvent) => {
    if (active.current) {
      active.current = false
      setIsDragging(false)
      onDragEnd?.(event)
      document.removeEventListener('touchend', handleTouchEnd)
      document.removeEventListener('touchmove', handleTouchMove)
      context.events.dispatchEvent('stopResize', {
        source: 'touch',
        index: index!,
        event,
      })
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
      const domElement = innerRef.current!

      onDrag?.(event)

      context.events.dispatchEvent('resize', {
        source: 'mouse',
        index: index!,
        target: domElement,
        event,
      })

      event.stopPropagation()
      event.preventDefault()
    }
  }

  const handleTouchMove = (event: TouchEvent) => {
    if (active.current) {
      const domElement = innerRef.current!

      onDrag?.(event)

      context.events.dispatchEvent('resize', {
        source: 'touch',
        index: index!,
        target: domElement,
        event,
      })

      event.stopPropagation()
      event.preventDefault()
    }
  }

  const style = {
    ...other.style,
    ...(computeSize === true && {
      ...(context.orientation === 'vertical' && {
        height: props.computedSize?.current,
      }),
      ...(context.orientation === 'horizontal' && {
        width: props.computedSize?.current,
      }),
    }),
  }

  return (
    <ResizeHandle
      ref={innerRef}
      grip={grip}
      gripPosition={gripPosition}
      orientation={context.orientation}
      isDragging={isDragging}
      style={style}
      onDragStart={handleDragStart}
      {...other}
    />
  )
}) as (props: ResizableHandleProps) => JSX.Element
