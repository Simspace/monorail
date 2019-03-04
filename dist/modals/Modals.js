"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BBModalContent = exports.BBModalContainer = exports.BBModalOverlay = exports.BBModalFooter = exports.BBModalHeader = exports.DefaultCloseButton = exports.BBModalBackground = void 0;

var _react = _interopRequireDefault(require("react"));

var _AppIcon = require("../appIcon/AppIcon");

var _Icon = require("../icon/Icon");

var _CommonStyles = require("../CommonStyles");

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Search = require("../inputs/Search");

var _IconButton = require("../buttons/IconButton");

var _buttonTypes = require("../buttons/buttonTypes");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
* Component
*/
const BBModalBackground = (0, _styledComponents.default)('div')`
  ${({
  mini
}) => mini && _styledComponents.css`
      height: ${_CommonStyles.sizes.modals.mini.height}px;
    `};

  ${(0, _CommonStyles.borderRadius)(_CommonStyles.BorderRadius.XLarge)};
  ${(0, _CommonStyles.flexFlow)()};
  ${(0, _CommonStyles.getElevation)(_CommonStyles.ElevationRange.Elevation24)};

  background: ${(0, _CommonStyles.colors)(_CommonStyles.Colors.White)};
  overflow: hidden;
  width: ${({
  mini
}) => mini ? _CommonStyles.sizes.modals.mini.width : 584}px;
  position: relative; /* position: relative; so that the shadow works when on the BBModalOverlay */

  will-change: transform;

  ${({
  css: cssOverrides
}) => cssOverrides};
`;
/*
*
* Modal Header
*
*/

/*
* Styles
*/

exports.BBModalBackground = BBModalBackground;
const BBModalHeaderContainer = (0, _styledComponents.default)('div')`
  ${({
  mini
}) => (0, _CommonStyles.flexFlow)(mini ? 'column' : 'row')};

  ${(0, _CommonStyles.getElevation)(_CommonStyles.ElevationRange.Elevation2)};

  background: ${(0, _CommonStyles.colors)(_CommonStyles.Colors.BrandDarkBlue)};
  flex-shrink: 0;
  user-select: none;
  z-index: 1;

  ${_Search.BBSearchContainer} {
    ${({
  mini
}) => mini ? _styledComponents.css`
            margin: 8px 16px 16px;
          ` : _styledComponents.css`
            margin: auto 16px auto auto;
          `};
  }
`;
const BBModalHeaderRow = (0, _styledComponents.default)('div')`
  ${(0, _CommonStyles.flexFlow)('row')};

  align-items: center;
  height: ${({
  mini
}) => mini ? 48 : 56}px;
  padding: 0 16px;
  width: 100%;
`;
const BBModalHeaderTitle = (0, _styledComponents.default)('h1')`
  ${({
  mini
}) => mini ? (0, _CommonStyles.typography)(700, _CommonStyles.FontSizes.Title4) : (0, _CommonStyles.typography)(700, _CommonStyles.FontSizes.Title3)};

  color: ${(0, _CommonStyles.colors)(_CommonStyles.Colors.White)};
  white-space: nowrap;
  margin: 0;
`;
const baseIconStyles = _styledComponents.css`
  color: ${(0, _CommonStyles.colors)(_CommonStyles.Colors.White)};
`;
const StyledAppIconLeft = (0, _styledComponents.default)(_AppIcon.AppIcon)`
  ${baseIconStyles};
  margin-right: 16px;
`;
const StyledIconLeft = (0, _styledComponents.default)(_Icon.Icon)`
  ${baseIconStyles};
  margin-right: 16px;
`;
const StyledIconRight = (0, _styledComponents.default)(_Icon.Icon)`
  ${baseIconStyles};
  margin-left: 16px;
`;
/*
* Types
*/

/*
* Component
*/
const DefaultCloseButton = ({
  headerRowChildren,
  onClose
}) => _react.default.createElement(_IconButton.IconButton, {
  css: headerRowChildren ? _styledComponents.css`` : _styledComponents.css`
            margin-left: auto;
          `,
  icon: "close",
  darkMode: true,
  onClick: onClose,
  shape: _buttonTypes.IconButtonShape.Square,
  display: _buttonTypes.ButtonDisplay.Chromeless
});

