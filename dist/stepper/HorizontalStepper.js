"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HorizontalStepper = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _typeGuards = require("../sharedHelpers/typeGuards");

var _exports = require("../helpers/exports");

var _Icon = require("../icon/Icon");

var _baseStyles = require("../helpers/baseStyles");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/*
 * Styles
 */
const getStateStyles = (step, styles) => {
  if (step.isActive) {
    return styles.isActive;
  } else if (step.isCompleted) {
    return styles.isCompleted;
  }

  return styles.isDisabled;
};

const StepStateStyles = {
  isActive: (0, _styledComponents.css)([""]),
  isDisabled: (0, _styledComponents.css)(["pointer-events:none;"]),
  isCompleted: (0, _styledComponents.css)([""])
};
const BodyStateStyles = {
  isActive: (0, _styledComponents.css)([""]),
  isDisabled: (0, _styledComponents.css)(["opacity:0.4;"]),
  isCompleted: (0, _styledComponents.css)([""])
};

const NumberStateStyles = darkMode => ({
  isActive: (0, _styledComponents.css)(["background-color:", ";border-color:", ";color:", ";"], (0, _exports.getColor)(_exports.Colors.BrandLightBlue), (0, _exports.getColor)(_exports.Colors.BrandLightBlue), (0, _exports.getColor)(_exports.Colors.White)),
  isDisabled: (0, _styledComponents.css)([""]),
  isCompleted: (0, _styledComponents.css)(["background-color:", ";border-color:", ";"], (0, _exports.getColor)(_exports.Colors.White), darkMode ? (0, _exports.getColor)(_exports.Colors.White) : (0, _exports.getColor)(_exports.Colors.BrandLightBlue))
});

const HorizontalStepperContainer =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "HorizontalStepper__HorizontalStepperContainer",
  componentId: "sc-1nopkhd-0"
})(["", ";justify-content:flex-start;flex-shrink:0;overflow-y:auto;width:100%;height:100%;"], (0, _exports.flexFlow)('row'));

const HorizontalStepperWrapper =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "HorizontalStepper__HorizontalStepperWrapper",
  componentId: "sc-1nopkhd-1"
})(["", ";height:100%;justify-content:flex-start;overflow-y:auto;flex-shrink:0;max-width:100%;"], (0, _exports.flexFlow)('row'));

const Step =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "HorizontalStepper__Step",
  componentId: "sc-1nopkhd-2"
})(({
  step
}) => (0, _styledComponents.css)(["", ";align-items:center;justify-content:center;position:relative;transition:all ease 0.25s;cursor:pointer;", ";"], (0, _exports.flexFlow)('row'), getStateStyles(step, StepStateStyles)));

const Body =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "HorizontalStepper__Body",
  componentId: "sc-1nopkhd-3"
})(({
  step,
  darkMode
}) => (0, _styledComponents.css)(["", ";", ";align-items:center;padding:8px;height:100%;", ";"], (0, _exports.flexFlow)('row'), (0, _baseStyles.baseChromelessStyles)(darkMode ? _exports.Colors.White : _exports.Colors.BrandLightBlue), getStateStyles(step, BodyStateStyles)));

const StyledIcon =
/*#__PURE__*/
(0, _styledComponents.default)(_Icon.Icon)(({
  darkMode
}) => (0, _styledComponents.css)(["color:", ";margin:auto 8px;flex-shrink:0;"], darkMode ? (0, _exports.getColor)(_exports.Colors.White) : (0, _exports.getColor)(_exports.Colors.BrandLightBlue)));

