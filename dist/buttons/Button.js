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
  [_buttonTypes.ButtonDisplay.Primary]: _styledComponents.css`
    ${(0, _CommonStyles.basePrimaryStyles)()};

    border: 0;
  `,
  [_buttonTypes.ButtonDisplay.Secondary]: (0, _CommonStyles.baseSecondaryStyles)(),
  [_buttonTypes.ButtonDisplay.Outline]: (0, _CommonStyles.baseOutlineStyles)(),
  [_buttonTypes.ButtonDisplay.Chromeless]: _styledComponents.css`
    ${(0, _CommonStyles.baseChromelessStyles)()};

    border: 0;
    color: ${(0, _CommonStyles.colors)(_CommonStyles.Colors.BrandLightBlue)};
    line-height: 25px;
  `
};
exports.buttonDisplayCss = buttonDisplayCss;
const buttonSizeCss = {
  [_buttonTypes.ButtonSize.Dense]: _styledComponents.css`
    height: 16px;
    padding: 0 7px;
  `,
  [_buttonTypes.ButtonSize.Compact]: _styledComponents.css`
    height: 24px;
    padding: 0 7px;
  `,
  [_buttonTypes.ButtonSize.Default]: _styledComponents.css`
    height: 24px;
    padding: 0 11px;
  `,
  [_buttonTypes.ButtonSize.Large]: _styledComponents.css`
    height: 32px;
    padding: 0 15px;
  `
};
exports.buttonSizeCss = buttonSizeCss;
const CCButton = (0, _styledComponents.default)('button')`
  ${({
  display
}) => buttonDisplayCss[display]};
  ${({
  size
}) => buttonSizeCss[size]};
  ${({
  disabled
}) => disabled && _CommonStyles.baseDisabledStyles};

  ${(0, _CommonStyles.typography)(700, _CommonStyles.FontSizes.Title5)};
  ${(0, _CommonStyles.borderRadius)()};

  cursor: pointer;
  flex-shrink: 0;
  outline: none;
  text-transform: uppercase;
  user-select: none;

  ${_CommonStyles.buttonTransition};

  ${_Icon.Icon} {
    color: currentColor;
    margin-left: -4px;
    margin-right: 4px;
    margin-top: -16px;
    position: relative; /* Needs position: relative; so that you can do the top hack. */
    top: 4px;
  }

  ${(0, _CommonStyles.baseFocusStyles)()};

  ${({
  css: cssOverrides
}) => cssOverrides};
`;

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