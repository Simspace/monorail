import { AppIcon } from '@monorail/appIcon/AppIcon';
import { Colors, flexFlow, FontSizes, getColor, isAppName, typography, } from '@monorail/helpers/exports';
import { Icon } from '@monorail/icon/Icon';
import { isEmptyString } from '@monorail/sharedHelpers/typeGuards';
import { Text } from '@monorail/typography/Text';
import React from 'react';
import styled, { css } from 'styled-components';
const SectionHeaderContainer = styled.div `
  ${flexFlow('row')};
  ${typography(700, FontSizes.Title5)};
  align-items: center;
  color: ${getColor(Colors.Black74)};
  flex-shrink: 0;
  height: 40px;
  padding: 0 16px;
`;
const iconLeftStyle = css `
  margin-right: 8px;
`;
const iconRightStyle = css `
  margin-left: 8px;
`;
export const SectionHeader = ({ children, iconLeft, iconRight, title, ...otherProps }) => (React.createElement(SectionHeaderContainer, Object.assign({}, otherProps),
    !isEmptyString(iconLeft) &&
        (isAppName(iconLeft) ? (React.createElement(AppIcon, { appName: iconLeft, cssOverrides: iconLeftStyle })) : (React.createElement(Icon, { css: iconLeftStyle, icon: iconLeft }))),
    React.createElement(Text, { fontWeight: 700, fontSize: FontSizes.Title5, as: "h1" }, title),
    !isEmptyString(iconRight) &&
        (isAppName(iconRight) ? (React.createElement(AppIcon, { appName: iconRight, cssOverrides: iconRightStyle })) : (React.createElement(Icon, { css: iconRightStyle, icon: iconRight }))),
    children));
SectionHeader.defaultProps = {
    iconLeft: '',
    iconRight: '',
};
//# sourceMappingURL=SectionHeader.js.map