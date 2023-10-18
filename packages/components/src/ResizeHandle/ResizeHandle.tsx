import React from 'react'
import type { CSSObject } from '@mui/material'
import { Divider, styled, useThemeProps } from '@mui/material'
import composeClasses from '@mui/utils/composeClasses'
import clsx from 'clsx'

import { excludeProps } from '@monorail/utils'

import type { ResizableContainerOrientation } from '../ResizableContainer.js'
import {
  getResizeHandleUtilityClass,
  resizeHandleClasses,
} from './resizeHandleClasses.js'
import type { ResizeHandleProps } from './resizeHandleProps.js'

interface ResizeHandleOwnerState extends ResizeHandleProps {
  orientation: ResizableContainerOrientation
  isDragging: boolean
}

export const ResizeHandleRoot = styled('div', {
  name: 'MonorailResizeHandle',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root,
  shouldForwardProp: excludeProps(
    'isDragging',
    'direction',
    'computedSize',
    'propagate',
    'orientation',
    'sx',
    'ownerState',
  ),
})<ResizeHandleOwnerState>(({ theme, orientation }) => {
  const baseStyles: CSSObject = {
    backgroundColor: 'transparent',
    position: 'relative',
    zIndex: theme.zIndex.drawer + 1,
    '&:hover': {
      [`& > .${resizeHandleClasses.handle}`]: {
        backgroundColor: theme.palette.primary.lowEmphasis.main,
        transitionDelay: `${theme.transitions.duration.standard}ms`,
      },
      [`& > .${resizeHandleClasses.grip}`]: {
        backgroundColor: theme.palette.primary.lowEmphasis.dark,
        transitionDelay: `${theme.transitions.duration.standard}ms`,
      },
    },
    '&:active': {
      [`& > .${resizeHandleClasses.handle}`]: {
        backgroundColor: theme.palette.primary.lowEmphasis.main,
      },
      [`& > .${resizeHandleClasses.grip}`]: {
        backgroundColor: theme.palette.primary.lowEmphasis.dark,
      },
    },
  }
  switch (orientation) {
    case 'vertical':
      return {
        ...baseStyles,
        flexDirection: 'row',
        width: '12px',
        height: '100%',
        top: 0,
        right: 0,
        cursor: 'col-resize',
        [`& > .${resizeHandleClasses.handle}`]: {
          width: '2px',
          height: '100%',
          backgroundColor: 'transparent',
          transition: `${theme.transitions.create(['background-color'], {
            duration: theme.transitions.duration.short,
          })}`,
        },
      }
    case 'horizontal':
      return {
        ...baseStyles,
        flexDirection: 'column',
        height: '12px',
        width: '100%',
        left: 0,
        bottom: 0,
        cursor: 'row-resize',
        [`& > .${resizeHandleClasses.handle}`]: {
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
        borderRightWidth: '2px',
      }
    }
    case 'horizontal': {
      return {
        position: 'relative',
        top: '5px',
        height: '2px',
      }
    }
  }
})

const ResizeHandleGrip = styled('div', {
  name: 'MonorailResizeHandle',
  slot: 'Grip',
  overridesResolver: (props, styles) => styles.root,
  shouldForwardProp: excludeProps('orientation', 'gripPosition'),
})<{
  orientation: ResizableContainerOrientation
  gripPosition: 'center' | 'top' | 'bottom' | 'left' | 'right'
}>(({ theme, orientation, gripPosition }) => {
  return {
    position: 'absolute',
    backgroundColor: theme.palette.primary.lowEmphasis.main,
    transition: `${theme.transitions.create(['background-color'], {
      duration: theme.transitions.duration.short,
    })}`,
    zIndex: theme.zIndex.drawer + 2,
    ...(orientation === 'vertical' && {
      width: theme.spacing(3),
      height: theme.spacing(12),
      borderRadius: 12,
      top: 'calc(50% - 40px)',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 'calc(50% - 12px)',
        left: 'calc(50% - 2px)',
        width: theme.spacing(1),
        height: theme.spacing(6),
        borderLeft: `1px solid ${theme.palette.primary.border.dark}`,
        borderRight: `1px solid ${theme.palette.primary.border.dark}`,
      },
      ...(gripPosition === 'center' && {
        left: 0,
      }),
      ...(gripPosition === 'left' && {
        left: -10,
      }),
      ...(gripPosition === 'right' && {
        left: 10,
      }),
    }),
    ...(orientation === 'horizontal' && {
      height: theme.spacing(3),
      width: theme.spacing(12),
      borderRadius: 12,
      left: 'calc(50% - 40px)',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 'calc(50% - 2px)',
        left: 'calc(50% - 12px)',
        height: theme.spacing(1),
        width: theme.spacing(6),
        borderTop: `1px solid ${theme.palette.primary.border.dark}`,
        borderBottom: `1px solid ${theme.palette.primary.border.dark}`,
      },
      ...(gripPosition === 'center' && {
        top: 0,
      }),
      ...(gripPosition === 'top' && {
        top: -10,
      }),
      ...(gripPosition === 'bottom' && {
        top: 10,
      }),
    }),
  }
})

const ResizeHandleInner = styled('div', {
  name: 'MonorailResizeHandle',
  slot: 'Handle',
  overridesResolver: (props, styles) => styles.grip,
  shouldForwardProp: excludeProps('orientation'),
})<{
  orientation: ResizableContainerOrientation
}>(({ orientation }) => {
  switch (orientation) {
    case 'vertical': {
      return {
        position: 'absolute',
        left: '5px',
        top: 0,
      }
    }
    case 'horizontal': {
      return {
        position: 'absolute',
        top: '5px',
      }
    }
  }
})

export const ResizeHandle = React.forwardRef(function ResizeHandle(
  inProps,
  ref,
) {
  const innerRef = React.useRef<HTMLDivElement | null>(null)
  React.useImperativeHandle(ref, () => innerRef.current!)

  const parentRef = React.useRef<HTMLElement | null>(null)
  React.useImperativeHandle(parentRef, () => innerRef.current?.parentElement!)

  const props = useThemeProps({
    name: 'MonorailResizeHandle',
    props: inProps,
  })

  const {
    orientation,
    grip = true,
    gripPosition = 'center',
    onDragStart,
    isDragging,
    ...other
  } = props

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    onDragStart?.(event, 'mouse')
  }

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    onDragStart?.(event, 'touch')
  }

  const ownerState = {
    ...props,
    isDragging,
  }

  const classes = useUtilityClasses(ownerState)

  return (
    <ResizeHandleRoot
      {...other}
      orientation={orientation}
      isDragging={isDragging}
      ref={innerRef}
      className={clsx(classes.root, props.className)}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
    >
      <ResizeHandleHint orientation={orientation} />
      {grip && (
        <ResizeHandleGrip
          className={classes.grip}
          orientation={orientation}
          gripPosition={gripPosition}
        />
      )}
      <ResizeHandleInner orientation={orientation} className={classes.handle} />
    </ResizeHandleRoot>
  )
}) as (props: ResizeHandleProps) => JSX.Element

function useUtilityClasses(ownerState: ResizeHandleOwnerState) {
  const { classes, isDragging } = ownerState

  const slots = {
    root: ['root', isDragging && 'dragging'],
    handle: ['handle', isDragging && 'dragging'],
    grip: ['grip', isDragging && 'dragging'],
  }

  return composeClasses(slots, getResizeHandleUtilityClass, classes)
}
