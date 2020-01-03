"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = exports.StyledButton = exports.buttonSizeCss = exports.buttonPressedDisplayCss = exports.buttonDisplayCss = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _react = _interopRequireDefault(require("react"));

var _exports = require("../../helpers/exports");

var _styledComponents2 = _interopRequireWildcard(require("../../helpers/styled-components"));

var _theme = require("../../helpers/theme");

var _typeGuards = require("../../sharedHelpers/typeGuards");

var _buttonTypes = require("./buttonTypes");

var _Icon = require("../icon/Icon");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const buttonDisplayCss = {
  [_buttonTypes.ButtonDisplay.Primary]: (0, _exports.basePrimaryStyles)(),
  [_buttonTypes.ButtonDisplay.Secondary]: (0, _exports.baseSecondaryStyles)(),
  [_buttonTypes.ButtonDisplay.Outline]: (0, _exports.baseOutlineStyles)(),
  [_buttonTypes.ButtonDisplay.Chromeless]: _styledComponents2.css`
    ${(0, _exports.baseChromelessStyles)()};

    color: ${(0, _theme.getThemeColor)(_theme.ThemeColors.ActionSecondary)};
    line-height: 25px;
  `,
  [_buttonTypes.ButtonDisplay.ButtonBar]: _styledComponents2.css`
    ${(0, _exports.floatingOutlineStyles)()};
    ${(0, _exports.baseButtonBarStyles)()};
  `,
  [_buttonTypes.ButtonDisplay.Toolbar]: _styledComponents2.css`
    ${(0, _exports.baseButtonBarStyles)()};
  `
};
exports.buttonDisplayCss = buttonDisplayCss;
const buttonPressedDisplayCss = {
  [_buttonTypes.ButtonDisplay.Primary]: (0, _exports.basePrimaryStyles)(_theme.ThemeColors.ActivePrimary, _theme.ThemeColors.ActiveSecondary),
  [_buttonTypes.ButtonDisplay.Secondary]: (0, _exports.basePrimaryStyles)(),
  [_buttonTypes.ButtonDisplay.Outline]: (0, _exports.basePrimaryStyles)(),
  [_buttonTypes.ButtonDisplay.Chromeless]: (0, _exports.basePrimaryStyles)(),
  [_buttonTypes.ButtonDisplay.ButtonBar]: _styledComponents2.css`
    ${(0, _exports.basePrimaryStyles)()};

    color: ${(0, _exports.getColor)(_exports.Colors.White)};

    &:active {
      color: ${(0, _exports.getColor)(_exports.Colors.White)};
    }

    &:hover {
      color: ${(0, _exports.getColor)(_exports.Colors.White)};
    }
  `,
  [_buttonTypes.ButtonDisplay.Toolbar]: (0, _exports.baseToolBarStyles)()
};
exports.buttonPressedDisplayCss = buttonPressedDisplayCss;
const buttonSizeCss = {
  [_buttonTypes.ButtonSize.Dense]: _styledComponents2.css`
    height: 16px;
    padding: 0 7px;
  `,
  [_buttonTypes.ButtonSize.Compact]: _styledComponents2.css`
    height: 24px;
    padding: 0 7px;
  `,
  [_buttonTypes.ButtonSize.Default]: _styledComponents2.css`
    height: 24px;
    padding: 0 11px;
  `,
  [_buttonTypes.ButtonSize.Large]: _styledComponents2.css`
    height: 32px;
    padding: 0 15px;
  `
};
exports.buttonSizeCss = buttonSizeCss;
const iconLeftStyles = {
  [_buttonTypes.ButtonSize.Dense]: _styledComponents2.css`
    color: inherit;
  `,
  [_buttonTypes.ButtonSize.Compact]: _styledComponents2.css`
    color: inherit;
    margin-left: -2px;
    margin-right: 4px;
  `,
  [_buttonTypes.ButtonSize.Default]: _styledComponents2.css`
    color: inherit;
    margin-left: -6px;
    margin-right: 4px;
  `,
  [_buttonTypes.ButtonSize.Large]: _styledComponents2.css`
    color: inherit;
    margin-left: -6px;
    margin-right: 8px;
  `
};
const iconRightStyles = {
  [_buttonTypes.ButtonSize.Dense]: _styledComponents2.css`
    color: inherit;
  `,
  [_buttonTypes.ButtonSize.Compact]: _styledComponents2.css`
    color: inherit;
    margin-right: -7px;
  `,
  [_buttonTypes.ButtonSize.Default]: _styledComponents2.css`
    color: inherit;
    margin-right: -8px;
    margin-left: 4px;
  `,
  [_buttonTypes.ButtonSize.Large]: _styledComponents2.css`
    color: inherit;
    margin-right: -8px;
    margin-left: 8px;
  `
};

const StyledButton = _styledComponents2.default.button(({
  disabled,
  size,
  display,
  mode,
  pressed,
  cssOverrides,
  status
}) => _styledComponents2.css`
    ${mode === _buttonTypes.ButtonMode.Push && pressed ? buttonPressedDisplayCss[display] : buttonDisplayCss[display]};
    ${buttonSizeCss[size]};
    ${disabled && _exports.baseDisabledStyles};

    ${(0, _exports.typography)(700, _exports.FontSizes.Title5)};
    ${(0, _exports.borderRadius)()};
    ${(0, _exports.flexFlow)('row')};

    ${status ? `overflow: visible;` : `overflow: hidden;`}

    cursor: pointer;
    flex-shrink: 0;
    outline: none;
    text-transform: uppercase;
    user-select: none;
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
    margin: 0;
    position: relative;

    ${_exports.buttonTransition};

    ${(0, _exports.baseFocusStyles)()};

    ${cssOverrides};
  `);

exports.StyledButton = StyledButton;

var _StyledIcon =
/*#__PURE__*/
(0, _styledComponents.default)(_Icon.Icon).withConfig({
  displayName: "Button___StyledIcon",
  componentId: "sc-10jcad3-0"
})(["", ""], p => p._css);

var _StyledIcon2 =
/*#__PURE__*/
(0, _styledComponents.default)(_Icon.Icon).withConfig({
  displayName: "Button___StyledIcon2",
  componentId: "sc-10jcad3-1"
})(["", ""], p => p._css2);

const Button = props => {
  const {
    children,
    className = '',
    cssOverrides = '',
    disabled = false,
    display = _buttonTypes.ButtonDisplay.Primary,
    iconLeft = '',
    iconRight = '',
    isActive = false,
    mode = _buttonTypes.ButtonMode.Default,
    onClick = () => {},
    passedAs,
    pressed = false,
    size = _buttonTypes.ButtonSize.Default,
    status,
    type = 'button',
    ...domProps
  } = props;
  return _react.default.createElement(StyledButton, _extends({}, domProps, {
    as: passedAs,
    className: `new-button ${className}`,
    cssOverrides: cssOverrides,
    mode: mode,
    type: type,
    display: display,
    size: size,
    onClick: onClick,
    pressed: pressed,
    disabled: disabled,
    isActive: isActive
  }), typeof status === 'function' && status({
    style: {
      position: 'absolute'
    }
  }), !(0, _typeGuards.isEmptyString)(iconLeft) && _react.default.createElement(_StyledIcon, {
    icon: iconLeft,
    size: 16,
    _css: iconLeftStyles[size]
  }), children, !(0, _typeGuards.isEmptyString)(iconRight) && _react.default.createElement(_StyledIcon2, {
    icon: iconRight,
    size: 16,
    _css2: iconRightStyles[size]
  }));
};

exports.Button = Button;