const Number =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "HorizontalStepper__Number",
  componentId: "sc-1nopkhd-4"
})(({
  step,
  darkMode
}) => (0, _styledComponents.css)(["", ";", ";", ";align-items:center;border:2px solid ", ";color:", ";flex-shrink:0;height:20px;justify-content:center;margin:auto 8px;width:20px;", ";"], (0, _exports.flexFlow)('row'), (0, _exports.borderRadius)(_exports.BorderRadius.Round), (0, _exports.typography)(700, _exports.FontSizes.Title5), darkMode ? (0, _exports.getColor)(_exports.Colors.White) : (0, _exports.getColor)(_exports.Colors.Black54), darkMode ? (0, _exports.getColor)(_exports.Colors.White) : (0, _exports.getColor)(_exports.Colors.Black54), getStateStyles(step, NumberStateStyles(darkMode))));

const Text =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "HorizontalStepper__Text",
  componentId: "sc-1nopkhd-5"
})(["", ";padding-right:8px;"], (0, _exports.flexFlow)('column'));

const Title =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "HorizontalStepper__Title",
  componentId: "sc-1nopkhd-6"
})(({
  darkMode
}) => (0, _styledComponents.css)(["color:", ";", ";"], darkMode ? (0, _exports.getColor)(_exports.Colors.White) : (0, _exports.getColor)(_exports.Colors.Black74), (0, _exports.typography)(700, _exports.FontSizes.Title4)));

const Subtitle =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "HorizontalStepper__Subtitle",
  componentId: "sc-1nopkhd-7"
})(({
  darkMode
}) => (0, _styledComponents.css)(["color:", ";", ";"], darkMode ? (0, _exports.getColor)(_exports.Colors.White) : (0, _exports.getColor)(_exports.Colors.Black74), (0, _exports.typography)(300, _exports.FontSizes.Title5)));

const Line =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "HorizontalStepper__Line",
  componentId: "sc-1nopkhd-8"
})(({
  darkMode
}) => (0, _styledComponents.css)(["background-color:", ";height:1px;width:32px;margin:auto 8px;"], darkMode ? (0, _exports.getColor)(_exports.Colors.White) : (0, _exports.getColor)(_exports.Colors.Black24)));
/*
 * Types
 */


/*
 * Components
 */
class HorizontalStepper extends _react.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      activeStepIndex: 0
    };
    this.activeStepRef = (0, _react.createRef)();

    this.scrollStepIntoView = () => {
      const activeStep = this.activeStepRef.current;

      if (!(0, _typeGuards.isNil)(activeStep)) {
        activeStep.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
          inline: 'center'
        });
      }
    };

    this.renderSection = (step, index) => {
      const {
        onStepClick,
        darkMode,
        steps
      } = this.props;
      const {
        activeStepIndex
      } = this.state;

      if (step.isActive && activeStepIndex !== index) {
        this.setState({
          activeStepIndex: index
        });
      }

      return _react.default.createElement(Step, {
        key: index,
        step: step,
        onClick: () => onStepClick(step, index),
        "data-test-id": `horizontal-stepper-step-${index}`,
        ref: step.isActive ? this.activeStepRef : null
      }, _react.default.createElement(Body, {
        darkMode: darkMode,
        step: step
      }, step.isCompleted && !step.isActive ? _react.default.createElement(StyledIcon, {
        icon: "check_circle_outline",
        darkMode: darkMode,
        size: 20
      }) : _react.default.createElement(Number, {
        darkMode: darkMode,
        step: step
      }, index + 1), _react.default.createElement(Text, null, _react.default.createElement(Title, {
        darkMode: darkMode
      }, step.label), !(0, _typeGuards.isNil)(step.subtitle) && _react.default.createElement(Subtitle, {
        darkMode: darkMode
      }, step.subtitle))), index !== steps.length - 1 && _react.default.createElement(Line, {
        darkMode: darkMode
      }));
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.activeStepIndex !== this.state.activeStepIndex) {
      this.scrollStepIntoView();
    }
  }

  render() {
    const {
      className
    } = this.props;
    return _react.default.createElement(HorizontalStepperContainer, {
      className: className
    }, _react.default.createElement(HorizontalStepperWrapper, null, this.props.steps.map(this.renderSection)));
  }

}

exports.HorizontalStepper = HorizontalStepper;
HorizontalStepper.defaultProps = {
  darkMode: false
};