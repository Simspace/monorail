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
  [_toggleTypes.ToggleSize.Default]: _styledComponents.css`
    height: ${toggleHeight}px;
    width: ${toggleWidth}px;
    border: 1px solid;
    border-radius: ${toggleHeight + 2 / 2}px;
  `,
  [_toggleTypes.ToggleSize.Large]: _styledComponents.css`
    height: ${toggleHeight * 1.5}px;
    width: ${toggleWidth * 1.5}px;
    border: 1px solid;
    border-radius: ${toggleHeight * 1.5 + 3 / 2}px;
  `,
  [_toggleTypes.ToggleSize.Xlarge]: _styledComponents.css`
    height: ${toggleHeight * 2}px;
    width: ${toggleWidth * 2}px;
    border: 2px solid;
    border-radius: ${toggleHeight * 2 + 4 / 2}px;
  `
};
const sliderSizeCss = {
  [_toggleTypes.ToggleSize.Default]: _styledComponents.css`
    width: 10px;
    height: 10px;
  `,
  [_toggleTypes.ToggleSize.Large]: _styledComponents.css`
    width: 15px;
    height: 15px;
  `,
  [_toggleTypes.ToggleSize.Xlarge]: _styledComponents.css`
    width: 20px;
    height: 20px;
  `
};
const inputSizeCss = {
  [_toggleTypes.ToggleSize.Default]: _styledComponents.css`
    transform: translateX(8px);
  `,
  [_toggleTypes.ToggleSize.Large]: _styledComponents.css`
    transform: translateX(12px);
  `,
  [_toggleTypes.ToggleSize.Xlarge]: _styledComponents.css`
    transform: translateX(16px);
  `
};
const iconSizeCss = {
  [_toggleTypes.ToggleSize.Default]: _styledComponents.css`
    font-size: ${iconSize}px;
  `,
  [_toggleTypes.ToggleSize.Large]: _styledComponents.css`
    font-size: ${iconSize * 1.5}px;
  `,
  [_toggleTypes.ToggleSize.Xlarge]: _styledComponents.css`
    font-size: ${iconSize * 2}px;
  `
};
const CCToggle = (0, _styledComponents.default)('label')`
  ${({
  toggleSize
}) => toggleSizeCss[toggleSize]};

  box-sizing: content-box;
  cursor: pointer;
  display: inline-block;
  position: relative; /* Slider is pos:abs to this element */

  transition: all ease-in 150ms;

  /* Change Slider BG/Border Color */
  ${({
  checked
}) => checked ? _styledComponents.css`
          background-color: ${(0, _CommonStyles.colors)(_CommonStyles.Colors.BrandLightBlue)};
          border-color: ${(0, _CommonStyles.colors)(_CommonStyles.Colors.BrandLightBlue)};
        ` : _styledComponents.css`
          background-color: ${(0, _CommonStyles.colors)(_CommonStyles.Colors.White)};
          border-color: ${(0, _CommonStyles.colors)(_CommonStyles.Colors.Black, 0.06)};
        `};

  ${({
  css: cssOverrides
}) => cssOverrides};
`;
const StyledIconChecked = (0, _styledComponents.default)(({
  checked,
  toggleSize,
  ...otherProps
}) => _react.default.createElement(_Icon.Icon, otherProps))`
  ${({
  toggleSize
}) => iconSizeCss[toggleSize]};
  ${({
  checked
}) => (0, _CommonStyles.visible)(checked)};

  color: ${(0, _CommonStyles.colors)(_CommonStyles.Colors.BrandLightBlue)};
  position: absolute; /* give z-index so ::before bg is behind icon */

  transition: all ease-in 75ms;
`;
const StyledIconNotChecked = (0, _styledComponents.default)(({
  checked,
  toggleSize,
  ...otherProps
}) => _react.default.createElement(_Icon.Icon, otherProps))`
  ${({
  toggleSize
}) => iconSizeCss[toggleSize]};

  ${({
  checked
}) => (0, _CommonStyles.visible)(!checked)};

  color: ${(0, _CommonStyles.colors)(_CommonStyles.Colors.Black24)};
  position: absolute; /* give z-index so ::before bg is behind icon */

  transition: all ease-in 75ms;
`;
const Slider = (0, _styledComponents.default)('div')`
  ${({
  toggleSize
}) => sliderSizeCss[toggleSize]};
  ${(0, _CommonStyles.getElevation)(_CommonStyles.ElevationRange.Elevation1)};
  ${(0, _CommonStyles.flexFlow)('row')};

  background-color: ${(0, _CommonStyles.colors)(_CommonStyles.Colors.White)};
  border-radius: 50%;
  bottom: 0;
  content: '';
  left: 0;
  justify-content: center;
  align-items: center;

  transition: all ease-in 75ms;
`;
exports.Slider = Slider;
const Input = (0, _styledComponents.default)('input')`
  display: none; /* Hide default HTML checkbox */

  /* Move Slider Circle */
  &:checked + ${
/* sc-selector */
Slider} {
    ${({
  toggleSize
}) => inputSizeCss[toggleSize]};
  }

  /* Change Icon: 'check' | Change Color: Blue */
  &:checked
    + ${
/* sc-selector */
Slider}
    > ${
/* sc-selector */
StyledIconChecked} {
    ${(0, _CommonStyles.visible)(false)};
    color: ${(0, _CommonStyles.colors)(_CommonStyles.Colors.BrandLightBlue)};
  }
`;

class Toggle extends _react.Component {
  render() {
    const {
      css: cssOverrides,
      checked,
      onChange,
      toggleSize
    } = this.props;
    return _react.default.createElement(CCToggle, {
      css: cssOverrides,
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