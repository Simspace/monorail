import React, { Component, ReactNode } from 'react'

import { PopOverChildProps } from 'popOver/PopOver'
import {
  BBModalBackground,
  BBModalContainer,
  BBModalContent,
  BBModalHeader,
  BBModalOverlay,
} from 'modals/Modals'
import { generateScaleAnimation, sizes } from 'CommonStyles'

type Props = PopOverChildProps & {
  title: string
  iconLeft?: string
  headerChildren?: ReactNode
}

export class MiniModal extends Component<Props> {
  render() {
    const {
      children,
      headerChildren,
      iconLeft,
      isOpen,
      onClick,
      position,
      title,
    } = this.props

    const scaleAnimation = generateScaleAnimation({
      elementHeight: sizes.modals.mini.height,
      elementWidth: sizes.modals.mini.width,
      isOpen,
      position,
    })

    return (
      <BBModalContainer isOpen={isOpen}>
        <BBModalOverlay chromeless isOpen={isOpen} onClick={onClick} />
        <BBModalBackground mini css={scaleAnimation.outSideContentStyles}>
          <BBModalContent css={scaleAnimation.inSideContentStyles}>
            <BBModalHeader mini title={title} iconLeft={iconLeft}>
              {headerChildren}
            </BBModalHeader>
            {children}
          </BBModalContent>
        </BBModalBackground>
      </BBModalContainer>
    )
  }
}
