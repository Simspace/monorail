"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AdjustedSize = exports.Basic = exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _react = _interopRequireDefault(require("react"));

var _exports = require("../../../../helpers/exports");

var _storybook = require("../../../../helpers/storybook");

var _AppIconMeta = _interopRequireDefault(require("./AppIcon.meta.json"));

var _AppIcon = require("../AppIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _default = (0, _storybook.meta)(_AppIconMeta.default, {
  title: 'monorail/component/AppIcon'
});

exports.default = _default;
const Template = (0, _storybook.story)(args => /*#__PURE__*/_react.default.createElement(_AppIcon.AppIcon, _extends({
  appName: _exports.AppName.MyOrg
}, args))); //#region Hero story in Docs

var _StyledTemplate = /*#__PURE__*/(0, _styledComponents.default)(Template).withConfig({
  displayName: "AppIconstories___StyledTemplate",
  componentId: "sc-4teco2-0"
})(["font-size:48px;"]);

const Basic = (0, _storybook.story)(Template); //#endregion

exports.Basic = Basic;
const AdjustedSize = (0, _storybook.story)(() => /*#__PURE__*/_react.default.createElement(_StyledTemplate, null));
exports.AdjustedSize = AdjustedSize;