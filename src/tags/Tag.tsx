import React, { Component } from 'react'
import styled, { css, SimpleInterpolation } from 'styled-components'

import { Icon } from 'icon/Icon'
import {
  Colors,
  colors,
  flexFlow,
  FontSizes,
  typography,
} from 'CommonStyles'

const tagHeight = 24
const circleWidth = tagHeight - 4
const circleRadius = circleWidth / 2
const iconSize = tagHeight / 2

type CCTagProps = {
  css?: SimpleInterpolation
  label?: string
}

export const CCTag = styled<CCTagProps, 'div'>('div')`
  ${({ label }) =>
    label &&
    css`
      width: ${tagHeight}px;
    `};

  ${flexFlow('row')};
  align-items: center;
  background: ${colors(Colors.Black, 0.07)};
  border-radius: ${tagHeight / 2}px;
  height: ${tagHeight}px;
  position: relative; /* ::before circle is pos: abs to this element. */
  text-transform: uppercase;
  user-select: none;
  width: fit-content;

  &::before {
    background: ${colors(Colors.White)};
    border-radius: ${circleRadius}px;
    bottom: 2px;
    content: '';
    left: 2px;
    position: absolute;
    top: 2px;
    width: ${circleWidth}px;
  }

  ${({ css: cssOverrides }) => cssOverrides};
`

const StyledIconLeft = styled(Icon)`
  color: ${colors(Colors.BrandLightBlue)};
  margin: 0 ${iconSize / 2}px;
  position: relative; /* give z-index so ::before bg is behind icon */
`

const Title = styled('h1')`
  ${typography(700, FontSizes.Content)};
  color: ${colors(Colors.Black89)};
  margin: 0 10px 0 2px;
`

type TagProps = CCTagProps & {
  icon: string
  key?: string | number
}

export class Tag extends Component<TagProps> {
  render() {
    const { icon, label, css: cssOverrides } = this.props

    return (
      <CCTag label={label} css={cssOverrides}>
        <StyledIconLeft icon={icon} size={iconSize} />

        {label && <Title>{label}</Title>}
      </CCTag>
    )
  }
}
