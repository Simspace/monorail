import React from 'react';
import styled, { css } from 'styled-components';
import { Icon } from '@monorail/icon/Icon';
import { Colors, borderRadius, getColor, convertAppNameToColor, flexFlow, } from '@monorail/helpers/exports';
export const AppIcon = styled(({ appName, cssOverrides, ...otherProps }) => (React.createElement("div", Object.assign({}, otherProps),
    React.createElement(Icon, { icon: appName }))))(({ appName, cssOverrides }) => css `
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
  `);
//# sourceMappingURL=AppIcon.js.map