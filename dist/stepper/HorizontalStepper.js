"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HorizontalStepper = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var R = _interopRequireWildcard(require("ramda"));

var _Icon = require("../icon/Icon");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const HorizontalStepperContainer = (0, _styledComponents.default)('div')`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;

  ${({
  css: cssOverrides
}) => cssOverrides};
`;
const Step = (0, _styledComponents.default)('div')`
  align-items: center;
  display: flex;
  justify-content: center;
  position: relative;
  max-width: 180px;
  transition: all ease 0.25s;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }

  &.disabled {
    opacity: 0.4;
    pointer-events: none;
  }

  &.active {
    opacity: 1;
    .number {
      background-color: #1465ff;
      border-color: #1465ff;

      .digit {
        color: white;
      }
    }
  }

  &.completed {
    .number {
      background-color: ${props => props.darkMode ? 'white' : '#f7f7f7'};
      border-color: ${props => props.darkMode ? 'white' : '#1465ff'};

      svg {
        fill: ${props => props.darkMode ? 'hsla(234,56%,20%,1)' : '#1465ff'};
      }
    }
  }
`;
const Body = (0, _styledComponents.default)('div')`
  align-items: center;
  display: flex;
  z-index: 1;
  padding: 10px;
  overflow: hidden;
`;
const NumberWrapper = (0, _styledComponents.default)('div')`
  padding: 10px;
  flex: 0 0 45px;
  height: 45px;
  position: relative;
  background-color: ${props => props.darkMode ? 'hsla(234,56%,20%,1)' : 'white'};

  .icon {
    position: absolute;
    left: 5px;
    top: 5px;

    svg {
      fill: #1465ff;
    }
  }
`;
const Number = (0, _styledComponents.default)('div')`
  border-style: solid;
  border-width: 2px;
  border-color: ${props => props.darkMode ? 'white' : 'rgba(0, 0, 0, 0.54)'};
  align-items: center;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  position: relative;
`; // Needed to have this because otherwise
// the number would bounce around when
// swapping between checkmark and digit

const Digit = (0, _styledComponents.default)('div')`
  color: ${props => props.darkMode ? 'white' : 'rgba(0, 0, 0, 0.54)'};
  font-weight: bold;
  position: absolute;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  display: flex;
`;
const Text = (0, _styledComponents.default)('div')`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.darkMode ? 'hsla(234,56%,20%,1)' : 'white'};
  padding-right: 10px;
`;
const Title = (0, _styledComponents.default)('div')`
  color: ${props => props.darkMode ? 'white' : 'black'};
  font-size: 13px;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const Subtitle = (0, _styledComponents.default)('div')`
  color: ${props => props.darkMode ? 'white' : 'black'};
  font-size: 11px;
  opacity: 0.7;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 80px;
`;
const Line = (0, _styledComponents.default)('div')`
  height: 1px;
  width: 50%;
  background-color: #c4c4c4;
  top: 50%;
  position: absolute;
`;
const LeftLine = (0, _styledComponents.default)(Line)`
  left: 0;
`;
const RightLine = (0, _styledComponents.default)(Line)`
  right: 0;
`;

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
      css: overrideCss,
      darkMode
    } = this.props;
    return _react.default.createElement(HorizontalStepperContainer, {
      css: overrideCss,
      className: darkMode ? 'dark' : 'light'
    }, this.props.steps.map(this.renderSection));
  }

}

exports.HorizontalStepper = HorizontalStepper;