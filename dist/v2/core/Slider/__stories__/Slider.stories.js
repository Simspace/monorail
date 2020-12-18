"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WithoutTrack = exports.WithValueLabel = exports.Disabled = exports.Basic = exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _react = _interopRequireDefault(require("react"));

var _addonActions = require("@storybook/addon-actions");

var _exports = require("../../../../helpers/exports");

var _storybook = require("../../../../helpers/storybook");

var _SliderMeta = _interopRequireDefault(require("./Slider.meta.json"));

var _Slider = require("../Slider");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _default = (0, _storybook.meta)(_SliderMeta.default, {
  title: 'monorail/core/Slider',
  argTypes: {
    ref: _storybook.DISABLED_ARG_TYPE,
    sliderRef: _storybook.DISABLED_ARG_TYPE
  }
});

exports.default = _default;
const BASIC_PROPS = {
  'aria-label': 'Aria Label (inputs must have labels)',
  defaultValue: 0,
  onChange: (0, _addonActions.action)('onChange')
};
const Template = (0, _storybook.story)(args => /*#__PURE__*/_react.default.createElement(_Slider.Slider, args), {
  args: { ...BASIC_PROPS
  }
}); //#region Hero story in Docs

const Basic = (0, _storybook.story)(Template); //#endregion
//#region Distinct configurations

exports.Basic = Basic;
const Disabled = (0, _storybook.story)(Template, {
  args: {
    disabled: true
  }
});
exports.Disabled = Disabled;

var _StyledDiv = /*#__PURE__*/(0, _styledComponents.default)("div").withConfig({
  displayName: "Sliderstories___StyledDiv",
  componentId: "sc-1ugbtny-0"
})(["margin-top:48px;"]);

const WithValueLabel = (0, _storybook.story)(() => {
  return /*#__PURE__*/_react.default.createElement(_StyledDiv, null, /*#__PURE__*/_react.default.createElement(_Slider.Slider, _extends({}, BASIC_PROPS, {
    valueLabelDisplay: "auto",
    defaultValue: 36
  })));
}, {
  storyName: 'With Value Label'
});
exports.WithValueLabel = WithValueLabel;
const WithoutTrack = (0, _storybook.story)(Template, {
  args: {
    track: false,
    defaultValue: 72
  },
  storyName: 'Without Track'
}); //#endregion

exports.WithoutTrack = WithoutTrack;