import React from 'react'

import styled, { css } from '@monorail/helpers/styled-components'
import {
  Colors,
  getColor,
  FontSizes,
  FontWeights,
} from '@monorail/helpers/exports'
import { Text } from '@monorail/visualComponents/typography/Text'
import { Icon } from '@monorail/visualComponents/icon/Icon'
import { IconType } from '@monorail/visualComponents/icon/IconType'

export const ChevronStepper = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
  overflow-x: auto;
  padding-top: 0;
  padding-right: 0;
  padding-bottom: 0;
  padding-left: 0;
  white-space: nowrap;
  width: 100%;
`

export const Step = styled.li<{ isActive: boolean }>(
  ({ isActive }) => css`
    background-color: ${isActive
      ? getColor(Colors.AccentBlue400)
      : getColor(Colors.Grey94)};
    clip-path: polygon(
      calc(100% - 8px) 0,
      100% 50%,
      calc(100% - 8px) 100%,
      0% 100%,
      calc(0% + 8px) 50%,
      0% 0%
    );
    display: flex;
    align-items: center;
    flex: 1 1 0;
    justify-content: center;
    min-width: 128px;
    padding: 5px 24px;
    width: 0;

    &:first-child {
      border-radius: 4px 0 0 4px;
      clip-path: polygon(
        calc(100% - 8px) 0,
        100% 50%,
        calc(100% - 8px) 100%,
        0% 100%,
        0 0,
        0 0
      );
      padding-left: 16px;
    }

    &:last-child {
      border-radius: 0 4px 4px 0;
      clip-path: polygon(
        100% 0,
        100% 100%,
        0% 100%,
        0% 100%,
        calc(0% + 8px) 50%,
        0 0
      );
      padding-right: 16px;
    }

    span {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    i,
    svg {
      margin-right: 5px;
      color: ${isActive ? getColor(Colors.White) : getColor(Colors.Gray89)};
    }
  `,
)
type ChevronStepProps = {
  icon?: IconType
  isActive?: boolean
  title: string
}

export const ChevronStep: React.FC<ChevronStepProps> = ({
  title,
  isActive = false,
  icon,
}) => {
  return (
    <Step isActive={isActive}>
      {icon && <Icon icon={icon} />}
      <Text
        fontSize={FontSizes.Title5}
        fontWeight={isActive ? FontWeights.Bold : FontWeights.Book}
        color={isActive ? Colors.White : Colors.Gray89}
        title={title}
        aria-label={title}
      >
        {title}
      </Text>
    </Step>
  )
}
