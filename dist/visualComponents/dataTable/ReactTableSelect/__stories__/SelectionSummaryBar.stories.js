"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Basic = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _fpTsImports = require("../../../../sharedHelpers/fp-ts-imports");

var _storybook = require("../../../../helpers/storybook");

var _SelectionSummaryBar = require("../SelectionSummaryBar");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

//#region Metadata for ALL stories
var _default = (0, _storybook.meta)(_storybook.NO_GENERATED_META, {
  title: 'monorail/v1/ReactTableSelect/SelectionSummaryBar',
  parameters: { ..._storybook.DISABLED_ACTIONS
  }
}); //#endregion
//#region Helpers


exports.default = _default;

const sortedData = _fpTsImports.A.range(1, 5);

const Template = (0, _storybook.story)(args => /*#__PURE__*/_react.default.createElement(_SelectionSummaryBar.SelectionSummaryBar, _extends({
  totalItems: 0,
  totalSelectedItems: 0,
  sortedData: sortedData
}, args)), {
  args: {
    totalItems: sortedData.length,
    totalSelectedItems: 0
  }
}); //#endregion
//#region Hero story in Docs

const Basic = (0, _storybook.story)(Template); //#endregion

exports.Basic = Basic;