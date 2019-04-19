import React, { Component } from 'react'
import styled, { css, SimpleInterpolation } from 'styled-components'

import { Icon } from '@monorail/icon/Icon'
import {
  Colors,
  getColor,
  flexFlow,
  FontSizes,
  typography,
} from '@monorail/helpers/exports'
import { isNil } from '@monorail/sharedHelpers/typeGuards'

const tagHeight = 24
const circleWidth = tagHeight - 4
const circleRadius = circleWidth / 2
const iconSize = tagHeight / 2

type CCTagProps = {
  cssOverrides?: SimpleInterpolation
  label?: string
}

export const CCTag = styled.div<CCTagProps>(
  ({ label, cssOverrides }) => css`
    ${isNil(label) &&
      css`
        width: ${tagHeight}px;
      `};

    ${flexFlow('row')};
    display: inline-flex;
    align-items: center;
    background: ${getColor(Colors.Black, 0.07)};
    border-radius: ${tagHeight / 2}px;
    height: ${tagHeight}px;
    position: relative; /* ::before circle is pos: abs to this element. */
    text-transform: uppercase;
    user-select: none;

    &::before {
      background: ${getColor(Colors.White)};
      border-radius: ${circleRadius}px;
      bottom: 2px;
      content: '';
      left: 2px;
      position: absolute;
      top: 2px;
      width: ${circleWidth}px;
    }

    ${cssOverrides};
  `,
)

const StyledIconLeft = styled(Icon)`
  color: ${getColor(Colors.BrandLightBlue)};
  margin: 0 ${iconSize / 2}px;
  position: relative; /* give z-index so ::before bg is behind icon */
`

const Title = styled.h1`
  ${typography(700, FontSizes.Content)};
  color: ${getColor(Colors.Black89)};
  margin: 0 10px 0 2px;
`

type TagProps = CCTagProps & {
  icon: string
  key?: string | number
}

export class Tag extends Component<TagProps> {
  render() {
    const { icon, label, cssOverrides } = this.props

    return (
      <CCTag label={label} cssOverrides={cssOverrides}>
        <StyledIconLeft icon={icon} size={iconSize} />

        {label && <Title>{label}</Title>}
      </CCTag>
    )
  }
}
