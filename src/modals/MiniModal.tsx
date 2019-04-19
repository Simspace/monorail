import React, { FunctionComponent, ReactNode, useMemo } from 'react'
import { PopOverChildProps } from '@monorail/popOver/PopOver'
import {
  BBModalBackground,
  BBModalContent,
  BBModalHeader,
  useModalAnimation,
} from '@monorail/modals/Modals'
import { generateScaleAnimation, sizes } from '@monorail/helpers/exports'
import { Overlay } from '@monorail/toggle/Overlay'
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
  const scaleAnimation = useMemo(
    () => {
      const { height: elementHeight, width: elementWidth } = sizes.modals.mini

      return generateScaleAnimation({
        elementHeight,
        elementWidth,
        isOpen,
        position,
      })
    },
    [isOpen, position],
  )

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
        mini
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
          css={isRendered ? scaleAnimation.inSideContentStyles : ''}
        >
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
