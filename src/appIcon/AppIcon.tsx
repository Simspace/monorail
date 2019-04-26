import React from 'react'
import styled, { css } from 'styled-components'
import { CommonComponentType } from '@monorail/types'
import { Icon } from '@monorail/icon/Icon'
import {
  AppOrAuthSubAppName,
  Colors,
  borderRadius,
  getColor,
  convertAppNameToColor,
  flexFlow,
} from '@monorail/helpers/exports'

type AppIconProps = CommonComponentType & {
  appName: AppOrAuthSubAppName
}

// TODO(unsafe-any): Fix unsafe anys
// tslint:disable no-unsafe-any
export const AppIcon = styled(({ appName, cssOverrides, ...otherProps }) => (
  <div {...otherProps}>
    <Icon icon={appName} />
  </div>
))<AppIconProps>(
  ({ appName, cssOverrides }) => css`
    ${flexFlow('row')};
    ${borderRadius()};

    background: ${getColor(convertAppNameToColor(appName))};
    box-sizing: border-box;
    height: 16px;
    width: 16px;

    ${Icon} {
      fill: ${getColor(Colors.White)};
      height: 100%;
      margin: auto;
      width: 100%;
    }

    ${cssOverrides};
  `,
)
// tslint:enable
