"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconButton = exports.CCIconButton = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Icon = require("../icon/Icon");

var _CommonStyles = require("../CommonStyles");

var _buttonTypes = require("./buttonTypes");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const iconButtonDisplayCss = {
  [_buttonTypes.ButtonDisplay.Primary]: (0, _styledComponents.css)(["", ";border:0;"], (0, _CommonStyles.basePrimaryStyles)()),
  [_buttonTypes.ButtonDisplay.Secondary]: (0, _styledComponents.css)(["background:", ";border:0;color:", ";&:hover{background:", ";}&:active{background:", ";}"], (0, _CommonStyles.colors)(_CommonStyles.Colors.BrandLightBlue, 0.08), (0, _CommonStyles.colors)(_CommonStyles.Colors.BrandLightBlue), (0, _CommonStyles.colors)(_CommonStyles.Colors.BrandLightBlue, 0.16), (0, _CommonStyles.colors)(_CommonStyles.Colors.BrandLightBlue, 0.24)),
  [_buttonTypes.ButtonDisplay.Outline]: (0, _styledComponents.css)(["", ";"], (0, _CommonStyles.baseOutlineStyles)()),
  [_buttonTypes.ButtonDisplay.Chromeless]: (0, _styledComponents.css)(["", ";border:0;color:", ";&:focus{background:", ";}"], (0, _CommonStyles.baseChromelessStyles)(), (0, _CommonStyles.colors)(_CommonStyles.Colors.Black74), (0, _CommonStyles.colors)(_CommonStyles.Colors.BrandLightBlue, 0.16))
};
const iconButtonSizeCss = {
  [_buttonTypes.ButtonSize.Dense]: (0, _styledComponents.css)(["height:16px;width:16px;padding:0 7px;", "{font-size:12px;}"], _Icon.Icon),
  [_buttonTypes.ButtonSize.Compact]: (0, _styledComponents.css)(["height:24px;padding:0 7px;"]),
  [_buttonTypes.ButtonSize.Default]: (0, _styledComponents.css)(["height:24px;width:24px;"]),
  [_buttonTypes.ButtonSize.Large]: (0, _styledComponents.css)(["height:32px;width:32px;", "{font-size:24px;}"], _Icon.Icon)
};

const CCIconButton =
/*#__PURE__*/
_styledComponents.default.button.withConfig({
  displayName: "IconButton__CCIconButton",
  componentId: "sc-6j6oar-0"
})(({
  disabled,
  display,
  size,
  shape,
  cssOverrides,
  darkMode,
  iconCss
}) => (0, _styledComponents.css)(["", ";", ";", ";", ";", ";align-items:center;box-sizing:border-box;cursor:pointer;flex-shrink:0;justify-content:center;outline:none;padding:0;text-transform:uppercase;user-select:none;", ";", "{", ";", ";}", ";", ";"], iconButtonDisplayCss[display], iconButtonSizeCss[size], disabled && _CommonStyles.baseDisabledStyles, (0, _CommonStyles.borderRadius)(shape === _buttonTypes.IconButtonShape.Default ? _CommonStyles.BorderRadius.Round : _CommonStyles.BorderRadius.Medium), (0, _CommonStyles.flexFlow)(), _CommonStyles.buttonTransition, _Icon.Icon, darkMode ? (0, _styledComponents.css)(["color:", ";"], (0, _CommonStyles.colors)(_CommonStyles.Colors.White)) : (0, _styledComponents.css)(["color:currentColor;"]), iconCss, (0, _CommonStyles.baseFocusStyles)(), cssOverrides));

exports.CCIconButton = CCIconButton;

class IconButton extends _react.Component {
  render() {
    const {
      icon,
      className,
      ...otherProps
    } = this.props;
    return _react.default.createElement(CCIconButton, _extends({
      className: `new-button ${className}`
    }, otherProps), _react.default.createElement(_Icon.Icon, {
      icon: icon
    }));
  }

}

exports.IconButton = IconButton;
IconButton.defaultProps = {
  display: _buttonTypes.ButtonDisplay.Primary,
  size: _buttonTypes.ButtonSize.Default,
  shape: _buttonTypes.IconButtonShape.Default,
  type: 'button'
};