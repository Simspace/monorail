import React, { Component, ReactNode, SyntheticEvent } from 'react'
import { Omit } from 'typelevel-ts'

import { Portal } from '@monorail/portal/Portal'

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
  maxHeightCalc: string
  maxWidthCalc: string
}

export type PopOverToggleProps = {
  isOpen: boolean
  onClick: (event: SyntheticEvent) => void
}

export type PopOverChildProps = {
  isOpen: boolean
  position: PopOverPosition
  onClick: (event: SyntheticEvent) => void
  togglePopOver: () => void
}

type PopOverProps = {
  gap: number
  popOver: (props: PopOverChildProps) => ReactNode
  toggle: (props: PopOverToggleProps) => ReactNode
  document?: Document
  toSide: boolean
  isOpen?: boolean
  onToggle?: (isOpen: boolean) => void
  optimize?: boolean
}

type PopOverState = {
  isOpen: boolean
  position: PopOverPosition
}

type GetFunctionProps = {
  dropXDirection: 'left' | 'right'
  dropYDirection: 'top' | 'bottom'
  boundingRect: {
    top: number
    bottom: number
    left: number
    right: number
    width: number
    height: number
  }
  innerWidth: number
  innerHeight: number
  toSide: boolean
  gap: number
}

type GetFunctionXProps = Omit<
  GetFunctionProps,
  'dropYDirection' | 'innerHeight'
>

type GetFunctionYProps = Omit<GetFunctionProps, 'dropXDirection' | 'innerWidth'>

const getDropAmounts: (
  props: GetFunctionProps,
) => {
  dropXAmount: number
  dropYAmount: number
  maxHeight: number
  maxWidth: number
  maxHeightCalc: string
  maxWidthCalc: string
} = ({
  dropXDirection,
  dropYDirection,
  innerHeight,
  innerWidth,
  ...otherProps
}) => ({
  ...getDropXAmount({ dropXDirection, innerWidth, ...otherProps }),
  ...getDropYAmount({ dropYDirection, innerHeight, ...otherProps }),
  ...getMaxHeight({ dropYDirection, innerHeight, ...otherProps }),
  ...getMaxWidth({ dropXDirection, innerWidth, ...otherProps }),
  ...getMaxHeightCalc({ dropYDirection, innerHeight, ...otherProps }),
  ...getMaxWidthCalc({ dropXDirection, innerWidth, ...otherProps }),
})

const getDropXAmount: (
  props: GetFunctionXProps,
) => {
  dropXAmount: number
} = ({ dropXDirection, innerWidth, boundingRect, toSide, gap }) => {
  const isLeft = dropXDirection === 'left'
  const dropXAmountForToSide = () =>
    isLeft
      ? boundingRect.left + boundingRect.width + gap
      : innerWidth - boundingRect.right + boundingRect.width + gap
  const dropXAmountForNotToSide = () =>
    isLeft ? boundingRect.left : innerWidth - boundingRect.right

  return {
    dropXAmount: toSide ? dropXAmountForToSide() : dropXAmountForNotToSide(),
  }
}

const getDropYAmount: (
  props: GetFunctionYProps,
) => {
  dropYAmount: number
} = ({ dropYDirection, innerHeight, boundingRect, toSide, gap }) => {
  const isTop = dropYDirection === 'top'
  const dropYAmountForToSide = () =>
    isTop ? boundingRect.top : innerHeight - boundingRect.bottom
  const dropYAmountForNotToSide = () =>
    isTop
      ? boundingRect.top + boundingRect.height + gap
      : innerHeight - boundingRect.bottom + boundingRect.height + gap

  return {
    dropYAmount: toSide ? dropYAmountForToSide() : dropYAmountForNotToSide(),
  }
}

const getMaxHeight: (
  props: GetFunctionYProps,
) => {
  maxHeight: number
} = ({ dropYDirection, innerHeight, boundingRect, toSide, gap }) => {
  const isTop = dropYDirection === 'top'
  const maxHeightForToSide = () =>
    isTop
      ? innerHeight - boundingRect.top - gap * 2
      : boundingRect.top + boundingRect.height - gap * 2
  const maxHeightForNotToSide = () =>
    isTop
      ? innerHeight - (boundingRect.top + boundingRect.height) - gap * 2
      : boundingRect.top - gap * 2

  return { maxHeight: toSide ? maxHeightForToSide() : maxHeightForNotToSide() }
}

