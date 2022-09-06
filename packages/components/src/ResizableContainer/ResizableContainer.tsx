/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { styled, useThemeProps } from '@mui/material'
import composeClasses from '@mui/utils/composeClasses'
import useEnhancedEffect from '@mui/utils/useEnhancedEffect.js'
import clsx from 'clsx'

import { useDidUpdate, useForceUpdate, usePrevious } from '@monorail/utils'

import { ResizeHandle } from '../ResizeHandle.js'
import { getResizableContainerUtilityClass } from './resizableContainerClasses.js'
import { ResizableContainerContext } from './ResizableContainerContext.js'
import type { ResizableContainerDirection, ResizableContainerProps } from './resizableContainerProps.js'
import type { ElementSizeChangeEvent, ResizeEventMap } from './ResizeEventEmitter.js'
import { ResizeEventEmitter } from './ResizeEventEmitter.js'
import { getFinalSize, parseBoundValue } from './util.js'

interface ResizableContainerOwnerState extends ResizableContainerProps {}

interface ResizableContainerRootProps {
  ownerState: ResizableContainerOwnerState
}

const ResizableContainerRoot = styled('div', {
  name: 'MonorailResizableContainer',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root,
})<ResizableContainerRootProps>(({ ownerState }) => ({
  display: 'flex',
  flexDirection: ownerState.direction,
  justifyContent: 'flex-start',
  alignItems: 'stretch',
  alignContent: 'stretch',
  position: 'relative',
  width: '100%',
  height: '100%',
}))

