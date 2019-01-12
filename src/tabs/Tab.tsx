import React, { Component, ReactNode, createRef, MouseEvent } from 'react'
import styled, { SimpleInterpolation } from 'styled-components'
import { isNil, StyledHtmlElement } from 'src/common/util/CoreUtils'
import { Colors, colors, flexFlow, FontSizes, typography } from 'CommonStyles'

const CCTab = styled<CCTabProps, 'div'>('div')`
  ${flexFlow('row')};
  ${typography(700, FontSizes.Title5)};

  align-items: center;
  color: ${colors(Colors.BrandLightBlue)};
  cursor: pointer;
  min-height: 24px;
  padding: 0 7px;
  text-transform: uppercase;
  user-select: none;

  &:hover {
    background: ${colors(Colors.BrandLightBlue, 0.08)};
  }

  &:active {
    background: ${colors(Colors.BrandLightBlue, 0.16)};
  }

  ${({ css: cssOverrides }) => cssOverrides};
`

type CCTabProps = {
  children: ReactNode
  onClick?: (event: MouseEvent<HTMLDivElement>) => void
  isActive: boolean
  css?: SimpleInterpolation
}

export type TabProps = {
  index?: number
  setIndicator: (width: number, offsetLeft: number) => void
  updateIsActive: (i: number) => void
} & CCTabProps

type CCTab = StyledHtmlElement<HTMLDivElement, CCTabProps>

export class Tab extends Component<TabProps> {
  static defaultProps = {
    isActive: false,
    setIndicator: () => {},
    updateIsActive: () => {},
  }

  tabRef = createRef<CCTab>()

  componentDidMount() {
    this.callSetIndicator()
  }

  componentDidUpdate(prevProps: TabProps) {
    if (prevProps.isActive === this.props.isActive) {
      return
    }

    this.callSetIndicator()
  }

  callSetIndicator = () => {
    const { isActive, setIndicator } = this.props

    if (
      !isNil(isActive) &&
      isActive &&
      !isNil(this.tabRef.current) &&
      !isNil(setIndicator)
    ) {
      setIndicator(
        this.tabRef.current.getBoundingClientRect().width,
        this.tabRef.current.offsetLeft,
      )
    }
  }

  onClick = (event: MouseEvent<HTMLDivElement>) => {
    const { updateIsActive, onClick, index } = this.props

    if (!isNil(updateIsActive) && !isNil(index)) {
      updateIsActive(index)
    }

    if (!isNil(onClick)) {
      onClick(event)
    }
  }

  render() {
    const { isActive, children, css: cssOverrides } = this.props

    return (
      <CCTab
        onClick={this.onClick}
        ref={this.tabRef}
        isActive={isActive}
        css={cssOverrides}
      >
        {children}
      </CCTab>
    )
  }
}
