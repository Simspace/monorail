import React from 'react'
import { excludeProps } from '@monorail/utils'
import { CSSObject, styled } from '@mui/material'
import composeClasses from '@mui/utils/composeClasses'
import clsx from 'clsx'

import { Drawer, drawerClasses } from '../Drawer'
import { getResizableDrawerUtilityClass } from './resizableDrawerClasses'
import { ResizableDrawerProps } from './resizableDrawerProps'

const DRAWER_SIZE = 240
const MIN_DRAWER_SIZE = 60
const MAX_DRAWER_SIZE = 600
const DRAG_AREA_SIZE = 10
const HANDLE_SIZE = 2

interface ResizableDrawerOwnerState extends ResizableDrawerProps {
  isDragging: boolean
}

interface ResizableDrawerRootProps {
  ownerState: ResizableDrawerOwnerState
}

const ResizableDrawerRoot = styled(Drawer)<ResizableDrawerRootProps>(
  ({ ownerState }) => ({
    flexShrink: 0,
    ...((ownerState.anchor === 'left' || ownerState.anchor === 'right') && {
      minWidth: ownerState.minSize,
      maxWidth: ownerState.maxSize,
    }),
    ...((ownerState.anchor === 'top' || ownerState.anchor === 'bottom') && {
      minHeight: ownerState.minSize,
      maxHeight: ownerState.maxSize,
    }),
    [`& .${drawerClasses.paper}`]: {
      boxSizing: 'border-box',
      overflowX: 'hidden',
      ...((ownerState.anchor === 'left' || ownerState.anchor === 'right') && {
        minWidth: ownerState.minSize,
        maxWidth: ownerState.maxSize,
      }),
      ...((ownerState.anchor === 'top' || ownerState.anchor === 'bottom') && {
        minHeight: ownerState.minSize,
        maxHeight: ownerState.maxSize,
      }),
    },
  }),
)

interface ResizeHandleProps {
  anchor: NonNullable<ResizableDrawerProps['anchor']>
  handleSize: NonNullable<ResizableDrawerProps['handleSize']>
  dragAreaSize: NonNullable<ResizableDrawerProps['dragAreaSize']>
}