export const ResizableContainer = React.forwardRef(function ResizableContainer(
  inProps: ResizableContainerProps,
  ref: React.ForwardedRef<HTMLDivElement>,
) {
  const props = useThemeProps({
    name: 'MonorailResizableContainer',
    props: inProps,
  })

  const {
    direction = 'row',
    className,
    children,
    maxDepth: maxRecDepth = 100,
    windowResizeAware = false,
    ...other
  } = props

  const innerRef = React.useRef<HTMLDivElement>(null)
  React.useImperativeHandle(ref, () => innerRef.current!)

  const parentRef = React.useRef<HTMLElement | null>(null)
  React.useImperativeHandle(parentRef, () => innerRef.current?.parentElement ?? null!)

  const [flexData, setFlexData] = React.useState<Array<FlexData>>([])

  const previousPosition = React.useRef(0)
  const previousChildren = usePrevious(children as Array<ResizeChild>)
  const previousDirection = usePrevious(direction)

  const forceUpdate = useForceUpdate()

  const events = React.useRef(new ResizeEventEmitter())

  const processedChildren = React.useRef<Array<ResizeChild>>([])
  const activeElements = React.useRef<Array<ResizeChild>>([])

  /**
   * Computes initial flex values for each child element of this container
   */
  const computeInitialFlexData = React.useCallback((): Array<FlexData> => {
    const children = getValidChildren(props.children)

    const pixelFlex = computePixelFlex(innerRef.current, direction)

    const initialFlexData = children.map(child => {
      const props = child.props
      return {
        sizeFlex: computeSizeBound(parentRef.current, direction, child.props.size, Number.MAX_VALUE) * pixelFlex,
        maxFlex: computeSizeBound(parentRef.current, direction, child.props.maxSize, Number.MAX_VALUE) * pixelFlex,
        minFlex: computeSizeBound(parentRef.current, direction, child.props.minSize, 1) * pixelFlex,
        constrained: props.flex !== undefined,
        flex: props.flex || 0,
        type: child.type,
      } as InitialFlexData
    })

    let flexData = initialFlexData

    for (let iterations = 0; iterations < maxRecDepth; iterations++) {
      let hasContraint = false
      const freeElements = computeFreeElements(flexData)
      const freeFlex = computeFreeFlex(flexData)

      flexData = flexData.map(entry => {
        if (entry.type === getComponentType(ResizeHandle)) {
          return entry
        }

        const proposedFlex = !entry.constrained ? freeFlex / freeElements : entry.flex

        const constrainedFlex = Math.min(entry.sizeFlex, Math.min(entry.maxFlex, Math.max(entry.minFlex, proposedFlex)))
        const constrained = entry.constrained || constrainedFlex !== proposedFlex

        hasContraint = hasContraint || constrained

        return {
          ...entry,
          flex: constrainedFlex,
          constrained,
        }
      })

      if (!hasContraint) {
        break
      }
    }

    return flexData.map(entry => ({
      flex: entry.type !== getComponentType(ResizeHandle) ? entry.flex : 0.0,
      ref: React.createRef(),
    }))
  }, [maxRecDepth, props.children, direction])

  /**
   * Returns the offsetWidth or offsetHeight of the given DOM element,
   * based on whether this container is a row or column
   */
  const getSize = React.useCallback(
    (element: ResizeChild | undefined): number => {
      const domElement = element?.ref.current
      switch (direction) {
        case 'row':
          return domElement?.offsetWidth ?? 0
        case 'column':
          return domElement?.offsetHeight ?? 0
      }
    },
    [direction],
  )

  /**
   * Returns whether or not a resize should be propagated to neighboring resizable elements
   */
  const shouldPropagate = React.useCallback((idx: number, direction: number) => {
    if (direction > 0) {
      if (idx < processedChildren.current.length - 2) {
        const child = processedChildren.current[idx + 2]
        return child.type === getComponentType(ResizeHandle) && child.props.propagate
      }
    } else if (idx > 2) {
      const child = processedChildren.current[idx - 2]
      return child.type === getComponentType(ResizeHandle) && child.props.propagate
    }

    return false
  }, [])

  /**
   * Given a ResizeHandle index and a raw mouse position offset, computes the
   * amount of pixels that a descendent element can stretch,
   * taking into account propagation of the resize to neighboring elements.
   */
  const computeAvailableStretch = React.useCallback(
    (index: number, offset: number): number => {
      const childIdx = offset < 0 ? index + 1 : index - 1
      const child = processedChildren.current[childIdx]
      const size = getSize(child)
      const maxSize = child?.props.maxSize ?? 0
      const availableStretch = maxSize - size
      if (availableStretch < Math.abs(offset)) {
        if (shouldPropagate(index, -offset)) {
          const nextOffset = Math.sign(offset) * (Math.abs(offset) - availableStretch)

          return availableStretch + computeAvailableStretch(offset < 0 ? index + 2 : index - 2, nextOffset)
        }
      }

      return Math.min(availableStretch, Math.abs(offset))
    },
    [getSize, shouldPropagate],
  )

  /**
   * Given a ResizeHandle index and a raw mouse position offset, computes the
   * amount of pixels that a descendent element can shrink, taking into account
   * propagation of the resize to neighboring elements.
   */
  const computeAvailableShrink = React.useCallback(
    (index: number, offset: number): number => {
      const childIdx = offset > 0 ? index + 1 : index - 1
      const child = processedChildren.current[childIdx]
      const size = getSize(child)
      const minSize = Math.max(child?.props.minSize ?? 0, 0)
      const availableShrink = size - minSize
      if (availableShrink < Math.abs(offset)) {
        if (shouldPropagate(index, offset)) {
          const nextOffset = Math.sign(offset) * (Math.abs(offset) - availableShrink)

          return availableShrink + computeAvailableShrink(offset > 0 ? index + 2 : index - 2, nextOffset)
        }
      }

      return Math.min(availableShrink, Math.abs(offset))
    },
    [getSize, shouldPropagate],
  )

  /**
   * Computes the amount the ResizeHandle at the given index should move
   */
  const computeAvailableOffset = React.useCallback(
    (idx: number, offset: number) => {
      const stretch = computeAvailableStretch(idx, offset)
      const shrink = computeAvailableShrink(idx, offset)
      const availableOffset = Math.min(stretch, shrink) * Math.sign(offset)
      return availableOffset
    },
    [computeAvailableShrink, computeAvailableStretch],
  )

  /**
   * Adjusts flex after a dispatch to ensure total flex of modified
   * elements remains the same
   */
  const adjustFlex = React.useCallback(
    (elements: Array<ResizeChild>) => {
      const diffFlex = elements.reduce((sum, element) => {
        const idx = element.props.index!
        const previousFlex = element.props.flex
        const nextFlex = flexData[idx].flex
        return sum + (previousFlex - nextFlex) / elements.length
      }, 0)

      elements.forEach(element => {
        flexData[element.props.index].flex += diffFlex
      })
    },
    [flexData],
  )

  const handleStartResize = React.useCallback(
    (data: ResizeEventMap['startResize']) => {
      const pos = data.source === 'touch' ? data.event.changedTouches[0] : data.event

      switch (direction) {
        case 'row':
          document.body.style.cursor = 'col-resize'
          previousPosition.current = pos.clientX
          break
        case 'column':
          document.body.style.cursor = 'row-resize'
          previousPosition.current = pos.clientY
          break
      }

      activeElements.current = [processedChildren.current[data.index - 1], processedChildren.current[data.index + 1]]
    },
    [direction],
  )

  const handleStopResize = React.useCallback((_: ResizeEventMap['stopResize']) => {
    document.body.style.cursor = ''
  }, [])

  const addOffset = React.useCallback(
    (element: ResizeChild, offset: number) => {
      const size = getSize(element)
      const index = element.props.index
      const newSize = Math.max(size + offset, 0)
      const currentFlex = flexData[index].flex
      const newFlex =
        currentFlex > 0 ? (currentFlex * newSize) / size : computePixelFlex(innerRef.current, direction) * newSize

      flexData[index].flex = !isFinite(newFlex) || isNaN(newFlex) ? 0 : newFlex
    },
    [flexData, getSize, direction],
  )

  /**
   * Recursively sets the flex values of descendent elements, starting
   * at a ResizeHandle index
   */
  const dispatchStretch = React.useCallback(
    (index: number, offset: number): Array<ResizeChild> => {
      const childIndex = offset < 0 ? index + 1 : index - 1

      if (childIndex < 0 || childIndex > processedChildren.current.length - 1) {
        return []
      }

      const child = processedChildren.current[childIndex]
      const currentSize = getSize(child)
      const newSize = Math.min(child.props.maxSize, currentSize + Math.abs(offset))
      const stretchAmount = newSize - currentSize

      addOffset(child, stretchAmount)

      if (stretchAmount < Math.abs(offset)) {
        const nextIdx = index - Math.sign(offset) * 2
        const nextOffset = Math.sign(offset) * (Math.abs(offset) - stretchAmount)
        return [child, ...dispatchStretch(nextIdx, nextOffset)]
      }

      return [child]
    },
    [addOffset, getSize],
  )

  /**
   * Recursively sets the flex values of descendent elements, starting
   * at a ResizeHandle index
   */
  const dispatchShrink = React.useCallback(
    (index: number, offset: number): Array<ResizeChild> => {
      const childIndex = offset > 0 ? index + 1 : index - 1

      if (childIndex < 0 || childIndex > processedChildren.current.length - 1) {
        return []
      }

      const child = processedChildren.current[childIndex]
      const currentSize = getSize(child)
      const newSize = Math.max(child.props.minSize, currentSize - Math.abs(offset))
      const shrinkAmount = newSize - currentSize

      addOffset(child, shrinkAmount)

      if (Math.abs(shrinkAmount) < Math.abs(offset)) {
        const nextIndex = index + Math.sign(offset) * 2
        const nextOffset = Math.sign(offset) * (Math.abs(offset) + shrinkAmount)
        return [child, ...dispatchShrink(nextIndex, nextOffset)]
      }

      return [child]
    },
    [addOffset, getSize],
  )

  /**
   * Sets the flex values of descendent elements, starting at a ResizeHandle index
   */
  const dispatchOffset = React.useCallback(
    (idx: number, offset: number) => {
      return [...dispatchStretch(idx, offset), ...dispatchShrink(idx, offset)]
    },
    [dispatchShrink, dispatchStretch],
  )

  const handleResize = React.useCallback(
    (data: ResizeEventMap['resize']) => {
      const position = data.source === 'touch' ? data.event.changedTouches[0] : data.event
      const offset = getOffset(previousPosition, direction, position, data.target)

      switch (direction) {
        case 'column':
          previousPosition.current = position.clientY
          break
        case 'row':
        default:
          previousPosition.current = position.clientX
          break
      }

      if (offset) {
        const availableOffset = computeAvailableOffset(data.index, offset)
        if (availableOffset) {
          activeElements.current = dispatchOffset(data.index, availableOffset)
          adjustFlex(activeElements.current)
          forceUpdate()
        }
      }
    },
    [adjustFlex, computeAvailableOffset, direction, dispatchOffset, forceUpdate],
  )

  const handleElementSizeChange = React.useCallback(
    (data: ElementSizeChangeEvent) => {
      queueMicrotask(() => {
        const size = getSize(processedChildren.current[data.index])
        const offset = computeSizeBound(parentRef.current, direction, data.size, 1) - size
        const resizeDirection = data.direction
        const splitterIndex = data.index + resizeDirection
        const availableOffset = computeAvailableOffset(splitterIndex, resizeDirection * offset)

        activeElements.current = []

        if (availableOffset) {
          activeElements.current = dispatchOffset(splitterIndex, availableOffset)
          adjustFlex(activeElements.current)
        }
      })
    },
    [adjustFlex, computeAvailableOffset, dispatchOffset, getSize, direction],
  )

  useDidUpdate(() => {
    const children = getValidChildren(props.children)
    if (
      children.length !== flexData.length ||
      previousDirection !== direction ||
      hasFlexChanged(children, previousChildren)
    ) {
      setFlexData(computeInitialFlexData())
    }
  })

  useEnhancedEffect(() => {
    setFlexData(computeInitialFlexData())
    forceUpdate()
    if (window && windowResizeAware) {
      const handleWindowResize = () => {
        setFlexData(computeInitialFlexData())
        forceUpdate()
      }
      window.addEventListener('resize', handleWindowResize)
      return () => {
        window.removeEventListener('resize', handleWindowResize)
      }
    }
  }, [windowResizeAware])

  useEnhancedEffect(() => {
    events.current.subscribe('elementSizeChange', handleElementSizeChange)
    events.current.subscribe('stopResize', handleStopResize)
    events.current.subscribe('startResize', handleStartResize)
    events.current.subscribe('resize', handleResize)
    return () => {
      events.current.unsubscribe()
    }
  }, [handleStartResize, handleResize, handleElementSizeChange])

  const ownerState = {
    direction,
    children,
    ...other,
  }

  const classes = useUtilityClasses(ownerState)

  const renderChildren = () => {
    processedChildren.current = React.Children.map(getValidChildren(children), (child, index) => {
      const childFlexData: FlexData = flexData[index]
      if (!childFlexData) {
        return <div />
      }
      const props = {
        ...child.props,
        flex: childFlexData.flex,
        ref: childFlexData.ref,
        index,
        ...(child.type !== getComponentType(ResizeHandle) && {
          maxSize: computeSizeBound(parentRef.current, direction, child.props.maxSize, Number.MAX_VALUE),
          minSize: computeSizeBound(parentRef.current, direction, child.props.minSize, 1),
          size: computeSizeBound(parentRef.current, direction, child.props.size, Number.MAX_VALUE),
        }),
      }
      return React.cloneElement(child, props)
    }) as Array<ResizeChild>
    return processedChildren.current
  }

  const contextValue: ResizableContainerContext = {
    events: events.current,
    direction,
  }

  return (
    <ResizableContainerRoot {...other} className={clsx(classes.root, className)} ownerState={ownerState} ref={innerRef}>
      <ResizableContainerContext.Provider value={contextValue}>{renderChildren()}</ResizableContainerContext.Provider>
    </ResizableContainerRoot>
  )
}) as (props: ResizableContainerProps) => JSX.Element

