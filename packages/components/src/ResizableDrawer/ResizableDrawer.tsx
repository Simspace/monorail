import React from 'react'
import type { CSSInterpolation, SlideProps, Theme } from '@mui/material'
import { capitalize, styled, useTheme } from '@mui/material'
import composeClasses from '@mui/utils/composeClasses'
import clsx from 'clsx'

import { Modal } from '../Modal.js'
import { Paper } from '../Paper.js'
import { ResizeHandle } from '../ResizeHandle.js'
import { Slide } from '../Slide.js'
import {
  getResizableDrawerUtilityClass,
  resizableDrawerClasses,
} from './resizableDrawerClasses.js'
import type { ResizableDrawerProps } from './resizableDrawerProps.js'

const DRAWER_SIZE = 240
const MIN_DRAWER_SIZE = 60
const MAX_DRAWER_SIZE = 600
const DRAG_AREA_SIZE = 10

const oppositeAnchorPosition: Record<
  NonNullable<ResizableDrawerProps['anchor']>,
  NonNullable<ResizableDrawerProps['anchor']>
> = {
  top: 'bottom',
  bottom: 'top',
  left: 'right',
  right: 'left',
}

const oppositeAnchorDirection: Record<
  NonNullable<ResizableDrawerProps['anchor']>,
  NonNullable<SlideProps['direction']>
> = {
  top: 'down',
  bottom: 'up',
  left: 'right',
  right: 'left',
}

interface ResizableDrawerOwnerState
  extends Omit<ResizableDrawerProps, 'anchor' | 'transitionDuration'> {
  anchor: NonNullable<ResizableDrawerProps['anchor']>
  isDragging: boolean
  transitionDuration: {
    enter: number
    exit: number
  }
}

interface ResizableDrawerRootProps {
  ownerState: ResizableDrawerOwnerState
}

const overridesResolver = (
  props: ResizableDrawerRootProps,
  styles: Record<string, CSSInterpolation>,
) => {
  const { ownerState } = props

  return [
    styles.root,
    ownerState.variant === 'persistent' && styles.docked,
    styles.modal,
  ]
}

