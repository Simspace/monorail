"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AlertBanner = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _react = _interopRequireDefault(require("react"));

var _exports = require("../../helpers/exports");

var _buttonTypes = require("../buttons/buttonTypes");

var _IconButton = require("../buttons/IconButton");

var _Icon = require("../icon/Icon");

var _types = require("../toast/types");

var _Text = require("../typography/Text");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/*
 * Styles
 */
const BannerContainer = /*#__PURE__*/_styledComponents.default.div.withConfig({
  displayName: "AlertBanner__BannerContainer",
  componentId: "sc-1vbq61w-0"
})(({
  level
}) => (0, _styledComponents.css)(["display:flex;border:1px solid ", ";background-color:", ";height:80px;flex-shrink:0;max-width:1920px;"], (0, _exports.getColor)(_types.AlertColors[level]), (0, _exports.getColor)(_types.AlertColors[level], 0.08)));

const IconContainer = /*#__PURE__*/_styledComponents.default.div.withConfig({
  displayName: "AlertBanner__IconContainer",
  componentId: "sc-1vbq61w-1"
})(["display:flex;justify-content:center;align-items:center;width:56px;flex-shrink:0;"]);

const TextContainer = /*#__PURE__*/_styledComponents.default.div.withConfig({
  displayName: "AlertBanner__TextContainer",
  componentId: "sc-1vbq61w-2"
})(["display:flex;flex-direction:column;justify-content:center;margin:0;"]);

const CloseAlert = /*#__PURE__*/_styledComponents.default.div.withConfig({
  displayName: "AlertBanner__CloseAlert",
  componentId: "sc-1vbq61w-3"
})(["align-items:center;margin:0 0 0 auto;padding:0 16px;", ";"], (0, _exports.flexFlow)('row'));
/*
 * Props
 */


var _StyledText = /*#__PURE__*/(0, _styledComponents.default)(_Text.Text).withConfig({
  displayName: "AlertBanner___StyledText",
  componentId: "sc-1vbq61w-4"
})(["margin-bottom:5px;"]);

var _StyledText2 = /*#__PURE__*/(0, _styledComponents.default)(_Text.Text).withConfig({
  displayName: "AlertBanner___StyledText2",
  componentId: "sc-1vbq61w-5"
})(["max-width:664px;"]);

var _StyledIconButton = /*#__PURE__*/(0, _styledComponents.default)(_IconButton.IconButton).withConfig({
  displayName: "AlertBanner___StyledIconButton",
  componentId: "sc-1vbq61w-6"
})(["color:", ";"], p => p._css);

/*
 * Component
 */
const AlertBanner = props => {
  const {
    dismissible = true,
    level = _types.AlertLevel.Info,
    message,
    title,
    icon,
    onClick,
    ...domProps
  } = props;
  return /*#__PURE__*/_react.default.createElement(BannerContainer, _extends({
    level: level
  }, domProps), /*#__PURE__*/_react.default.createElement(IconContainer, null, /*#__PURE__*/_react.default.createElement(_Icon.Icon, {
    icon: _types.AlertIcons[level],
    color: _types.AlertColors[level],
    size: 24
  })), /*#__PURE__*/_react.default.createElement(TextContainer, null, /*#__PURE__*/_react.default.createElement(_StyledText, {
    fontWeight: 500,
    fontSize: _exports.FontSizes.Title4,
    color: _types.AlertColors[level]
  }, title), /*#__PURE__*/_react.default.createElement(_StyledText2, {
    fontWeight: 400,
    fontSize: _exports.FontSizes.Title5,
    color: _exports.Colors.Gray62
  }, message)), dismissible && /*#__PURE__*/_react.default.createElement(CloseAlert, null, /*#__PURE__*/_react.default.createElement(_StyledIconButton, {
    icon: 'close',
    display: _buttonTypes.ButtonDisplay.Chromeless,
    onClick: onClick,
    _css: (0, _exports.getColor)(_exports.Colors.Gray24)
  })));
};

exports.AlertBanner = AlertBanner;