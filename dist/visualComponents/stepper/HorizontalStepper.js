"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HorizontalStepper = void 0;

var _react = _interopRequireWildcard(require("react"));

var _baseStyles = require("../../helpers/baseStyles");

var _exports = require("../../helpers/exports");

var _styledComponents = _interopRequireWildcard(require("../../helpers/styled-components"));

var _theme = require("../../helpers/theme");

var _typeGuards = require("../../sharedHelpers/typeGuards");

var _Icon = require("../icon/Icon");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
  isActive: _styledComponents.css``,
  isDisabled: _styledComponents.css`
    pointer-events: none;
  `,
  isCompleted: _styledComponents.css``
};
const bodyStateStyles = {
  isActive: _styledComponents.css``,
  isDisabled: _styledComponents.css`
    opacity: 0.4;
  `,
  isCompleted: _styledComponents.css``
};
const numberStateStyles = {
  isActive: _styledComponents.css`
    background-color: ${(0, _theme.getThemeColor)(_theme.ThemeColors.ActionPrimary)};
    border-color: ${(0, _theme.getThemeColor)(_theme.ThemeColors.ActionPrimary)};
    color: ${(0, _exports.getColor)(_exports.Colors.White)};
  `,
  isDisabled: _styledComponents.css`
    background-color: transparent;
    border-color: ${(0, _theme.getThemeColor)(_theme.ThemeColors.Text200)};
    color: ${(0, _theme.getThemeColor)(_theme.ThemeColors.Text200)};
  `,
  isCompleted: _styledComponents.css`
    background-color: ${(0, _exports.getColor)(_exports.Colors.White)};
    border-color: ${(0, _theme.getThemeColor)(_theme.ThemeColors.ActionPrimary)};
  `
};
const HorizontalStepperContainer = _styledComponents.default.div`
  ${(0, _exports.flexFlow)('row')};

  flex-shrink: 0;
  height: 100%;
  justify-content: flex-start;
  overflow-y: auto;
  width: 100%;
`;
const HorizontalStepperWrapper = _styledComponents.default.div`
  ${(0, _exports.flexFlow)('row')};

  flex-shrink: 0;
  height: 100%;
  justify-content: flex-start;
  max-width: 100%;
  overflow-y: auto;
`;

const Step = _styledComponents.default.div(({
  step
}) => _styledComponents.css`
    ${(0, _exports.flexFlow)('row')};
    ${getStateStyles(step, stepStateStyles)};

    align-items: center;
    cursor: pointer;
    justify-content: center;
    position: relative;
    transition: all ease 0.25s;
    user-select: none;
  `);

const Body = _styledComponents.default.div(({
  step
}) => _styledComponents.css`
    ${(0, _baseStyles.baseChromelessStyles)()};
    ${(0, _exports.flexFlow)('row')};
    ${getStateStyles(step, bodyStateStyles)};

    align-items: center;
    height: 100%;
    padding: 8px;
  `);

const StyledIcon = (0, _styledComponents.default)(_Icon.Icon)`
  color: ${(0, _theme.getThemeColor)(_theme.ThemeColors.ActionSecondary)};
  flex-shrink: 0;
  margin: auto 8px;
`;

const Number = _styledComponents.default.div(({
  step
}) => _styledComponents.css`
    ${(0, _exports.borderRadius)(_exports.BorderRadius.Round)};
    ${(0, _exports.flexFlow)('row')};
    ${getStateStyles(step, numberStateStyles)};
    ${(0, _exports.typography)(700, _exports.FontSizes.Title4)};

    align-items: center;
    border-style: solid;
    border-width: 2px;
    flex-shrink: 0;
    height: 20px;
    justify-content: center;
    margin: auto 8px;
    width: 20px;
  `);

const TextContainer = _styledComponents.default.div`
  ${(0, _exports.flexFlow)('column')};

  margin-right: 8px;
`;
const Title = _styledComponents.default.div`
  ${(0, _exports.typography)(700, _exports.FontSizes.Title4)};

  color: ${(0, _theme.getThemeColor)(_theme.ThemeColors.Text700)};
`;
const Subtitle = _styledComponents.default.div`
  ${(0, _exports.typography)(300, _exports.FontSizes.Title5)};

  color: ${(0, _theme.getThemeColor)(_theme.ThemeColors.Text700)};
`;
const Line = _styledComponents.default.div`
  background-color: ${(0, _theme.getThemeColor)(_theme.ThemeColors.Text200)};
  height: 1px;
  margin: auto 8px;
  width: 32px;
`;
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