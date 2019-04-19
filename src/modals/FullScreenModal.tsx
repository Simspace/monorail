import { FCwDP } from '@monorail/sharedHelpers/react'
import React, { ReactNode } from 'react'
import {
  BBModalBackground,
  BBModalHeader,
  modalAnimationDuration,
  fullScreenModalCloseAnimation,
  fullScreenModalOpenAnimation,
  useModalAnimation,
} from '@monorail/modals/Modals'
import { css } from 'styled-components'
import { Overlay } from '@monorail/toggle/Overlay'
import { PopOverChildProps } from '@monorail/popOver/PopOver'

type Props = PopOverChildProps &
  DefaultProps & {
    customCloseButton?: ReactNode
    headerChildren?: ReactNode
    title: string
  }

type DefaultProps = {
  escToClose: boolean
  iconLeft: string
  noHeader: boolean
}

export const FullScreenModal: FCwDP<Props, DefaultProps> = ({
  children,
  customCloseButton,
  escToClose,
  headerChildren,
  iconLeft,
  isOpen,
  noHeader,
  onClick,
  title,
  togglePopOver,
  closingAnimationCompleted,
  ...otherProps
}) => {
  const { modalBackgroundRef, isRendered } = useModalAnimation<HTMLDivElement>({
    closingAnimationCompleted,
    isOpen,
  })

  return (
    <Overlay
      escToClose={escToClose}
      isOpen={isOpen}
      onClick={onClick}
      togglePopOver={togglePopOver}
    >
      <BBModalBackground
        ref={modalBackgroundRef}
        css={
          isRendered
            ? css`
                height: 100%;
                width: 100%;
                margin: 0;
                border-radius: 0;

                animation: ${isOpen
                    ? fullScreenModalOpenAnimation
                    : fullScreenModalCloseAnimation}
                  linear ${modalAnimationDuration}ms forwards;
              `
            : ''
        }
        {...otherProps}
      >
        {!noHeader && (
          <BBModalHeader
            customCloseButton={customCloseButton}
            headerRowChildren={headerChildren}
            iconLeft={iconLeft}
            onClose={onClick}
            title={title}
          />
        )}
        {children}
      </BBModalBackground>
    </Overlay>
  )
}

FullScreenModal.defaultProps = {
  escToClose: true,
  iconLeft: '',
  noHeader: false,
}
