import React from 'react'
import type { CSSObject } from '@mui/material'
import { Divider, styled, useThemeProps } from '@mui/material'
import composeClasses from '@mui/utils/composeClasses'
import clsx from 'clsx'

import { excludeProps } from '@monorail/utils'

import { useResizableContainerContext } from '../ResizableContainer/ResizableContainerContext.js'
import { getResizeHandleUtilityClass } from './resizeHandleClasses.js'
import type { ResizeHandleProps } from './resizeHandleProps.js'

interface ResizeHandleOwnerState extends ResizeHandleProps {
  direction: 'row' | 'column'
  isDragging: boolean
}

export const ResizeHandleRoot = styled('div', {
  name: 'MonorailResizeHandle',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root,
  shouldForwardProp: excludeProps('isDragging', 'direction', 'computedSize'),
})<ResizeHandleOwnerState>(({ theme, direction }) => {
  const baseStyles: CSSObject = {
    backgroundColor: 'transparent',
    position: 'relative',
    zIndex: theme.zIndex.drawer + 1,
    '&:hover': {
      ['& > div']: {
        backgroundColor: theme.palette.primary.hover,
        transitionDelay: `${theme.transitions.duration.standard}ms`,
      },
    },
    '&:active': {
      ['& > div']: {
        backgroundColor: theme.palette.primary.hover,
      },
    },
  }
  switch (direction) {
    case 'row':
      return {
        ...baseStyles,
        flexDirection: 'row',
        width: '10px',
        height: '100%',
        top: 0,
        right: 0,
        cursor: 'col-resize',
        '& > div': {
          width: '2px',
          height: '100%',
          backgroundColor: 'transparent',
          transition: `${theme.transitions.create(['background-color'], {
            duration: theme.transitions.duration.short,
          })}`,
        },
      }
    case 'column':
      return {
        ...baseStyles,
        flexDirection: 'column',
        height: '10px',
        width: '100%',
        left: 0,
        bottom: 0,
        cursor: 'row-resize',
        '& > div': {
          height: '2px',
          width: '100%',
          backgroundColor: 'transparent',
          transition: `${theme.transitions.create(['background-color'], {
            duration: theme.transitions.duration.short,
          })}`,
        },
      }
  }
})

const ResizeHandleHint = styled(Divider)(({ orientation = 'vertical' }) => {
  switch (orientation) {
    case 'vertical': {
      return {
        position: 'absolute',
        left: '5px',
      }
    }
    case 'horizontal': {
      return {
        position: 'relative',
        top: '5px',
      }
    }
  }
})

const ResizeHandleInner = styled('div')<{ direction: 'row' | 'column' }>(
  ({ direction }) => {
    switch (direction) {
      case 'row': {
        return {
          position: 'absolute',
          left: '4px',
          top: 0,
        }
      }
      case 'column': {
        return {
          position: 'absolute',
          top: '4px',
        }
      }
    }
  },
)

export const ResizeHandle = React.forwardRef(function ResizeHandle(
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

  const { index, ...other } = props

  const context = useResizableContainerContext()

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    active.current = true
    setIsDragging(true)
    document.addEventListener('mouseup', handleMouseUp)
    document.addEventListener('mousemove', handleMouseMove)
    context.events.publish('startResize', {
      source: 'mouse',
      index: index!,
      event,
    })
  }

  const handleMouseUp = (event: MouseEvent) => {
    if (active.current) {
      active.current = false
      setIsDragging(false)
      document.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('mousemove', handleMouseMove)
      context.events.publish('stopResize', {
        source: 'mouse',
        index: index!,
        event,
      })
    }
  }

  const handleMouseMove = (event: MouseEvent) => {
    if (active.current) {
      const domElement = innerRef.current!

      context.events.publish('resize', {
        source: 'mouse',
        index: index!,
        target: domElement,
        event,
      })

      event.stopPropagation()
      event.preventDefault()
    }
  }

  const ownerState = {
    ...props,
    isDragging,
    direction: context.direction,
  }

  const classes = useUtilityClasses(ownerState)

  const style = {
    ...other.style,
    ...(context.direction === 'row' && {
      height: props.computedSize,
    }),
    ...(context.direction === 'column' && {
      width: props.computedSize,
    }),
  }

  return (
    <ResizeHandleRoot
      {...other}
      isDragging={isDragging}
      direction={context.direction}
      ref={innerRef}
      className={clsx(classes.root, props.className)}
      onMouseDown={handleMouseDown}
      style={style}
    >
      <ResizeHandleHint
        orientation={context.direction === 'row' ? 'vertical' : 'horizontal'}
      />
      <ResizeHandleInner
        direction={context.direction}
        className={classes.handle}
      />
    </ResizeHandleRoot>
  )
}) as (props: ResizeHandleProps) => JSX.Element

function useUtilityClasses(ownerState: ResizeHandleOwnerState) {
  const { classes, isDragging } = ownerState

  const slots = {
    root: ['root', isDragging && 'rootDragging'],
    handle: ['handle', isDragging && 'handleDragging'],
  }

  return composeClasses(slots, getResizeHandleUtilityClass, classes)
}