function useUtilityClasses(ownerState: ResizableContainerOwnerState) {
  const { classes } = ownerState

  const slots = {
    root: ['root'],
  }

  return composeClasses(slots, getResizableContainerUtilityClass, classes)
}

/**
 * Converts a single value into an array, or return the value if it is already an array
 */
function toArray<T>(value: T | Array<T>): Array<T> {
  if (Array.isArray(value)) {
    return value
  }
  return [value]
}

/**
 * Returns the component type from a React component, which can be used to determine
 * whether or not an element is an instance of this component
 */
function getComponentType(Component: React.JSXElementConstructor<any>) {
  if (process.env.NODE_ENV === 'development') {
    return (<Component />).type as React.JSXElementConstructor<any>
  }
  return Component
}

/**
 * Return all truthy children
 */
function getValidChildren(children: React.ReactElement | null | Array<React.ReactElement | null>): Array<ResizeChild> {
  if (children === null) {
    return []
  }
  return toArray(children).filter(child => !!child) as Array<ResizeChild>
}

interface ResizeChildProps {
  minSize: number
  maxSize: number
  size: number
  flex: number
  propagate: boolean
  direction: ResizableContainerDirection
  index: number
}

interface ResizeChild extends React.ReactElement<ResizeChildProps> {
  ref: React.RefObject<HTMLElement>
}

