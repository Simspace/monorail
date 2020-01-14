import React, { FC } from 'react'
import styled, { css } from 'styled-components'

import {
  AppName,
  Colors,
  flexFlow,
  FontSizes,
  getColor,
  isAppName,
  typography,
} from '@monorail/helpers/exports'
import { isEmptyString } from '@monorail/sharedHelpers/typeGuards'
import { AppIcon } from '@monorail/visualComponents/appIcon/AppIcon'
import { Icon } from '@monorail/visualComponents/icon/Icon'
import { Text } from '@monorail/visualComponents/typography/Text'

const SectionHeaderContainer = styled.div`
  ${flexFlow('row')};
  ${typography(700, FontSizes.Title5)};
  align-items: center;
  color: ${getColor(Colors.Black74)};
  flex-shrink: 0;
  height: 40px;
  padding: 0 16px;
`

const iconLeftStyle = css`
  margin-right: 8px;
`

const iconRightStyle = css`
  margin-left: 8px;
`

type Props = {
  title: string
  iconLeft?: string | AppName
  iconRight?: string | AppName
}

export const SectionHeader: FC<Props> = props => {
  const {
    children,
    iconLeft = '',
    iconRight = '',
    title,
    ...otherProps
  } = props

  return (
    <SectionHeaderContainer {...otherProps}>
      {!isEmptyString(iconLeft) &&
        (isAppName(iconLeft) ? (
          <AppIcon appName={iconLeft} css={iconLeftStyle} />
        ) : (
          <Icon css={iconLeftStyle} icon={iconLeft} />
        ))}
      <Text fontWeight={700} fontSize={FontSizes.Title5} as="h1">
        {title}
      </Text>
      {!isEmptyString(iconRight) &&
        (isAppName(iconRight) ? (
          <AppIcon appName={iconRight} css={iconRightStyle} />
        ) : (
          <Icon css={iconRightStyle} icon={iconRight} />
        ))}
      {children}
    </SectionHeaderContainer>
  )
}
