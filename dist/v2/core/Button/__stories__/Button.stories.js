"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChromelessContrastDisplay = exports.ChromelessDisplay = exports.OutlineDisplay = exports.PrimaryDisplay = exports.Disabled = exports.Basic = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _addonActions = require("@storybook/addon-actions");

var _storybook = require("../../../../helpers/storybook");

var _ButtonMeta = _interopRequireDefault(require("./Button.meta.json"));

var _Button = require("../Button");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _storybook.meta)(_ButtonMeta.default, {
  title: 'monorail/core/Button',
  argTypes: {
    action: _storybook.DISABLED_ARG_TYPE,
    ref: _storybook.DISABLED_ARG_TYPE,
    buttonRef: _storybook.DISABLED_ARG_TYPE,
    focusVisibleClassName: _storybook.DISABLED_ARG_TYPE
  }
});

exports.default = _default;
const Template = (0, _storybook.story)(args => /*#__PURE__*/_react.default.createElement(_Button.Button, args), {
  args: {
    onClick: (0, _addonActions.action)('onClick'),
    children: 'Button'
  }
}); //#region Hero story in Docs

const Basic = (0, _storybook.story)(Template); //#endregion
//#region Distinct configurations

exports.Basic = Basic;
const Disabled = (0, _storybook.story)(Template, {
  args: {
    disabled: true
  }
}); //#endregion
//#region Prop showcases

exports.Disabled = Disabled;
const PrimaryDisplay = (0, _storybook.story)(() => /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Button.Button, {
  display: "primary"
}, "Primary"), /*#__PURE__*/_react.default.createElement(_Button.Button, {
  display: "primary",
  disabled: true
}, "Disabled")), {
  parameters: { ..._storybook.DISABLED_ACTIONS,
    ..._storybook.DISABLED_CONTROLS
  }
});
exports.PrimaryDisplay = PrimaryDisplay;
const OutlineDisplay = (0, _storybook.story)(() => /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Button.Button, {
  display: "outline"
}, "Outline"), /*#__PURE__*/_react.default.createElement(_Button.Button, {
  display: "outline",
  disabled: true
}, "Disabled")), {
  parameters: { ..._storybook.DISABLED_ACTIONS,
    ..._storybook.DISABLED_CONTROLS
  }
});
exports.OutlineDisplay = OutlineDisplay;
const ChromelessDisplay = (0, _storybook.story)(() => /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Button.Button, {
  display: "chromeless"
}, "Chromeless"), /*#__PURE__*/_react.default.createElement(_Button.Button, {
  display: "chromeless",
  disabled: true
}, "Disabled")), {
  parameters: { ..._storybook.DISABLED_ACTIONS,
    ..._storybook.DISABLED_CONTROLS
  }
});
exports.ChromelessDisplay = ChromelessDisplay;
const ChromelessContrastDisplay = (0, _storybook.story)(() => /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Button.Button, {
  display: "chromelessContrast"
}, "Chromeless Contrast"), /*#__PURE__*/_react.default.createElement(_Button.Button, {
  display: "chromelessContrast",
  disabled: true
}, "Disabled")), {
  storyName: 'ChromelessContrast Display',
  parameters: { ..._storybook.DISABLED_ACTIONS,
    ..._storybook.DISABLED_CONTROLS,
    backgrounds: {
      default: 'dark'
    }
  }
}); //#endregion

exports.ChromelessContrastDisplay = ChromelessContrastDisplay;