interface InitialFlexData {
  maxFlex: number
  sizeFlex: number
  minFlex: number
  constrained: boolean
  flex: number
  type: React.JSXElementConstructor<any>
}

interface FlexData {
  flex: number
  ref: React.RefObject<HTMLElement>
}

/**
 * Converts an element's width or height into a decimal value
 */
function computePixelFlex(target: HTMLElement | null, direction: ResizableContainerDirection): number {
  if (!target) {
    return 0.0
  }
  switch (direction) {
    case 'column': {
      if (target.offsetHeight === 0.0) {
        return 0.0
      }
      return 1.0 / target.offsetHeight
    }
    case 'row': {
      if (target.offsetWidth === 0.0) {
        return 0.0
      }
      return 1.0 / target.offsetWidth
    }
  }
}

/**
 * Computes how much room there is to flex into, taking all elements into account
 */
function computeFreeFlex(flexData: Array<InitialFlexData>): number {
  return flexData.reduce((freeFlex, entry) => {
    if (entry.type !== getComponentType(ResizeHandle) && entry.constrained) {
      return freeFlex - entry.flex
    }
    return freeFlex
  }, 1.0)
}

/**
 * Computes the number of elements that do not currently have a `flex` value
 */
function computeFreeElements(flexData: Array<InitialFlexData>): number {
  return flexData.reduce((sum, entry) => {
    if (entry.type !== getComponentType(ResizeHandle) && !entry.constrained) {
      return sum + 1
    }
    return sum
  }, 0.0)
}

