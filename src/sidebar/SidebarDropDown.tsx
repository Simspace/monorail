import React, { Component, createRef } from 'react'
import { PopOverChildProps } from '@monorail/popOver/PopOver'
import { BBCardBackground, BBCardBackgroundProps } from '@monorail/cards/Cards'
import styled, { css, SimpleInterpolation } from 'styled-components'
import { flexFlow, generateScaleAnimation } from '@monorail/CommonStyles'
import { Overlay } from '@monorail/toggle/Overlay'

import { fromNullable } from 'fp-ts/lib/Option'
import { StyledHtmlElement } from '@monorail/CoreUtils/type-level'

type DropDownContentProps = { css?: SimpleInterpolation }
const DropDownContent = styled<DropDownContentProps, 'div'>('div')`
  ${({ css: cssOverride }) => css`
    ${flexFlow()};

    overflow: hidden;

    ${cssOverride};
  `};
`

type BBCardBackgroundRefType = StyledHtmlElement<
  HTMLDivElement,
  BBCardBackgroundProps
>

type Props = PopOverChildProps & {
  width: number
}

type State = {
  dropDownHeight: number
}

export class SidebarDropDown extends Component<Props, State> {
  static defaultProps = {
    width: 208,
  }

  state: State = {
    dropDownHeight: 0,
  }

  dropDownRef = createRef<BBCardBackgroundRefType>()

  componentDidMount() {
    this.updateMenuHeight()
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
    const { dropDownHeight } = this.state

    const scaleAnimation = generateScaleAnimation({
      elementHeight: dropDownHeight,
      elementWidth: width,
      isOpen,
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
          css={css`
            width: ${width}px;

            ${scaleAnimation.outSideContentStyles};
          `}
        >
          <DropDownContent css={scaleAnimation.inSideContentStyles}>
            {children}
          </DropDownContent>
        </BBCardBackground>
      </Overlay>
    )
  }
}
