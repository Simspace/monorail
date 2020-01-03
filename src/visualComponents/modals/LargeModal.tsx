import React, { FC, ReactNode } from 'react'
import { css, SimpleInterpolation } from 'styled-components'

import { ZIndexNodeName, zIndexValue } from '@monorail/helpers/zIndex'
import { PopOverChildProps } from '@monorail/metaComponents/popOver/PopOver'
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

type Props = Omit<PopOverChildProps, 'position'> & {
  title: string
  iconLeft?: string
  headerStyles?: SimpleInterpolation
  headerRowChildren?: ReactNode
  zIndex?: number
}

export const LargeModal: FC<Props> = props => {
  const {
    isOpen,
    onClick,
    children,
    title = '',
    iconLeft = '',
    togglePopOver,
    headerStyles = css``,
    closingAnimationCompleted,
    zIndex = zIndexValue(ZIndexNodeName.Overlay),
    headerRowChildren,
    ...otherProps
  } = props

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
