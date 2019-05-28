import React from 'react'
import styled, { css } from 'styled-components'

import { AppIcon } from '@monorail/appIcon/AppIcon'
import {
  AppName,
  Colors,
  flexFlow,
  FontSizes,
  getColor,
  isAppName,
  typography,
} from '@monorail/helpers/exports'
import { Icon } from '@monorail/icon/Icon'
import { FCwDP } from '@monorail/sharedHelpers/react'
import { isEmptyString } from '@monorail/sharedHelpers/typeGuards'
import { Text } from '@monorail/typography/Text'

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

type DefaultProps = {
  iconLeft: string | AppName
  iconRight: string | AppName
}

type RequiredProps = {
  title: string
}

export const SectionHeader: FCwDP<RequiredProps, DefaultProps> = ({
  children,
  iconLeft,
  iconRight,
  title,
  ...otherProps
}) => (
  <SectionHeaderContainer {...otherProps}>
    {!isEmptyString(iconLeft) &&
      (isAppName(iconLeft) ? (
        <AppIcon appName={iconLeft} cssOverrides={iconLeftStyle} />
      ) : (
        <Icon css={iconLeftStyle} icon={iconLeft} />
      ))}
    <Text fontWeight={700} fontSize={FontSizes.Title5} as="h1">
      {title}
    </Text>
    {!isEmptyString(iconRight) &&
      (isAppName(iconRight) ? (
        <AppIcon appName={iconRight} cssOverrides={iconRightStyle} />
      ) : (
        <Icon css={iconRightStyle} icon={iconRight} />
      ))}
    {children}
  </SectionHeaderContainer>
)

SectionHeader.defaultProps = {
  iconLeft: '',
  iconRight: '',
}
