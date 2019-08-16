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

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// TODO(unsafe-any): Fix unsafe anys
// tslint:disable no-unsafe-any
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
  [_toggleTypes.ToggleSize.Default]: (0, _styledComponents.css)(["height:", "px;width:", "px;border:1px solid;border-radius:", "px;"], scaleBySize(toggleHeight, _toggleTypes.ToggleSize.Default), scaleBySize(toggleWidth, _toggleTypes.ToggleSize.Default), scaleBySize(toggleHeight, _toggleTypes.ToggleSize.Default) + 2 / 2),
  [_toggleTypes.ToggleSize.Large]: (0, _styledComponents.css)(["height:", "px;width:", "px;border:1px solid;border-radius:", "px;"], scaleBySize(toggleHeight, _toggleTypes.ToggleSize.Large), scaleBySize(toggleWidth, _toggleTypes.ToggleSize.Large), scaleBySize(toggleHeight, _toggleTypes.ToggleSize.Large) + 2 / 2),
  [_toggleTypes.ToggleSize.Xlarge]: (0, _styledComponents.css)(["height:", "px;width:", "px;border:2px solid;border-radius:", "px;"], scaleBySize(toggleHeight, _toggleTypes.ToggleSize.Xlarge), scaleBySize(toggleWidth, _toggleTypes.ToggleSize.Xlarge), scaleBySize(toggleHeight, _toggleTypes.ToggleSize.Xlarge) + 4 / 2)
};
const sliderSizeCss = {
  [_toggleTypes.ToggleSize.Default]: (0, _styledComponents.css)(["width:", "px;height:", "px;"], scaleBySize(slideSize, _toggleTypes.ToggleSize.Default), scaleBySize(slideSize, _toggleTypes.ToggleSize.Default)),
  [_toggleTypes.ToggleSize.Large]: (0, _styledComponents.css)(["width:", "px;height:", "px;"], scaleBySize(slideSize, _toggleTypes.ToggleSize.Large), scaleBySize(slideSize, _toggleTypes.ToggleSize.Large)),
  [_toggleTypes.ToggleSize.Xlarge]: (0, _styledComponents.css)(["width:", "px;height:", "px;"], scaleBySize(slideSize, _toggleTypes.ToggleSize.Xlarge), scaleBySize(slideSize, _toggleTypes.ToggleSize.Xlarge))
};
const inputSizeCss = {
  [_toggleTypes.ToggleSize.Default]: (0, _styledComponents.css)(["transform:translateX(", "px);"], scaleBySize(iconSize, _toggleTypes.ToggleSize.Default)),
  [_toggleTypes.ToggleSize.Large]: (0, _styledComponents.css)(["transform:translateX(", "px);"], scaleBySize(iconSize, _toggleTypes.ToggleSize.Large)),
  [_toggleTypes.ToggleSize.Xlarge]: (0, _styledComponents.css)(["transform:translateX(", "px);"], scaleBySize(iconSize, _toggleTypes.ToggleSize.Xlarge))
};
const iconSizeCss = {
  [_toggleTypes.ToggleSize.Default]: (0, _styledComponents.css)(["font-size:", "px;"], scaleBySize(iconSize, _toggleTypes.ToggleSize.Default)),
  [_toggleTypes.ToggleSize.Large]: (0, _styledComponents.css)(["font-size:", "px;"], scaleBySize(iconSize, _toggleTypes.ToggleSize.Large)),
  [_toggleTypes.ToggleSize.Xlarge]: (0, _styledComponents.css)(["font-size:", "px;"], scaleBySize(iconSize, _toggleTypes.ToggleSize.Xlarge))
};

const CCToggle =
/*#__PURE__*/
_styledComponents.default.label.withConfig({
  displayName: "Toggle__CCToggle",
  componentId: "sc-13g6xvh-0"
})(({
  toggleSize,
  checked,
  cssOverrides,
  theme: {
    mode
  },
  disabled
}) => (0, _styledComponents.css)(["", ";box-sizing:content-box;cursor:pointer;display:inline-block;position:relative;transition:all ease-in 150ms;", ";", " ", ";"], toggleSizeCss[toggleSize], checked ? (0, _styledComponents.css)(["background-color:", ";border-color:", ";"], (0, _theme.getThemeColor)(_theme.ThemeColors.ActionPrimary), (0, _theme.getThemeColor)(_theme.ThemeColors.ActionPrimary)) : (0, _styledComponents.css)(["background-color:", ";border-color:", ";"], mode === _theme.Mode.Dark ? (0, _exports.getColor)(_exports.Colors.White, 0.2) : (0, _exports.getColor)(_exports.Colors.Grey90), (0, _exports.getColor)(_exports.Colors.Black, 0.06)), disabled && (0, _styledComponents.css)(["cursor:default;opacity:0.4;"]), cssOverrides));

const StyledIconChecked =
/*#__PURE__*/
(0, _styledComponents.default)(({
  checked,
  toggleSize,
  ...otherProps
}) => _react.default.createElement(_Icon.Icon, otherProps))(({
  toggleSize,
  checked
}) => (0, _styledComponents.css)(["", ";", ";color:", ";position:absolute;transition:all ease-in 75ms;"], iconSizeCss[toggleSize], (0, _exports.visible)(checked), (0, _exports.getColor)(_exports.Colors.BrandLightBlue)));
const StyledIconNotChecked =
/*#__PURE__*/
(0, _styledComponents.default)(({
  checked,
  toggleSize,
  ...otherProps
}) => _react.default.createElement(_Icon.Icon, otherProps))(({
  checked,
  toggleSize
}) => (0, _styledComponents.css)(["", ";", ";color:", ";position:absolute;transition:all ease-in 75ms;"], iconSizeCss[toggleSize], (0, _exports.visible)(!checked), (0, _exports.getColor)(_exports.Colors.Black38)));

const Slider =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "Toggle__Slider",
  componentId: "sc-13g6xvh-1"
})(({
  toggleSize
}) => (0, _styledComponents.css)(["", ";", ";", ";background-color:", ";border-radius:50%;bottom:0;content:'';left:0;justify-content:center;align-items:center;transition:all ease-in 75ms;"], sliderSizeCss[toggleSize], (0, _exports.getElevationShadow)(_exports.ElevationRange.Elevation1), (0, _exports.flexFlow)('row'), (0, _exports.getColor)(_exports.Colors.White)));

exports.Slider = Slider;

const Input =
/*#__PURE__*/
_styledComponents.default.input.withConfig({
  displayName: "Toggle__Input",
  componentId: "sc-13g6xvh-2"
})(({
  toggleSize
}) => (0, _styledComponents.css)(["display:none;&:checked + ", "{", ";}&:checked + ", " > ", "{", ";color:", ";}"],
/* sc-selector */
Slider, inputSizeCss[toggleSize],
/* sc-selector */
Slider,
/* sc-selector */
StyledIconChecked, (0, _exports.visible)(false), (0, _exports.getColor)(_exports.Colors.BrandLightBlue)));

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