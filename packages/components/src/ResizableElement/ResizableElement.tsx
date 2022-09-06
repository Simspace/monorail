import React from 'react'
import { styled, useThemeProps } from '@mui/material'
import composeClasses from '@mui/utils/composeClasses'
import clsx from 'clsx'

import { useDidUpdate } from '@monorail/utils'

import { useResizableContainerContext } from '../ResizableContainer/ResizableContainerContext.js'
import { getResizableElementUtilityClass } from './resizableElementClasses.js'
import type { ResizableElementProps } from './resizableElementProps.js'

interface ResizableElementOwnerState extends ResizableElementProps {}

const ResizableElementRoot = styled('div', {
  name: 'MonorailResizableElement',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root,
})({
  position: 'relative',
  width: '100%',
  height: '100%',
  overflow: 'hidden',
})

export const ResizableElement = React.forwardRef(function ResizableElement(
  inProps,
  ref,
) {
  const props = useThemeProps({
    name: 'MonorailResizableElement',
    props: inProps,
  })
  const { index, size, direction = 1 } = inProps
  const context = useResizableContainerContext()

  useDidUpdate(() => {
    context.events.publish('elementSizeChange', {
      index: index!,
      size,
      direction,
    })
  }, [props.size])

  const classes = useUtilityClasses(props)

  const style = {
    ...props.style,
    flexGrow: props.flex,
    flexShrink: 1,
    flexBasis: '0%',
  }

  return (
    <ResizableElementRoot
      className={clsx(classes.root, props.className)}
      style={style}
      ref={ref}
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
