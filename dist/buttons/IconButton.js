"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconButton = exports.CCIconButton = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _CommonStyles = require("../CommonStyles");

var _Icon = require("../icon/Icon");

var _buttonTypes = require("./buttonTypes");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const iconButtonDisplayCss = {
  [_buttonTypes.ButtonDisplay.Primary]: _styledComponents.css`
    ${(0, _CommonStyles.basePrimaryStyles)()};

    border: 0;
  `,
  [_buttonTypes.ButtonDisplay.Secondary]: _styledComponents.css`
    background: ${(0, _CommonStyles.colors)(_CommonStyles.Colors.BrandLightBlue, 0.08)};
    border: 0;
    color: ${(0, _CommonStyles.colors)(_CommonStyles.Colors.BrandLightBlue)};

    &:hover {
      background: ${(0, _CommonStyles.colors)(_CommonStyles.Colors.BrandLightBlue, 0.16)};
    }

    &:active {
      background: ${(0, _CommonStyles.colors)(_CommonStyles.Colors.BrandLightBlue, 0.24)};
    }
  `,
  [_buttonTypes.ButtonDisplay.Outline]: _styledComponents.css`
    ${(0, _CommonStyles.baseOutlineStyles)()};
  `,
  [_buttonTypes.ButtonDisplay.Chromeless]: _styledComponents.css`
    ${(0, _CommonStyles.baseChromelessStyles)()};

    border: 0;
    color: ${(0, _CommonStyles.colors)(_CommonStyles.Colors.Black74)};

    &:focus {
      background: ${(0, _CommonStyles.colors)(_CommonStyles.Colors.BrandLightBlue, 0.16)};
    }
  `
};
const iconButtonSizeCss = {
  [_buttonTypes.ButtonSize.Dense]: _styledComponents.css`
    height: 16px;
    width: 16px;
    padding: 0 7px;

    ${_Icon.Icon} {
      font-size: 12px;
    }
  `,
  [_buttonTypes.ButtonSize.Compact]: _styledComponents.css`
    height: 24px;
    padding: 0 7px;
  `,
  [_buttonTypes.ButtonSize.Default]: _styledComponents.css`
    height: 24px;
    width: 24px;
  `,
  [_buttonTypes.ButtonSize.Large]: _styledComponents.css`
    height: 32px;
    width: 32px;

    ${_Icon.Icon} {
      font-size: 24px;
    }
  `
};
const CCIconButton = (0, _styledComponents.default)('button')`
  ${({
  display
}) => iconButtonDisplayCss[display]};
  ${({
  size
}) => iconButtonSizeCss[size]};
  ${({
  disabled
}) => disabled && _CommonStyles.baseDisabledStyles};
  ${({
  shape
}) => (0, _CommonStyles.borderRadius)(shape === _buttonTypes.IconButtonShape.Default ? _CommonStyles.BorderRadius.Round : _CommonStyles.BorderRadius.Medium)};

  ${(0, _CommonStyles.flexFlow)()};

  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
  flex-shrink: 0;
  justify-content: center;
  outline: none;
  padding: 0;
  text-transform: uppercase;
  user-select: none;

  ${_CommonStyles.buttonTransition};

  ${_Icon.Icon} {
    ${({
  darkMode
}) => darkMode ? _styledComponents.css`
            color: ${(0, _CommonStyles.colors)(_CommonStyles.Colors.White)};
          ` : _styledComponents.css`
            color: currentColor;
          `};

    ${({
  iconCss
}) => iconCss};
  }

  ${(0, _CommonStyles.baseFocusStyles)()};

  ${({
  css: cssOverrides
}) => cssOverrides};
`;
exports.CCIconButton = CCIconButton;

class IconButton extends _react.Component {
  render() {
    const {
      icon,
      ...otherProps
    } = this.props;
    return _react.default.createElement(CCIconButton, _extends({
      className: "new-button"
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