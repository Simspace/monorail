import React, { FC } from 'react'

import {
  Colors,
  FontSizes,
  FontWeights,
  getColor,
} from '@monorail/helpers/exports'
import { isEmptyString, isNumber } from '@monorail/sharedHelpers/typeGuards'
import { CommonComponentType } from '@monorail/types'
import { Icon } from '@monorail/visualComponents/icon/Icon'
import { IconType } from '@monorail/visualComponents/icon/IconType'
import { Text } from '@monorail/visualComponents/typography/Text'
import styled, { css } from '@monorail/helpers/styled-components'

const statusFontSizeLookUp = {
  [FontSizes.Hyper1]: {
    padding: '6px 22px 8px',
    size: 56,
  },
  [FontSizes.Hyper2]: {
    padding: '6px 20px 8px',
    size: 40,
  },
  [FontSizes.Hyper3]: {
    padding: '6px 18px',
    size: 36,
  },
  [FontSizes.Hyper4]: {
    padding: '2px 16px',
    size: 32,
  },
  [FontSizes.Title1]: {
    padding: '2px 14px',
    size: 28,
  },
  [FontSizes.Title2]: {
    padding: '2px 12px',
    size: 24,
  },
  [FontSizes.Title3]: {
    padding: '2px 10px',
    size: 20,
  },
  [FontSizes.Title4]: {
    padding: '2px 8px',
    size: 18,
  },
  [FontSizes.Title5]: {
    padding: '2px 8px',
    size: 16,
  },
  [FontSizes.Micro]: {
    padding: '2px 6px',
    size: 10,
  },
}

const StatusWrapper = styled.div<
  StatusWrapperProps & {
    size: number
    padding: string
  }
>(
  ({
    hasBackground,
    inactive,
    padding,
    size,
    statusColor = Colors.BrandLightBlue,
  }) => css`
    align-items: center;
    display: inline-flex;
    flex-shrink: 0;
    height: ${size}px;
    justify-items: center;
    padding: ${hasBackground ? padding : '0'};

    ${hasBackground &&
      `
    background: ${getColor(inactive ? Colors.Black54a : statusColor)};
    border-radius: ${size / 2 + 2}px;
    box-sizing: content-box;
    color: ${getColor(Colors.White)};
    `}

    ${Icon} {
      ${hasBackground
        ? `color: currentColor;`
        : `color: ${getColor(Colors.White)};
        background: ${getColor(statusColor)};
        border-radius: 1000px;
        box-sizing: content-box;
        padding: 2px;`};
    }
  `,
)

const NumberStatusWrapper = styled.div<{
  size: number
  inactive: boolean
  statusColor?: Colors
}>(
  ({ size = 16, inactive = false, statusColor = Colors.BrandLightBlue }) => css`
    background: ${getColor(inactive ? Colors.Black54a : statusColor)};
    border-radius: ${size / 2}px;
    box-sizing: content-box;
    color: ${getColor(Colors.White)};
    flex-shrink: 0;
    font-size: ${size - 5}px;
    font-weight: 700;
    height: ${size}px;
    min-width: ${size}px;
    padding: 0 ${size / 4}px;
    text-align: center;
    line-height: ${size}px;
    display: inline-block;
  `,
)

type StatusWrapperProps = {
  inactive?: boolean
  statusColor?: Colors
  hasBackground?: boolean
}

export type StatusProps = CommonComponentType &
  StatusWrapperProps & {
    fontSize?: FontSizes
    icon?: IconType
    children?: number | string
  }

export const Status: FC<StatusProps> = props => {
  const {
    children,
    fontSize = FontSizes.Title5,
    hasBackground = true,
    icon = '',
    inactive = false,
    statusColor,
    ...domProps
  } = props

  const size = statusFontSizeLookUp[fontSize].size
  const padding = statusFontSizeLookUp[fontSize].padding

  return isNumber(children) ? (
    <NumberStatusWrapper
      statusColor={statusColor}
      size={size}
      inactive={inactive}
      {...domProps}
    >
      {children}
    </NumberStatusWrapper>
  ) : (
    <StatusWrapper
      hasBackground={hasBackground}
      inactive={inactive}
      padding={padding}
      statusColor={statusColor}
      size={size}
      {...domProps}
    >
      {!isEmptyString(icon) && (
        <Icon
          icon={icon}
          size={size - 4}
          css={css`
            margin-right: 8px;
          `}
        />
      )}
      <Text
        fontSize={fontSize}
        fontWeight={hasBackground ? FontWeights.Medium : FontWeights.Book}
        color={hasBackground ? Colors.White : undefined}
        margin={icon && size > 18 ? '0 0 2px' : '0'}
      >
        {children}
      </Text>
    </StatusWrapper>
  )
}
