import React, { FC, SyntheticEvent, useEffect, useState } from 'react'

import {
  defaultPopOverPosition,
  getOverlayPosition,
  PopOverPosition,
  PopOverProps,
} from '@monorail/metaComponents/popOver/PopOver'
import { PortalController } from '@monorail/metaComponents/portal/PortalController'

export type PopOverToggleProps = {
  isActive: boolean
  onClick: (event: SyntheticEvent) => void
}

export const PopOverNext: FC<PopOverProps> = props => {
  const {
    toggle,
    popOver,
    gap = 8,
    toSide = false,
    alwaysRender = false,
    isOpen = false,
    onToggle,
    xDirection,
    yDirection,
  } = props

  const [isOpenState, setIsOpenState] = useState(false)
  const [isRendered, setIsRendered] = useState(false)
  const [position, setPosition] = useState<PopOverPosition>(
    defaultPopOverPosition,
  )

  useEffect(() => {
    if (isOpenState) {
      setIsRendered(true)
    }
  }, [isOpenState])

  const onClick = (event: SyntheticEvent) => {
    setPosition(
      getOverlayPosition({
        target: event.currentTarget,
        gap,
        toSide,
        xDirection,
        yDirection,
      }),
    )
    togglePopOver()
  }

  const togglePopOver = () => {
    onToggle && onToggle(!isOpenState)
    setIsOpenState(!isOpenState)
  }

  return (
    <>
      {toggle({
        onClick,
        isActive: isOpenState,
      })}
      <PortalController isRendered={isRendered}>
        {popOver({
          isOpen: isOpenState,
          position,
          onClick: togglePopOver,
          togglePopOver,
          closingAnimationCompleted: () => setIsRendered(!isRendered),
        })}
      </PortalController>
    </>
  )
}
