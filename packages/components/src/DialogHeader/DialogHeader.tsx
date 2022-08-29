/* eslint-disable eqeqeq */
import React from 'react'
import { Close } from '@mui/icons-material'
import { styled, useThemeProps } from '@mui/material'

import { sx } from '@monorail/utils'

import { Box } from '../Box.js'
import { DialogEventContext } from '../Dialog/dialogEventContext.js'
import { IconButton } from '../IconButton.js'
import { Typography } from '../Typography.js'
import type { DialogHeaderProps } from './dialogHeaderProps.js'

interface DialogHeaderRootProps extends Omit<DialogHeaderProps, 'title'> {
  ownerState: DialogHeaderProps
}

const DialogHeaderRoot = styled('div', {
  name: 'MonorailDialogHeader',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root,
})<DialogHeaderRootProps>(
  sx(theme => ({
    padding: theme.spacing(4, 6),
    height: theme.spacing(14),
    flex: '0 0 auto',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  })),
)

const DialogIconContainer = styled('div', {
  name: 'MonorailDialogHeader',
  slot: 'Icon',
  overridesResolver: (props, styles) => styles.icon,
})(
  sx(theme => ({
    display: 'flex',
    marginRight: theme.spacing(4),
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
export const DialogHeader: (props: DialogHeaderProps) => JSX.Element =
  React.forwardRef(function DialogHeader(
    inProps: DialogHeaderProps,
    ref: React.ForwardedRef<HTMLDivElement>,
  ) {
    const props = useThemeProps({
      props: inProps,
      name: 'MonorailDialogHeader',
    })

    const {
      title: titleProp,
      classes = {},
      componentsProps = {},
      icon,
      ...other
    } = props

    const dialogEvents = React.useContext(DialogEventContext)

    let title = titleProp
    if (title != null && (title as React.ReactElement).type !== Typography) {
      title = (
        <Typography
          component="span"
          variant="h3"
          className={classes.title}
          flex="1 0 auto"
          {...componentsProps.typography}
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
        >
          <Close />
        </IconButton>
      ),
      [dialogEvents],
    )

    return (
      <DialogHeaderRoot ref={ref} ownerState={props} {...other}>
        {icon && <DialogIconContainer>{icon}</DialogIconContainer>}
        {title}
        <Box sx={{ width: '100%' }} />
        {closeButton}
      </DialogHeaderRoot>
    )
  }) as (props: DialogHeaderProps) => JSX.Element
