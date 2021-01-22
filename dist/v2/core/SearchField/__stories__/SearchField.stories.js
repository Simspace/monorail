"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Clearable = exports.Basic = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _storybook = require("../../../../helpers/storybook");

var _SearchFieldMeta = _interopRequireDefault(require("./SearchField.meta.json"));

var _SearchField = require("../SearchField");

var _addonActions = require("@storybook/addon-actions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _storybook.meta)(_SearchFieldMeta.default, {
  title: 'monorail/core/SearchField'
});

exports.default = _default;
const Template = (0, _storybook.story)(args => /*#__PURE__*/_react.default.createElement(_SearchField.SearchField, {
  id: "test-id-for-a11y"
})); //#region Hero story in Docs

const Basic = (0, _storybook.story)(Template); //#endregion

exports.Basic = Basic;
const Clearable = (0, _storybook.story)(() => /*#__PURE__*/_react.default.createElement(_SearchField.SearchFieldClearable, {
  onClear: (0, _addonActions.action)('onClear')
}));
exports.Clearable = Clearable;