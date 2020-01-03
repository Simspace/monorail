import React, { Component, ReactNode, SyntheticEvent } from 'react'
import { Omit } from 'typelevel-ts'

import { PortalController } from '@monorail/metaComponents/portal/PortalController'

export enum dropDirections {
  Bottom = 'bottom',
  Left = 'left',
  Right = 'right',
  Top = 'top',
}

export type dropXDirectionType = dropDirections.Left | dropDirections.Right
export type dropYDirectionType = dropDirections.Top | dropDirections.Bottom

export type PopOverPosition = {
  dropXAmount: number
  dropXDirection: dropXDirectionType
  dropYAmount: number
  dropYDirection: dropYDirectionType
  gap: number
  maxHeight: number
  maxWidth: number
  originHeight: number
  originWidth: number
  maxHeightCalc: string
  maxWidthCalc: string
}

export const defaultPopOverPosition: PopOverPosition = {
  dropXAmount: 0,
  dropXDirection: dropDirections.Left,
  dropYAmount: 0,
  dropYDirection: dropDirections.Top,
  gap: 8,
  maxHeight: 360,
  maxWidth: 304,
  originHeight: 0,
  originWidth: 0,
  maxHeightCalc: '100vh',
  maxWidthCalc: '100vw',
}

export const getOverlayPosition = ({
  target,
  gap = 8,
  toSide = false,
  xDirection,
  yDirection,
}: {
  target: Element
  gap?: number
  toSide?: boolean
  xDirection?: dropXDirectionType
  yDirection?: dropYDirectionType
}) => {
  // Get basic dimensions about the the Toggle and the window.
  const boundingRect = target.getBoundingClientRect()
  const innerWidth = window.innerWidth
  const innerHeight = window.innerHeight

  // Determine the direction the PopOver should go.
  const dropYDirection: dropYDirectionType =
    yDirection ||
    (innerHeight / 2 > boundingRect.top + boundingRect.height / 2
      ? dropDirections.Top
      : dropDirections.Bottom)
  const dropXDirection: dropXDirectionType =
    xDirection ||
    (innerWidth / 2 > boundingRect.left + boundingRect.width / 2
      ? dropDirections.Left
      : dropDirections.Right)

  return {
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
  }
}

export type PopOverToggleProps = {
  isActive: boolean
  onClick: (event: SyntheticEvent) => void
}

export type PopOverChildProps = {
  isOpen: boolean
  position: PopOverPosition
  onClick: (event: SyntheticEvent) => void
  togglePopOver: () => void
  closingAnimationCompleted: () => void
}

export type PopOverProps = {
  alwaysRender?: boolean
  gap?: number
  isOpen?: boolean
  onToggle?: (isOpen: boolean) => void
  popOver: (props: PopOverChildProps) => ReactNode
  toggle: (props: PopOverToggleProps) => ReactNode
  toSide?: boolean
  xDirection?: dropXDirectionType
  yDirection?: dropYDirectionType
}

type PopOverState = {
  isOpen: boolean
  isRendered: boolean
  position: PopOverPosition
}

type GetFunctionProps = {
  dropXDirection: dropXDirectionType
  dropYDirection: dropYDirectionType
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

export const getDropAmounts: (
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
  const isLeft = dropXDirection === dropDirections.Left
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
  const isTop = dropYDirection === dropDirections.Top
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
  const isTop = dropYDirection === dropDirections.Top
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
  const isLeft = dropXDirection === dropDirections.Left
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
  const isTop = dropYDirection === dropDirections.Top

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
  const isLeft = dropXDirection === dropDirections.Left
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
      isRendered: props.isOpen !== undefined ? props.isOpen : state.isRendered,
    }
  }

  static defaultProps = {
    gap: 8,
    toSide: false,
    alwaysRender: false,
  }

  state: PopOverState = {
    isOpen: false,
    isRendered: false,
    position: defaultPopOverPosition,
  }

  togglePopOver = () => {
    const { onToggle } = this.props

    this.setState(({ isOpen, isRendered }) => {
      const newIsOpen = !isOpen

      const newIsRendered = newIsOpen ? true : isRendered

      onToggle && onToggle(newIsOpen)

      return {
        isOpen: newIsOpen,
        isRendered: newIsRendered,
      }
    })
  }

  closingAnimationCompleted = () => {
    this.setState(() => ({
      isRendered: false,
    }))
  }

  onClick = (event: SyntheticEvent) => {
    const { gap, toSide, onToggle, xDirection, yDirection } = this.props

    const position = getOverlayPosition({
      gap,
      target: event.currentTarget,
      toSide,
      xDirection,
      yDirection,
    })

    this.setState(({ isOpen, isRendered }) => {
      const newIsOpen = !isOpen

      const newIsRendered = newIsOpen ? true : isRendered

      onToggle && onToggle(newIsOpen)

      return {
        isOpen: newIsOpen,
        isRendered: newIsRendered,
        position,
      }
    })
  }

  render() {
    const { popOver, toggle, alwaysRender = false } = this.props
    const { isRendered, isOpen, position } = this.state

    return (
      <>
        {toggle({ onClick: this.onClick, isActive: isOpen })}
        <PortalController isRendered={isRendered || alwaysRender}>
          {popOver({
            isOpen,
            position,

            onClick: this.togglePopOver,
            togglePopOver: this.togglePopOver,
            closingAnimationCompleted: this.closingAnimationCompleted,
          })}
        </PortalController>
      </>
    )
  }
}
