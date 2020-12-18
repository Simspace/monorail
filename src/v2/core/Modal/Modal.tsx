import React from 'react'
import * as MUI from '@material-ui/core'

import styled, { css, keyframes } from '@monorail/helpers/styled-components'
import { OmitBannedProps, propBlockerConfig } from '@monorail/v2/shared/helpers'

//#region Modal Content Container
const ANIMATION_DURATION = 100

const paperAnimation = {
  open: keyframes`
    from {
      opacity: 0;
      transform: rotateX(15deg) translateY(16px) scale(.95)
    }

    to {
      opacity: 1;
      transform: none;
    }
    `,
  close: keyframes`
    from {
      opacity: 1;
      transform: none;
    }

    to {
      opacity: 0;
      transform: rotateX(15deg) translateY(16px) scale(.95)
    }
  `,
}

type ModalPaperProps = OmitBannedProps<MUI.PaperProps> &
  Pick<ModalProps, 'open' | 'fullScreen'>

const StyledPaper = styled(
  MUI.Paper as React.ComponentType<ModalPaperProps>,
).withConfig(
  propBlockerConfig<ModalPaperProps>(['open', 'fullScreen']),
)`
  ${({ open, fullScreen }) =>
    !fullScreen
      ? css`
          animation: ${open ? paperAnimation.open : paperAnimation.close} linear
            ${ANIMATION_DURATION}ms forwards;
        `
      : ''}
`
//#endregion Modal Content Container

//#region Modal
export type ModalProps = OmitBannedProps<
  Omit<MUI.DialogProps, 'PaperProps'>
> & {
  /**
   * The ARIA role for the content container
   */
  role?: 'dialog' | 'alertdialog'
  PaperProps?: Partial<ModalPaperProps>
  TransitionProps?: Partial<
    Pick<MUI.DialogProps, 'TransitionProps'> & { role: string | null }
  >
}

const StyledDialog = styled(MUI.Dialog as React.ComponentType<ModalProps>)``

/**
 * Modal dialog
 *
 * - [Dialog | Material-UI](https://material-ui.com/components/dialogs/#dialog)
 * - [Modals | Monorail Figma](https://www.figma.com/file/dKL9YeHgWyxmRHuIjs38f3O9/Monorail-Components?node-id=2133%3A64)
 */
export function Modal({
  role = 'dialog',
  title,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledby,
  PaperProps,
  TransitionProps,
  ...props
}: ModalProps) {
  const bannedPropsDefaults = { maxWidth: false }

  return (
    <StyledDialog
      PaperComponent={StyledPaper}
      {...bannedPropsDefaults}
      {...props}
      PaperProps={{
        ...PaperProps,
        open: props.open,
        fullScreen: props.fullScreen,
        role,
        title,
        'aria-label': ariaLabel,
        'aria-labelledby': ariaLabelledby,
        'aria-modal': true,
      }}
      TransitionProps={{
        role: null,
        ...TransitionProps,
      }}
    />
  )
}
;(Modal as any).muiName = (MUI.Dialog as any).muiName // eslint-disable-line
//#endregion Modal
