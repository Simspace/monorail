import React, { ReactNode } from 'react'
import { css, SimpleInterpolation } from 'styled-components'

import { ZIndexNodeName, zIndexValue } from '@monorail/helpers/zIndex'
import { PopOverChildProps } from '@monorail/metaComponents/popOver/PopOver'
import { FCwDP } from '@monorail/sharedHelpers/react'
import {
  BBModalBackground,
  BBModalHeader,
  mediumModalCloseAnimation,
  mediumModalOpenAnimation,
  modalAnimationDuration,
  useModalAnimation,
} from '@monorail/visualComponents/modals/Modals'
import { ModalSize } from '@monorail/visualComponents/modals/modalTypes'
import { Overlay } from '@monorail/visualComponents/toggle/Overlay'

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

export const SmallModal: FCwDP<Props, DefaultProps> = ({
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
        size={ModalSize.Small}
        {...otherProps}
      >
        <BBModalHeader
          title={title}
          iconLeft={iconLeft}
          onClose={onClick}
          customCloseButton={customCloseButton}
          headerRowChildren={headerChildren}
          cssOverrides={headerStyles}
          size={ModalSize.Small}
        />
        {children}
      </BBModalBackground>
    </Overlay>
  )
}

SmallModal.defaultProps = {
  zIndex: zIndexValue(ZIndexNodeName.Overlay),
}