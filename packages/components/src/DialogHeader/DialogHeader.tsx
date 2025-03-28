/* eslint-disable @typescript-eslint/unified-signatures */
/* eslint-disable eqeqeq */
import React from 'react'
import { Close } from '@mui/icons-material'
import type { CSSObject } from '@mui/material'
import { styled, useThemeProps } from '@mui/material'
import clsx from 'clsx'

import { composeClasses, sx } from '@monorail/utils'

import { DialogEventContext } from '../Dialog/dialogEventContext.js'
import { IconButton } from '../IconButton.js'
import { Typography } from '../Typography.js'
import type { DialogHeaderClassKey } from './dialogHeaderClasses.js'
import {
  dialogHeaderClasses,
  getDialogHeaderUtilityClass,
} from './dialogHeaderClasses.js'
import type { DialogHeaderProps } from './dialogHeaderProps.js'

interface DialogHeaderRootProps
  extends Omit<DialogHeaderProps, 'title' | 'slotProps'> {
  ownerState: DialogHeaderProps
}

function overridesResolver(
  props: DialogHeaderRootProps,
  styles: Partial<Record<DialogHeaderClassKey, CSSObject>>,
) {
  return [
    { [`& .${dialogHeaderClasses.iconContainer}`]: styles.iconContainer },
    { [`& .${dialogHeaderClasses.title}`]: styles.title },
    styles.root,
  ]
}

const DialogHeaderRoot = styled('div', {
  name: 'MonorailDialogHeader',
  slot: 'Root',
  overridesResolver,
})<DialogHeaderRootProps>(
  sx(theme => ({
    padding: theme.spacing(2, 6),
    minHeight: theme.spacing(14),
    flex: '0 0 auto',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: theme.spacing(4),

    [` .${dialogHeaderClasses.title}`]: {
      pt: 2,
      flex: 1,
    },
  })),
)

const DialogIconContainer = styled('div', {
  name: 'MonorailDialogHeader',
  slot: 'Icon',
})(
  sx(theme => ({
    display: 'flex',
    py: theme.spacing(2),
  })),
)

/**
 * A precomposed header for a `Dialog` that contains a title, close button, and optional icon to the left
 * of the title
 *
 * Demos:
 *
 * - [DialogHeader](https://simspace.gitlab.io/engineering/ux-engineering/monorail/main/storybook/?path=/docs/feedback-dialog-dialogheader--default)
 */
export const DialogHeader = React.forwardRef(function DialogHeader(
  inProps,
  ref,
) {
  const props = useThemeProps({
    props: inProps,
    name: 'MonorailDialogHeader',
  })

  const { className, title: titleProp, slotProps, icon, ...other } = props

  const classes = useUtilityClasses(props)

  const dialogEvents = React.useContext(DialogEventContext)

  let title = titleProp
  if (title != null && (title as React.ReactElement).type !== Typography) {
    title = (
      <Typography
        component="span"
        variant="h3"
        className={classes.title}
        {...slotProps.typography}
      >
        {title}
      </Typography>
    )
  }

  const closeButton = React.useMemo(
    () => (
      <IconButton
        shape="rounded"
        onClick={() => {
          dialogEvents.onClose?.({}, 'headerCloseButtonClick')
        }}
        {...slotProps.closeButton}
      >
        <Close />
      </IconButton>
    ),
    [dialogEvents, slotProps.closeButton],
  )

  return (
    <DialogHeaderRoot
      className={clsx(classes.root, className)}
      ref={ref}
      ownerState={props}
      {...other}
    >
      {icon && (
        <DialogIconContainer className={classes.iconContainer}>
          {icon}
        </DialogIconContainer>
      )}
      {title}
      {closeButton}
    </DialogHeaderRoot>
  )
}) as (props: DialogHeaderProps) => JSX.Element

function useUtilityClasses(props: DialogHeaderProps) {
  const { classes } = props

  const slots = {
    root: ['root'],
    title: ['title'],
    iconContainer: ['iconContainer'],
  }

  return composeClasses(slots, getDialogHeaderUtilityClass, classes)
}
