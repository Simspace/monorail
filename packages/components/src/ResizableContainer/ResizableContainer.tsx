import React from 'react'
import type { ImperativePanelGroupHandle } from 'react-resizable-panels'
import { PanelGroup } from 'react-resizable-panels'
import { styled, useThemeProps } from '@mui/material'
import composeClasses from '@mui/utils/composeClasses'
import clsx from 'clsx'

import { getResizableContainerUtilityClass } from './resizableContainerClasses.js'
import { ResizableContainerContext } from './ResizableContainerContext.js'
import type { ResizableContainerProps } from './resizableContainerProps.js'

interface ResizableContainerOwnerState extends ResizableContainerProps {}

interface ResizableContainerRootProps {
  ownerState: ResizableContainerOwnerState
}

const ResizableContainerRoot = styled(PanelGroup, {
  name: 'MonorailResizableContainer',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root,
})<ResizableContainerRootProps>({})

export const ResizableContainer = React.forwardRef(function ResizableContainer(
  inProps: ResizableContainerProps,
  ref: React.ForwardedRef<HTMLDivElement>,
) {
  const props = useThemeProps({
    props: inProps,
    name: 'MonorailResizableContainer',
  })

  const { children, className, apiRef: apiRefProp, ref: _, direction, ...others } = props

  const forceUpdaters = React.useRef(new Set<() => void>())

  const apiRef = React.useRef<ImperativePanelGroupHandle | null>(null)
  React.useImperativeHandle(apiRefProp, () => apiRef.current!)

  const elementRef = React.useRef<HTMLDivElement | null>(null)
  React.useImperativeHandle(ref, () => elementRef.current!)

  const classes = useUtilityClasses(props)

  const contextValue = React.useMemo<ResizableContainerContext>(() => {
    return {
      groupId: props.id,
      groupElement: elementRef,
      direction: props.direction,
      register: cb => {
        forceUpdaters.current.add(cb)
      },
      unregister: cb => {
        forceUpdaters.current.delete(cb)
      },
    }
  }, [props.direction, props.id])

  const refCallback = React.useCallback(
    (api: ImperativePanelGroupHandle | null) => {
      elementRef.current = document.querySelector(`[data-panel-group-id=${props.id}]`)
      apiRef.current = api
      forceUpdaters.current.forEach(cb => {
        cb()
      })
    },
    [props.id],
  )

  return (
    <ResizableContainerRoot
      ownerState={props}
      ref={refCallback}
      direction={direction === 'row' ? 'horizontal' : 'vertical'}
      {...others}
      className={clsx(classes.root, className)}
    >
      <ResizableContainerContext.Provider value={contextValue}>{children}</ResizableContainerContext.Provider>
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
