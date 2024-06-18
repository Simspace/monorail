/* eslint-disable no-console */
import React from 'react'
import type { ImperativePanelHandle } from 'react-resizable-panels'
import { Panel } from 'react-resizable-panels'
import { styled, useThemeProps } from '@mui/material'
import composeClasses from '@mui/utils/composeClasses'
import clsx from 'clsx'

import { useEnhancedEffect } from '@monorail/utils'

import { useResizableContainerContext } from '../ResizableContainer/ResizableContainerContext.js'
import { getResizableElementUtilityClass } from './resizableElementClasses.js'
import type { ResizableElementProps } from './resizableElementProps.js'

interface ResizableElementOwnerState extends ResizableElementProps {}

const ResizableElementRoot = styled(Panel, {
  name: 'MonorailResizableElement',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root,
})({})

const MIN_SIZE_DEFAULT = 0.1
const MAX_SIZE_DEFAULT = 1

export const ResizableElement = React.forwardRef(function ResizableElement(
  inProps,
  ref,
) {
  const props = useThemeProps({
    name: 'MonorailResizableElement',
    props: inProps,
  })

  const {
    ref: _,
    apiRef: apiRefProp,
    maxSize: maxSizeProp,
    minSize: minSizeProp,
    defaultSize: defaultSizeProp,
    ...others
  } = props

  const { groupId, direction, groupElement, register, unregister } =
    useResizableContainerContext()

  const [minSize, setMinSize] = React.useState(10)
  const [maxSize, setMaxSize] = React.useState(100)
  const defaultSize = React.useRef<number | undefined>(undefined)

  const apiRef = React.useRef<ImperativePanelHandle | null>(null)
  React.useImperativeHandle(apiRefProp, () => apiRef.current!)

  const elementRef = React.useRef<HTMLDivElement | null>(null)
  React.useImperativeHandle(ref, () => elementRef.current!)

  const classes = useUtilityClasses(props)

  const [updater, update] = React.useState(false)

  useEnhancedEffect(() => {
    const cb = () => update(_ => !_)
    register(cb)
    return () => {
      unregister(cb)
    }
  }, [])

  // defaultSize must be set before ResizableElementRoot mounts for the first time,
  // so this calculation must be done in render
  if (defaultSize.current === undefined) {
    const panelGroup = groupElement.current

    if (panelGroup !== null) {
      const defaultSizeInput = parseBoundValue(defaultSizeProp)
      if (defaultSizeInput !== null) {
        const resizeHandles = document.querySelectorAll(
          `[data-panel-group-id=${groupId}][data-panel-resize-handle-id]`,
        ) as NodeListOf<HTMLDivElement>

        if (direction === 'column') {
          let height = panelGroup.offsetHeight

          resizeHandles.forEach(resizeHandle => {
            height -= resizeHandle.offsetHeight
          })

          defaultSize.current = computeBound(defaultSizeInput, height)
        }

        if (direction === 'row') {
          let width = panelGroup.offsetWidth

          resizeHandles.forEach(resizeHandle => {
            width -= resizeHandle.offsetWidth
          })

          defaultSize.current = computeBound(defaultSizeInput, width)
        }
      }
    }
  }

  useEnhancedEffect(() => {
    const panelGroup = groupElement.current

    if (!panelGroup) {
      return
    }

    const minSizeInput = parseBoundValue(minSizeProp) ?? MIN_SIZE_DEFAULT
    const maxSizeInput = parseBoundValue(maxSizeProp) ?? MAX_SIZE_DEFAULT

    if (isPercentageBound(minSizeInput) && isPercentageBound(maxSizeInput)) {
      setMinSize(minSizeInput * 100)
      setMaxSize(maxSizeInput * 100)
      return
    }

    const resizeHandles = document.querySelectorAll(
      `[data-panel-group-id=${groupId}][data-panel-resize-handle-id]`,
    ) as NodeListOf<HTMLDivElement>

    const observer = new ResizeObserver(() => {
      if (direction === 'column') {
        let height = panelGroup.offsetHeight

        resizeHandles.forEach(resizeHandle => {
          height -= resizeHandle.offsetHeight
        })

        // Minimum size in pixels is a percentage of the PanelGroup's height,
        // minus the (fixed) height of the resize handles.
        setMinSize(computeBound(minSizeInput, height))
        setMaxSize(computeBound(maxSizeInput, height))

        return
      }

      if (direction === 'row') {
        let width = panelGroup.offsetWidth

        resizeHandles.forEach(resizeHandle => {
          width -= resizeHandle.offsetWidth
        })

        // Minimum size in pixels is a percentage of the PanelGroup's width,
        // minus the (fixed) width of the resize handles.
        setMinSize(computeBound(minSizeInput, width))
        setMaxSize(computeBound(maxSizeInput, width))

        return
      }
    })

    observer.observe(panelGroup)

    resizeHandles.forEach(resizeHandle => {
      observer.observe(resizeHandle)
    })

    return () => {
      observer.disconnect()
    }
  }, [updater, minSizeProp, maxSizeProp])

  const refCallback = React.useCallback(
    (api: ImperativePanelHandle | null) => {
      apiRef.current = api
      const element = document.querySelector(
        `[data-panel-group-id=${groupId}][data-panel-id=${props.id}]`,
      ) as HTMLDivElement
      elementRef.current = element
    },
    [groupId, props.id],
  )

  return (
    <ResizableElementRoot
      ref={refCallback}
      {...others}
      minSize={minSize}
      maxSize={maxSize}
      defaultSize={defaultSize.current}
      className={clsx(classes.root, props.className)}
    >
      {inProps.children}
    </ResizableElementRoot>
  )
}) as (props: ResizableElementProps) => JSX.Element

function useUtilityClasses(ownerState: ResizableElementOwnerState) {
  const { classes } = ownerState

  const slots = {
    root: ['root'],
  }

  return composeClasses(slots, getResizableElementUtilityClass, classes)
}

function computeBound(input: number, container: number) {
  if (isPercentageBound(input)) {
    return input * 100
  } else {
    return (input / container) * 100
  }
}

function isPercentageBound(input: number | null): boolean {
  if (input === null) {
    return true
  }
  return input <= 1 && input !== 0
}

function parseBoundValue(input: string | number | undefined): number | null {
  if (input === undefined) {
    return null
  }
  if (typeof input === 'string') {
    if (input.endsWith('%')) {
      const parsed = parseFloat(input.substring(0, input.length - 1))
      if (isNaN(parsed)) {
        console.error(
          `Monorail: Could not parse value ${input}, using default.`,
        )
        return null
      }
      return parsed / 100
    }
    const parsed = parseFloat(input)
    if (isNaN(parsed)) {
      console.error(`Monorail: Could not parse value ${input}, using default.`)
      return null
    } else {
      return parsed
    }
  } else {
    return input
  }
}
