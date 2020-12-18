"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LongTitle = exports.EndAdornment = exports.StartAdornment = exports.HiddenBorder = exports.SimpleHeader = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _storybook = require("../../../../helpers/storybook");

var _HeaderMeta = _interopRequireDefault(require("./Header.meta.json"));

var _Header = require("../Header");

var _Icons = require("../../../icons/Icons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _default = (0, _storybook.meta)(_HeaderMeta.default, {
  title: 'monorail/core/Header',
  parameters: { ..._storybook.DISABLED_ACTIONS,
    ..._storybook.A11Y_ELEMENT__COMPONENT,
    layout: 'fullscreen'
  }
});

exports.default = _default;
const Template = (0, _storybook.story)(args => /*#__PURE__*/_react.default.createElement(_Header.Header, args, "My Header Title")); //#region Hero story in Docs

const SimpleHeader = (0, _storybook.story)(Template); //#endregion
//#region Distinct configurations

exports.SimpleHeader = SimpleHeader;
const HiddenBorder = (0, _storybook.story)(args => /*#__PURE__*/_react.default.createElement(_Header.Header, args, "My Header Title"), {
  args: {
    hideBorder: true
  }
});
exports.HiddenBorder = HiddenBorder;
const StartAdornment = (0, _storybook.story)(args => /*#__PURE__*/_react.default.createElement(_Header.Header, _extends({
  startAdornment: /*#__PURE__*/_react.default.createElement(_Header.HeaderAdornment, {
    position: "start"
  }, /*#__PURE__*/_react.default.createElement(_Icons.Bam, null))
}, args), "My Header Title"));
exports.StartAdornment = StartAdornment;
const EndAdornment = (0, _storybook.story)(args => /*#__PURE__*/_react.default.createElement(_Header.Header, _extends({
  endAdornment: /*#__PURE__*/_react.default.createElement(_Header.HeaderAdornment, {
    position: "end"
  }, /*#__PURE__*/_react.default.createElement(_Icons.Bam, null))
}, args), "My Header Title"));
exports.EndAdornment = EndAdornment;
const LongTitle = (0, _storybook.story)(args => /*#__PURE__*/_react.default.createElement(_Header.Header, _extends({
  startAdornment: /*#__PURE__*/_react.default.createElement(_Header.HeaderAdornment, {
    position: "start"
  }, /*#__PURE__*/_react.default.createElement(_Icons.Bam, null)),
  endAdornment: /*#__PURE__*/_react.default.createElement(_Header.HeaderAdornment, {
    position: "end"
  }, /*#__PURE__*/_react.default.createElement(_Icons.Bam, null))
}, args), "Duis incididunt excepteur sit pariatur veniam duis nostrud. Eiusmod eiusmod sunt tempor dolor ad. Occaecat laboris elit sunt ipsum consectetur duis do. Consectetur ipsum dolor proident Lorem exercitation veniam sit officia minim ea minim nostrud laborum. Aliqua consectetur Lorem Lorem excepteur exercitation labore elit laboris incididunt veniam. Enim dolor dolore pariatur officia voluptate labore reprehenderit voluptate in. Reprehenderit excepteur culpa consequat ea sunt voluptate consequat ea non. Pariatur elit voluptate sit sunt laborum nulla. Cillum ipsum aliqua sunt mollit esse consectetur magna magna enim ea tempor occaecat ullamco consequat. Adipisicing sunt deserunt fugiat culpa ad eu irure officia esse sit labore nisi tempor est. Laborum aute tempor incididunt proident veniam eiusmod. Incididunt reprehenderit nisi pariatur cupidatat sit elit ex labore anim.")); //#endregion

exports.LongTitle = LongTitle;