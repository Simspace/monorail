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

export type AppIconProps = {
  appName: AppOrAuthSubAppName
}

export const AppIcon = styled(({ appName, ...otherProps }: AppIconProps) => (
  <div {...otherProps}>
    <Icon icon={`${appName}-app`} />
  </div>
))<AppIconProps>`
  ${flexFlow('row')};
  ${borderRadius()};

  box-sizing: border-box;
  height: 16px;
  width: 16px;

  ${Icon} {
    fill: ${getColor(Colors.White)};
    height: 100%;
    margin: auto;
    width: 100%;
  }
`
