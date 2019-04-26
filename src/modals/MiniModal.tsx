import { generateScaleAnimation, sizes } from '@monorail/helpers/exports'
import {
  BBModalBackground,
  BBModalContent,
  BBModalHeader,
  useModalAnimation,
} from '@monorail/modals/Modals'
import { ModalSize } from '@monorail/modals/modalTypes'
import { PopOverChildProps } from '@monorail/popOver/PopOver'
import { Overlay } from '@monorail/toggle/Overlay'
import React, { FunctionComponent, ReactNode, useMemo } from 'react'
import { css, SimpleInterpolation } from 'styled-components'

type Props = PopOverChildProps & {
  title: string
  iconLeft?: string
  headerChildren?: ReactNode
  modalBackgroundCss?: SimpleInterpolation
}

export const MiniModal: FunctionComponent<Props> = ({
  children,
  closingAnimationCompleted,
  headerChildren,
  iconLeft,
  isOpen,
  modalBackgroundCss,
  onClick,
  position,
  title,
  togglePopOver,
}) => {
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
          >
            {headerChildren}
          </BBModalHeader>
          {children}
        </BBModalContent>
      </BBModalBackground>
    </Overlay>
  )
}
