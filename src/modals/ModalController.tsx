import React, { FC, ReactNode, useEffect, useState } from 'react'

import {
  defaultPopOverPosition,
  PopOverChildProps,
} from '@monorail/popOver/PopOver'
import { PortalController } from '@monorail/portal/PortalController'

export type ModalControllerProps = {
  isOpen: boolean
  toggleIsOpen: () => void
  children: (props: PopOverChildProps) => ReactNode
}

export const ModalController: FC<ModalControllerProps> = ({
  children,
  toggleIsOpen,
  isOpen,
}) => {
  const [isRendered, setIsRendered] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setIsRendered(true)
    }
  }, [isOpen])

  return (
    <PortalController isRendered={isRendered}>
      {children({
        isOpen,
        position: defaultPopOverPosition,
        onClick: toggleIsOpen,
        togglePopOver: toggleIsOpen,
        closingAnimationCompleted: () => setIsRendered(!isRendered),
      })}
    </PortalController>
  )
}
