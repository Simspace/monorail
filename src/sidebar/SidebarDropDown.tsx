import React, { Component, createRef } from 'react'
import { PopOverChildProps } from '@monorail/popOver/PopOver'
import { BBCardBackground } from '@monorail/cards/Cards'
import styled, { css, SimpleInterpolation } from 'styled-components'
import { flexFlow, generateScaleAnimation } from '@monorail/helpers/exports'
import { Overlay } from '@monorail/toggle/Overlay'

import { fromNullable } from 'fp-ts/lib/Option'

type DropDownContentProps = { cssOverrides?: SimpleInterpolation }

const DropDownContent = styled.div<DropDownContentProps>(
  ({ cssOverrides }) => css`
    ${flexFlow()};

    overflow: hidden;

    ${cssOverrides};
  `,
)

type Props = PopOverChildProps & {
  width: number
}

type State = {
  dropDownHeight: number
  isRendered: boolean
}

export class SidebarDropDown extends Component<Props, State> {
  static defaultProps = {
    width: 208,
  }

  state: State = {
    dropDownHeight: 0,
    isRendered: false,
  }

  dropDownRef = createRef<HTMLDivElement>()

  componentDidMount() {
    this.updateMenuHeight()

    this.setState(() => ({
      isRendered: true,
    }))
  }

  componentDidUpdate() {
    this.updateMenuHeight()
  }

  updateMenuHeight = () => {
    const { dropDownHeight } = this.state

    const currentOpt = fromNullable(this.dropDownRef.current)
    const newDropDownHeight = currentOpt.fold(
      0,
      ({ offsetHeight }) => offsetHeight,
    )

    if (dropDownHeight !== newDropDownHeight) {
      this.setState(() => ({
        dropDownHeight: newDropDownHeight,
      }))
    }
  }

  render() {
    const {
      isOpen,
      position,
      onClick,
      children,
      togglePopOver,
      width,
    } = this.props
    const { dropDownHeight, isRendered } = this.state

    const scaleAnimation = generateScaleAnimation({
      elementHeight: dropDownHeight,
      elementWidth: width,
      isOpen: isRendered && isOpen,
      position,
    })

    return (
      <Overlay
        isOpen={isOpen}
        onClick={onClick}
        overlayProps={{ chromeless: true }}
        togglePopOver={togglePopOver}
      >
        <BBCardBackground
          ref={this.dropDownRef}
          cssOverrides={css`
            width: ${width}px;

            ${scaleAnimation.outSideContentStyles};
          `}
        >
          <DropDownContent cssOverrides={scaleAnimation.inSideContentStyles}>
            {children}
          </DropDownContent>
        </BBCardBackground>
      </Overlay>
    )
  }
}
