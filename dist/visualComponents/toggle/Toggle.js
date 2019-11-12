"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Toggle = exports.Slider = void 0;

var _react = _interopRequireWildcard(require("react"));

var _exports = require("../../helpers/exports");

var _styledComponents = _interopRequireWildcard(require("../../helpers/styled-components"));

var _theme = require("../../helpers/theme");

var _Icon = require("../icon/Icon");

var _toggleTypes = require("./toggleTypes");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const toggleWidth = 18;
const toggleHeight = 10;
const slideSize = 10;
const iconSize = 8;
const factorBySize = {
  [_toggleTypes.ToggleSize.Default]: 1,
  [_toggleTypes.ToggleSize.Large]: 1.5,
  [_toggleTypes.ToggleSize.Xlarge]: 2
};

const scaleBySize = (n, size) => {
  const factor = Math.floor(n * factorBySize[size]);
  return factor % 2 === 0 ? factor : factor + 1;
};

const toggleSizeCss = {
  [_toggleTypes.ToggleSize.Default]: _styledComponents.css`
    height: ${scaleBySize(toggleHeight, _toggleTypes.ToggleSize.Default)}px;
    width: ${scaleBySize(toggleWidth, _toggleTypes.ToggleSize.Default)}px;
    border: 1px solid;
    border-radius: ${scaleBySize(toggleHeight, _toggleTypes.ToggleSize.Default) + 2 / 2}px;
  `,
  [_toggleTypes.ToggleSize.Large]: _styledComponents.css`
    height: ${scaleBySize(toggleHeight, _toggleTypes.ToggleSize.Large)}px;
    width: ${scaleBySize(toggleWidth, _toggleTypes.ToggleSize.Large)}px;
    border: 1px solid;
    border-radius: ${scaleBySize(toggleHeight, _toggleTypes.ToggleSize.Large) + 2 / 2}px;
  `,
  [_toggleTypes.ToggleSize.Xlarge]: _styledComponents.css`
    height: ${scaleBySize(toggleHeight, _toggleTypes.ToggleSize.Xlarge)}px;
    width: ${scaleBySize(toggleWidth, _toggleTypes.ToggleSize.Xlarge)}px;
    border: 2px solid;
    border-radius: ${scaleBySize(toggleHeight, _toggleTypes.ToggleSize.Xlarge) + 4 / 2}px;
  `
};
const sliderSizeCss = {
  [_toggleTypes.ToggleSize.Default]: _styledComponents.css`
    width: ${scaleBySize(slideSize, _toggleTypes.ToggleSize.Default)}px;
    height: ${scaleBySize(slideSize, _toggleTypes.ToggleSize.Default)}px;
  `,
  [_toggleTypes.ToggleSize.Large]: _styledComponents.css`
    width: ${scaleBySize(slideSize, _toggleTypes.ToggleSize.Large)}px;
    height: ${scaleBySize(slideSize, _toggleTypes.ToggleSize.Large)}px;
  `,
  [_toggleTypes.ToggleSize.Xlarge]: _styledComponents.css`
    width: ${scaleBySize(slideSize, _toggleTypes.ToggleSize.Xlarge)}px;
    height: ${scaleBySize(slideSize, _toggleTypes.ToggleSize.Xlarge)}px;
  `
};
const inputSizeCss = {
  [_toggleTypes.ToggleSize.Default]: _styledComponents.css`
    transform: translateX(${scaleBySize(iconSize, _toggleTypes.ToggleSize.Default)}px);
  `,
  [_toggleTypes.ToggleSize.Large]: _styledComponents.css`
    transform: translateX(${scaleBySize(iconSize, _toggleTypes.ToggleSize.Large)}px);
  `,
  [_toggleTypes.ToggleSize.Xlarge]: _styledComponents.css`
    transform: translateX(${scaleBySize(iconSize, _toggleTypes.ToggleSize.Xlarge)}px);
  `
};
const iconSizeCss = {
  [_toggleTypes.ToggleSize.Default]: _styledComponents.css`
    font-size: ${scaleBySize(iconSize, _toggleTypes.ToggleSize.Default)}px;
  `,
  [_toggleTypes.ToggleSize.Large]: _styledComponents.css`
    font-size: ${scaleBySize(iconSize, _toggleTypes.ToggleSize.Large)}px;
  `,
  [_toggleTypes.ToggleSize.Xlarge]: _styledComponents.css`
    font-size: ${scaleBySize(iconSize, _toggleTypes.ToggleSize.Xlarge)}px;
  `
};

