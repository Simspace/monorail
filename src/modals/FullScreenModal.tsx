import React, { Component, ReactNode } from 'react'
import { css } from 'styled-components'

import { PopOverChildProps } from 'src/popOver/PopOver'
import {
  BBModalBackground,
  BBModalContainer,
  BBModalHeader,
  BBModalOverlay,
} from 'src/modals/Modals'

type Props = PopOverChildProps & {
  headerChildren?: ReactNode
  iconLeft?: string
  title: string
}

export class FullScreenModal extends Component<Props> {
  render() {
    const {
      children,
      headerChildren,
      iconLeft,
      isOpen,
      onClick,
      title,
    } = this.props

    return (
      <BBModalContainer isOpen={isOpen}>
        <BBModalOverlay isOpen={isOpen} onClick={onClick} />
        <BBModalBackground
          css={css`
            height: 100%;
            width: calc(100% - 48px);
            margin: 24px;
          `}
        >
          <BBModalHeader
            headerRowChildren={headerChildren}
            iconLeft={iconLeft}
            onClose={onClick}
            title={title}
          />
          {children}
        </BBModalBackground>
      </BBModalContainer>
    )
  }
}
