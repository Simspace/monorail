import { FCwDP } from '@monorail/sharedHelpers/react'
import React from 'react'
import {
  BBModalBackground,
  BBModalHeader,
  mediumModalCloseAnimation,
  mediumModalOpenAnimation,
  useModalAnimation,
} from '@monorail/modals/Modals'
import { css, SimpleInterpolation } from 'styled-components'
import { Overlay } from '@monorail/toggle/Overlay'
import { PopOverChildProps } from '@monorail/popOver/PopOver'

type Props = PopOverChildProps &
  DefaultProps & {
    title: string
    iconLeft?: string
    headerStyles?: SimpleInterpolation
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
                  linear 100ms forwards;
              `
            : ''
        }
        {...otherProps}
      >
        <BBModalHeader
          title={title}
          iconLeft={iconLeft}
          onClose={onClick}
          cssOverrides={headerStyles}
        />
        {children}
      </BBModalBackground>
    </Overlay>
  )
}

MediumModal.defaultProps = {
  zIndex: 9998,
}
