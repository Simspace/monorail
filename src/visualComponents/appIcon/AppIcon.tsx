import React from 'react'
import styled, { css } from 'styled-components'

import {
  AppOrAuthSubAppName,
  borderRadius,
  Colors,
  convertAppNameToColor,
  flexFlow,
  getColor,
} from '@monorail/helpers/exports'
import { CommonComponentType } from '@monorail/types'
import { Icon } from '@monorail/visualComponents/icon/Icon'

type AppIconProps = CommonComponentType & {
  appName: AppOrAuthSubAppName
}

// TODO(unsafe-any): Fix unsafe anys
// tslint:disable no-unsafe-any
export const AppIcon = styled(({ appName, cssOverrides, ...otherProps }) => (
  <div {...otherProps}>
    <Icon icon={`${appName}-app`} />
  </div>
))<AppIconProps>(
  ({ cssOverrides }) => css`
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

    ${cssOverrides};
  `,
)
// tslint:enable
