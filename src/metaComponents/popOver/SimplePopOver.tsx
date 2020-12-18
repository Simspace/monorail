import React, { ReactNode, useState } from 'react'

import { PopOverPosition } from '@monorail/metaComponents/popOver/PopOver'
import { PortalController } from '@monorail/metaComponents/portal/PortalController'

export type SimplePopOverChildProps = {
  isOpen: boolean
  position: PopOverPosition
  togglePopOver: () => void
  closingAnimationCompleted: () => void
}

export type SimplePopOverProps = {
  isOpen: boolean
  onClose?: () => void
  popOver: (props: SimplePopOverChildProps) => ReactNode
  position: PopOverPosition
}

type State = 'opened' | 'closing' | 'closed'

export const SimplePopOver = (props: SimplePopOverProps) => {
  const { popOver, position, isOpen, onClose = () => {} } = props

  const [state, setState] = useState<State>('closed')

  const onCloseEnd = React.useCallback(() => {
    setState('closed')
  }, [])

  React.useEffect(() => {
    if (isOpen && state === 'closed') {
      setState('opened')
    } else if (state === 'opened') {
      setState('closing')
    }
  }, [isOpen, state])

  return (
    <PortalController isRendered={state !== 'closed'}>
      {popOver({
        isOpen,
        position,
        togglePopOver: onClose,
        closingAnimationCompleted: onCloseEnd,
      })}
    </PortalController>
  )
}
