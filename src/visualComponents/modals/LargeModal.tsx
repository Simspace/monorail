import React, { ReactNode } from 'react'
import { css, SimpleInterpolation } from 'styled-components'

import { ZIndexNodeName, zIndexValue } from '@monorail/helpers/zIndex'
import { PopOverChildProps } from '@monorail/metaComponents/popOver/PopOver'
import { FCwDP } from '@monorail/sharedHelpers/react'
import {
  BBModalBackground,
  BBModalHeader,
  largeModalCloseAnimation,
  largeModalOpenAnimation,
  modalAnimationDuration,
  useModalAnimation,
} from '@monorail/visualComponents/modals/Modals'
import { ModalSize } from '@monorail/visualComponents/modals/modalTypes'
import { Overlay } from '@monorail/visualComponents/toggle/Overlay'

type Props = PopOverChildProps &
  DefaultProps & {
    title: string
    iconLeft?: string
    headerStyles?: SimpleInterpolation
    headerRowChildren?: ReactNode
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
  headerRowChildren,
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
          headerRowChildren={headerRowChildren}
        />
        {children}
      </BBModalBackground>
    </Overlay>
  )
}

LargeModal.defaultProps = {
  zIndex: zIndexValue(ZIndexNodeName.Overlay),
}
