import React, { Component, ReactNode } from 'react'
import { css } from 'styled-components'

import { PopOverChildProps } from '@monorail/popOver/PopOver'
import { BBModalBackground, BBModalHeader } from '@monorail/modals/Modals'
import { Overlay } from '@monorail/toggle/Overlay'

type Props = PopOverChildProps & {
  customCloseButton?: ReactNode
  escToClose?: boolean
  headerChildren?: ReactNode
  iconLeft?: string
  title: string
}

export class FullScreenModal extends Component<Props> {
  render() {
    const {
      children,
      customCloseButton,
      escToClose,
      headerChildren,
      iconLeft,
      isOpen,
      onClick,
      title,
      togglePopOver,
    } = this.props

    return (
      <Overlay
        escToClose={escToClose}
        isOpen={isOpen}
        onClick={onClick}
        togglePopOver={togglePopOver}
      >
        <BBModalBackground
          css={css`
            height: 100%;
            width: 100%;
            margin: 0;
            border-radius: 0;
          `}
        >
          <BBModalHeader
            customCloseButton={customCloseButton}
            headerRowChildren={headerChildren}
            iconLeft={iconLeft}
            onClose={onClick}
            title={title}
          />
          {children}
        </BBModalBackground>
      </Overlay>
    )
  }
}
