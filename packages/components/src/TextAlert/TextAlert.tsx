import React from 'react'
import { useThemeProps } from '@mui/material'
import clsx from 'clsx'

import { Alert } from '@monorail/components'
import { composeClasses, excludeProps, styled, sx } from '@monorail/utils'

import { getTextAlertUtilityClasses } from './textAlertClasses.js'
import type { TextAlertProps } from './textAlertProps.js'

interface TextAlertRootProps extends TextAlertProps {
  ownerState: TextAlertProps
}

const TextAlertRoot = styled(Alert, {
  name: 'MonorailTextAlert',
  slot: 'Root',
  shouldForwardProp: excludeProps('disableGutters'),
  overridesResolver: (props: TextAlertRootProps, styles) => {
    return [styles.root]
  },
})<TextAlertRootProps>(({ disableGutters }) =>
  sx({
    backgroundColor: 'transparent',
    py: 0,
    ...(disableGutters === true && {
      px: 0,
    }),
  }),
)

export const TextAlert = React.forwardRef((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'MonorailTextAlert' })

  const { className, ...other } = props

  const ownerState = {
    ...props,
  }

  const classes = useUtilityClasses(ownerState)

  return (
    <TextAlertRoot
      ref={ref}
      className={clsx(classes.root, className)}
      ownerState={ownerState}
      {...other}
    >
      {props.children}
    </TextAlertRoot>
  )
}) as (props: TextAlertProps) => JSX.Element

function useUtilityClasses(ownerState: TextAlertProps) {
  const { classes } = ownerState

  const slots = {
    root: ['root'],
  }

  return composeClasses(slots, getTextAlertUtilityClasses, classes)
}