const ResizeHandle = styled('div', {
  shouldForwardProp: excludeProps('anchor', 'handleSize', 'dragAreaSize'),
})<ResizeHandleProps>(({ theme, anchor, handleSize, dragAreaSize }) => {
  const baseStyles: CSSObject = {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    position: 'fixed',
    zIndex: theme.zIndex.drawer + 1,
  }
  switch (anchor) {
    case 'left':
    case 'right': {
      return {
        ...baseStyles,
        flexDirection: 'row',
        width: dragAreaSize,
        height: '100%',
        top: 0,
        bottom: 0,
        cursor: 'col-resize',
        '& > div': {
          width: `${handleSize}px`,
          height: '100%',
          backgroundColor: 'transparent',
          transition: `${theme.transitions.create(['background-color'], {
            duration: theme.transitions.duration.short,
          })}`,
        },
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
    }
    case 'top':
    case 'bottom': {
      return {
        ...baseStyles,
        flexDirection: 'column',
        height: dragAreaSize,
        width: '100%',
        left: 0,
        right: 0,
        cursor: 'row-resize',
        '& > div': {
          height: `${handleSize}px`,
          width: '100%',
          backgroundColor: 'transparent',
          transition: `${theme.transitions.create(['background-color'], {
            duration: theme.transitions.duration.short,
          })}`,
        },
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
    }
  }
})

export const ResizableDrawer = React.forwardRef(
  (props, ref: React.ForwardedRef<HTMLDivElement>) => {
    const {
      anchor = 'left',
      className,
      children,
      componentsProps = {},
      maxSize = MAX_DRAWER_SIZE,
      minSize = MIN_DRAWER_SIZE,
      initialSize = DRAWER_SIZE,
      dragAreaSize = DRAG_AREA_SIZE,
      handleSize = HANDLE_SIZE,
      variant = 'permanent',
      ...other
    } = props

    const handlePosition = dragAreaSize / 2

    const [drawerSize, setDrawerSize] = React.useState(initialSize)
    const [isDragging, setIsDragging] = React.useState(false)

    const handleMouseDown = (_event: React.MouseEvent<HTMLDivElement>) => {
      setIsDragging(true)
      document.addEventListener('mouseup', handleMouseUp, true)
      document.addEventListener('mousemove', handleMouseMove, true)
    }

    const handleMouseUp = (_event: MouseEvent) => {
      setIsDragging(false)
      document.removeEventListener('mouseup', handleMouseUp, true)
      document.removeEventListener('mousemove', handleMouseMove, true)
    }

    const handleMouseMove = React.useCallback(
      (event: MouseEvent) => {
        event.stopPropagation()
        event.preventDefault()

        switch (anchor) {
          case 'left': {
            let newWidth = event.clientX - document.body.offsetLeft
            if (newWidth < minSize) {
              newWidth = minSize
            } else if (newWidth > maxSize) {
              newWidth = maxSize
            }
            setDrawerSize(newWidth)
            break
          }
          case 'right': {
            let newWidth =
              document.body.offsetWidth -
              (event.clientX - document.body.offsetLeft)
            if (newWidth < minSize) {
              newWidth = minSize
            } else if (newWidth > maxSize) {
              newWidth = maxSize
            }
            setDrawerSize(newWidth)
            break
          }
          case 'top': {
            let newHeight = event.clientY - document.body.offsetTop
            if (newHeight < minSize) {
              newHeight = minSize
            } else if (newHeight > maxSize) {
              newHeight = maxSize
            }
            setDrawerSize(newHeight)
            break
          }
          case 'bottom': {
            let newHeight =
              document.body.offsetHeight -
              (event.clientY - document.body.offsetTop)
            if (newHeight < minSize) {
              newHeight = minSize
            } else if (newHeight > maxSize) {
              newHeight = maxSize
            }
            setDrawerSize(newHeight)
            break
          }
        }
      },
      [anchor, maxSize, minSize],
    )

    const getDrawerSizeStyle = React.useCallback(
      (size: number) => {
        switch (anchor) {
          case 'left':
          case 'right': {
            return { width: `${size}px` }
          }
          case 'top':
          case 'bottom': {
            return { height: `${size}px` }
          }
        }
      },
      [anchor],
    )

    const getHandlePositionStyle = React.useCallback(
      (size: number) => {
        return {
          [anchor]: `${size - handlePosition}px`,
        }
      },
      [anchor, handlePosition],
    )

    const ownerState = {
      anchor,
      children,
      componentsProps,
      maxSize,
      minSize,
      isDragging,
      ...other,
    }

    const classes = useUtilityClasses(ownerState)

    const paperProps = {
      ...componentsProps.paper,
      style: getDrawerSizeStyle(drawerSize),
    }

    return (
      <ResizableDrawerRoot
        {...componentsProps.drawer}
        {...other}
        variant={variant}
        className={clsx(
          classes.root,
          className,
          componentsProps.drawer?.className,
        )}
        anchor={anchor}
        ownerState={ownerState}
        ref={ref}
        style={{
          ...componentsProps.drawer?.style,
          ...getDrawerSizeStyle(drawerSize),
        }}
        PaperProps={paperProps}
        ModalProps={componentsProps.modal}
      >
        <div
          style={getHandlePositionStyle(drawerSize)}
          onMouseDown={handleMouseDown}
        >
          <ResizeHandle
            className={clsx(classes.dragArea)}
            style={getHandlePositionStyle(drawerSize)}
            anchor={anchor}
            handleSize={handleSize}
            dragAreaSize={dragAreaSize}
          >
            <div className={classes.handle} />
          </ResizeHandle>
        </div>
        {children}
      </ResizableDrawerRoot>
    )
  },
) as (props: ResizableDrawerProps) => JSX.Element

function useUtilityClasses(ownerState: ResizableDrawerOwnerState) {
  const { classes, isDragging } = ownerState

  const slots = {
    root: ['root'],
    dragArea: ['dragArea', isDragging && 'dragAreaDragging'],
    handle: ['handle', isDragging && 'handleDragging'],
  }

  return composeClasses(slots, getResizableDrawerUtilityClass, classes)
}
