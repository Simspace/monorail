import React, { FC, ReactNode, useMemo } from 'react'
import { css, SimpleInterpolation } from 'styled-components'

import { generateScaleAnimation, sizes } from '@monorail/helpers/exports'
import { PopOverChildProps } from '@monorail/metaComponents/popOver/PopOver'
import {
  BBModalBackground,
  BBModalContent,
  BBModalHeader,
  useModalAnimation,
} from '@monorail/visualComponents/modals/Modals'
import { IconType } from '@monorail/visualComponents/icon/IconType'
import { ModalSize } from '@monorail/visualComponents/modals/modalTypes'
import { Overlay } from '@monorail/visualComponents/toggle/Overlay'

type Props = PopOverChildProps & {
  title: string
  iconLeft?: IconType
  headerChildren?: ReactNode
  modalBackgroundCss?: SimpleInterpolation
  modalHeaderCss?: SimpleInterpolation
}

export const MiniModal: FC<Props> = props => {
  const {
    children,
    closingAnimationCompleted,
    headerChildren,
    iconLeft,
    isOpen,
    modalBackgroundCss,
    modalHeaderCss,
    onClick,
    position,
    title,
    togglePopOver,
  } = props

  const scaleAnimation = useMemo(() => {
    const { height: elementHeight, width: elementWidth } = sizes.modals.mini

    return generateScaleAnimation({
      elementHeight,
      elementWidth,
      isOpen,
      position,
    })
  }, [isOpen, position])

  const { modalBackgroundRef, isRendered } = useModalAnimation<HTMLDivElement>({
    closingAnimationCompleted,
    isOpen,
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
        size={ModalSize.Mini}
        ref={modalBackgroundRef}
        css={
          isRendered
            ? css`
                ${scaleAnimation.outSideContentStyles};
                ${modalBackgroundCss};
              `
            : ''
        }
      >
        <BBModalContent
          css={css`
            ${isRendered ? scaleAnimation.inSideContentStyles : ''}
          `}
        >
          <BBModalHeader
            size={ModalSize.Mini}
            onClose={onClick}
            title={title}
            iconLeft={iconLeft}
            cssOverrides={modalHeaderCss}
          >
            {headerChildren}
          </BBModalHeader>
          {children}
        </BBModalContent>
      </BBModalBackground>
    </Overlay>
  )
}
