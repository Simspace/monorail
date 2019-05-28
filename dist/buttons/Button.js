"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = exports.buttonDefaultProps = exports.StyledButton = exports.buttonSizeCss = exports.buttonPressedDisplayCss = exports.buttonDisplayCss = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _react = _interopRequireDefault(require("react"));

var _buttonTypes = require("./buttonTypes");

var _exports = require("../helpers/exports");

var _styledComponents2 = _interopRequireWildcard(require("../helpers/styled-components"));

var _theme = require("../helpers/theme");

var _Icon = require("../icon/Icon");

var _typeGuards = require("../sharedHelpers/typeGuards");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const buttonDisplayCss = {
  [_buttonTypes.ButtonDisplay.Primary]: (0, _exports.basePrimaryStyles)(),
  [_buttonTypes.ButtonDisplay.Secondary]: (0, _exports.baseSecondaryStyles)(),
  [_buttonTypes.ButtonDisplay.Outline]: (0, _exports.baseOutlineStyles)(),
  [_buttonTypes.ButtonDisplay.Chromeless]: (0, _styledComponents2.css)(["", ";color:", ";line-height:25px;"], (0, _exports.baseChromelessStyles)(), (0, _theme.getThemeColor)(_theme.ThemeColors.ActionSecondary)),
  [_buttonTypes.ButtonDisplay.ButtonBar]: (0, _styledComponents2.css)(["", ";", ";"], (0, _exports.floatingOutlineStyles)(), (0, _exports.baseButtonBarStyles)()),
  [_buttonTypes.ButtonDisplay.Toolbar]: (0, _styledComponents2.css)(["", ";"], (0, _exports.baseButtonBarStyles)())
};
exports.buttonDisplayCss = buttonDisplayCss;
const buttonPressedDisplayCss = {
  [_buttonTypes.ButtonDisplay.Primary]: (0, _exports.basePrimaryStyles)(_theme.ThemeColors.BrandSecondary),
  [_buttonTypes.ButtonDisplay.Secondary]: (0, _exports.basePrimaryStyles)(),
  [_buttonTypes.ButtonDisplay.Outline]: (0, _exports.basePrimaryStyles)(),
  [_buttonTypes.ButtonDisplay.Chromeless]: (0, _exports.basePrimaryStyles)(),
  [_buttonTypes.ButtonDisplay.ButtonBar]: (0, _styledComponents2.css)(["", ";color:", ";&:active{color:", ";}&:hover{color:", ";}"], (0, _exports.basePrimaryStyles)(), (0, _exports.getColor)(_exports.Colors.White), (0, _exports.getColor)(_exports.Colors.White), (0, _exports.getColor)(_exports.Colors.White)),
  [_buttonTypes.ButtonDisplay.Toolbar]: (0, _exports.baseToolBarStyles)()
};
exports.buttonPressedDisplayCss = buttonPressedDisplayCss;
const buttonSizeCss = {
  [_buttonTypes.ButtonSize.Dense]: (0, _styledComponents2.css)(["height:16px;padding:0 7px;"]),
  [_buttonTypes.ButtonSize.Compact]: (0, _styledComponents2.css)(["height:24px;padding:0 7px;"]),
  [_buttonTypes.ButtonSize.Default]: (0, _styledComponents2.css)(["height:24px;padding:0 11px;"]),
  [_buttonTypes.ButtonSize.Large]: (0, _styledComponents2.css)(["height:32px;padding:0 15px;"])
};
exports.buttonSizeCss = buttonSizeCss;
const iconLeftStyles = {
  [_buttonTypes.ButtonSize.Dense]: (0, _styledComponents2.css)(["color:inherit;"]),
  [_buttonTypes.ButtonSize.Compact]: (0, _styledComponents2.css)(["color:inherit;margin-left:-2px;margin-right:4px;"]),
  [_buttonTypes.ButtonSize.Default]: (0, _styledComponents2.css)(["color:inherit;margin-left:-6px;margin-right:4px;"]),
  [_buttonTypes.ButtonSize.Large]: (0, _styledComponents2.css)(["color:inherit;margin-left:-6px;margin-right:8px;"])
};
const iconRightStyles = {
  [_buttonTypes.ButtonSize.Dense]: (0, _styledComponents2.css)(["color:inherit;"]),
  [_buttonTypes.ButtonSize.Compact]: (0, _styledComponents2.css)(["color:inherit;margin-right:-7px;"]),
  [_buttonTypes.ButtonSize.Default]: (0, _styledComponents2.css)(["color:inherit;margin-right:-8px;margin-left:4px;"]),
  [_buttonTypes.ButtonSize.Large]: (0, _styledComponents2.css)(["color:inherit;margin-right:-8px;margin-left:8px;"])
};

const StyledButton =
/*#__PURE__*/
_styledComponents2.default.button.withConfig({
  displayName: "Button__StyledButton",
  componentId: "sc-1yaavbq-0"
})(({
  disabled,
  size,
  display,
  mode,
  pressed,
  cssOverrides
}) => (0, _styledComponents2.css)(["", ";", ";", ";", ";", ";", ";cursor:pointer;flex-shrink:0;outline:none;text-transform:uppercase;user-select:none;box-sizing:border-box;align-items:center;justify-content:center;margin:0;overflow:hidden;", ";", ";", ";"], mode === _buttonTypes.ButtonMode.Push && pressed ? buttonPressedDisplayCss[display] : buttonDisplayCss[display], buttonSizeCss[size], disabled && _exports.baseDisabledStyles, (0, _exports.typography)(700, _exports.FontSizes.Title5), (0, _exports.borderRadius)(), (0, _exports.flexFlow)('row'), _exports.buttonTransition, (0, _exports.baseFocusStyles)(), cssOverrides));

exports.StyledButton = StyledButton;
const buttonDefaultProps = {
  className: '',
  disabled: false,
  display: _buttonTypes.ButtonDisplay.Primary,
  iconLeft: '',
  iconRight: '',
  isActive: false,
  mode: _buttonTypes.ButtonMode.Default,
  onClick: () => {},
  pressed: false,
  size: _buttonTypes.ButtonSize.Default,
  type: 'button'
};
exports.buttonDefaultProps = buttonDefaultProps;

const Button = ({
  children,
  className,
  iconLeft,
  iconRight,
  size,
  ...domProps
}) => _react.default.createElement(StyledButton, _extends({
  className: `new-button ${className}`,
  size: size
}, domProps), !(0, _typeGuards.isEmptyString)(iconLeft) && _react.default.createElement(_StyledIcon, {
  icon: iconLeft,
  size: 16,
  _css: iconLeftStyles[size]
}), children, !(0, _typeGuards.isEmptyString)(iconRight) && _react.default.createElement(_StyledIcon2, {
  icon: iconRight,
  size: 16,
  _css2: iconRightStyles[size]
}));

exports.Button = Button;
Button.defaultProps = buttonDefaultProps;

var _StyledIcon = (0, _styledComponents.default)(_Icon.Icon)`${p => p._css}`;

var _StyledIcon2 = (0, _styledComponents.default)(_Icon.Icon)`${p => p._css2}`;