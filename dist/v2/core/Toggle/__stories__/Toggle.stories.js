"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AllSizes = exports.Checked = exports.Basic = exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _react = _interopRequireDefault(require("react"));

var _addonActions = require("@storybook/addon-actions");

var _storybook = require("../../../../helpers/storybook");

var _ToggleMeta = _interopRequireDefault(require("./Toggle.meta.json"));

var _Toggle = require("../Toggle");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _default = (0, _storybook.meta)(_ToggleMeta.default, {
  title: 'monorail/core/Toggle',
  argTypes: {
    ref: _storybook.DISABLED_ARG_TYPE
  }
});

exports.default = _default;
const BASIC_PROPS = {
  inputProps: {
    'aria-label': 'Aria Label (inputs must have labels)'
  },
  onClick: (0, _addonActions.action)('onClick')
};
const Template = (0, _storybook.story)(args => /*#__PURE__*/_react.default.createElement(_Toggle.Toggle, args), {
  args: { ...BASIC_PROPS
  }
}); //#region Hero story in Docs

const Basic = (0, _storybook.story)(Template); //#endregion
//#region Distinct configurations

exports.Basic = Basic;
const Checked = (0, _storybook.story)(Template, {
  args: {
    checked: true
  },
  parameters: { ..._storybook.DISABLED_ACTIONS
  }
}); //#endregion
//#region Prop showcases

exports.Checked = Checked;

var _StyledDiv = /*#__PURE__*/(0, _styledComponents.default)("div").withConfig({
  displayName: "Togglestories___StyledDiv",
  componentId: "ucqu0p-0"
})(["display:flex;flex-direction:column;gap:24px;"]);

const AllSizes = (0, _storybook.story)(() => {
  return /*#__PURE__*/_react.default.createElement(_StyledDiv, null, /*#__PURE__*/_react.default.createElement(_Toggle.Toggle, _extends({}, BASIC_PROPS, {
    size: "default"
  })), /*#__PURE__*/_react.default.createElement(_Toggle.Toggle, _extends({}, BASIC_PROPS, {
    size: "large"
  })));
}, {
  parameters: { ..._storybook.DISABLED_CONTROLS,
    docs: {
      storyDescription: `2 sizes: 'default' and 'large'`
    }
  }
}); //#endregion

exports.AllSizes = AllSizes;