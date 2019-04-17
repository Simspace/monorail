import React from 'react';
import { AppIcon } from '@monorail/appIcon/AppIcon';
import { Icon } from '@monorail/icon/Icon';
import { BorderRadius, borderRadius, Colors, getColor, ElevationRange, flexFlow, FontSizes, getElevation, gothamFontFamily, sizes, typography, visible, } from '@monorail/helpers/exports';
import styled, { css } from 'styled-components';
import { BBSearchContainer } from '../inputs/Search';
import { IconButton } from '@monorail/buttons/IconButton';
import { ButtonDisplay, IconButtonShape } from '@monorail/buttons/buttonTypes';
/*
* Component
*/
export const BBModalBackground = styled.div(({ mini, cssOverrides }) => css `
    ${mini &&
    css `
        height: ${sizes.modals.mini.height}px;
      `};

    ${borderRadius(BorderRadius.XLarge)};
    ${flexFlow()};
    ${getElevation(ElevationRange.Elevation24)};

    margin: 16px;
    background: ${getColor(Colors.White)};
    overflow: hidden;
    width: ${mini ? sizes.modals.mini.width : 584}px;
    position: relative; /* position: relative; so that the shadow works when on the BBModalOverlay */

    will-change: transform;

    ${cssOverrides};
  `);
/*
*
* Modal Header
*
*/
/*
* Styles
*/
const BBModalHeaderContainer = styled.div(({ mini, cssOverrides }) => css `
    ${flexFlow(mini ? 'column' : 'row')};

    ${getElevation(ElevationRange.Elevation2)};

    background: ${getColor(Colors.BrandDarkBlue)};
    flex-shrink: 0;
    user-select: none;
    z-index: 1;

    ${BBSearchContainer} {
      ${mini
    ? css `
            margin: 8px 16px 16px;
          `
    : css `
            margin: auto 16px auto auto;
          `};
    }

    ${cssOverrides};
  `);
const BBModalHeaderRow = styled.div(({ mini }) => css `
    ${flexFlow('row')};

    align-items: center;
    height: ${mini ? 48 : 56}px;
    padding: 0 16px;
    width: 100%;
    overflow: hidden;
  `);
const BBModalHeaderTitle = styled.h1(({ mini }) => css `
    ${mini
    ? typography(700, FontSizes.Title4)
    : typography(700, FontSizes.Title3)};

    color: ${getColor(Colors.White)};
    white-space: nowrap;
    margin: 0;
  `);
const baseIconStyles = css `
  color: ${getColor(Colors.White)};
`;
const StyledAppIconLeft = styled(AppIcon) `
  ${baseIconStyles};
  margin-right: 16px;
`;
const StyledIconLeft = styled(Icon) `
  ${baseIconStyles};
  margin-right: 16px;
`;
const StyledIconRight = styled(Icon) `
  ${baseIconStyles};
  margin-left: 16px;
`;
/*
* Component
*/
export const DefaultCloseButton = ({ headerRowChildren, onClose, }) => (React.createElement(IconButton, { cssOverrides: headerRowChildren
        ? css ``
        : css `
            margin-left: auto;
          `, icon: "close", darkMode: true, onClick: onClose, shape: IconButtonShape.Square, display: ButtonDisplay.Chromeless }));
export const BBModalHeader = ({ appIcon, children, customCloseButton, headerRowChildren, iconLeft, iconRight, mini, onClose, title, cssOverrides, }) => (React.createElement(BBModalHeaderContainer, { mini: mini, cssOverrides: cssOverrides },
    React.createElement(BBModalHeaderRow, { mini: mini },
        appIcon && React.createElement(StyledAppIconLeft, { appName: appIcon }),
        iconLeft && React.createElement(StyledIconLeft, { icon: iconLeft }),
        React.createElement(BBModalHeaderTitle, { mini: mini, "data-test-id": "modal-header-title" }, title),
        headerRowChildren,
        iconRight && React.createElement(StyledIconRight, { icon: iconRight }),
        !mini && onClose && customCloseButton ? (customCloseButton) : (React.createElement(DefaultCloseButton, { headerRowChildren: headerRowChildren, onClose: onClose }))),
    children));
/*
*
* Modal Footer
*
*/
/*
* Styles
*/
export const BBModalFooter = styled.div `
  ${flexFlow('row')};
  ${getElevation(ElevationRange.Elevation6)};

  align-items: center;
  background: ${getColor(Colors.Grey98)};
  height: 48px;
  justify-content: flex-end;
  margin: auto 0 0;
  padding: 0 16px;
  flex-shrink: 0;
`;
/*
*
* Modal Overlay
*
 */
/*
* Styles
*/
const BBModalOverlayContainer = styled.div(({ isOpen, chromeless, cssOverrides }) => css `
    ${visible(isOpen)};
    ${!chromeless &&
    css `
        background: ${getColor(Colors.Black, 0.36)};
      `};

    bottom: 0;
    cursor: pointer;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;

    transition: all ease 150ms;

    ${cssOverrides};
  `);
/*
* Component
*/
export const BBModalOverlay = ({ children, chromeless, isOpen, onClick, cssOverrides, }) => (React.createElement(BBModalOverlayContainer, { isOpen: isOpen, chromeless: chromeless, cssOverrides: cssOverrides, onClick: onClick
        ? (event) => {
            if (event.target === event.currentTarget) {
                onClick(event);
            }
        }
        : undefined }, children));
/*
*
* Modal Container
*
 */
/*
* Styles
*/
export const BBModalContainer = styled.div(({ isOpen, usesScaleAnimation, cssOverrides, zIndex }) => css `
    ${isOpen
    ? css `
          pointer-events: all;
        `
    : css `
          pointer-events: none;
        `};

    ${flexFlow()};
    ${gothamFontFamily};

    align-items: center;
    bottom: 0;
    justify-content: center;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    z-index: ${zIndex};

    ${!usesScaleAnimation &&
    css `
        ${BBModalBackground} {
          ${isOpen
        ? css `
                transform: scale(1) translateY(0);
              `
        : css `
                transform: scale(0.8) translateY(64px);
              `};
          ${visible(isOpen)};

          transition: all ease 100ms;
        }
      `};

    ${cssOverrides};
  `);
/*
*
* Modal Content
*
 */
/*
* Styles
*/
export const BBModalContent = styled.div(({ cssOverrides }) => css `
    ${flexFlow()};
    height: 100%;
    max-height: 100%;
    overflow: auto;

    ${cssOverrides};
  `);
//# sourceMappingURL=Modals.js.map