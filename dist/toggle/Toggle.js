"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Toggle = exports.Slider = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Icon = require("../icon/Icon");

var _CommonStyles = require("../CommonStyles");

var _toggleTypes = require("./toggleTypes");

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const toggleWidth = 18;
const toggleHeight = 10;
const iconSize = 8;
const toggleSizeCss = {
  [_toggleTypes.ToggleSize.Default]: (0, _styledComponents.css)(["height:", "px;width:", "px;border:1px solid;border-radius:", "px;"], toggleHeight, toggleWidth, toggleHeight + 2 / 2),
  [_toggleTypes.ToggleSize.Large]: (0, _styledComponents.css)(["height:", "px;width:", "px;border:1px solid;border-radius:", "px;"], toggleHeight * 1.5, toggleWidth * 1.5, toggleHeight * 1.5 + 3 / 2),
  [_toggleTypes.ToggleSize.Xlarge]: (0, _styledComponents.css)(["height:", "px;width:", "px;border:2px solid;border-radius:", "px;"], toggleHeight * 2, toggleWidth * 2, toggleHeight * 2 + 4 / 2)
};
const sliderSizeCss = {
  [_toggleTypes.ToggleSize.Default]: (0, _styledComponents.css)(["width:10px;height:10px;"]),
  [_toggleTypes.ToggleSize.Large]: (0, _styledComponents.css)(["width:15px;height:15px;"]),
  [_toggleTypes.ToggleSize.Xlarge]: (0, _styledComponents.css)(["width:20px;height:20px;"])
};
const inputSizeCss = {
  [_toggleTypes.ToggleSize.Default]: (0, _styledComponents.css)(["transform:translateX(8px);"]),
  [_toggleTypes.ToggleSize.Large]: (0, _styledComponents.css)(["transform:translateX(12px);"]),
  [_toggleTypes.ToggleSize.Xlarge]: (0, _styledComponents.css)(["transform:translateX(16px);"])
};
const iconSizeCss = {
  [_toggleTypes.ToggleSize.Default]: (0, _styledComponents.css)(["font-size:", "px;"], iconSize),
  [_toggleTypes.ToggleSize.Large]: (0, _styledComponents.css)(["font-size:", "px;"], iconSize * 1.5),
  [_toggleTypes.ToggleSize.Xlarge]: (0, _styledComponents.css)(["font-size:", "px;"], iconSize * 2)
};
const CCToggle =
/*#__PURE__*/
(0, _styledComponents.default)('label').withConfig({
  displayName: "Toggle__CCToggle",
  componentId: "sc-14ermjw-0"
})(["", ";box-sizing:content-box;cursor:pointer;display:inline-block;position:relative;transition:all ease-in 150ms;", ";", ";"], ({
  toggleSize
}) => toggleSizeCss[toggleSize], ({
  checked
}) => checked ? (0, _styledComponents.css)(["background-color:", ";border-color:", ";"], (0, _CommonStyles.colors)(_CommonStyles.Colors.BrandLightBlue), (0, _CommonStyles.colors)(_CommonStyles.Colors.BrandLightBlue)) : (0, _styledComponents.css)(["background-color:", ";border-color:", ";"], (0, _CommonStyles.colors)(_CommonStyles.Colors.White), (0, _CommonStyles.colors)(_CommonStyles.Colors.Black, 0.06)), ({
  cssOverrides
}) => cssOverrides);
const StyledIconChecked =
/*#__PURE__*/
(0, _styledComponents.default)(({
  checked,
  toggleSize,
  ...otherProps
}) => _react.default.createElement(_Icon.Icon, otherProps)).withConfig({
  displayName: "Toggle__StyledIconChecked",
  componentId: "sc-14ermjw-1"
})(["", ";", ";color:", ";position:absolute;transition:all ease-in 75ms;"], ({
  toggleSize
}) => iconSizeCss[toggleSize], ({
  checked
}) => (0, _CommonStyles.visible)(checked), (0, _CommonStyles.colors)(_CommonStyles.Colors.BrandLightBlue));
const StyledIconNotChecked =
/*#__PURE__*/
(0, _styledComponents.default)(({
  checked,
  toggleSize,
  ...otherProps
}) => _react.default.createElement(_Icon.Icon, otherProps)).withConfig({
  displayName: "Toggle__StyledIconNotChecked",
  componentId: "sc-14ermjw-2"
})(["", ";", ";color:", ";position:absolute;transition:all ease-in 75ms;"], ({
  toggleSize
}) => iconSizeCss[toggleSize], ({
  checked
}) => (0, _CommonStyles.visible)(!checked), (0, _CommonStyles.colors)(_CommonStyles.Colors.Black24));
const Slider =
/*#__PURE__*/
(0, _styledComponents.default)('div').withConfig({
  displayName: "Toggle__Slider",
  componentId: "sc-14ermjw-3"
})(["", ";", ";", ";background-color:", ";border-radius:50%;bottom:0;content:'';left:0;justify-content:center;align-items:center;transition:all ease-in 75ms;"], ({
  toggleSize
}) => sliderSizeCss[toggleSize], (0, _CommonStyles.getElevation)(_CommonStyles.ElevationRange.Elevation1), (0, _CommonStyles.flexFlow)('row'), (0, _CommonStyles.colors)(_CommonStyles.Colors.White));
exports.Slider = Slider;
const Input =
/*#__PURE__*/
(0, _styledComponents.default)('input').withConfig({
  displayName: "Toggle__Input",
  componentId: "sc-14ermjw-4"
})(["display:none;&:checked + ", "{", ";}&:checked + ", " > ", "{", ";color:", ";}"],
/* sc-selector */
Slider, ({
  toggleSize
}) => inputSizeCss[toggleSize],
/* sc-selector */
Slider,
/* sc-selector */
StyledIconChecked, (0, _CommonStyles.visible)(false), (0, _CommonStyles.colors)(_CommonStyles.Colors.BrandLightBlue));

class Toggle extends _react.Component {
  render() {
    const {
      cssOverrides,
      checked,
      onChange,
      toggleSize
    } = this.props;
    return _react.default.createElement(CCToggle, {
      cssOverrides: cssOverrides,
      checked: checked,
      toggleSize: toggleSize
    }, _react.default.createElement(Input, {
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

} //


exports.Toggle = Toggle;
Toggle.defaultProps = {
  toggleSize: _toggleTypes.ToggleSize.Default
};