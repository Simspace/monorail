import React from 'react'
import styled, { css } from 'styled-components'
import {
  AppOrAuthSubAppName,
  borderRadius,
  colors,
  Colors,
  convertAppNameToColor,
  convertAppNameToString,
  flexFlow,
} from '@monorail/CommonStyles'
import { Icon } from '@monorail/icon/Icon'
import { CommonComponentType } from '@monorail/types'

type AppIconProps = CommonComponentType & {
  appName: AppOrAuthSubAppName
}

export const AppIcon = styled<AppIconProps>(
  ({ appName, css: cssOverrides, ...otherProps }) => (
    <div {...otherProps}>
      <Icon icon={convertAppNameToString(appName)} />
    </div>
  ),
)`
  ${({ appName }) => css`
    background: ${colors(convertAppNameToColor(appName))};
  `};

  ${flexFlow('row')};
  ${borderRadius()};

  box-sizing: border-box;
  height: 16px;
  width: 16px;

  ${Icon} {
    fill: ${colors(Colors.White)};
    height: 100%;
    margin: auto;
    width: 100%;
  }

  ${({ css: cssOverrides }) => cssOverrides};
`
