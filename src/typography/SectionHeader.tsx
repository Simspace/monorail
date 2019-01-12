import React, { Component } from 'react'
import styled, { SimpleInterpolation } from 'styled-components'

import { Icon } from 'src/icon/Icon'
import {
  Colors,
  colors,
  flexFlow,
  FontSizes,
  typography,
} from 'src/CommonStyles'

type CCSectionHeaderProps = {
  css?: SimpleInterpolation
}

const CCSectionHeader = styled<CCSectionHeaderProps, 'div'>('div')`
  ${flexFlow('row')} align-items: center;
  flex-shrink: 0;
  height: 40px;
  padding: 0 16px;

  ${({ css: cssOverrides }) => cssOverrides};
`

const Title = styled('h1')`
  ${typography(700, FontSizes.Title5)}
  color: ${colors(Colors.Black74)};
  flex: 1;
`

const StyledIconLeft = styled(Icon)`
  margin-right: 16px;
`

const StyledIconRight = styled(Icon)`
  margin-left: 16px;
`

type SectionHeaderProps = CCSectionHeaderProps & {
  iconLeft?: string
  iconRight?: string
  title: string
}

export class SectionHeader extends Component<SectionHeaderProps> {
  render() {
    const {
      title,
      iconLeft,
      iconRight,
      css: cssOverrides,
      children,
    } = this.props

    return (
      <CCSectionHeader css={cssOverrides}>
        {iconLeft && <StyledIconLeft icon={iconLeft} />}
        <Title>{title}</Title>
        {iconRight && <StyledIconRight icon={iconRight} />}
        {children}
      </CCSectionHeader>
    )
  }
}
