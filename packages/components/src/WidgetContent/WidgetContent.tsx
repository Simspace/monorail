import React from 'react'
import clsx from 'clsx'

import { composeClasses, styled, sx, useThemeProps } from '@monorail/utils'

import { getWidgetContentUtilityClass } from './widgetContentClasses.js'
import type { WidgetContentProps } from './widgetContentProps.js'

const WidgetContentRoot = styled('div', {
  name: 'MonorailWidgetContent',
  slot: 'Root',
  overridesResolver: (_, styles) => styles.root,
})(
  sx({
    minHeight: 0,
    minWidth: 0,
    display: 'flex',
    flex: 1,
    px: 4,
    pb: 4,
  }),
)

export const WidgetContent = React.forwardRef(function WidgetContent(
  inProps,
  ref,
) {
  const props = useThemeProps({
    name: 'MonorailWidgetContent',
    props: inProps,
  })

  const { className, children, ...other } = props

  const classes = useUtilityClasses(props)

  return (
    <WidgetContentRoot
      ref={ref}
      className={clsx(classes.root, className)}
      {...other}
    >
      {children}
    </WidgetContentRoot>
  )
}) as (props: WidgetContentProps) => JSX.Element

function useUtilityClasses(ownerState: WidgetContentProps) {
  const { classes } = ownerState
  const slots = {
    root: ['root'],
  }

  return composeClasses(slots, getWidgetContentUtilityClass, classes)
}
