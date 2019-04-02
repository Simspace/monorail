import React, { Component } from 'react'
import {
  BBModalContainer,
  BBModalOverlay,
  BBModalOverlayProps,
} from '@monorail/modals/Modals'
import { PopOverChildProps } from '@monorail/popOver/PopOver'
import { Omit } from 'typelevel-ts'

type Props = Omit<PopOverChildProps, 'position'> & {
  overlayProps?: Omit<BBModalOverlayProps, 'isOpen' | 'onClick'>
  escToClose: boolean
  usesScaleAnimation: boolean
  zIndex: number
}

export class Overlay extends Component<Props> {
  static defaultProps = {
    usesScaleAnimation: false,
    escToClose: true,
    zIndex: 9998,
  }

  componentDidMount() {
    const { escToClose } = this.props
    if (escToClose) {
      document.addEventListener('keydown', this.escFunction, false)
    }
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
    } = this.props

    return (
      <BBModalContainer
        onClick={e => e.stopPropagation()}
        usesScaleAnimation={usesScaleAnimation}
        isOpen={isOpen}
        zIndex={zIndex}
      >
        <BBModalOverlay isOpen={isOpen} onClick={onClick} {...overlayProps} />

        {children}
      </BBModalContainer>
    )
  }
}
