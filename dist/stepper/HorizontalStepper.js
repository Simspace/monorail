"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HorizontalStepper = void 0;

var _react = _interopRequireWildcard(require("react"));

var _baseStyles = require("../helpers/baseStyles");

var _exports = require("../helpers/exports");

var _styledComponents = _interopRequireWildcard(require("../helpers/styled-components"));

var _theme = require("../helpers/theme");

var _Icon = require("../icon/Icon");

var _typeGuards = require("../sharedHelpers/typeGuards");

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

const stepStateStyles = {
  isActive: (0, _styledComponents.css)([""]),
  isDisabled: (0, _styledComponents.css)(["pointer-events:none;"]),
  isCompleted: (0, _styledComponents.css)([""])
};
const bodyStateStyles = {
  isActive: (0, _styledComponents.css)([""]),
  isDisabled: (0, _styledComponents.css)(["opacity:0.4;"]),
  isCompleted: (0, _styledComponents.css)([""])
};
const numberStateStyles = {
  isActive: (0, _styledComponents.css)(["background-color:", ";border-color:", ";color:", ";"], (0, _theme.getThemeColor)(_theme.ThemeColors.ActionPrimary), (0, _theme.getThemeColor)(_theme.ThemeColors.ActionPrimary), (0, _exports.getColor)(_exports.Colors.White)),
  isDisabled: (0, _styledComponents.css)(["background-color:transparent;border-color:", ";color:", ";"], (0, _theme.getThemeColor)(_theme.ThemeColors.Text200), (0, _theme.getThemeColor)(_theme.ThemeColors.Text200)),
  isCompleted: (0, _styledComponents.css)(["background-color:", ";border-color:", ";"], (0, _exports.getColor)(_exports.Colors.White), (0, _theme.getThemeColor)(_theme.ThemeColors.ActionPrimary))
};

const HorizontalStepperContainer =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "HorizontalStepper__HorizontalStepperContainer",
  componentId: "sc-1nopkhd-0"
})(["", ";flex-shrink:0;height:100%;justify-content:flex-start;overflow-y:auto;width:100%;"], (0, _exports.flexFlow)('row'));

const HorizontalStepperWrapper =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "HorizontalStepper__HorizontalStepperWrapper",
  componentId: "sc-1nopkhd-1"
})(["", ";flex-shrink:0;height:100%;justify-content:flex-start;max-width:100%;overflow-y:auto;"], (0, _exports.flexFlow)('row'));

const Step =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "HorizontalStepper__Step",
  componentId: "sc-1nopkhd-2"
})(({
  step
}) => (0, _styledComponents.css)(["", ";", ";align-items:center;cursor:pointer;justify-content:center;position:relative;transition:all ease 0.25s;user-select:none;"], (0, _exports.flexFlow)('row'), getStateStyles(step, stepStateStyles)));

const Body =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "HorizontalStepper__Body",
  componentId: "sc-1nopkhd-3"
})(({
  step
}) => (0, _styledComponents.css)(["", ";", ";", ";align-items:center;height:100%;padding:8px;"], (0, _baseStyles.baseChromelessStyles)(), (0, _exports.flexFlow)('row'), getStateStyles(step, bodyStateStyles)));

const StyledIcon =
/*#__PURE__*/
(0, _styledComponents.default)(_Icon.Icon).withConfig({
  displayName: "HorizontalStepper__StyledIcon",
  componentId: "sc-1nopkhd-4"
})(["color:", ";flex-shrink:0;margin:auto 8px;"], (0, _theme.getThemeColor)(_theme.ThemeColors.ActionSecondary));

const Number =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "HorizontalStepper__Number",
  componentId: "sc-1nopkhd-5"
})(({
  step
}) => (0, _styledComponents.css)(["", ";", ";", ";", ";align-items:center;border-style:solid;border-width:2px;flex-shrink:0;height:20px;justify-content:center;margin:auto 8px;width:20px;"], (0, _exports.borderRadius)(_exports.BorderRadius.Round), (0, _exports.flexFlow)('row'), getStateStyles(step, numberStateStyles), (0, _exports.typography)(700, _exports.FontSizes.Title4)));

const TextContainer =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "HorizontalStepper__TextContainer",
  componentId: "sc-1nopkhd-6"
})(["", ";margin-right:8px;"], (0, _exports.flexFlow)('column'));

const Title =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "HorizontalStepper__Title",
  componentId: "sc-1nopkhd-7"
})(["", ";color:", ";"], (0, _exports.typography)(700, _exports.FontSizes.Title4), (0, _theme.getThemeColor)(_theme.ThemeColors.Text700));

const Subtitle =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "HorizontalStepper__Subtitle",
  componentId: "sc-1nopkhd-8"
})(["", ";color:", ";"], (0, _exports.typography)(300, _exports.FontSizes.Title5), (0, _theme.getThemeColor)(_theme.ThemeColors.Text700));

const Line =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "HorizontalStepper__Line",
  componentId: "sc-1nopkhd-9"
})(["background-color:", ";height:1px;margin:auto 8px;width:32px;"], (0, _theme.getThemeColor)(_theme.ThemeColors.Text200));
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
        step: step
      }, step.isCompleted && !step.isActive ? _react.default.createElement(StyledIcon, {
        icon: "check_circle_outline",
        size: 28
      }) : _react.default.createElement(Number, {
        step: step
      }, index + 1), _react.default.createElement(TextContainer, null, _react.default.createElement(Title, null, step.label), !(0, _typeGuards.isNil)(step.subtitle) && _react.default.createElement(Subtitle, null, step.subtitle))), index !== steps.length - 1 && _react.default.createElement(Line, null));
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.activeStepIndex !== this.state.activeStepIndex) {
      this.scrollStepIntoView();
    }
  }

  render() {
    const {
      steps,
      onStepClick,
      ...domProps
    } = this.props;
    return _react.default.createElement(HorizontalStepperContainer, domProps, _react.default.createElement(HorizontalStepperWrapper, null, steps.map(this.renderSection)));
  }

}

exports.HorizontalStepper = HorizontalStepper;