import React, { FC, ReactNode } from 'react'
import { css } from 'styled-components'

import { ZIndexNodeName, zIndexValue } from '@monorail/helpers/zIndex'
import { PopOverChildProps } from '@monorail/metaComponents/popOver/PopOver'
import { IconType } from '@monorail/visualComponents/icon/IconType'
import {
  BBModalBackground,
  BBModalHeader,
  fullScreenModalCloseAnimation,
  fullScreenModalOpenAnimation,
  modalAnimationDuration,
  useModalAnimation,
} from '@monorail/visualComponents/modals/Modals'
import { ModalSize } from '@monorail/visualComponents/modals/modalTypes'
import { Overlay } from '@monorail/visualComponents/toggle/Overlay'

type Props = Omit<PopOverChildProps, 'position'> & {
  customCloseButton?: ReactNode
  headerChildren?: ReactNode
  title?: string
  escToClose?: boolean
  iconLeft?: IconType
  noHeader?: boolean
  zIndex?: number
}

export const FullScreenModal: FC<Props> = props => {
  const {
    children,
    customCloseButton,
    escToClose = true,
    headerChildren,
    iconLeft = '',
    isOpen,
    noHeader = false,
    onClick,
    title = '',
    togglePopOver,
    closingAnimationCompleted,
    zIndex = zIndexValue(ZIndexNodeName.Modal),
    ...otherProps
  } = props

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
      zIndex={zIndex}
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
        size={ModalSize.FullScreen}
        {...otherProps}
      >
        {!noHeader && (
          <BBModalHeader
            customCloseButton={customCloseButton}
            headerRowChildren={headerChildren}
            iconLeft={iconLeft}
            onClose={onClick}
            title={title}
            size={ModalSize.FullScreen}
          />
        )}
        {children}
      </BBModalBackground>
    </Overlay>
  )
}
