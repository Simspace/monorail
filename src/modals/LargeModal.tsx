import {
  BBModalBackground,
  BBModalHeader,
  largeModalCloseAnimation,
  largeModalOpenAnimation,
  modalAnimationDuration,
  useModalAnimation,
} from '@monorail/modals/Modals'
import { ModalSize } from '@monorail/modals/modalTypes'
import { PopOverChildProps } from '@monorail/popOver/PopOver'
import { FCwDP } from '@monorail/sharedHelpers/react'
import { Overlay } from '@monorail/toggle/Overlay'
import React from 'react'
import { css, SimpleInterpolation } from 'styled-components'

type Props = PopOverChildProps &
  DefaultProps & {
    title: string
    iconLeft?: string
    headerStyles?: SimpleInterpolation
  }

type DefaultProps = {
  zIndex: number
}

export const LargeModal: FCwDP<Props, DefaultProps> = ({
  isOpen,
  onClick,
  children,
  title,
  iconLeft,
  togglePopOver,
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
                    ? largeModalOpenAnimation
                    : largeModalCloseAnimation}
                  linear ${modalAnimationDuration}ms forwards;
              `
            : ''
        }
        size={ModalSize.Large}
        {...otherProps}
      >
        <BBModalHeader
          title={title}
          iconLeft={iconLeft}
          onClose={onClick}
          cssOverrides={headerStyles}
          size={ModalSize.Large}
        />
        {children}
      </BBModalBackground>
    </Overlay>
  )
}

LargeModal.defaultProps = {
  zIndex: 9998,
}
