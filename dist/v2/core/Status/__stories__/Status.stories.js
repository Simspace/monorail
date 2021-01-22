"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WithLabel = exports.Empty = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _storybook = require("../../../../helpers/storybook");

var _StatusMeta = _interopRequireDefault(require("./Status.meta.json"));

var _Status = require("../Status");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _default = (0, _storybook.meta)(_StatusMeta.default, {
  title: 'monorail/core/Status'
});

exports.default = _default;
const Template = (0, _storybook.story)(args => /*#__PURE__*/_react.default.createElement(_Status.Status, _extends({
  "aria-label": "Since status usually contains a number, it is helpful to provide more details to screenreaders, such as '8 turkeys'"
}, args))); //#region Hero story in Docs

const Empty = (0, _storybook.story)(Template); //#endregion

exports.Empty = Empty;
const WithLabel = (0, _storybook.story)(Template, {
  args: {
    label: 'Hey!'
  }
});
exports.WithLabel = WithLabel;