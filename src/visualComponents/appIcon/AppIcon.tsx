import React from 'react'

import {
  AppOrAuthSubAppName,
  borderRadius,
  Colors,
  flexFlow,
  getColor,
} from '@monorail/helpers/exports'
import styled from '@monorail/helpers/styled-components'
import { Icon } from '@monorail/visualComponents/icon/Icon'
import { IconType } from '@monorail/visualComponents/icon/IconType'

export type AppIconProps = {
  appName: AppOrAuthSubAppName
}

// TODO: unsafe icon usage
export const AppIcon = styled(({ appName, ...otherProps }: AppIconProps) => (
  <div {...otherProps}>
    <Icon icon={`${appName}-app` as IconType} />
  </div>
))<AppIconProps>`
  ${flexFlow('row')};
  ${borderRadius()};

  box-sizing: border-box;
  height: 16px;
  width: 16px;

  ${Icon} {
    height: 100%;
    margin: auto;
    width: 100%;
  }
`
