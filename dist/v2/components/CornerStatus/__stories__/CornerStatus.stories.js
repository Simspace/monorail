"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextCornerStatus = exports.EmptyCornerStatus = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _storybook = require("../../../../helpers/storybook");

var _CornerStatusMeta = _interopRequireDefault(require("./CornerStatus.meta.json"));

var _CornerStatus = require("../CornerStatus");

var _IconButton = require("../../../core/IconButton/IconButton");

var _Icons = require("../../../icons/Icons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _default = (0, _storybook.meta)(_CornerStatusMeta.default, {
  title: 'monorail/component/CornerStatus',
  parameters: { ..._storybook.DISABLED_ACTIONS,
    ..._storybook.A11Y_ELEMENT__COMPONENT
  }
});

exports.default = _default;
const Template = (0, _storybook.story)(args => /*#__PURE__*/_react.default.createElement(_IconButton.IconButton, {
  shape: "square",
  size: "large",
  "aria-label": "Background Activity Monitor"
}, /*#__PURE__*/_react.default.createElement(_Icons.Bam, null), /*#__PURE__*/_react.default.createElement(_CornerStatus.CornerStatus, _extends({
  "aria-label": "there is new background activity"
}, args)))); //#region Hero story in Docs

const EmptyCornerStatus = (0, _storybook.story)(Template); //#endregion
//#region Distinct configurations

exports.EmptyCornerStatus = EmptyCornerStatus;
const TextCornerStatus = (0, _storybook.story)(Template, {
  args: {
    label: 'Hey!'
  }
}); //#endregion

exports.TextCornerStatus = TextCornerStatus;