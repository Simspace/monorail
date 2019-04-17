import React, { forwardRef, } from 'react';
import styled, { css } from 'styled-components';
import { AppIcon } from '@monorail/appIcon/AppIcon';
import { Icon } from '@monorail/icon/Icon';
import { BorderRadius, borderRadius, Colors, getColor, ElevationRange, flexFlow, FontSizes, getElevation, typography, } from '@monorail/helpers/exports';
const BBCardContent = styled.div(({ cssOverrides }) => css `
    ${flexFlow()};

    border-radius: inherit;
    height: 100%;
    overflow: hidden;
    width: 100%;
    position: relative; /* Needs pos:rel; so that it doesn't get placed under the shadow pseudo elements. */

    ${cssOverrides};
  `);
export const BBCardBackground = styled(forwardRef(({ children, cssOverrides, hover, elevation, cssCardContent, ...otherProps }, ref) => (React.createElement("div", Object.assign({ ref: ref }, otherProps),
    React.createElement(BBCardContent, { cssOverrides: cssCardContent }, children)))))(({ hover, cssOverrides, elevation = ElevationRange.Elevation6 }) => css `
    ${hover &&
    css `
        cursor: pointer;

        &:hover {
          &::after {
            transition: box-shadow ease 125ms;
            ${getElevation(ElevationRange.Elevation10)};
          }
        }
      `};

    ${flexFlow()};
    ${borderRadius(BorderRadius.Large)};

    background: ${getColor(Colors.White)};
    position: relative; /* pos:re; because the shadow pseudo element is pos:abs; */
    z-index: 0; /* mythical z-index: 0. The shadow pseudo element needs a negative z-index, but then it disappears. Have to reset the z-index to the zero value so that it appears above the background of the page but under the background of the card. */

    ${cssOverrides};

    &::before {
      border-radius: inherit;
      background: ${getColor(Colors.White)};
      bottom: 0;
      content: '';
      left: 0;
      position: absolute;
      right: 0;
      top: 0;
      z-index: 0;
    }

    &::after {
      ${borderRadius(BorderRadius.Medium)};

      ${getElevation(elevation)};

      background: ${getColor(Colors.White)};
      bottom: 2px;
      content: '';
      left: 2px;
      position: absolute;
      right: 2px;
      top: 2px;
      z-index: -5;
    }
  `);
const BBCardHeaderContainer = styled.div(({ cssOverrides }) => css `
    ${flexFlow('row')};

    align-items: center;
    flex-shrink: 0;
    height: 32px;
    padding: 0 16px;
    position: relative; /* BBCardBottomBorder is pos:abs relative to this. */

    ${cssOverrides};
  `);
const BBCardHeaderTitle = styled.h1 `
  ${typography(700, FontSizes.Title5)};
  margin: 0;
`;
const StyledAppIconLeft = styled(AppIcon) `
  margin-right: 16px;
`;
const StyledIconLeft = styled(Icon) `
  margin-right: 16px;
`;
const StyledIconRight = styled(Icon) `
  margin-left: 16px;
`;
const BBCardBottomBorder = styled.div(({ accentColor }) => css `
    background: linear-gradient(
      to right,
      ${getColor(Colors.White, 0)} 0,
      ${accentColor} 16px,
      ${accentColor} calc(100% - 16px),
      ${getColor(Colors.White, 0)} 100%
    );

    bottom: 0;
    height: 1px;
    left: 0;
    position: absolute;
    right: 0;
  `);
// building-blocks/cards/header
export const BBCardHeader = ({ accentColor = getColor(Colors.BrandLightBlue), appIcon, children, cssOverrides, iconLeft, iconRight, noBorder, title, }) => (React.createElement(BBCardHeaderContainer, { cssOverrides: cssOverrides },
    appIcon && React.createElement(StyledAppIconLeft, { appName: appIcon }),
    iconLeft && React.createElement(StyledIconLeft, { icon: iconLeft }),
    React.createElement(BBCardHeaderTitle, null, title),
    iconRight && React.createElement(StyledIconRight, { icon: iconRight }),
    children,
    !noBorder && React.createElement(BBCardBottomBorder, { accentColor: accentColor })));
export const BBCardGrid = styled.div(({ cssOverrides, cardWidth = 272 }) => css `
    display: grid;
    flex-grow: 1;
    grid-auto-rows: max-content;
    grid-template-columns: repeat(auto-fill, ${cardWidth}px);
    justify-content: center;
    padding: 20px 32px 14px;

    /* IE11 doesn't work with grid that auto places content. Here starts the hacks to get it working with flex. */
    display: -ms-flexbox; /* stylelint-disable-line */
    flex-flow: row wrap;
    align-content: flex-start;
    align-items: flex-start;

    ${cssOverrides};
  `);
//# sourceMappingURL=Cards.js.map