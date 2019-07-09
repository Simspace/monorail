"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Choice = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _exports = require("../../helpers/exports");

var _Icon = require("../icon/Icon");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/*
 * Styles
 */
const disabledChromeless =
/*#__PURE__*/
(0, _styledComponents.css)(["background:transparent;border:0;"]);

const BBChoiceInput =
/*#__PURE__*/
_styledComponents.default.input.withConfig({
  displayName: "Choice__BBChoiceInput",
  componentId: "sor39o-0"
})(["opacity:0;position:absolute;z-index:-1;"]);

const BBChoiceFakeLabel =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "Choice__BBChoiceFakeLabel",
  componentId: "sor39o-1"
})(({
  answered,
  disabled
}) => (0, _styledComponents.css)(["", ";", ";", ";flex-grow:1;word-break:break-word;transition:all ease 150ms;"], answered && (0, _styledComponents.css)(["transform:translateX(24px);"]), disabled && _exports.baseDisabledStyles, (0, _exports.typography)(500, _exports.FontSizes.Title5)));

const CCChoice =
/*#__PURE__*/
_styledComponents.default.label.withConfig({
  displayName: "Choice__CCChoice",
  componentId: "sor39o-2"
})(({
  dense,
  readOnly,
  incorrect,
  correct,
  disabled,
  cssOverrides
}) => (0, _styledComponents.css)(["", ";", ";", ";", ";align-items:center;box-sizing:border-box;cursor:pointer;display:flex;flex-direction:row;min-height:24px;padding:", ";pointer-events:", ";position:relative;user-select:none;width:100%;", ";", ";"], (readOnly || incorrect || correct) && (0, _styledComponents.css)(["cursor:default;pointer-events:none;"]), disabled ? disabledChromeless : (0, _exports.baseChromelessStyles)(), (0, _exports.flexFlow)('row'), (0, _exports.borderRadius)(), dense ? '4px 4px 4px 24px' : '8px 8px 8px 32px', disabled ? 'none' : '', _exports.buttonTransition, cssOverrides));

const baseIconStyles = (answered, dense) => (0, _styledComponents.css)(["font-size:16px;left:", ";position:absolute;top:", ";transition:all ease 150ms;transform:translateX(", "px);"], dense ? '4px' : '8px', dense ? '4px' : '8px', answered ? 24 : 0);

const centeredIconStyles = (answered, dense) => (0, _styledComponents.css)(["align-items:center;font-size:16px;position:absolute;left:", ";transition:all ease 150ms;transform:translateX(", "px);"], dense ? '4px' : '8px', answered ? 24 : 0);
/*
 * Types
 */


/*
 * Component
 */
const UncheckedRadioIcon =
/*#__PURE__*/
(0, _styledComponents.default)(({
  checked,
  answered,
  dense,
  centeredInput,
  disabled,
  ...otherProps
}) => _react.default.createElement(_Icon.Icon, _extends({
  icon: "radio_button_unchecked"
}, otherProps)))(({
  checked,
  answered,
  dense,
  centeredInput,
  disabled
}) => (0, _styledComponents.css)(["", ";", ";color:", ";", ";"], (0, _exports.visible)(!checked), centeredInput ? centeredIconStyles(answered, dense) : baseIconStyles(answered, dense), (0, _exports.getColor)(_exports.Colors.Black54), disabled && _exports.baseDisabledStyles));
const CheckedRadioIcon =
/*#__PURE__*/
(0, _styledComponents.default)(({
  checked,
  answered,
  dense,
  centeredInput,
  disabled,
  ...otherProps
}) => _react.default.createElement(_Icon.Icon, _extends({
  icon: "radio_button_checked"
}, otherProps)))(({
  checked,
  answered,
  dense,
  centeredInput,
  disabled
}) => (0, _styledComponents.css)(["", ";", ";color:", ";", ";"], (0, _exports.visible)(checked), centeredInput ? centeredIconStyles(answered, dense) : baseIconStyles(answered, dense), (0, _exports.getColor)(_exports.Colors.BrandLightBlue), disabled && _exports.baseDisabledStyles));
const UncheckedCheckboxIcon =
/*#__PURE__*/
(0, _styledComponents.default)(({
  checked,
  answered,
  dense,
  indeterminate,
  centeredInput,
  disabled,
  ...otherProps
}) => _react.default.createElement(_Icon.Icon, _extends({
  icon: "check_box_outline_blank"
}, otherProps)))(({
  checked,
  answered,
  dense,
  indeterminate,
  centeredInput,
  disabled
}) => (0, _styledComponents.css)(["", ";", ";color:", ";", ";"], (0, _exports.visible)(!checked && !indeterminate), centeredInput ? centeredIconStyles(answered, dense) : baseIconStyles(answered, dense), (0, _exports.getColor)(_exports.Colors.Black54), disabled && _exports.baseDisabledStyles));
const CheckedCheckboxIcon =
/*#__PURE__*/
(0, _styledComponents.default)(({
  checked,
  answered,
  dense,
  centeredInput,
  disabled,
  ...otherProps
}) => _react.default.createElement(_Icon.Icon, _extends({
  icon: "check_box"
}, otherProps)))(({
  checked,
  answered,
  dense,
  centeredInput,
  disabled
}) => (0, _styledComponents.css)(["", ";", ";color:", ";", ";"], (0, _exports.visible)(checked), centeredInput ? centeredIconStyles(answered, dense) : baseIconStyles(answered, dense), (0, _exports.getColor)(_exports.Colors.BrandLightBlue), disabled && _exports.baseDisabledStyles));
const IndeterminateIcon =
/*#__PURE__*/
(0, _styledComponents.default)(({
  indeterminate,
  answered,
  dense,
  centeredInput,
  disabled,
  ...otherProps
}) => _react.default.createElement(_Icon.Icon, _extends({
  icon: "indeterminate_check_box"
}, otherProps)))(({
  indeterminate,
  answered,
  dense,
  centeredInput,
  disabled
}) => (0, _styledComponents.css)(["", ";", ";color:", ";", ";"], (0, _exports.visible)(indeterminate), centeredInput ? centeredIconStyles(answered, dense) : baseIconStyles(answered, dense), (0, _exports.getColor)(_exports.Colors.BrandLightBlue), disabled && _exports.baseDisabledStyles));
const IncorrectIcon =
/*#__PURE__*/
(0, _styledComponents.default)(({
  incorrect,
  answered,
  dense,
  disabled,
  ...otherProps
}) => _react.default.createElement(_Icon.Icon, _extends({
  icon: "cancel"
}, otherProps)))(({
  incorrect,
  dense,
  answered,
  disabled
}) => (0, _styledComponents.css)(["", ";", ";color:", ";", ";"], (0, _exports.visible)(incorrect), baseIconStyles(answered, dense), (0, _exports.getColor)(_exports.Colors.Red), disabled && _exports.baseDisabledStyles));
const CorrectIcon =
/*#__PURE__*/
(0, _styledComponents.default)(({
  correct,
  answered,
  dense,
  disabled,
  ...otherProps
}) => _react.default.createElement(_Icon.Icon, _extends({
  icon: "check_circle"
}, otherProps)))(({
  correct,
  dense,
  answered,
  disabled
}) => (0, _styledComponents.css)(["", ";", ";color:", ";", ";"], (0, _exports.visible)(correct), baseIconStyles(answered, dense), (0, _exports.getColor)(_exports.Colors.Green), disabled && _exports.baseDisabledStyles));

