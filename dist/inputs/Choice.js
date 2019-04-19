"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Choice = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Icon = require("../icon/Icon");

var _exports = require("../helpers/exports");

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/*
* Styles
*/
const BBChoiceInput =
/*#__PURE__*/
_styledComponents.default.input.withConfig({
  displayName: "Choice__BBChoiceInput",
  componentId: "sc-16u3c70-0"
})(["opacity:0;position:absolute;z-index:-1;"]);

const BBChoiceFakeLabel =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "Choice__BBChoiceFakeLabel",
  componentId: "sc-16u3c70-1"
})(({
  answered,
  disabled
}) => (0, _styledComponents.css)(["", ";", ";", ";flex-grow:1;word-break:break-word;transition:all ease 150ms;"], answered && (0, _styledComponents.css)(["transform:translateX(24px);"]), disabled && _exports.baseDisabledStyles, (0, _exports.typography)(500, _exports.FontSizes.Title5)));

const CCChoice =
/*#__PURE__*/
_styledComponents.default.label.withConfig({
  displayName: "Choice__CCChoice",
  componentId: "sc-16u3c70-2"
})(({
  disabled,
  readOnly,
  incorrect,
  correct,
  cssOverrides,
  answered
}) => (0, _styledComponents.css)(["", ";", ";", ";", ";align-items:center;box-sizing:border-box;cursor:pointer;display:flex;flex-direction:row;min-height:24px;padding:4px 4px 4px 32px;position:relative;user-select:none;width:100%;", ";.ChoiceButtonChecked{color:", ";transform:translateX(", "px);}.ChoiceButtonUnchecked{color:", ";transform:translateX(", "px);}.RealInput:checked ~ .ChoiceButtonChecked{", ";}.RealInput:checked ~ .ChoiceButtonUnchecked{", ";}.RealInput:not(:checked) ~ .ChoiceButtonChecked{", ";}.RealInput:not(:checked) ~ .ChoiceButtonUnchecked{", ";}.IncorrectIcon{color:", ";", ";}.CorrectIcon{color:", ";", ";}", "{left:8px;position:absolute;font-size:16px;transition:all ease 150ms;}", ";"], (readOnly || incorrect || correct) && (0, _styledComponents.css)(["cursor:default;pointer-events:none;"]), (0, _exports.baseChromelessStyles)(), (0, _exports.flexFlow)('row'), (0, _exports.borderRadius)(), _exports.buttonTransition, (0, _exports.getColor)(_exports.Colors.BrandLightBlue), answered ? 24 : 0, (0, _exports.getColor)(_exports.Colors.Black54), answered ? 24 : 0, disabled && _exports.baseDisabledStyles, (0, _exports.visible)(false), (0, _exports.visible)(false), disabled && _exports.baseDisabledStyles, (0, _exports.getColor)(_exports.Colors.Red), (0, _exports.visible)(incorrect), (0, _exports.getColor)(_exports.Colors.Green), (0, _exports.visible)(correct), _Icon.Icon, cssOverrides));
/*
* Types
*/


/*
* Component
*/
class Choice extends _react.Component {
  constructor(...args) {
    super(...args);

    this.renderFakeInputIcons = () => {
      const {
        type
      } = this.props;

      switch (type) {
        default:
        case 'radio':
          return [_react.default.createElement(_Icon.Icon, {
            key: "radioNotChecked",
            className: "ChoiceButtonUnchecked",
            icon: "radio_button_unchecked"
          }), _react.default.createElement(_Icon.Icon, {
            key: "radioChecked",
            className: "ChoiceButtonChecked",
            icon: "radio_button_checked"
          })];

        case 'checkbox':
          return [_react.default.createElement(_Icon.Icon, {
            key: "radioNotChecked",
            className: "ChoiceButtonUnchecked",
            icon: "check_box_outline_blank"
          }), _react.default.createElement(_Icon.Icon, {
            key: "radioChecked",
            className: "ChoiceButtonChecked",
            icon: "check_box"
          })];
      }
    };
  }

  render() {
    const {
      answered,
      checked,
      correct,
      cssOverrides,
      disabled,
      incorrect,
      onChange,
      children,
      readOnly,
      type,
      value,
      required,
      name
    } = this.props;
    return _react.default.createElement(CCChoice, {
      correct: correct,
      cssOverrides: cssOverrides,
      incorrect: incorrect,
      disabled: disabled,
      readOnly: readOnly,
      answered: answered
    }, _react.default.createElement(_Icon.Icon, {
      icon: "cancel",
      className: "IncorrectIcon"
    }), _react.default.createElement(_Icon.Icon, {
      icon: "check_circle",
      className: "CorrectIcon"
    }), _react.default.createElement(BBChoiceInput, {
      disabled: disabled,
      onChange: onChange,
      className: "RealInput",
      checked: checked,
      type: type,
      readOnly: readOnly,
      value: value,
      required: required,
      name: name
    }), this.renderFakeInputIcons(), _react.default.createElement(BBChoiceFakeLabel, {
      answered: answered,
      disabled: disabled
    }, children));
  }

}

exports.Choice = Choice;