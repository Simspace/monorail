"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconButton = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _react = _interopRequireWildcard(require("react"));

var _Icon = require("../icon/Icon");

var _exports = require("../helpers/exports");

var _buttonTypes = require("./buttonTypes");

var _Button = require("./Button");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const iconButtonSizeCss = {
  [_buttonTypes.ButtonSize.Dense]: (0, _styledComponents.css)(["width:16px;", "{font-size:12px;}"], _Icon.Icon),
  [_buttonTypes.ButtonSize.Compact]: (0, _styledComponents.css)(["width:24px;"]),
  [_buttonTypes.ButtonSize.Default]: (0, _styledComponents.css)(["width:24px;"]),
  [_buttonTypes.ButtonSize.Large]: (0, _styledComponents.css)(["width:32px;", "{font-size:24px;}"], _Icon.Icon)
};

const iconButtonDisplayCss = display => {
  switch (display) {
    case _buttonTypes.ButtonDisplay.Chromeless:
      return (0, _styledComponents.css)(["color:", ";"], (0, _exports.getColor)(_exports.Colors.Black74));
      break;
  }

  return (0, _styledComponents.css)([""]);
};

const iconButtonCSS = (display, size, shape, darkMode, cssOverrides) => (0, _styledComponents.css)(["", ";", ";", ";padding:0;", "{", ";margin:auto;}", ";"], iconButtonDisplayCss(display), iconButtonSizeCss[size], (0, _exports.borderRadius)(shape === _buttonTypes.IconButtonShape.Default ? _exports.BorderRadius.Round : _exports.BorderRadius.Medium), _Icon.Icon, darkMode ? (0, _styledComponents.css)(["color:", ";"], (0, _exports.getColor)(_exports.Colors.White)) : (0, _styledComponents.css)(["color:currentColor;"]), cssOverrides);

class IconButton extends _react.Component {
  render() {
    const {
      display,
      icon,
      darkMode,
      size,
      shape,
      cssOverrides,
      iconCss,
      ...otherProps
    } = this.props;
    return _react.default.createElement(_Button.Button, _extends({}, otherProps, {
      display: display,
      size: size,
      cssOverrides: iconButtonCSS(display, size, shape, darkMode, cssOverrides)
    }), _react.default.createElement(_StyledIcon, {
      icon: icon,
      _css: iconCss
    }));
  }

}

exports.IconButton = IconButton;
IconButton.defaultProps = { ..._Button.buttonDefaultProps,
  darkMode: false,
  shape: _buttonTypes.IconButtonShape.Default,
  iconCss: (0, _styledComponents.css)([""])
};

var _StyledIcon = (0, _styledComponents.default)(_Icon.Icon)`${p => p._css}`;