import React from 'react'
import clsx from 'clsx'

import { composeClasses, styled, useThemeProps } from '@monorail/utils'

import { Paper } from '../Paper.js'
import { getWidgetUtilityClass } from './widgetClasses.js'
import type { WidgetProps } from './widgetProps.js'

const WidgetRoot = styled(Paper, {
  name: 'MonorailWidget',
  slot: 'Root',
  overridesResolver: (_, styles) => styles.root,
})({
  height: '100%',
  maxHeight: '100%',
  width: '100%',
  maxWidth: '100%',
  display: 'flex',
  flexDirection: 'column',
})

export const Widget = React.forwardRef(function Widget(inProps, ref) {
  const props = useThemeProps({
    name: 'MonorailWidget',
    props: inProps,
  })

  const classes = useUtilityClasses(props)

  return (
    <WidgetRoot
      ref={ref}
      {...props}
      className={clsx(classes.root, props.className)}
      variant="outlined"
    />
  )
}) as (props: WidgetProps) => JSX.Element

function useUtilityClasses(ownerState: WidgetProps) {
  const { classes } = ownerState
  const slots = {
    root: ['root'],
  }

  return composeClasses(slots, getWidgetUtilityClass, classes)
}