const renderFakeInputIcons = (type, centeredInput, checked, answered, dense, indeterminate, disabled) => {
  switch (type) {
    default:
    case 'radio':
      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(UncheckedRadioIcon, {
        centeredInput: centeredInput,
        checked: checked,
        answered: answered,
        dense: dense,
        disabled: disabled
      }), _react.default.createElement(CheckedRadioIcon, {
        centeredInput: centeredInput,
        checked: checked,
        answered: answered,
        dense: dense,
        disabled: disabled
      }));

    case 'checkbox':
      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(UncheckedCheckboxIcon, {
        centeredInput: centeredInput,
        checked: checked,
        answered: answered,
        dense: dense,
        disabled: disabled
      }), _react.default.createElement(CheckedCheckboxIcon, {
        centeredInput: centeredInput,
        checked: checked,
        answered: answered,
        dense: dense,
        disabled: disabled
      }), _react.default.createElement(IndeterminateIcon, {
        centeredInput: centeredInput,
        indeterminate: indeterminate,
        dense: dense,
        disabled: disabled
      }));
  }
};

const Choice = ({
  answered,
  centeredInput,
  checked,
  correct,
  cssOverrides,
  dense,
  disabled,
  incorrect,
  indeterminate,
  onChange,
  children,
  readOnly,
  type,
  value,
  required,
  name,
  style,
  ...domProps
}) => _react.default.createElement(CCChoice, _extends({
  style: style,
  correct: correct,
  cssOverrides: cssOverrides,
  incorrect: incorrect,
  dense: dense,
  disabled: disabled,
  readOnly: readOnly,
  answered: answered,
  indeterminate: indeterminate
}, domProps), _react.default.createElement(BBChoiceInput, {
  disabled: disabled,
  onChange: onChange,
  checked: checked,
  type: type,
  readOnly: readOnly,
  value: value,
  required: required,
  name: name
}), _react.default.createElement(IncorrectIcon, {
  incorrect: incorrect,
  disabled: disabled
}), _react.default.createElement(CorrectIcon, {
  correct: correct,
  disabled: disabled
}), renderFakeInputIcons(type, centeredInput, checked, answered, dense, indeterminate, disabled), _react.default.createElement(BBChoiceFakeLabel, {
  answered: answered,
  disabled: disabled
}, children));

exports.Choice = Choice;
Choice.defaultProps = {
  answered: false,
  centeredInput: false,
  dense: false,
  disabled: false,
  indeterminate: false,
  correct: false,
  incorrect: false,
  checked: false,
  defaultChecked: false,
  cssOverrides: '',
  readOnly: false,
  value: '',
  required: false,
  name: '',
  key: '',
  type: 'radio',
  children: ''
};