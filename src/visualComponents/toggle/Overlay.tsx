import React, { Component, RefObject } from 'react'
import { css } from 'styled-components'
import { Omit } from 'typelevel-ts'

import { Colors } from '@monorail/helpers/color'
import { ThemeProvider } from '@monorail/helpers/styled-components'
import { Mode, ThemeColors } from '@monorail/helpers/theme'
import { zIndexValue, ZIndexNodeName } from '@monorail/helpers/zIndex'
import { PopOverChildProps } from '@monorail/metaComponents/popOver/PopOver'
import {
  BBModalContainer,
  BBModalOverlay,
  BBModalOverlayProps,
  modalAnimationDuration,
  overlayCloseAnimation,
  overlayOpenAnimation,
} from '@monorail/visualComponents/modals/Modals'

type Props = Omit<
  PopOverChildProps,
  'position' | 'closingAnimationCompleted'
> & {
  overlayProps?: Omit<BBModalOverlayProps, 'isOpen' | 'onClick'>
  escToClose: boolean
  usesScaleAnimation: boolean
  zIndex: number
  modalContainerRef?: RefObject<HTMLDivElement>
}

type State = {
  isRendered: boolean
}

export class Overlay extends Component<Props, State> {
  static defaultProps = {
    usesScaleAnimation: false,
    escToClose: true,
    zIndex: zIndexValue(ZIndexNodeName.Overlay),
  }

  state: State = {
    isRendered: false,
  }

  componentDidMount() {
    const { escToClose } = this.props
    if (escToClose) {
      document.addEventListener('keydown', this.escFunction, false)
    }

    this.setState(() => ({
      isRendered: true,
    }))
  }

  componentWillUnmount() {
    const { escToClose } = this.props
    if (escToClose) {
      document.removeEventListener('keydown', this.escFunction, false)
    }
  }

  escFunction = (event: KeyboardEvent) => {
    const { escToClose, isOpen, togglePopOver } = this.props

    if (escToClose) {
      if (event.keyCode === 27 && isOpen) {
        togglePopOver()
      }
    }

    return null
  }

  render() {
    const {
      children,
      isOpen,
      onClick,
      overlayProps,
      usesScaleAnimation,
      zIndex,
      modalContainerRef,
    } = this.props
    const { isRendered } = this.state

    return (
      <ThemeProvider
        theme={theme => ({
          ...theme,
          [Mode.Light]: {
            ...theme[Mode.Light],
            [ThemeColors.ActionPrimary]: Colors.BrandLightBlue,
            [ThemeColors.ActionSecondary]: Colors.BrandLightBlue,
          },
        })}
      >
        <BBModalContainer
          onClick={e => e.stopPropagation()}
          usesScaleAnimation={usesScaleAnimation}
          isOpen={isRendered && isOpen}
          zIndex={zIndex}
          ref={modalContainerRef}
        >
          <BBModalOverlay
            isOpen={isRendered && isOpen}
            onClick={onClick}
            css={css`
              ${isRendered
                ? css`
                    animation: ${isOpen
                        ? overlayOpenAnimation
                        : overlayCloseAnimation}
                      linear ${modalAnimationDuration}ms forwards;
                  `
                : ''}
            `}
            {...overlayProps}
          />

          {children}
        </BBModalContainer>
      </ThemeProvider>
    )
  }
}
