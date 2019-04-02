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
const BBModalBackground =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "Modals__BBModalBackground",
  componentId: "sc-1y5a2ts-0"
})(({
  mini,
  cssOverrides
}) => (0, _styledComponents.css)(["", ";", ";", ";", ";background:", ";overflow:hidden;width:", "px;position:relative;will-change:transform;", ";"], mini && (0, _styledComponents.css)(["height:", "px;"], _CommonStyles.sizes.modals.mini.height), (0, _CommonStyles.borderRadius)(_CommonStyles.BorderRadius.XLarge), (0, _CommonStyles.flexFlow)(), (0, _CommonStyles.getElevation)(_CommonStyles.ElevationRange.Elevation24), (0, _CommonStyles.colors)(_CommonStyles.Colors.White), mini ? _CommonStyles.sizes.modals.mini.width : 584, cssOverrides));
/*
*
* Modal Header
*
*/

/*
* Styles
*/


exports.BBModalBackground = BBModalBackground;

const BBModalHeaderContainer =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "Modals__BBModalHeaderContainer",
  componentId: "sc-1y5a2ts-1"
})(({
  mini,
  cssOverrides
}) => (0, _styledComponents.css)(["", ";", ";background:", ";flex-shrink:0;user-select:none;z-index:1;", "{", ";}", ";"], (0, _CommonStyles.flexFlow)(mini ? 'column' : 'row'), (0, _CommonStyles.getElevation)(_CommonStyles.ElevationRange.Elevation2), (0, _CommonStyles.colors)(_CommonStyles.Colors.BrandDarkBlue), _Search.BBSearchContainer, mini ? (0, _styledComponents.css)(["margin:8px 16px 16px;"]) : (0, _styledComponents.css)(["margin:auto 16px auto auto;"]), cssOverrides));

const BBModalHeaderRow =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "Modals__BBModalHeaderRow",
  componentId: "sc-1y5a2ts-2"
})(({
  mini
}) => (0, _styledComponents.css)(["", ";align-items:center;height:", "px;padding:0 16px;width:100%;"], (0, _CommonStyles.flexFlow)('row'), mini ? 48 : 56));

const BBModalHeaderTitle =
/*#__PURE__*/
_styledComponents.default.h1.withConfig({
  displayName: "Modals__BBModalHeaderTitle",
  componentId: "sc-1y5a2ts-3"
})(({
  mini
}) => (0, _styledComponents.css)(["", ";color:", ";white-space:nowrap;margin:0;"], mini ? (0, _CommonStyles.typography)(700, _CommonStyles.FontSizes.Title4) : (0, _CommonStyles.typography)(700, _CommonStyles.FontSizes.Title3), (0, _CommonStyles.colors)(_CommonStyles.Colors.White)));

const baseIconStyles =
/*#__PURE__*/
(0, _styledComponents.css)(["color:", ";"], (0, _CommonStyles.colors)(_CommonStyles.Colors.White));
const StyledAppIconLeft =
/*#__PURE__*/
(0, _styledComponents.default)(_AppIcon.AppIcon).withConfig({
  displayName: "Modals__StyledAppIconLeft",
  componentId: "sc-1y5a2ts-4"
})(["", ";margin-right:16px;"], baseIconStyles);
const StyledIconLeft =
/*#__PURE__*/
(0, _styledComponents.default)(_Icon.Icon).withConfig({
  displayName: "Modals__StyledIconLeft",
  componentId: "sc-1y5a2ts-5"
})(["", ";margin-right:16px;"], baseIconStyles);
const StyledIconRight =
/*#__PURE__*/
(0, _styledComponents.default)(_Icon.Icon).withConfig({
  displayName: "Modals__StyledIconRight",
  componentId: "sc-1y5a2ts-6"
})(["", ";margin-left:16px;"], baseIconStyles);
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
  cssOverrides: headerRowChildren ? (0, _styledComponents.css)([""]) : (0, _styledComponents.css)(["margin-left:auto;"]),
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
  title,
  cssOverrides
}) => _react.default.createElement(BBModalHeaderContainer, {
  mini: mini,
  cssOverrides: cssOverrides
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

const BBModalFooter =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "Modals__BBModalFooter",
  componentId: "sc-1y5a2ts-7"
})(["", ";", ";align-items:center;background:", ";height:48px;justify-content:flex-end;margin:auto 0 0;padding:0 16px;flex-shrink:0;"], (0, _CommonStyles.flexFlow)('row'), (0, _CommonStyles.getElevation)(_CommonStyles.ElevationRange.Elevation6), (0, _CommonStyles.colors)(_CommonStyles.Colors.Grey98));
/*
*
* Modal Overlay
*
 */

/*
* Styles
*/


exports.BBModalFooter = BBModalFooter;

const BBModalOverlayContainer =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "Modals__BBModalOverlayContainer",
  componentId: "sc-1y5a2ts-8"
})(({
  isOpen,
  chromeless,
  cssOverrides
}) => (0, _styledComponents.css)(["", ";", ";bottom:0;cursor:pointer;left:0;position:fixed;right:0;top:0;transition:all ease 150ms;", ";"], (0, _CommonStyles.visible)(isOpen), !chromeless && (0, _styledComponents.css)(["background:", ";"], (0, _CommonStyles.colors)(_CommonStyles.Colors.Black, 0.36)), cssOverrides));
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
  cssOverrides
}) => _react.default.createElement(BBModalOverlayContainer, {
  isOpen: isOpen,
  chromeless: chromeless,
  cssOverrides: cssOverrides,
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

const BBModalContainer =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "Modals__BBModalContainer",
  componentId: "sc-1y5a2ts-9"
})(({
  isOpen,
  usesScaleAnimation,
  cssOverrides,
  zIndex
}) => (0, _styledComponents.css)(["", ";", ";", ";align-items:center;bottom:0;justify-content:center;left:0;position:fixed;right:0;top:0;z-index:", ";", ";", ";"], isOpen ? (0, _styledComponents.css)(["pointer-events:all;"]) : (0, _styledComponents.css)(["pointer-events:none;"]), (0, _CommonStyles.flexFlow)(), _CommonStyles.gothamFontFamily, zIndex, !usesScaleAnimation && (0, _styledComponents.css)(["", "{", ";", ";transition:all ease 100ms;}"], BBModalBackground, isOpen ? (0, _styledComponents.css)(["transform:scale(1) translateY(0);"]) : (0, _styledComponents.css)(["transform:scale(0.8) translateY(64px);"]), (0, _CommonStyles.visible)(isOpen)), cssOverrides));
/*
*
* Modal Content
*
 */

/*
* Styles
*/


exports.BBModalContainer = BBModalContainer;

const BBModalContent =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "Modals__BBModalContent",
  componentId: "sc-1y5a2ts-10"
})(({
  cssOverrides
}) => (0, _styledComponents.css)(["", ";height:100%;max-height:100%;overflow:auto;", ";"], (0, _CommonStyles.flexFlow)(), cssOverrides));

exports.BBModalContent = BBModalContent;