/**
 * Given a percentage, decimal, or pixel value, computes the decimal percentage of the
 * containing element that the value occupies
 */
function computeSizeBound(
  containingElement: HTMLElement | null,
  direction: ResizableContainerDirection,
  bound: string | number | undefined,
  def: number,
): number {
  const value = parseBoundValue(bound)
  if (value === null || !containingElement) {
    return def
  }
  switch (direction) {
    case 'row': {
      return Math.floor(getFinalSize(containingElement.offsetWidth, value))
    }
    case 'column': {
      return Math.floor(getFinalSize(containingElement.offsetHeight, value))
    }
  }
}

/**
 * Computes the pixel amount that the mouse (or finger, if on a touchscreen) moved from the
 * previous position
 */
function getOffset(
  previousPosition: React.MutableRefObject<number>,
  direction: ResizableContainerDirection,
  pos: { clientX: number; clientY: number },
  target: HTMLElement,
): number {
  const { top, bottom, left, right } = target.getBoundingClientRect()

  switch (direction) {
    case 'row': {
      const offset = pos.clientX - previousPosition.current
      if (offset > 0) {
        if (pos.clientX > left) {
          return offset
        }
      } else {
        if (pos.clientX < right) {
          return offset
        }
      }
      break
    }
    case 'column': {
      const offset = pos.clientY - previousPosition.current
      if (offset > 0) {
        if (pos.clientY >= top) {
          return offset
        }
      } else {
        if (pos.clientY <= bottom) {
          return offset
        }
      }
      break
    }
  }
  return 0
}

/**
 * Determines whether or not the `flex` prop of a children of `ResizableContainer` was altered externally
 */
function hasFlexChanged(children: Array<ResizeChild>, previousChildren: Array<ResizeChild>) {
  const previousChildrenFlex = getValidChildren(previousChildren).map(child => child.props.flex ?? 0)
  const childrenFlex = getValidChildren(children).map(child => child.props.flex ?? 0)
  return !childrenFlex.every((flex, index) => {
    return flex === previousChildrenFlex[index]
  })
}
