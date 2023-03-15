import React from 'react'
import clsx from 'clsx'

import { composeClasses, styled, sx, useThemeProps } from '@monorail/utils'

import { Typography } from '../Typography.js'
import { getWidgetHeaderUtilityClass } from './widgetHeaderClasses.js'
import type { WidgetHeaderProps } from './widgetHeaderProps.js'

export const WidgetHeaderRoot = styled('div', {
  name: 'MonorailWidgetHeader',
  slot: 'Root',
  overridesResolver: (_, styles) => styles.root,
})(
  sx(theme => ({
    p: 4,
    maxHeight: theme.spacing(19.5),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  })),
)

export const WidgetHeaderTitle = styled('div', {
  name: 'MonorailWidgetHeader',
  slot: 'WidgetTitle',
  overridesResolver: (_, styles) => styles.title,
})({
  display: 'flex',
  flexDirection: 'column',
  minWidth: 0,
})

export const WidgetHeaderActions = styled('div', {
  name: 'MonorailWidgetHeader',
  slot: 'WidgetHeaderActions',
  overridesResolver: (_, styles) => styles.actions,
})({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  flexWrap: 'nowrap',
})

export const WidgetHeader = React.forwardRef(function WidgetHeader(
  inProps,
  ref,
) {
  const props = useThemeProps({
    props: inProps,
    name: 'MonorailWidgetHeader',
  })

  const {
    className,
    slotProps = {},
    title: titleProp,
    subtitle: subtitleProp = null,
    children,
    ...other
  } = props

  const classes = useUtilityClasses(props)

  let title = titleProp
  if (title !== null && (title as React.ReactElement).type !== Typography) {
    title = (
      <Typography
        component="span"
        variant="subtitle1"
        className={clsx(classes.title, slotProps.title?.className)}
        lineClamp={1}
        flexShrink={1}
        minWidth={0}
        {...slotProps.title}
      >
        {title}
      </Typography>
    )
  }

  let subtitle = subtitleProp
  if (
    subtitle !== null &&
    (subtitle as React.ReactElement).type !== Typography
  ) {
    subtitle = (
      <Typography
        component="span"
        variant="subtitle2"
        color={theme => theme.palette.text.secondary}
        className={clsx(classes.subtitle, slotProps.subtitle?.className)}
        flexShrink={1}
        lineClamp={1}
        minWidth={0}
        {...slotProps.subtitle}
      >
        {subtitle}
      </Typography>
    )
  }

  return (
    <WidgetHeaderRoot
      ref={ref}
      className={clsx(className, classes.root)}
      {...other}
    >
      <WidgetHeaderTitle className={classes.titleContainer}>
        {title}
        {subtitle}
      </WidgetHeaderTitle>
      <WidgetHeaderActions className={classes.actions}>
        {children}
      </WidgetHeaderActions>
    </WidgetHeaderRoot>
  )
}) as (props: WidgetHeaderProps) => JSX.Element

function useUtilityClasses(ownerState: WidgetHeaderProps) {
  const { classes } = ownerState
  const slots = {
    root: ['root'],
    titleContainer: ['titleContainer'],
    title: ['title'],
    subtitle: ['subtitle'],
    actions: ['actions'],
  }

  return composeClasses(slots, getWidgetHeaderUtilityClass, classes)
}
