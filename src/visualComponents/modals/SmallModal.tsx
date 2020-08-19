import React, { FC, ReactNode } from 'react'
import { css, SimpleInterpolation } from 'styled-components'

import { ZIndexNodeName, zIndexValue } from '@monorail/helpers/zIndex'
import { PopOverChildProps } from '@monorail/metaComponents/popOver/PopOver'
import {
  BBModalBackground,
  BBModalHeader,
  mediumModalCloseAnimation,
  mediumModalOpenAnimation,
  modalAnimationDuration,
  useModalAnimation,
} from '@monorail/visualComponents/modals/Modals'
import { IconType } from '@monorail/visualComponents/icon/IconType'
import { ModalSize } from '@monorail/visualComponents/modals/modalTypes'
import { Overlay } from '@monorail/visualComponents/toggle/Overlay'

type Props = Omit<PopOverChildProps, 'position'> & {
  title: string
  iconLeft?: IconType
  headerChildren?: ReactNode
  headerStyles?: SimpleInterpolation
  customCloseButton?: ReactNode
  zIndex?: number
}

export const SmallModal: FC<Props> = props => {
  const {
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
    zIndex = zIndexValue(ZIndexNodeName.Modal),
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
