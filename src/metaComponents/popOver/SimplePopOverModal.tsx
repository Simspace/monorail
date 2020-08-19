import React from 'react'

import { PopOverPosition } from '@monorail/metaComponents/popOver/PopOver'
import {
  SimplePopOver,
  SimplePopOverChildProps,
} from '@monorail/metaComponents/popOver/SimplePopOver'

export type SimplePopOverModalProps = {
  isOpen: boolean
  show: () => void
  hide: () => void
  open: (event: React.SyntheticEvent<Element, Event>) => void
  position: PopOverPosition
  setPosition: React.Dispatch<React.SetStateAction<PopOverPosition>>
  render: (
    modalProps: SimplePopOverChildProps & { onClick: () => void },
  ) => JSX.Element
}

export const SimplePopOverModal = (props: SimplePopOverModalProps) => {
  /**
   * Use in conjunction with useSimplePopOver hook
   * Example: <SaveAsEventTemplateModal /> in TeamEventOutlook.tsx
   * AR - 2020-07-21
   */
  return (
    <SimplePopOver
      position={props.position}
      isOpen={props.isOpen}
      onClose={props.hide}
      popOver={popOverProps => {
        const modalProps = {
          ...popOverProps,
          onClick: props.hide,
        }

        return props.render(modalProps)
      }}
    />
  )
}
