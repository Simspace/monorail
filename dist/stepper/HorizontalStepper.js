"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HorizontalStepper = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var R = _interopRequireWildcard(require("ramda"));

var _Icon = require("../icon/Icon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const HorizontalStepperContainer =
/*#__PURE__*/
(0, _styledComponents.default)('div').withConfig({
  displayName: "HorizontalStepper__HorizontalStepperContainer",
  componentId: "sc-1nopkhd-0"
})(["display:flex;height:100%;width:100%;justify-content:center;", ";"], ({
  cssOverrides
}) => cssOverrides);
const Step =
/*#__PURE__*/
(0, _styledComponents.default)('div').withConfig({
  displayName: "HorizontalStepper__Step",
  componentId: "sc-1nopkhd-1"
})(["align-items:center;display:flex;justify-content:center;position:relative;max-width:180px;transition:all ease 0.25s;cursor:pointer;&:hover{opacity:0.7;}&.disabled{opacity:0.4;pointer-events:none;}&.active{opacity:1;.number{background-color:#1465ff;border-color:#1465ff;.digit{color:white;}}}&.completed{.number{background-color:", ";border-color:", ";svg{fill:", ";}}}"], props => props.darkMode ? 'white' : '#f7f7f7', props => props.darkMode ? 'white' : '#1465ff', props => props.darkMode ? 'hsla(234,56%,20%,1)' : '#1465ff');
const Body =
/*#__PURE__*/
(0, _styledComponents.default)('div').withConfig({
  displayName: "HorizontalStepper__Body",
  componentId: "sc-1nopkhd-2"
})(["align-items:center;display:flex;z-index:1;padding:10px;overflow:hidden;"]);
const NumberWrapper =
/*#__PURE__*/
(0, _styledComponents.default)('div').withConfig({
  displayName: "HorizontalStepper__NumberWrapper",
  componentId: "sc-1nopkhd-3"
})(["padding:10px;flex:0 0 45px;height:45px;position:relative;background-color:", ";.icon{position:absolute;left:5px;top:5px;svg{fill:#1465ff;}}"], props => props.darkMode ? 'hsla(234,56%,20%,1)' : 'white');
const Number =
/*#__PURE__*/
(0, _styledComponents.default)('div').withConfig({
  displayName: "HorizontalStepper__Number",
  componentId: "sc-1nopkhd-4"
})(["border-style:solid;border-width:2px;border-color:", ";align-items:center;border-radius:50%;width:25px;height:25px;position:relative;"], props => props.darkMode ? 'white' : 'rgba(0, 0, 0, 0.54)'); // Needed to have this because otherwise
// the number would bounce around when
// swapping between checkmark and digit

const Digit =
/*#__PURE__*/
(0, _styledComponents.default)('div').withConfig({
  displayName: "HorizontalStepper__Digit",
  componentId: "sc-1nopkhd-5"
})(["color:", ";font-weight:bold;position:absolute;justify-content:center;align-items:center;height:100%;width:100%;display:flex;"], props => props.darkMode ? 'white' : 'rgba(0, 0, 0, 0.54)');
const Text =
/*#__PURE__*/
(0, _styledComponents.default)('div').withConfig({
  displayName: "HorizontalStepper__Text",
  componentId: "sc-1nopkhd-6"
})(["display:flex;flex-direction:column;background-color:", ";padding-right:10px;"], props => props.darkMode ? 'hsla(234,56%,20%,1)' : 'white');
const Title =
/*#__PURE__*/
(0, _styledComponents.default)('div').withConfig({
  displayName: "HorizontalStepper__Title",
  componentId: "sc-1nopkhd-7"
})(["color:", ";font-size:13px;font-weight:bold;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;"], props => props.darkMode ? 'white' : 'black');
const Subtitle =
/*#__PURE__*/
(0, _styledComponents.default)('div').withConfig({
  displayName: "HorizontalStepper__Subtitle",
  componentId: "sc-1nopkhd-8"
})(["color:", ";font-size:11px;opacity:0.7;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:80px;"], props => props.darkMode ? 'white' : 'black');
const Line =
/*#__PURE__*/
(0, _styledComponents.default)('div').withConfig({
  displayName: "HorizontalStepper__Line",
  componentId: "sc-1nopkhd-9"
})(["height:1px;width:50%;background-color:#c4c4c4;top:50%;position:absolute;"]);
const LeftLine =
/*#__PURE__*/
(0, _styledComponents.default)(Line).withConfig({
  displayName: "HorizontalStepper__LeftLine",
  componentId: "sc-1nopkhd-10"
})(["left:0;"]);
const RightLine =
/*#__PURE__*/
(0, _styledComponents.default)(Line).withConfig({
  displayName: "HorizontalStepper__RightLine",
  componentId: "sc-1nopkhd-11"
})(["right:0;"]);

class HorizontalStepper extends _react.Component {
  constructor(...args) {
    super(...args);

    this.getClassname = step => {
      if (step.isActive) {
        return 'active';
      } else if (step.isCompleted) {
        return 'completed';
      } else if (step.isDisabled) {
        return 'disabled';
      } else {
        return '';
      }
    };

    this.renderSection = (step, index) => _react.default.createElement(Step, {
      style: {
        width: `${1 / this.props.steps.length * 100}%`
      },
      key: index,
      className: this.getClassname(step),
      darkMode: this.props.darkMode,
      onClick: () => this.props.onStepClick(step, index),
      "data-test-id": `horizontal-stepper-step-${index}`
    }, _react.default.createElement(Body, null, _react.default.createElement(NumberWrapper, {
      className: "number-wrapper",
      darkMode: this.props.darkMode
    }, _react.default.createElement(Number, {
      className: "number",
      darkMode: this.props.darkMode
    }, step.isCompleted && !step.isActive ? _react.default.createElement(_Icon.Icon, {
      icon: "checkmark"
    }) : _react.default.createElement(Digit, {
      className: "digit",
      darkMode: this.props.darkMode
    }, index + 1))), _react.default.createElement(Text, {
      className: "text",
      darkMode: this.props.darkMode
    }, _react.default.createElement(Title, {
      darkMode: this.props.darkMode
    }, step.label), !R.isNil(step.subtitle) && _react.default.createElement(Subtitle, {
      darkMode: this.props.darkMode
    }, step.subtitle))), index !== 0 && _react.default.createElement(LeftLine, null), index !== this.props.steps.length - 1 && _react.default.createElement(RightLine, null));
  }

  render() {
    const {
      cssOverrides,
      darkMode
    } = this.props;
    return _react.default.createElement(HorizontalStepperContainer, {
      cssOverrides: cssOverrides,
      className: darkMode ? 'dark' : 'light'
    }, this.props.steps.map(this.renderSection));
  }

}

exports.HorizontalStepper = HorizontalStepper;