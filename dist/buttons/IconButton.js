"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconButton = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _react = _interopRequireDefault(require("react"));

var _Button = require("./Button");

var _buttonTypes = require("./buttonTypes");

var _baseStyles = require("../helpers/baseStyles");

var _borderRadius = require("../helpers/borderRadius");

var _styledComponents2 = require("../helpers/styled-components");

var _theme = require("../helpers/theme");

var _Icon = require("../icon/Icon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const iconButtonSizeCss = {
  [_buttonTypes.ButtonSize.Dense]: (0, _styledComponents2.css)(["width:16px;", "{font-size:12px;}"], _Icon.Icon),
  [_buttonTypes.ButtonSize.Compact]: (0, _styledComponents2.css)(["width:24px;"]),
  [_buttonTypes.ButtonSize.Default]: (0, _styledComponents2.css)(["width:24px;"]),
  [_buttonTypes.ButtonSize.Large]: (0, _styledComponents2.css)(["width:32px;", "{font-size:24px;}"], _Icon.Icon)
};

const iconButtonDisplayCss = (display, isActive) => {
  if (display === _buttonTypes.ButtonDisplay.Chromeless) {
    return (0, _baseStyles.baseIconButtonChromelessStyles)(isActive);
  }

  return (0, _styledComponents2.css)([""]);
};

const iconButtonShapeCss = {
  [_buttonTypes.IconButtonShape.Default]: (0, _borderRadius.borderRadius)(_borderRadius.BorderRadius.Round),
  [_buttonTypes.IconButtonShape.Square]: (0, _borderRadius.borderRadius)(_borderRadius.BorderRadius.Medium)
};

const iconButtonCSS = ({
  display,
  size,
  shape,
  cssOverrides,
  isActive
}) => (0, _styledComponents2.css)(["", ";", ";", ";padding:0;", "{", ";margin:auto;}", ";"], iconButtonDisplayCss(display, isActive), iconButtonSizeCss[size], iconButtonShapeCss[shape], _Icon.Icon, ({
  theme: {
    mode
  }
}) => mode === _theme.Mode.Dark ? (0, _styledComponents2.css)(["color:", ";"], (0, _theme.getThemeColor)(_theme.ThemeColors.Text900)) : (0, _styledComponents2.css)(["color:currentColor;"]), cssOverrides);

const IconButton = ({
  cssOverrides,
  display,
  icon,
  iconCss,
  isActive,
  shape,
  size,
  passedAs,
  ...domProps
}) => _react.default.createElement(_Button.Button, _extends({}, domProps, {
  as: passedAs,
  display: display,
  size: size,
  isActive: isActive,
  cssOverrides: iconButtonCSS({
    display,
    size,
    shape,
    cssOverrides,
    isActive
  })
}), _react.default.createElement(_StyledIcon, {
  icon: icon,
  _css: iconCss
}));

exports.IconButton = IconButton;
IconButton.defaultProps = { ..._Button.buttonDefaultProps,
  shape: _buttonTypes.IconButtonShape.Default,
  iconCss: (0, _styledComponents2.css)([""])
};

var _StyledIcon = (0, _styledComponents.default)(_Icon.Icon)`${p => p._css}`;