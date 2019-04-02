import React, { Component } from 'react'

import { PopOverChildProps } from '@monorail/popOver/PopOver'
import { BBModalBackground, BBModalHeader } from '@monorail/modals/Modals'
import { Overlay } from '@monorail/toggle/Overlay'
import { SimpleInterpolation } from 'styled-components'

type Props = PopOverChildProps & {
  title: string
  iconLeft?: string
  headerStyles?: SimpleInterpolation
}

export class MediumModal extends Component<Props> {
  render() {
    const {
      isOpen,
      onClick,
      children,
      title,
      iconLeft,
      togglePopOver,
      headerStyles,
    } = this.props

    return (
      <Overlay isOpen={isOpen} onClick={onClick} togglePopOver={togglePopOver}>
        <BBModalBackground>
          <BBModalHeader
            title={title}
            iconLeft={iconLeft}
            onClose={onClick}
            cssOverrides={headerStyles}
          />
          {children}
        </BBModalBackground>
      </Overlay>
    )
  }
}
