import React, { Component, Fragment, MouseEvent, ReactNode } from 'react'

import { Portal } from 'portal/Portal'

export type PopOverPosition = {
  dropXAmount: number
  dropXDirection: 'left' | 'right'
  dropYAmount: number
  dropYDirection: 'top' | 'bottom'
  gap: number
  maxHeight: number
  maxWidth: number
  originHeight: number
  originWidth: number
}

export type ToggleChildProps = {
  onClick: (event: MouseEvent) => void
  isOpen: boolean
}

export type PopOverChildProps = {
  isOpen: boolean
  position: PopOverPosition
  onClick: (event: MouseEvent) => void
}

type PopOverProps = {
  gap?: number
  popOver: (props: PopOverChildProps) => ReactNode
  toggle: (props: ToggleChildProps) => ReactNode
  document?: Document
}

type PopOverState = {
  isOpen: boolean
  position: PopOverPosition
}

export class PopOver extends Component<PopOverProps, PopOverState> {
  state: PopOverState = {
    isOpen: false,
    position: {
      dropXAmount: 0,
      dropXDirection: 'left',
      dropYAmount: 0,
      dropYDirection: 'top',
      gap: 0,
      maxHeight: 360,
      maxWidth: 304,
      originHeight: 0,
      originWidth: 0,
    },
  }

  togglePopOver = () => {
    this.setState(({ isOpen }) => ({ isOpen: !isOpen }))
  }

  onClick = (event: MouseEvent) => {
    const { gap = 8 } = this.props

    // Get basic dimensions about the the Toggle and the window.
    const boundingRect = event.currentTarget.getBoundingClientRect()
    const innerWidth = window.innerWidth
    const innerHeight = window.innerHeight

    // Determine the direction the PopOver should go.
    const dropYDirection =
      innerHeight / 2 > boundingRect.top + boundingRect.height / 2
        ? 'top'
        : 'bottom'
    const dropXDirection =
      innerWidth / 2 > boundingRect.left + boundingRect.width / 2
        ? 'left'
        : 'right'

    // Figure out the value for the direction.
    const dropYAmount =
      dropYDirection === 'top'
        ? boundingRect.top
        : innerHeight - boundingRect.bottom
    const dropXAmount =
      dropXDirection === 'left'
        ? boundingRect.left
        : innerWidth - boundingRect.right

    // Figure out the max amount the element can go in that direction.
    const maxHeight =
      (dropYDirection === 'top'
        ? innerHeight - (boundingRect.top + boundingRect.height)
        : boundingRect.top) -
      gap * 2
    const maxWidth =
      (dropXDirection === 'left'
        ? innerWidth - boundingRect.left
        : boundingRect.left + boundingRect.width) -
      gap * 2

    this.setState(({ isOpen }) => ({
      isOpen: !isOpen,
      position: {
        dropXAmount,
        dropXDirection,
        dropYAmount,
        dropYDirection,
        gap,
        maxHeight,
        maxWidth,
        originHeight: boundingRect.height,
        originWidth: boundingRect.width,
      },
    }))
  }

  render() {
    const { popOver, toggle, document } = this.props
    const { isOpen, position } = this.state

    return (
      <Fragment>
        {toggle({ onClick: this.onClick, isOpen })}
        <Portal document={document}>
          {popOver({
            isOpen,
            position,
            onClick: this.togglePopOver,
          })}
        </Portal>
      </Fragment>
    )
  }
}