const ResizableDrawerDockedRoot = styled('div', {
  name: 'MonorailResizableDrawer',
  slot: 'Docked',
  overridesResolver,
})<ResizableDrawerRootProps>(({ ownerState, theme }) => ({
  position: 'relative',
  zIndex: theme.zIndex.drawer,
  flexShrink: 0,
  transition: theme.transitions.create(
    [`margin-${oppositeAnchorPosition[ownerState.anchor]}`, ownerState.anchor],
    {
      duration:
        ownerState.open === true
          ? ownerState.transitionDuration.exit
          : ownerState.transitionDuration.enter,
    },
  ),
  ...((ownerState.anchor === 'left' || ownerState.anchor === 'right') && {
    minWidth: ownerState.minSize,
    maxWidth: ownerState.maxSize,
  }),
  ...((ownerState.anchor === 'top' || ownerState.anchor === 'bottom') && {
    minHeight: ownerState.minSize,
    maxHeight: ownerState.maxSize,
  }),
  [`& .${resizableDrawerClasses.paper}`]: {
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
}))

const ResizableDrawerTemporaryContainer = styled('div', {
  name: 'MonorailResizableDrawer',
  slot: 'TemporaryContainer',
  overridesResolver: (_, styles) => [styles.temporaryContainer],
})({
  width: 'min-content',
  height: '100%',
  [`& .${resizableDrawerClasses.paper}`]: {
    boxSizing: 'border-box',
    overflowX: 'hidden',
  },
})

const ResizableDrawerModalRoot = styled(Modal, {
  name: 'MonorailResizableDrawer',
  slot: 'Root',
  overridesResolver,
})(({ theme }) => ({
  zIndex: theme.zIndex.drawer,
}))

const ResizableDrawerPaper = styled(Paper, {
  name: 'MonorailResizableDrawer',
  slot: 'Paper',
  overridesResolver: (props: ResizableDrawerRootProps, styles) => {
    const { ownerState } = props

    return [
      styles.paper,
      styles[`paperAnchor${capitalize(ownerState.anchor)}`],
      ownerState.variant !== 'temporary' &&
        styles[`paperAnchorDocked${capitalize(ownerState.anchor)}`],
    ]
  },
})<ResizableDrawerRootProps>(({ ownerState, theme }) => ({
  overflowY: 'auto',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  flex: '1 0 auto',
  zIndex: theme.zIndex.drawer,
  ...(ownerState.variant === 'temporary' && {
    transition: theme.transitions.create(
      [
        `margin-${oppositeAnchorPosition[ownerState.anchor]}`,
        ownerState.anchor,
      ],
      {
        duration:
          ownerState.open === true
            ? theme.transitions.duration.leavingScreen
            : theme.transitions.duration.enteringScreen,
      },
    ),
  }),
}))

export function isHorizontal(anchor: 'left' | 'right' | 'top' | 'bottom') {
  return ['left', 'right'].indexOf(anchor) !== -1
}

export function getAnchor(
  theme: Theme,
  anchor: 'left' | 'right' | 'top' | 'bottom',
) {
  return theme.direction === 'rtl' && isHorizontal(anchor)
    ? oppositeAnchorPosition[anchor]
    : anchor
}

/**
 * A precomposed container that can be resized using the mouse.
 *
 * @note Though it is techincally a `Drawer`, it can be made permanent to act as a resizable region of the page.
 *
 * Demos:
 *
 * - [ResizableDrawer](https://simspace.gitlab.io/engineering/ux-engineering/monorail/main/storybook/?path=/story/navigation-drawer--resizable-drawer)
 */
export const ResizableDrawer = React.forwardRef((props, ref) => {
  const theme = useTheme()

  const defaultTransitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  }

  const {
    anchor: anchorProp = 'left',
    elevation,
    className,
    children,
    slotProps = {},
    maxSize = MAX_DRAWER_SIZE,
    minSize = MIN_DRAWER_SIZE,
    initialSize = DRAWER_SIZE,
    dragAreaSize = DRAG_AREA_SIZE,
    variant = 'persistent',
    open = true,
    style,
    onClose,
    hideBackdrop,
    transitionDuration = defaultTransitionDuration,
    ...other
  } = props

  const mounted = React.useRef(false)
  React.useEffect(() => {
    mounted.current = true
  }, [])

  const anchorInvariant = getAnchor(theme, anchorProp)
  const anchor = anchorProp

  const handlePosition = dragAreaSize / 2

  const [drawerSize, setDrawerSize] = React.useState(initialSize)
  const [isDragging, setIsDragging] = React.useState(false)

  const drawerRef = React.useRef<HTMLDivElement | null>(null)

  React.useImperativeHandle(ref, () => drawerRef.current!)

  const handleMouseDown = (
    _event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>,
  ) => {
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

      const boundingClientRect = drawerRef.current?.getBoundingClientRect()

      switch (anchor) {
        case 'left': {
          const drawerLeftEdge = boundingClientRect?.x ?? 0
          let newWidth = event.clientX - document.body.offsetLeft

          if (variant === 'persistent') {
            newWidth = newWidth - drawerLeftEdge
          }

          if (newWidth < minSize) {
            newWidth = minSize
          } else if (newWidth > maxSize) {
            newWidth = maxSize
          }
          setDrawerSize(newWidth)
          break
        }
        case 'right': {
          const viewportWidth = window.innerWidth
          const drawerLeftEdge = boundingClientRect?.x ?? 0
          let newWidth = viewportWidth - event.clientX

          if (variant === 'persistent') {
            const drawerWidth = boundingClientRect?.width ?? 0

            newWidth = newWidth - (viewportWidth - drawerLeftEdge - drawerWidth)
          }
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

          if (variant === 'persistent') {
            newHeight = newHeight - (boundingClientRect?.y ?? 0)
          }

          if (newHeight < minSize) {
            newHeight = minSize
          } else if (newHeight > maxSize) {
            newHeight = maxSize
          }
          setDrawerSize(newHeight)
          break
        }
        case 'bottom': {
          const viewportHeight = window.innerHeight
          const drawerTopEdge = boundingClientRect?.y ?? 0

          let newHeight = viewportHeight - event.clientY

          if (variant === 'persistent') {
            const drawerHeight = boundingClientRect?.height ?? 0

            newHeight =
              newHeight - (viewportHeight - drawerTopEdge - drawerHeight)
          }
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
    [anchor, maxSize, minSize, variant],
  )

  const getDrawerStyle = React.useCallback(
    (size: number, isDragging: boolean) => {
      switch (anchorInvariant) {
        case 'left':
        case 'right': {
          return {
            width: `${size}px`,
            [anchorInvariant]: 0,
            [`margin${capitalize(oppositeAnchorPosition[anchorInvariant])}`]: 0,
            ...(variant === 'persistent' &&
              !open && {
                [anchorInvariant]: `-${size}px`,
                [`margin${capitalize(
                  oppositeAnchorPosition[anchorInvariant],
                )}`]: `-${size}px`,
              }),
            ...(isDragging && {
              transition: 'none',
            }),
          }
        }
        case 'top':
        case 'bottom': {
          return {
            height: `${size}px`,
            ...(variant === 'persistent' &&
              !open && {
                [anchorInvariant]: `-${size}px`,
                [`margin${capitalize(
                  oppositeAnchorPosition[anchorInvariant],
                )}`]: `-${size}px`,
              }),
            ...(isDragging && {
              transition: 'none',
            }),
          }
        }
      }
    },
    [variant, anchorInvariant, open],
  )

  const getHandleStyle = React.useCallback(
    (size: number) => {
      return {
        [anchor]: `${size - handlePosition}px`,
        opacity: open ? 1 : 0,
      }
    },
    [anchor, handlePosition, open],
  )

  const normalizedTransitionDuration =
    typeof transitionDuration === 'number'
      ? {
          enter: transitionDuration,
          exit: transitionDuration,
        }
      : { ...defaultTransitionDuration, ...transitionDuration }

  const ownerState = {
    anchor,
    children,
    slotProps,
    maxSize,
    minSize,
    isDragging,
    variant,
    transitionDuration: normalizedTransitionDuration,
    ...other,
  }

  const classes = useUtilityClasses(ownerState)

  const paperProps = {
    ...slotProps.paper,
    elevation: open ? elevation ?? slotProps.paper?.elevation : 0,
  }

  const orientation =
    anchor === 'left' || anchor === 'right' ? 'vertical' : 'horizontal'

  const resizeHandle = (
    <ResizeHandle
      style={getHandleStyle(drawerSize)}
      isDragging={isDragging}
      orientation={orientation}
      onDragStart={handleMouseDown}
      sx={theme => ({
        position: 'absolute',
        transition: theme.transitions.create('opacity', {
          duration: theme.transitions.duration.short,
        }),
      })}
    />
  )

  const drawerPaper = (
    <ResizableDrawerPaper
      square
      {...paperProps}
      className={clsx(classes.paper, paperProps?.className)}
      ownerState={ownerState}
    >
      {children}
    </ResizableDrawerPaper>
  )

  const temporaryDrawerPaper = (
    <ResizableDrawerPaper
      square
      {...paperProps}
      className={clsx(classes.paper, paperProps?.className)}
      style={getDrawerStyle(drawerSize, isDragging)}
      ownerState={ownerState}
    >
      {children}
    </ResizableDrawerPaper>
  )

  if (variant === 'persistent') {
    return (
      <ResizableDrawerDockedRoot
        className={clsx(classes.root, classes.docked, className)}
        ownerState={ownerState}
        ref={drawerRef}
        style={{
          ...getDrawerStyle(drawerSize, isDragging),
          ...style,
        }}
        {...other}
      >
        {resizeHandle}
        {drawerPaper}
      </ResizableDrawerDockedRoot>
    )
  }

  return (
    <ResizableDrawerModalRoot
      className={clsx(classes.root, classes.modal, className)}
      open={open}
      onClose={onClose}
      ref={drawerRef}
      hideBackdrop={hideBackdrop}
      {...other}
    >
      <Slide
        appear={mounted.current}
        direction={oppositeAnchorDirection[anchorInvariant]}
        in={open}
        timeout={transitionDuration}
      >
        <ResizableDrawerTemporaryContainer
          className={classes.temporaryContainer}
        >
          {resizeHandle}
          {temporaryDrawerPaper}
        </ResizableDrawerTemporaryContainer>
      </Slide>
    </ResizableDrawerModalRoot>
  )
}) as (props: ResizableDrawerProps) => JSX.Element

function useUtilityClasses(ownerState: ResizableDrawerOwnerState) {
  const { classes, variant, isDragging, anchor } = ownerState

  const slots = {
    root: ['root'],
    docked: [variant === 'persistent' && 'docked'],
    temporaryContainer: ['temporaryContainer'],
    modal: ['modal'],
    paper: [
      'paper',
      `paperAnchor${capitalize(anchor)}`,
      variant !== 'temporary' && `paperAnchorDocked${capitalize(anchor)}`,
    ],
    dragArea: ['dragArea', isDragging && 'dragAreaDragging'],
    handle: ['handle', isDragging && 'handleDragging'],
  }

  return composeClasses(slots, getResizableDrawerUtilityClass, classes)
}
