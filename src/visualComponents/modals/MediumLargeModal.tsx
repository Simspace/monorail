import React, { FC, ReactNode } from 'react'
import { css, SimpleInterpolation } from 'styled-components'

import { ZIndexNodeName, zIndexValue } from '@monorail/helpers/zIndex'
import { PopOverChildProps } from '@monorail/metaComponents/popOver/PopOver'
import { IconType } from '@monorail/visualComponents/icon/IconType'
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

type Props = Omit<PopOverChildProps, 'position'> & {
  title: string
  iconLeft?: IconType
  headerChildren?: ReactNode
  headerStyles?: SimpleInterpolation
  customCloseButton?: ReactNode
  zIndex?: number
}

export const MediumLargeModal: FC<Props> = props => {
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
        size={ModalSize.MediumLarge}
        {...otherProps}
      >
        <BBModalHeader
          title={title}
          iconLeft={iconLeft}
          onClose={onClick}
          customCloseButton={customCloseButton}
          headerRowChildren={headerChildren}
          cssOverrides={headerStyles}
          size={ModalSize.MediumLarge}
        />
        {children}
      </BBModalBackground>
    </Overlay>
  )
}
