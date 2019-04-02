import React from 'react'
import styled, { css } from 'styled-components'
import { CommonComponentType } from '@monorail/types'
import { Icon } from '@monorail/icon/Icon'
import {
  AppOrAuthSubAppName,
  Colors,
  borderRadius,
  colors,
  convertAppNameToColor,
  flexFlow,
} from '@monorail/CommonStyles'

type AppIconProps = CommonComponentType & {
  appName: AppOrAuthSubAppName
}

export const AppIcon = styled(({ appName, cssOverrides, ...otherProps }) => (
  <div {...otherProps}>
    <Icon icon={appName} />
  </div>
))<AppIconProps>(
  ({ appName, cssOverrides }) => css`
    ${flexFlow('row')};
    ${borderRadius()};

    background: ${colors(convertAppNameToColor(appName))};
    box-sizing: border-box;
    height: 16px;
    width: 16px;

    ${Icon} {
      fill: ${colors(Colors.White)};
      height: 100%;
      margin: auto;
      width: 100%;
    }

    ${cssOverrides};
  `,
)
