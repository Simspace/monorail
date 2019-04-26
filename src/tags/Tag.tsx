import React from 'react'
import styled, { css } from 'styled-components'
import {
  Colors,
  flexFlow,
  FontSizes,
  getColor,
} from '@monorail/helpers/exports'
import { FCwDP } from '@monorail/sharedHelpers/react'
import { Icon } from '@monorail/icon/Icon'
import { isEmptyString } from '@monorail/sharedHelpers/typeGuards'
import { Text } from '@monorail/typography/Text'

const tagHeight = 24
const circleWidth = tagHeight - 4
const circleRadius = circleWidth / 2
const iconSize = tagHeight / 2

export const TagContainer = styled.div<{ doesntHaveLabel: boolean }>(
  ({ doesntHaveLabel }) => css`
    ${doesntHaveLabel &&
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
  `,
)

const iconStyles = css`
  color: ${getColor(Colors.BrandLightBlue)};
  margin: 0 ${iconSize / 2}px;
  position: relative; /* give z-index so ::before bg is behind icon */
`

const labelStyles = css`
  color: ${getColor(Colors.Black89)};
  margin: 0 10px 0 2px;
`

type Props = {
  icon: string
}

type DefaultProps = {
  label: string
}

export const Tag: FCwDP<Props, DefaultProps> = ({
  label,
  icon,
  ...otherProps
}) => (
  <TagContainer doesntHaveLabel={isEmptyString(label)} {...otherProps}>
    <Icon css={iconStyles} icon={icon} size={iconSize} />

    {!isEmptyString(label) && (
      <Text css={labelStyles} fontSize={FontSizes.Content} fontWeight={700}>
        {label}
      </Text>
    )}
  </TagContainer>
)

Tag.defaultProps = {
  label: '',
}