const CCToggle = _styledComponents.default.label(({
  toggleSize,
  checked,
  cssOverrides,
  theme: {
    mode
  },
  disabled
}) => _styledComponents.css`
    ${toggleSizeCss[toggleSize]};

    box-sizing: content-box;
    cursor: pointer;
    display: inline-block;
    position: relative; /* Slider is pos:abs to this element */

    transition: all ease-in 150ms;

    /* Change Slider BG/Border Color */
    ${checked ? _styledComponents.css`
          background-color: ${(0, _theme.getThemeColor)(_theme.ThemeColors.ActionPrimary)};
          border-color: ${(0, _theme.getThemeColor)(_theme.ThemeColors.ActionPrimary)};
        ` : _styledComponents.css`
          background-color: ${mode === _theme.Mode.Dark ? (0, _exports.getColor)(_exports.Colors.White, 0.2) : (0, _exports.getColor)(_exports.Colors.Grey90)};
          border-color: ${(0, _exports.getColor)(_exports.Colors.Black, 0.06)};
        `};

    ${disabled && _styledComponents.css`
        cursor: default;
        opacity: 0.4;
      `}

    ${cssOverrides};
  `);

const StyledIconChecked = (0, _styledComponents.default)(({
  checked,
  toggleSize,
  ...otherProps
}) => _react.default.createElement(_Icon.Icon, otherProps))(({
  toggleSize,
  checked
}) => _styledComponents.css`
    ${iconSizeCss[toggleSize]};
    ${(0, _exports.visible)(checked)};

    color: ${(0, _exports.getColor)(_exports.Colors.BrandLightBlue)};
    position: absolute; /* give z-index so ::before bg is behind icon */

    transition: all ease-in 75ms;
  `);
const StyledIconNotChecked = (0, _styledComponents.default)(({
  checked,
  toggleSize,
  ...otherProps
}) => _react.default.createElement(_Icon.Icon, otherProps))(({
  checked,
  toggleSize
}) => _styledComponents.css`
    ${iconSizeCss[toggleSize]};
    ${(0, _exports.visible)(!checked)};

    color: ${(0, _exports.getColor)(_exports.Colors.Black38)};
    position: absolute; /* give z-index so ::before bg is behind icon */

    transition: all ease-in 75ms;
  `);

const Slider = _styledComponents.default.div(({
  toggleSize
}) => _styledComponents.css`
    ${sliderSizeCss[toggleSize]};
    ${(0, _exports.getElevationShadow)(_exports.ElevationRange.Elevation1)};
    ${(0, _exports.flexFlow)('row')};

    background-color: ${(0, _exports.getColor)(_exports.Colors.White)};
    border-radius: 50%;
    bottom: 0;
    content: '';
    left: 0;
    justify-content: center;
    align-items: center;

    transition: all ease-in 75ms;
  `);

exports.Slider = Slider;

const Input = _styledComponents.default.input(({
  toggleSize
}) => _styledComponents.css`
    display: none; /* Hide default HTML checkbox */

    /* Move Slider Circle */
    &:checked + ${
/* sc-selector */
Slider} {
      ${inputSizeCss[toggleSize]};
    }

    /* Change Icon: 'check' | Change Color: Blue */
    &:checked
      + ${
/* sc-selector */
Slider}
      > ${
/* sc-selector */
StyledIconChecked} {
      ${(0, _exports.visible)(false)};
      color: ${(0, _exports.getColor)(_exports.Colors.BrandLightBlue)};
    }
  `);

class Toggle extends _react.Component {
  render() {
    const {
      cssOverrides,
      checked,
      onChange,
      toggleSize,
      disabled,
      ...domProps
    } = this.props;
    return _react.default.createElement(CCToggle, _extends({
      cssOverrides: cssOverrides,
      checked: checked,
      toggleSize: toggleSize,
      disabled: disabled
    }, domProps), _react.default.createElement(Input, {
      type: "checkbox",
      checked: checked,
      disabled: disabled,
      onChange: event => {
        onChange && onChange(event.currentTarget.checked);
      },
      toggleSize: toggleSize
    }), _react.default.createElement(Slider, {
      toggleSize: toggleSize
    }, _react.default.createElement(StyledIconChecked, {
      icon: "check",
      checked: checked,
      toggleSize: toggleSize
    }), _react.default.createElement(StyledIconNotChecked, {
      icon: "close",
      checked: checked,
      toggleSize: toggleSize
    })));
  }

} // tslint:enable


exports.Toggle = Toggle;
Toggle.defaultProps = {
  toggleSize: _toggleTypes.ToggleSize.Default
};