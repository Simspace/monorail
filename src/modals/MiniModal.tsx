import React, { Component, ReactNode } from 'react'

import { PopOverChildProps } from '@monorail/popOver/PopOver'
import {
  BBModalBackground,
  BBModalContent,
  BBModalHeader,
} from '@monorail/modals/Modals'
import { generateScaleAnimation, sizes } from '@monorail/CommonStyles'
import { Overlay } from '@monorail/toggle/Overlay'
import { css, SimpleInterpolation } from 'styled-components'

type Props = PopOverChildProps & {
  title: string
  iconLeft?: string
  headerChildren?: ReactNode
  modalBackgroundCss?: SimpleInterpolation
}

export class MiniModal extends Component<Props> {
  render() {
    const {
      children,
      headerChildren,
      iconLeft,
      isOpen,
      modalBackgroundCss,
      onClick,
      position,
      title,
      togglePopOver,
    } = this.props

    const scaleAnimation = generateScaleAnimation({
      elementHeight: sizes.modals.mini.height,
      elementWidth: sizes.modals.mini.width,
      isOpen,
      position,
    })

    return (
      <Overlay
        isOpen={isOpen}
        onClick={onClick}
        overlayProps={{ chromeless: true }}
        togglePopOver={togglePopOver}
        usesScaleAnimation={true}
      >
        <BBModalBackground
          mini
          cssOverrides={css`
            ${scaleAnimation.outSideContentStyles} ${modalBackgroundCss};
          `}
        >
          <BBModalContent cssOverrides={scaleAnimation.inSideContentStyles}>
            <BBModalHeader
              mini
              onClose={onClick}
              title={title}
              iconLeft={iconLeft}
            >
              {headerChildren}
            </BBModalHeader>
            {children}
          </BBModalContent>
        </BBModalBackground>
      </Overlay>
    )
  }
}
