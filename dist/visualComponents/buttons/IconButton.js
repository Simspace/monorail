"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconButton = exports.StyledIconButton = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _react = _interopRequireDefault(require("react"));

var _baseStyles = require("../../helpers/baseStyles");

var _borderRadius = require("../../helpers/borderRadius");

var _styledComponents2 = _interopRequireWildcard(require("../../helpers/styled-components"));

var _theme = require("../../helpers/theme");

var _Button = require("./Button");

var _buttonTypes = require("./buttonTypes");

var _Icon = require("../icon/Icon");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const iconButtonSizeCss = {
  [_buttonTypes.ButtonSize.Dense]: _styledComponents2.css`
    width: 16px;

    ${_Icon.Icon} {
      font-size: 12px;
    }
  `,
  [_buttonTypes.ButtonSize.Compact]: _styledComponents2.css`
    width: 24px;
  `,
  [_buttonTypes.ButtonSize.Default]: _styledComponents2.css`
    width: 24px;
  `,
  [_buttonTypes.ButtonSize.Large]: _styledComponents2.css`
    width: 32px;

    ${_Icon.Icon} {
      font-size: 24px;
    }
  `
};

const iconButtonDisplayCss = (display, isActive) => {
  if (display === _buttonTypes.ButtonDisplay.Chromeless) {
    return (0, _baseStyles.baseIconButtonChromelessStyles)(isActive);
  }

  return _styledComponents2.css``;
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
}) => _styledComponents2.css`
  ${iconButtonDisplayCss(display, isActive)};
  ${iconButtonSizeCss[size]};
  ${iconButtonShapeCss[shape]};

  padding: 0;

  ${_Icon.Icon} {
    ${({
  theme: {
    mode
  }
}) => mode === _theme.Mode.Dark ? _styledComponents2.css`
            color: ${(0, _theme.getThemeColor)(_theme.ThemeColors.Text900)};
          ` : _styledComponents2.css`
            color: currentColor;
          `};

    margin: auto;
  }

  ${cssOverrides};
`;

const StyledIconButton = (0, _styledComponents2.default)(_Button.Button)``;
exports.StyledIconButton = StyledIconButton;

var _StyledIcon =
/*#__PURE__*/
(0, _styledComponents.default)(_Icon.Icon).withConfig({
  displayName: "IconButton___StyledIcon",
  componentId: "sc-16kofcu-0"
})(["", ""], p => p._css);

const IconButton = ({
  cssOverrides,
  display,
  icon,
  iconCss,
  isActive,
  passedAs,
  pressed,
  shape,
  size,
  status,
  ...domProps
}) => _react.default.createElement(StyledIconButton, _extends({}, domProps, {
  as: passedAs,
  display: display,
  pressed: isActive || pressed,
  size: size,
  status: status,
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
  iconCss: _styledComponents2.css``
};