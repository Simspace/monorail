"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = exports.buttonSizeCss = exports.buttonDisplayCss = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _CommonStyles = require("../CommonStyles");

var _buttonTypes = require("./buttonTypes");

var _Icon = require("../icon/Icon");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const buttonDisplayCss = {
  [_buttonTypes.ButtonDisplay.Primary]: (0, _styledComponents.css)(["", ";border:0;"], (0, _CommonStyles.basePrimaryStyles)()),
  [_buttonTypes.ButtonDisplay.Secondary]: (0, _CommonStyles.baseSecondaryStyles)(),
  [_buttonTypes.ButtonDisplay.Outline]: (0, _CommonStyles.baseOutlineStyles)(),
  [_buttonTypes.ButtonDisplay.Chromeless]: (0, _styledComponents.css)(["", ";border:0;color:", ";line-height:25px;"], (0, _CommonStyles.baseChromelessStyles)(), (0, _CommonStyles.colors)(_CommonStyles.Colors.BrandLightBlue))
};
exports.buttonDisplayCss = buttonDisplayCss;
const buttonSizeCss = {
  [_buttonTypes.ButtonSize.Dense]: (0, _styledComponents.css)(["height:16px;padding:0 7px;"]),
  [_buttonTypes.ButtonSize.Compact]: (0, _styledComponents.css)(["height:24px;padding:0 7px;"]),
  [_buttonTypes.ButtonSize.Default]: (0, _styledComponents.css)(["height:24px;padding:0 11px;"]),
  [_buttonTypes.ButtonSize.Large]: (0, _styledComponents.css)(["height:32px;padding:0 15px;"])
};
exports.buttonSizeCss = buttonSizeCss;
const CCButton =
/*#__PURE__*/
(0, _styledComponents.default)('button').withConfig({
  displayName: "Button__CCButton",
  componentId: "sc-1yaavbq-0"
})(["", ";", ";", ";", ";", ";cursor:pointer;flex-shrink:0;outline:none;text-transform:uppercase;user-select:none;", ";", "{color:currentColor;margin-left:-4px;margin-right:4px;margin-top:-16px;position:relative;top:4px;}", ";", ";"], ({
  display
}) => buttonDisplayCss[display], ({
  size
}) => buttonSizeCss[size], ({
  disabled
}) => disabled && _CommonStyles.baseDisabledStyles, (0, _CommonStyles.typography)(700, _CommonStyles.FontSizes.Title5), (0, _CommonStyles.borderRadius)(), _CommonStyles.buttonTransition, _Icon.Icon, (0, _CommonStyles.baseFocusStyles)(), ({
  cssOverrides
}) => cssOverrides);

class Button extends _react.Component {
  render() {
    const {
      children,
      ...otherProps
    } = this.props;
    return _react.default.createElement(CCButton, _extends({
      className: "new-button"
    }, otherProps), children);
  }

}

exports.Button = Button;
Button.defaultProps = {
  display: _buttonTypes.ButtonDisplay.Primary,
  size: _buttonTypes.ButtonSize.Default,
  type: 'button'
};