const getMaxWidth: (
  props: GetFunctionXProps,
) => {
  maxWidth: number
} = ({ dropXDirection, innerWidth, boundingRect, toSide, gap }) => {
  const isLeft = dropXDirection === 'left'
  const maxWidthForToSide = () =>
    isLeft
      ? innerWidth - boundingRect.left - boundingRect.width - gap * 2
      : boundingRect.left - gap * 2
  const maxWidthForNotToSide = () =>
    isLeft
      ? innerWidth - boundingRect.left - gap * 2
      : boundingRect.left + boundingRect.width - gap * 2

  return { maxWidth: toSide ? maxWidthForToSide() : maxWidthForNotToSide() }
}

const getMaxHeightCalc: (
  props: GetFunctionYProps,
) => {
  maxHeightCalc: string
} = ({ dropYDirection, innerHeight, boundingRect, toSide, gap }) => {
  const isTop = dropYDirection === 'top'

  const maxHeightForToSide = () =>
    isTop
      ? `calc(100vh - ${boundingRect.bottom + gap * 2}px)`
      : `calc(100vh - ${innerHeight - boundingRect.bottom + gap}px)`
  const maxHeightForNotToSide = () =>
    isTop
      ? `calc(100vh - ${boundingRect.bottom + gap * 2}px)`
      : `calc(100vh - ${innerHeight - boundingRect.top + gap * 2}px)`

  return {
    maxHeightCalc: toSide ? maxHeightForToSide() : maxHeightForNotToSide(),
  }
}

const getMaxWidthCalc: (
  props: GetFunctionXProps,
) => {
  maxWidthCalc: string
} = ({ dropXDirection, innerWidth, boundingRect, toSide, gap }) => {
  const isLeft = dropXDirection === 'left'
  const maxWidthForToSide = () =>
    isLeft
      ? `calc(100vw - ${boundingRect.right + gap * 2}px)`
      : `calc(100vw - ${innerWidth - boundingRect.left + gap}px)`
  const maxWidthForNotToSide = () =>
    isLeft
      ? `calc(100vw - ${boundingRect.left + gap}px)`
      : `calc(100vw - ${innerWidth - boundingRect.right + gap}px)`

  return { maxWidthCalc: toSide ? maxWidthForToSide() : maxWidthForNotToSide() }
}

export class PopOver extends Component<PopOverProps, PopOverState> {
  static getDerivedStateFromProps(
    props: PopOverProps,
    state: PopOverState,
  ): PopOverState {
    return {
      ...state,
      isOpen: props.isOpen !== undefined ? props.isOpen : state.isOpen,
    }
  }

  static defaultProps = {
    gap: 8,
    toSide: false,
  }

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
      maxHeightCalc: '100vh',
      maxWidthCalc: '100vw',
    },
  }

  togglePopOver = () => {
    this.setState(({ isOpen }) => {
      this.props.onToggle && this.props.onToggle(!isOpen)
      return { isOpen: !isOpen }
    })
  }

  onClick = (event: SyntheticEvent) => {
    const { gap, toSide } = this.props

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

    this.setState(({ isOpen }) => {
      this.props.onToggle && this.props.onToggle(!isOpen)
      return {
        isOpen: !isOpen,
        position: {
          ...getDropAmounts({
            boundingRect,
            dropXDirection,
            dropYDirection,
            gap,
            innerHeight,
            innerWidth,
            toSide,
          }),
          dropXDirection,
          dropYDirection,
          gap,
          originHeight: boundingRect.height,
          originWidth: boundingRect.width,
        },
      }
    })
  }

  render() {
    const { popOver, toggle, document } = this.props
    const { isOpen, position } = this.state

    const shouldRender = !this.props.optimize || isOpen

    return (
      <>
        {toggle({ onClick: this.onClick, isOpen })}
        {shouldRender && (
          <Portal document={document}>
            {popOver({
              isOpen,
              position,
              onClick: this.togglePopOver,
              togglePopOver: this.togglePopOver,
            })}
          </Portal>
        )}
      </>
    )
  }
}
