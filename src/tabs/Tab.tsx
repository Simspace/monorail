import React, { Component, createRef, MouseEvent } from 'react'
import { findDOMNode } from 'react-dom'
import { Link } from 'react-router'
import {
  baseFocusStyles,
  Colors,
  colors,
  flexFlow,
  FontSizes,
  typography,
} from '@monorail/CommonStyles'

import { LinkProps } from '@monorail/list/List'
import { CommonComponentType } from '@monorail/types'
import styled from 'styled-components'
import { isNil } from '@monorail/CoreUtils/primitive-guards'
import { StyledHtmlElement } from '@monorail/CoreUtils/type-level'

const CCTab = styled<CCTabProps, 'div'>('div')`
  ${flexFlow('row')};
  ${typography(700, FontSizes.Title5)};

  align-items: center;
  color: ${colors(Colors.BrandLightBlue)};
  cursor: pointer;
  min-height: 24px;
  padding: 0 8px;
  text-transform: uppercase;
  user-select: none;

  &:hover,
  &:focus {
    text-decoration: none;
  }

  &:hover {
    background: ${colors(Colors.BrandLightBlue, 0.08)};
  }

  &:active {
    background: ${colors(Colors.BrandLightBlue, 0.16)};
  }

  ${baseFocusStyles()};

  ${({ css: cssOverrides }) => cssOverrides};
`

type CCTabProps = CommonComponentType &
  LinkProps & {
    onClick?: (event: MouseEvent<HTMLDivElement>) => void
    isActive: boolean
  }

export type TabProps = CCTabProps & {
  index?: number
  setIndicator: (width: number, offsetLeft: number) => void
  updateIsActive: (i: number) => void
}

type TabRefType = StyledHtmlElement<HTMLDivElement, CCTabProps>

export class Tab extends Component<TabProps> {
  static defaultProps = {
    isActive: false,
    setIndicator: () => {},
    updateIsActive: () => {},
  }

  tabRef = createRef<TabRefType>()

  componentDidMount() {
    this.callSetIndicator()
  }

  componentDidUpdate(prevProps: TabProps) {
    if (prevProps.isActive !== this.props.isActive) {
      this.callSetIndicator()
    }
  }

  callSetIndicator = () => {
    const { isActive, setIndicator, as } = this.props

    if (isActive && !isNil(this.tabRef.current)) {
      if (isNil(as)) {
        setIndicator(
          this.tabRef.current.offsetWidth,
          this.tabRef.current.offsetLeft,
        )
      } else if (as === Link) {
        const tabLinkRef = findDOMNode(this.tabRef.current) as HTMLAnchorElement

        setIndicator(tabLinkRef.offsetWidth, tabLinkRef.offsetLeft)
      }
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
    const { isActive, children, css: cssOverrides, as, to } = this.props

    return (
      <CCTab
        onClick={this.onClick}
        ref={this.tabRef}
        isActive={isActive}
        css={cssOverrides}
        as={as}
        to={to}
      >
        {children}
      </CCTab>
    )
  }
}