exports.DefaultCloseButton = DefaultCloseButton;

const BBModalHeader = ({
  appIcon,
  children,
  customCloseButton,
  headerRowChildren,
  iconLeft,
  iconRight,
  mini,
  onClose,
  title
}) => _react.default.createElement(BBModalHeaderContainer, {
  mini: mini
}, _react.default.createElement(BBModalHeaderRow, {
  mini: mini
}, appIcon && _react.default.createElement(StyledAppIconLeft, {
  appName: appIcon
}), iconLeft && _react.default.createElement(StyledIconLeft, {
  icon: iconLeft
}), _react.default.createElement(BBModalHeaderTitle, {
  mini: mini,
  "data-test-id": "modal-header-title"
}, title), headerRowChildren, iconRight && _react.default.createElement(StyledIconRight, {
  icon: iconRight
}), !mini && onClose && customCloseButton ? customCloseButton : _react.default.createElement(DefaultCloseButton, {
  headerRowChildren: headerRowChildren,
  onClose: onClose
})), children);
/*
*
* Modal Footer
*
*/

/*
* Styles
*/


exports.BBModalHeader = BBModalHeader;
const BBModalFooter = (0, _styledComponents.default)('div')`
  ${(0, _CommonStyles.flexFlow)('row')};
  ${(0, _CommonStyles.getElevation)(_CommonStyles.ElevationRange.Elevation6)};

  align-items: center;
  background: ${(0, _CommonStyles.colors)(_CommonStyles.Colors.Grey98)};
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

exports.BBModalFooter = BBModalFooter;
const BBModalOverlayContainer = (0, _styledComponents.default)('div')`
  ${({
  isOpen
}) => (0, _CommonStyles.visible)(isOpen)};
  ${({
  chromeless
}) => !chromeless && _styledComponents.css`
      background: ${(0, _CommonStyles.colors)(_CommonStyles.Colors.Black, 0.36)};
    `};

  bottom: 0;
  cursor: pointer;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;

  transition: all ease 150ms;

  ${({
  css: cssOverride
}) => cssOverride};
`;
/*
* Types
*/

/*
* Component
*/
const BBModalOverlay = ({
  children,
  chromeless,
  isOpen,
  onClick,
  css: cssOverrides
}) => _react.default.createElement(BBModalOverlayContainer, {
  isOpen: isOpen,
  chromeless: chromeless,
  css: cssOverrides,
  onClick: onClick ? event => {
    if (event.target === event.currentTarget) {
      onClick(event);
    }
  } : undefined
}, children);
/*
*
* Modal Container
*
 */

/*
* Styles
*/


exports.BBModalOverlay = BBModalOverlay;
const BBModalContainer = (0, _styledComponents.default)('div')`
  ${({
  isOpen,
  usesScaleAnimation,
  css: cssOverrides
}) => _styledComponents.css`
    ${isOpen ? _styledComponents.css`
          pointer-events: all;
        ` : _styledComponents.css`
          pointer-events: none;
        `};

    ${(0, _CommonStyles.flexFlow)()};
    ${_CommonStyles.gothamFontFamily};

    align-items: center;
    bottom: 0;
    justify-content: center;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 9998;

    ${!usesScaleAnimation && _styledComponents.css`
        ${BBModalBackground} {
          ${isOpen ? _styledComponents.css`
                transform: scale(1) translateY(0);
              ` : _styledComponents.css`
                transform: scale(0.8) translateY(64px);
              `};
          ${(0, _CommonStyles.visible)(isOpen)};

          transition: all ease 100ms;
        }
      `};

    ${cssOverrides};
  `};
`;
/*
*
* Modal Content
*
 */

/*
* Styles
*/

exports.BBModalContainer = BBModalContainer;
const BBModalContent = (0, _styledComponents.default)('div')`
  ${(0, _CommonStyles.flexFlow)()};
  height: 100%;
  max-height: 100%;
  overflow: auto;

  ${({
  css: cssOverrides
}) => cssOverrides};
`;
exports.BBModalContent = BBModalContent;