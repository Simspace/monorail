"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Choice = exports.ChoiceFakeLabel = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _exports = require("../../helpers/exports");

var _Icon = require("../icon/Icon");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/*
 * Styles
 */
const disabledChromeless =
/*#__PURE__*/
(0, _styledComponents.css)(["background:transparent;border:0;"]);

const ChoiceInput =
/*#__PURE__*/
_styledComponents.default.input.withConfig({
  displayName: "Choice__ChoiceInput",
  componentId: "sor39o-0"
})(["opacity:0;position:absolute;z-index:-1;"]);

const ChoiceFakeLabel =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "Choice__ChoiceFakeLabel",
  componentId: "sor39o-1"
})(({
  answered,
  disabled,
  err
}) => (0, _styledComponents.css)(["", ";", ";", ";", " flex-grow:1;word-break:break-word;transition:all ease 150ms;"], answered && (0, _styledComponents.css)(["transform:translateX(24px);"]), disabled && _exports.baseDisabledStyles, (0, _exports.typography)(500, _exports.FontSizes.Title5), err && `color: ${(0, _exports.getColor)(_exports.Colors.Red)};`));

exports.ChoiceFakeLabel = ChoiceFakeLabel;

const Container =
/*#__PURE__*/
_styledComponents.default.label.withConfig({
  displayName: "Choice__Container",
  componentId: "sor39o-2"
})(({
  dense,
  readOnly,
  incorrect,
  correct,
  disabled,
  err,
  cssOverrides
}) => (0, _styledComponents.css)(["", ";", ";", ";", ";align-items:center;box-sizing:border-box;cursor:pointer;display:flex;flex-direction:row;min-height:24px;padding:", ";pointer-events:", ";position:relative;user-select:none;width:100%;", ";", ";", ";"], (readOnly || incorrect || correct) && (0, _styledComponents.css)(["cursor:default;pointer-events:none;"]), disabled ? disabledChromeless : (0, _exports.baseChromelessStyles)(), (0, _exports.flexFlow)('row'), (0, _exports.borderRadius)(), dense ? '4px 4px 4px 24px' : '8px 8px 8px 32px', disabled ? 'none' : '', _exports.buttonTransition, err && _exports.baseErrorBackgroundStyles, cssOverrides));

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
  err,
  ...otherProps
}) => _react.default.createElement(_Icon.Icon, _extends({
  icon: "radio_button_unchecked"
}, otherProps))).withConfig({
  displayName: "Choice__UncheckedRadioIcon",
  componentId: "sor39o-3"
})(({
  checked,
  answered,
  dense,
  centeredInput,
  disabled,
  err
}) => (0, _styledComponents.css)(["", ";", ";color:", ";", ";"], (0, _exports.visible)(!checked), centeredInput ? centeredIconStyles(answered, dense) : baseIconStyles(answered, dense), err ? (0, _exports.getColor)(_exports.Colors.Red) : (0, _exports.getColor)(_exports.Colors.Black54), disabled && _exports.baseDisabledStyles));
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
}, otherProps))).withConfig({
  displayName: "Choice__CheckedRadioIcon",
  componentId: "sor39o-4"
})(({
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
  err,
  ...otherProps
}) => _react.default.createElement(_Icon.Icon, _extends({
  icon: "check_box_outline_blank"
}, otherProps))).withConfig({
  displayName: "Choice__UncheckedCheckboxIcon",
  componentId: "sor39o-5"
})(({
  checked,
  answered,
  dense,
  indeterminate,
  centeredInput,
  disabled,
  err
}) => (0, _styledComponents.css)(["", ";", ";color:", ";", ";"], (0, _exports.visible)(!checked && !indeterminate), centeredInput ? centeredIconStyles(answered, dense) : baseIconStyles(answered, dense), err ? (0, _exports.getColor)(_exports.Colors.Red) : (0, _exports.getColor)(_exports.Colors.Black54), disabled && _exports.baseDisabledStyles));
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
}, otherProps))).withConfig({
  displayName: "Choice__CheckedCheckboxIcon",
  componentId: "sor39o-6"
})(({
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
}, otherProps))).withConfig({
  displayName: "Choice__IndeterminateIcon",
  componentId: "sor39o-7"
})(({
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
}, otherProps))).withConfig({
  displayName: "Choice__IncorrectIcon",
  componentId: "sor39o-8"
})(({
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
}, otherProps))).withConfig({
  displayName: "Choice__CorrectIcon",
  componentId: "sor39o-9"
})(({
  correct,
  dense,
  answered,
  disabled
}) => (0, _styledComponents.css)(["", ";", ";color:", ";", ";"], (0, _exports.visible)(correct), baseIconStyles(answered, dense), (0, _exports.getColor)(_exports.Colors.Green), disabled && _exports.baseDisabledStyles));

const renderFakeInputIcons = (type, centeredInput, checked, answered, dense, indeterminate, disabled, err) => {
  switch (type) {
    default:
    case 'radio':
      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(UncheckedRadioIcon, {
        centeredInput: centeredInput,
        checked: checked,
        answered: answered,
        dense: dense,
        disabled: disabled,
        err: err
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
        disabled: disabled,
        err: err
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

const Choice = props => {
  const {
    answered = false,
    centeredInput = false,
    checked = false,
    correct = false,
    cssOverrides,
    dense = false,
    disabled = false,
    incorrect = false,
    indeterminate = false,
    onChange,
    children = '',
    readOnly = false,
    type = 'radio',
    value = '',
    required = false,
    name = '',
    style,
    err = false,
    'data-test-id': dataTestId,
    onClick,
    ...domProps
  } = props;
  return _react.default.createElement(Container, _extends({
    style: style,
    correct: correct,
    cssOverrides: cssOverrides,
    incorrect: incorrect,
    dense: dense,
    disabled: disabled,
    readOnly: readOnly,
    answered: answered,
    indeterminate: indeterminate,
    err: err
  }, domProps), _react.default.createElement(ChoiceInput, {
    "data-test-id": dataTestId,
    disabled: disabled,
    onChange: onChange,
    defaultChecked: checked,
    type: type,
    readOnly: readOnly,
    value: value,
    required: required,
    name: name,
    onClick: onClick
  }), _react.default.createElement(IncorrectIcon, {
    incorrect: incorrect,
    disabled: disabled
  }), _react.default.createElement(CorrectIcon, {
    correct: correct,
    disabled: disabled
  }), renderFakeInputIcons(type, centeredInput, checked, answered, dense, indeterminate, disabled, err), _react.default.createElement(ChoiceFakeLabel, {
    answered: answered,
    disabled: disabled,
    err: err
  }, children));
};

exports.Choice = Choice;