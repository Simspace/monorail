import React, { ReactNode } from 'react'
import { css, SimpleInterpolation } from 'styled-components'

import {
  BBModalBackground,
  BBModalHeader,
  mediumModalCloseAnimation,
  mediumModalOpenAnimation,
  modalAnimationDuration,
  useModalAnimation,
} from '@monorail/modals/Modals'
import { ModalSize } from '@monorail/modals/modalTypes'
import { PopOverChildProps } from '@monorail/popOver/PopOver'
import { FCwDP } from '@monorail/sharedHelpers/react'
import { Overlay } from '@monorail/toggle/Overlay'

type Props = PopOverChildProps &
  DefaultProps & {
    title: string
    iconLeft?: string
    headerChildren?: ReactNode
    headerStyles?: SimpleInterpolation
    customCloseButton?: ReactNode
  }

type DefaultProps = {
  zIndex: number
}

export const MediumModal: FCwDP<Props, DefaultProps> = ({
  isOpen,
  onClick,
  children,
  title,
  iconLeft,
  togglePopOver,
  headerChildren,
  customCloseButton,
  headerStyles,
  closingAnimationCompleted,
  zIndex,
  ...otherProps
}) => {
  const { modalBackgroundRef, isRendered } = useModalAnimation<HTMLDivElement>({
    closingAnimationCompleted,
    isOpen,
  })

  return (
    <Overlay
      isOpen={isOpen}
      onClick={onClick}
      togglePopOver={togglePopOver}
      zIndex={zIndex}
    >
      <BBModalBackground
        ref={modalBackgroundRef}
        css={
          isRendered
            ? css`
                animation: ${isOpen
                    ? mediumModalOpenAnimation
                    : mediumModalCloseAnimation}
                  linear ${modalAnimationDuration}ms forwards;
              `
            : ''
        }
        size={ModalSize.Medium}
        {...otherProps}
      >
        <BBModalHeader
          title={title}
          iconLeft={iconLeft}
          onClose={onClick}
          customCloseButton={customCloseButton}
          headerRowChildren={headerChildren}
          cssOverrides={headerStyles}
          size={ModalSize.Medium}
        />
        {children}
      </BBModalBackground>
    </Overlay>
  )
}

MediumModal.defaultProps = {
  zIndex: 9998,
}
